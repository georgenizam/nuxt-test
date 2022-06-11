<template>
  <div class="slider">
    <div
      class=""
      v-swiper="swiperOption"
    >
      <div class="swiper-wrapper">
        <div
          class="swiper-slide swiper-lazy"
          v-for="imageItem in images"
          :key="imageItem"
        >
          <img
            v-lazy="imageItem"
            alt="slider image"
          />
        </div>
      </div>
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
    }
  },
  name: "Slider",
  directives: {
    swiper: directive,
  },
  data() {
    return {
      banners: [
        "https://image.shutterstock.com/image-photo/odessaukraine21-august2017skate-boy-feet-wearing-260nw-748760170.jpg",
        "https://www.skatedeluxe.com/blog/wp-content/uploads/2020/03/NIKE-SB-Shane-Wear-Test-Review-Unboxing-04.jpg",
        "https://sneakers.by/image/cache/catalog/sneakers-pics/14523/kedy-nike-sb-zoom-janoski-rm-aq7475-001-1-1000x800.jpg"
      ],
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 8,
        freeMode: true,
        momentum: false,
        momentumBounce: false,
        preloadImages: false,
        lazy: {
          checkInView: true,
          loadPrevNextAmount: 5
        },
        // loop: true,
        // loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // breakpoints: {
        //   1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 10
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 10
        //   },
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 10
        //   },
        //   320: {
        //     slidesPerView: 1,
        //     spaceBetween: 10
        //   }
        // }
      },
    };
  }
}
</script>

<style lang="scss" scoped>
.slider {
  margin-top: 16px;
  border-radius: 4px;
  overflow: hidden;
}
.swiper-wrapper {
  //max-width: 100%;
  //width: 100%;
  //border-radius: 4px;
  //overflow: hidden;
}
.swiper-slide {
  width: 104px;
  height: 156px;
  display: block;
  border-radius: 4px;
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
