<template>
  <div class="card-wrapper">
    <CommentResp class="card-icon"/>
    <div class="card">
      <div class="card-top">
        <div class="card-top__user">
          <div class="card-top__user-img" />
          <span class="card-top__user-name">{{ name }}</span>
        </div>
      </div>
      <div class="card-body">
        <p class="description">{{ answer.value }}</p>
        <Slider
          class="slider"
          :images="answer.photos"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Comment/Slider"
import CommentResp from "@/components/UI/icons/CommentResp"

export default {
  props: {
    name: {
      type: String,
      default: 'Беллавка'
    },
    answer: {
      type: Object,
      required: true
    }
  },
  components: {
    Slider,
    CommentResp
  },
  name: "CardAnswer"
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  align-items: flex-start;
  //overflow: hidden;
  //flex-wrap: wrap;
  & + & {
    margin-top: 8px;
    .card-icon {
      visibility: hidden;
    }
  }
  .card-icon {
    width: 24px;
    height: 24px;
    object-fit: cover;
    flex-shrink: 0;
    margin-right: 8px;
  }
  .card {
    padding: 7px 17px 12px;
    background: $color-lighten-beige;
    border-radius: 10px;
    width: calc(100% - 32px);
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
          background: $color-beige;
        }
        &-name {
          font-size: 16px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1;
        }
      }
    }
    &-body {
      .description {
        margin-top: 8px;
      }
    }
  }
}
</style>
