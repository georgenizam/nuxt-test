<template>
  <li class="percent-item">
    <div class="percent-item__name">{{ title }}</div>
    <div class="percent-item__percent">
      <div class="progress-bar">
        <div
          class="progress-bar__line"
          :style="{width: roundedPercent + '%'}"
        />
      </div>
      <div class="percent-value">{{ roundedPercent }}%</div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    percent: {
      type: Number,
      default: 0
    }
  },
  name: "StatCardPercentItem",
  computed: {
    roundedPercent(){
      return Math.floor(this.percent)
    }
  }
}
</script>

<style lang="scss" scoped>
.percent-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 13px;
  &__name {
    color: $color-black;
    font-size: 14px;
  }
  &__percent {
    color: $color-black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .progress-bar {
      //flex-grow: 1;
      width: 76%;
      height: 2px;
      border-radius: 2px;
      background: $color-dark-grey;
      overflow: hidden;
      &__line {
        height: 100%;
        background: $color-black;
      }
    }
    .percent-value {
      //padding-left: 10px;
      font-size: 14px;
      font-weight: 500;
      text-align: right;
      color: $color-black;
    }
  }
}
</style>
