<template>
  <div class="container">
    <div class="select-wrapper">
      <h3 class="select-title">Цвета:</h3>
      <ul class="select-color">
        <li
          v-for="optionItem in options"
          class="select-color__item"
          :class="{selected: optionItem.value == modelValue}"
        >
          <label class="select-color__item-label">
            <input
              type="radio"
              :required="required"
              :value="optionItem"
              :checked="modelValue === optionItem.value"
              @change="$emit('change', optionItem.value)"
            >
            <div
              class="select-color__item-color"
              :style="{background: optionItem.hex}"
            />
<!--            <img-->
<!--              class="select-color__item-img"-->
<!--              :src="option"-->
<!--            />-->
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
  name: "ProductSelectColors"
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
.select-color {
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
      transition: all .25s ease;
      cursor: pointer;
      font-size: 16px;
      padding: 2px;
      border-radius: 11px;
      border: 1px solid transparent;
      display: inline-block;
      width: 77px;
      height: 109px;
    }
    input {
      visibility: hidden;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
    }
    &-img {
      object-fit: cover;
      border-radius: 10px;
      width: 100%;
      height: 100%;
    }
    &-color {
      border-radius: 10px;
      width: 100%;
      height: 100%;
    }
    //&.not-active {
    //  #{$this}-label {
    //    background: $color-grey;
    //  }
    //}
    &.selected {
      #{$this}-label {
        //background: transparent;
        border-color: $color-black;
      }
    }
    & + & {
      margin-left: 2px;
    }
  }
}
</style>
