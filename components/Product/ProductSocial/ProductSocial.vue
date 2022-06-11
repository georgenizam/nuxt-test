<template>
  <div class="container">
    <div class="product-social">
      <div class="product-social__controls">
        <button class="product-social__controls-item">
          <Favorite/>
        </button>
        <button class="product-social__controls-item">
          <Share/>
        </button>
      </div>
      <ul class="product-social__tags">
        <!--      <li class="Product-social__tags-item">#лучше</li>-->
        <li
          class="product-social__tags-item is-active"
          v-if="isActive"
        >в наличии</li>
        <li
          class="product-social__tags-item is-cotton"
          v-if="isCotton"
        >
          <CottonTag class="product-social__tags-icon"/> хлопок
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Favorite from "@/components/UI/icons/Favorite"
import Share from "@/components/UI/icons/Share"
import CottonTag from "@/components/UI/icons/CottonTag"

export default {
  props: {
    isCotton: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  name: "ProductSocial",
  components: {
    Favorite,
    Share,
    CottonTag
  }
}
</script>

<style lang="scss" scoped>
.product-social {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  &__controls {
    margin-right: 16px;
    flex-shrink: 0;
    &-item {
      background: transparent;
      padding: 0;
      border: none;
      cursor: pointer;
      & + & {
        margin-left: 16px;
      }
    }
  }
  &__tags {
    //flex-grow: 1;
    display: flex;
    z-index: 100;
    margin: -6px -4px -4px!important;
    //display: grid;
    //grid-gap: 8px;
    //grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    flex-wrap: wrap;
    &-item {
      margin: 4px 4px;
      background: $color-grey;
      display: flex;
      border-radius: 5px;
      padding: 1px 8px;
      font-size: 12px;
      text-align: center;
      align-items: center;
      //min-width: 0;
      //line-height: 1;
      flex-shrink: 0;
      &.is-active {
        background: $color-darken-beige;
        color: $color-white;
      }
      &.is-cotton {
        background: $color-black;
        color: $color-white;
      }
    }
    &-icon {
      //min-width: 0;
      margin-right: 2px;
    }
  }
}
</style>
