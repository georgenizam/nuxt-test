<template>
  <div class="container">
    <div class="select-wrapper">
      <h3 class="select-title">Рост:</h3>
      <ul class="select-height">
        <li
          v-for="optionItem in options"
          class="select-height__item"
          :class="{selected: optionItem.value == modelValue}"
        >
          <label class="select-height__item-label">
            <input
              type="radio"
              :required="required"
              :value="optionItem"
              :checked="modelValue === optionItem.value"
              @change="$emit('change', optionItem.value)"
            >
            <span class="select-height__item-text">{{ optionItem.value }}</span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    modelValue: {
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  name: "ProductSelectHeight"
}
</script>

<style lang="scss" scoped>
.select-wrapper {
  margin-bottom: 32px;
}
.select-title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
}
.select-height {
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &__item {
    font-size: 16px;
    text-align: center;
    $this: &;
    &-label {
      border-radius: 7px;
      font-size: 16px;
      padding: 10px 24px;
      border: 1px solid $color-dark-grey;
      display: inline-block;
      cursor: pointer;
      transition: all .25s ease;
    }
    input {
      visibility: hidden;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
    }
    &.not-active {
      #{$this}-label {
        background: $color-grey;
        cursor: not-allowed;
      }
    }
    &.selected {
      #{$this}-label {
        background: transparent;
        border-color: $color-black;
      }
    }
    & + & {
      margin-left: 8px;
    }
  }
}
</style>
