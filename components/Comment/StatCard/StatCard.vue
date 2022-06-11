<template>
  <div class="container">
    <div class="stat-card">
      <Rating
        class="stat-card__rating"
        :value="toNum(statistics.rating.rating)"
        :size="32"
        :padding="10"
      />
      <span class="stat-card__title">
        {{ declOfNum(statistics.rating.total, ['отзыв', 'отзыва', 'отзывов']) }}
      </span>
      <ul class="stat-card__list">
        <StatCardPercentItem
          class="stat-card__item"
          v-for="percentsItem in statistics.size"
          :key="percentsItem.name"
          :title="percentsItem.name"
          :percent="toNum(percentsItem)"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import Rating from "@/components/Comment/Rating"
import StatCardPercentItem from "@/components/Comment/StatCard/StatCardPercentItem"

export default {
  props: {
    statistics: {
      type: Object
    }
  },
  components: {
    Rating,
    StatCardPercentItem
  },
  name: "StatCard",
  computed: {
    reviewsText() {
      return 'отзывов'
    }
  },
  methods: {
    toNum(percentsItem) {
      return Number.parseFloat(percentsItem.percent)
    },
    declOfNum(num, text_arr) {
      const n = Math.abs(num) % 100
      const n1 = n % 10
      if (n > 10 && n < 20) {
        return `${num} ${text_arr[2]}`
      }
      if (n1 > 1 && n1 < 5) {
        return `${num} ${text_arr[1]}`
      }
      if (n1 === 1) {
        return `${num} ${text_arr[0]}`
      }
      return `${num} ${text_arr[2]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.stat-card {
  margin-top: 16px;
  padding: 10px 10px 26px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  background: $color-lighten-beige;
  &__rating {
    margin: 0 auto 8px;
  }
  &__title {
    text-align: center;
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 14px;
  }
  &__item + &__item {
    margin-top: 8px;
  }
}
</style>
