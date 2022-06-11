<template>
  <div class="container">
    <div class="select-wrapper">
      <div class="select-top">
        <h3 class="select-title">Размеры:</h3>
        <nuxt-link
          class="select-link"
          to="/table-size"
        >Таблица размеров</nuxt-link>
      </div>
      <ul class="select-height">
        <li
          v-for="optionItem in options"
          class="select-height__item"
          :class="{
            'selected': optionItem.value == modelValue,
            'not-active': !optionItem.isActual
          }"
        >
          <NoteSize class="select-height__item-icon"/>
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
import NoteSize from "@/components/UI/icons/NoteSize"

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
  name: "ProductSelectSize",
  components: {
    NoteSize
  },
  data: () => ({
    selectedSize: null,
  })
}
</script>

<style lang="scss" scoped>
.select-wrapper {
  margin-top: 32px;
  margin-bottom: 32px;
}
.select-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 12px;
}
.select-title {
  font-size: 20px;
  font-weight: 500;
}
.select-link {
  color: $color-accent;
  text-decoration: none;
  position: relative;
  font-size: 14px;
  font-weight: 500;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: $color-accent;;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.select-height {
  display: flex;
  padding-top: 4px!important;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &__item {
    $this: &;
    font-size: 16px;
    text-align: center;
    position: relative;
    &-icon {
      display: none;
      position: absolute;
      top: -4px;
      right: -4px;
    }
    &-label {
      border-radius: 7px;
      font-size: 16px;
      padding: 10px 24px;
      border: 1px solid $color-dark-grey;
      transition: all .25s ease;
      display: inline-block;
      cursor: pointer;
    }
    input {
      visibility: hidden;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      &:checked {
        #{$this}-label {
          //background: transparent;
          border-color: $color-black;
        }
      }
    }
    &.not-active {
      #{$this}-label {
        background: $color-grey;
        cursor: not-allowed;
      }
      #{$this}-icon {
        display: block;
      }
    }
    &.selected {
      #{$this}-label {
        //background: transparent;
        border-color: $color-black;
      }
    }
    & + & {
      margin-left: 8px;
    }
  }
}
</style>

