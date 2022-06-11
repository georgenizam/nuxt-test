<template>
  <section class="product">
    <ProductSlider
      :images="product.photos"
      :sale="product.salePercent"
    />
    <ProductSocial
      :is-cotton="product.isCotton"
      :is-active="product.isActive"
    />
    <ProductDetails
      :video-reviews="product.videosCount"
      :reviews="product.reviewsCount"
      :questions="product.questionsCount"
    />
    <ProductMainInfo
      :nameProduct="product.name"
      :category="product.kits"
      :description="product.description"
      :priceNew="product.price.retail"
      :priceOld="product.price.retailOld"
    />
    <ProductSelectSize
      :options="product.sizes"
      v-model="size"
    />
    <ProductSelectHeight
      :options="product.heights"
      v-model="height"
    />
    <ProductBtn cta>
      <template #icon>
        <BuyClick/>
      </template>
      купить в 1 клик
    </ProductBtn>
    <ProductBtn>
      <template #icon>
        <InCart/>
      </template>
      в корзину
    </ProductBtn>
    <ProductSelectColors
      :options="product.colors"
      v-model="color"
    />
    <ProductRecentlyView :products="[product]"/>
  </section>
</template>

<script>
import ProductSlider from "@/components/Product/ProductSlider"
import ProductSocial from "@/components/Product/ProductSocial/ProductSocial"
import ProductDetails from "@/components/Product/ProductDetails"
import ProductMainInfo from "@/components/Product/ProductMainInfo"
import ProductSelectHeight from "@/components/Product/ProductSelectHeight"
import ProductSelectColors from "@/components/Product/ProductSelectColors"
import ProductSelectSize from "@/components/Product/ProductSelectSize"
import ProductBtn from "@/components/Product/ProductBtn"
import ProductRecentlyView from "@/components/Product/ProductRecentlyView"
import BuyClick from "@/components/UI/icons/BuyClick"
import InCart from "@/components/UI/icons/InCart"

import {mapGetters} from 'vuex'

export default {
  layout: "product",
  components: {
    ProductSlider,
    ProductSocial,
    ProductDetails,
    ProductMainInfo,
    ProductSelectColors,
    ProductSelectHeight,
    ProductSelectSize,
    ProductBtn,
    ProductRecentlyView,
    BuyClick,
    InCart
  },
  head() {
    return {
      title: 'Продукт'
    }
  },
  async asyncData({store, params, error}) {
    const productId = params.slug
    try {
      await store.dispatch('product/getProduct', {productId})
    } catch (err) {
      error({
        status: 404,
        text: 'Страница товара не найдена'
      })
    }
  },
  computed: {
    slug() {
      return this.$route.params.slug
    },
    links() {
      return [
        {
          to: `/products/${this.slug}/video-reviews`,
          title: 'Видеообзоры'
        },
        {
          to: `/products/${this.slug}/reviews`,
          title: 'Отзывы'
        },
        {
          to: `/products/${this.slug}/questions`,
          title: 'Вопросы'
        }
      ]
    },
    ...mapGetters({
      product: 'product/getProduct'
    })
  },
  data: () => ({
    size: null,
    height: null,
    color: null
  }),
}
</script>

<style lang="scss" scoped>

</style>
