<template>
  <section class="reviews">
    <StatCard :statistics="statistics"/>
    <Card
      v-for="reviewItem in reviews"
      :key="reviewItem.id"
      :review="reviewItem"
    />
  </section>
</template>

<script>
import StatCard from "@/components/Comment/StatCard/StatCard"
import Card from "@/components/Comment/Card/Card"
import {mapGetters} from "vuex";

export default {
  layout: "product-detail",
  components: {
    StatCard,
    Card
  },
  name: "Reviews",
  async asyncData({store, params, error}) {
    const productId = params.slug
    try {
      await store.dispatch('review/getReviews', {productId})
    } catch (error) {
      return error({
        status: 404,
        text: 'Страница не найдена'
      })
    }
  },
  head() {
    return {
      title: 'Отзывы'
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
      reviews: 'review/getReviews',
      statistics: 'review/getStatistics'
    })
  },
}
</script>

<style lang="scss" scoped>
</style>
