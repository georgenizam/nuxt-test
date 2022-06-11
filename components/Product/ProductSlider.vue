<template>
  <div class="slider">
    <div v-swiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide swiper-lazy"
          v-for="banner in images"
          :key="banner"
        >
          <img
            v-lazy="banner"
            alt="slider-image swiper-lazy"
          />
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"/>
        </div>
      </div>
      <div
        class="sale container"
        v-if="!!sale"
      >
        <span class="sale__text">-{{ sale }}%</span>
      </div>
      <div class="swiper-pagination container"></div>
    </div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper"

export default {
  props: {
    images: {
      type: Array,
      default: () => []
    },
    sale: {
      type: Number
    }
  },
  name: "ProductSlider",
  directives: {
    swiper: directive,
  },
  data: () => ({
    swiperOption: {
      slidesPerView: 'auto',
      spaceBetween: 0,
      freeMode: true,
      momentum: false,
      momentumBounce: false,
      preloadImages: false,
      lazy: {
        loadPrevNextAmount: 3,
        loadOnTransitionStart: true,
        loadPrevNext: true,
      },
      pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true
      }
    },
  })
}
</script>

<style lang="scss" scoped>
.slider {
  //margin-top: 16px;
  //border-radius: 4px;
  //overflow: hidden;
}

.sale {
  position: absolute;
  bottom: 36px;
  left: 0;
  z-index: 100;
  &__text {
    background: $color-dark-red;
    border-radius: 10px;
    width: initial;
    color: $color-white;
    padding: 4px 10px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
  }
}

.swiper-pagination ::v-deep {
  bottom: 18px;
  .swiper-pagination-bullet {
    margin: 0;
    width: 10px;
    height: 10px;
    opacity: 1;
    border: 1px solid $color-black;
    background-color: transparent;
  }
  .swiper-pagination-bullet-active {
    background-color: $color-black;
  }
}

.swiper-container-horizontal ::v-deep {
  .swiper-pagination-bullets {
    width: initial;
    .swiper-pagination-bullet {
      & + & {
        margin-left: 8px;
      }
    }
  }
}

.swiper-wrapper {
  //max-width: 100%;
  //width: 100%;
  //border-radius: 4px;
  //overflow: hidden;
}
.swiper-slide {
  width: 247px;
  height: 373px;
  display: block;
  overflow: hidden;
  user-select: none;
  -webkit-user-select:none;
  -webkit-touch-callout:none;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    -webkit-user-select:none;
    -webkit-touch-callout:none;
  }
}
</style>
