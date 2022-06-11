<template>
  <div class="container">
    <ul class="details-list">
      <li class="details-list__item">
        <nuxt-link
          class="details-list__link"
          active-class="active"
          :to="`/products/${slug}/video-reviews`"
        >
        <span class="details-list__link-top">
          <span class="count">
            <IconVideo class="count__icon"/> +{{ videoReviews }}
          </span>
          <ArrowRight/>
        </span>
          <span class="details-list__link-body">Смотреть видеообзоры</span>
        </nuxt-link>
      </li>
      <li class="details-list__item">
        <nuxt-link
          class="details-list__link"
          active-class="active"
          :to="`/products/${slug}/reviews`"
        >
        <span class="details-list__link-top">
          <span class="count">
            <Message class="count__icon"/> +{{ reviews }}
          </span>
          <ArrowRight/>
        </span>
          <span class="details-list__link-body">Отзывы покупателей</span>
        </nuxt-link>
      </li>
      <li class="details-list__item">
        <nuxt-link
          class="details-list__link"
          active-class="active"
          :to="`/products/${slug}/questions`"
        >
        <span class="details-list__link-top">
          <span class="count">
            <Questions class="count__icon"/> +{{ questions }}
          </span>
          <ArrowRight/>
        </span>
          <span class="details-list__link-body">Вопросы по&nbsp;модели</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import IconVideo from "@/components/UI/icons/IconVideo"
import Message from "@/components/UI/icons/Message"
import Questions from "@/components/UI/icons/Questions"
import ArrowRight from "@/components/UI/icons/ArrowRight"

export default {
  props: {
    videoReviews: {
      type: Number,
      default: 0
    },
    reviews: {
      type: Number,
      default: 0
    },
    questions: {
      type: Number,
      default: 0
    }
  },
  name: "ProductDetails",
  components: {
    IconVideo,
    Message,
    Questions,
    ArrowRight
  },
  computed: {
    slug() {
      return this.$route.params.slug
    }
  }
}
</script>

<style lang="scss" scoped>
.details-list {
  display: grid;
  grid-gap: 0 8px;
  max-width: 100%;
  width: 100%;
  grid-template-columns: repeat(3, minmax(107px, 1fr));
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-bottom: 16px!important;
  &::-webkit-scrollbar {
    display: none;
  }
  &__item {
  }
  &__link {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    color: $color-black;
    text-decoration: none;
    padding: 8px 8px 11px;
    border: 1px solid $color-grey;
    cursor: pointer;
    border-radius: 4px;
    &-top {
      display: flex;
      justify-content: space-between;
      .count {
        min-width: 0;
        padding-right: 3px;
        color: $color-accent;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        align-items: center;
        flex-grow: 1;
        line-height: 1;
        &__icon {
          //min-width: 0;
          margin-right: 4px;
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          display: block;
          word-break: break-all;
        }
      }
    }
    &-body {
      padding-top: 8px;
      font-size: 14px;
      transition: all .25s ease;
      word-break: break-word;
      //white-space: nowrap;
      //overflow: hidden;
      //text-overflow: ellipsis;
    }
    &.active, &:hover {
      color: $color-accent;
    }
  }
}
</style>
