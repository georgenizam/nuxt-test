<template>
  <li class="navigation-item">
    <nuxt-link
      :to="to"
      :exact="exact"
      class="navigation-item__link"
      active-class="active"
      @mouseover.native="isHover = true"
      @mouseout.native="isHover = false"
    >
      <div
        class="navigation-item__icon-wrapper"
        :class="{active: isHover
      }">
        <slot/>
      </div>
      {{ title }}
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'dn'
    },
    to: {
      type: String,
      required: true
    },
    exact: {
      type: Boolean,
      default: false
    }
  },
  name: "BottomMenuItem",
  data: () => ({
    isHover: false
  })
}
</script>

<style lang="scss" scoped>
.navigation-item {
  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    color: $color-black;
    text-decoration: none;
    transition: all .25s ease;
    line-height: 1;
    text-align: center;
    font-size: 12px;
    &.active, &:hover {
      color: $color-accent;
    }
  }
  &__icon-wrapper {
    margin-bottom: 2px;
    height: 28px;
    align-items: center;
    justify-content: center;
    svg, img {
      display: block;
      width: 28px;
      height: 28px;
      object-fit: cover;
    }
    &.active {
      svg {
        path {
          fill: red;
        }
      }
    }
  }
}
</style>
