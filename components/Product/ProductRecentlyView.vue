<template>
  <div class="product-cards">
    <div class="product-cards__top container">Вы недавно смотрели</div>
    <div class="product-cards__body">
      <ul class="cards">
        <li
          class="cards-item"
          v-for="productsItem in products"
          :key="productsItem.id"
        >
          <nuxt-link
            class="cards-item__link"
            :to="`/products/${productsItem.id}`"
          >
            <button
              class="cards-item__favorite"
              @click.stop.prevent=""
            >
              <FavoriteCart/>
            </button>
            <div class="cards-item__img-wrapper">
              <img
                class="cards-item__img"
                :src="productsItem.photos[0]"
                alt="product-image"
              >
            </div>
            <div class="cards-item__description-wrapper">
              <div class="cards-item__description">
                <div class="cards-item__price">
                  <span class="cards-item__price-new">{{ productsItem.price.retail }}₽</span>
                  <span class="cards-item__price-old">{{ productsItem.price.retailOld }}₽</span>
                </div>
                <h3 class="cards-item__title">{{ productsItem.name }}</h3>
                <span class="cards-item__category">{{ categories(productsItem) }}</span>
              </div>
              <div class="cards-item__control">
                <button
                  class="cards-item__control-item"
                  @click.stop.prevent=""
                >
                  <InCartPlus />
                </button>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import FavoriteCart from "@/components/UI/icons/FavoriteCart"
import InCartPlus from '@/components/UI/icons/InCartPlus.vue'

export default {
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  name: "ProductRecentlyView",
  components: {
    FavoriteCart,
    InCartPlus,
  },
  methods: {
    categories(productsItem) {
      return productsItem.kits.map(({value}) => value).join(', ')
    }
  }
}
</script>

<style lang="scss" scoped>
.product-cards {
  padding: 0 1px;
  &__top {
    font-size: 20px;
    font-weight: 500;
    color: $color-accent;
  }
  &__body {
    .cards {
      margin-top: 8px;
      display: flex;
      max-width: 100%;
      width: 100%;
      overflow-x: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
      &-item {
        position: relative;
        width: 164px;
        margin-right: 16px;
        &:last-child {
          margin-right: 0;
        }
        &__link {
          color: $color-black;
          text-decoration: none;
        }
        &__favorite {
          position: absolute;
          top: 6px;
          right: 6px;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
        }
        &__img {
          border-radius: 4px;
          object-fit: cover;
          width: 100%;
          height: 100%;
          &-wrapper {
            width: 164px;
            height: 245px;
          }
        }
        &__description {
          &-wrapper {
            margin-top: 8px;
            padding: 0 4px;
            display: flex;
            justify-content: space-between;
          }
        }
        &__control {
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          &-item {
            background: transparent;
            border: none;
            padding: 0;
            cursor: pointer;
          }
        }
        &__price {
          display: flex;
          align-items: baseline;
          &-new {
            color: $color-accent;
            font-weight: 600;
            font-size: 16px;
          }
          &-old {
            font-size: 12px;
            margin-left: 4px;
            color: $color-lighten-grey;
            text-decoration-line: line-through;
          }
        }
        &__title {
          font-size: 16px;
          font-weight: 500;
        }
        &__category {
          font-size: 12px;
          color: $color-lighten-grey;
        }
      }
    }
  }
}
</style>
