<template>
  <div class="card">
    <div class="container">
      <div class="card-top">
        <div class="card-top__user">
          <img
            v-lazy="review.user.photo"
            alt="user"
            class="card-top__user-img"
          >
          <span class="card-top__user-name">{{ review.user.name }}</span>
        </div>
        <span class="card-top__date">{{ review.createdDate | formatDate }}</span>
      </div>
      <div class="card-body">
        <div class="rating">
          <span class="rating__title">
            <template v-for="characteristicsItem in review.characteristics">
              {{ characteristicsItem }}
            </template>
          </span>
          <Rating
            class="rating__block"
            :value="review.rating"
          />
        </div>
        <p class="description">
          {{ review.value }}
        </p>
        <Slider
          class="slider"
          :images="review.photos"
        />
        <div class="answers">
          <CardAnswer
            v-for="answersItem in review.answers"
            :key="answersItem.id"
            description="Здравствуйте, Татьяна! Мы рады, что вы остались довольны покупкой."
            :answer="answersItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "@/components/Comment/Rating"
import Slider from "@/components/Comment/Slider"
import CardAnswer from "@/components/Comment/Card/CardAnswer"

export default {
  props: {
    review: {
      type: Object
    }
  },
  components: {
    Rating,
    Slider,
    CardAnswer
  },
  name: "Card"
}
</script>

<style lang="scss" scoped>
.card {
  padding: 16px 0;
  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__user {
      display: flex;
      align-items: center;
      flex: 1;
      max-width: 100%;
      min-width: 0;
      &-img {
        border-radius: 100%;
        object-fit: cover;
        width: 32px;
        height: 32px;
        margin-right: 10px;
        display: block;
      }
      &-name {
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1;
      }
    }
    &__date {
      color: $color-lighten-grey;
      font-size: 14px;
      flex-shrink: 0;
      line-height: 1;
    }
  }
  &-body {
    .rating {
      margin-top: 9px;
      &__title {
        font-size: 14px;
      }
      &__block {
        margin-top: 8px;
      }
    }
    .description {
      margin-top: 16px;
      font-size: 16px;
    }
    .slider {
      margin-top: 8px;
    }
    .answers {
      margin-top: 8px;
    }
  }
}
.card + .card {
  border-top: 1px solid $color-grey;
}
</style>
