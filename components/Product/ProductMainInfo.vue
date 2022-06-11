<template>
  <section class="main-info">
    <div class="container">
      <h1 class="product-title">{{ nameProduct }}</h1>
      <h2 class="product-category">{{ categoryText }}</h2>
      <div class="product-info">
        <div class="product-info__top">
          <div class="price">
            <span class="price__new">{{ priceNew }}₽</span>
            <span class="price__old">{{ priceOld }}₽</span>
          </div>
          <button
            class="more-btn"
            @click="isMoreInfo = !isMoreInfo"
          >
            Подробнее
            <More class="more-btn__icon"/>
          </button>
        </div>
        <div class="product-info__body">
          <TransitionExpand>
            <p
              class="description-text"
              v-show="isMoreInfo"
            >{{ description }}</p>
          </TransitionExpand>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import More from "@/components/UI/icons/More"
import TransitionExpand from "@/components/Product/TransitionExpand"

export default {
  props: {
    nameProduct: {
      type: String,
      default: ''
    },
    category: {
      type: Array,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    priceNew: {
      type: Number,
      default: 0
    },
    priceOld: {
      type: Number,
      default: 0
    },
  },
  name: "ProductMainInfo",
  components: {
    More,
    TransitionExpand
  },
  computed: {
    categoryText() {
      return this.category.map(({value}) => value).join(', ')
    }
  },
  data: () => ({
    isMoreInfo: false
  })
}
</script>

<style lang="scss" scoped>
.main-info {
  margin-top: 16px;
}
.product {
  &-title {
    font-size: 16px;
    font-weight: 500;
  }
  &-category {
    margin-top: 2px;
    font-size: 16px;
    color: $color-lighten-grey;
    font-weight: 400;
  }
  &-info {
    margin-top: 16px;
    &__top {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: baseline;
      .price {
        &__new {
          font-size: 24px;
          font-weight: 600;
          color: $color-accent;
        }
        &__old {
          margin-left: 4px;
          font-size: 14px;
          text-decoration-line: line-through;
          color: $color-lighten-grey;
        }
      }
      .more-btn {
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        color: $color-accent;
        padding: 0;
        cursor: pointer;
        &__icon {
          margin-left: 4px;
        }
      }
    }
    &__body {
      padding-top: 20px;
      font-size: 14px;
      .description-text {
        font-size: 14px;
      }
    }
  }
}
</style>
