<template>
  <div class="container">
    <button
      class="product-btn"
      :class="{accent: cta}"
      @click="$emit('click')"
    >
    <span
      v-if="hasIconSlot"
      class="product-btn__icon"
    >
      <slot name="icon"/>
    </span>
      <slot class="product-btn__text"/>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    cta: {
      type: Boolean,
      default: false
    }
  },
  name: "ProductBtn",
  computed: {
    hasIconSlot() {
      return !!this.$slots.icon
    }
  }
}
</script>

<style lang="scss" scoped>
.product-btn {
  border: 1.5px solid $color-black;
  border-radius: 25px;
  padding: 16px;
  background: transparent;
  margin: 0 20px 24px;
  width: calc(100% - 40px);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  word-break: break-all;
  color: $color-black;
  &__icon {
    width: 28px;
    height: 28px;
    object-fit: cover;
    margin-right: 9px;
    display: inline-block;
  }
  &.accent {
    border-color: $color-lighten-yellow;
    background: $color-lighten-yellow;
  }
}
</style>
