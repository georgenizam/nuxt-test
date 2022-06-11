<template>
  <header class="header">
    <div class="container">
      <div class="top-nav">
        <nuxt-link
          :to="backRoute"
          class=""
        >
          <BackArrow/>
        </nuxt-link>
        <h2 class="top-nav__title">{{ pageName }}</h2>
      </div>
      <nav class="sub-navigation">
        <ul class="sub-navigation__list">
          <li
            v-for="linkItem in links"
            class="sub-navigation__item"
          >
            <nuxt-link
              :to="linkItem.to"
              class="sub-navigation__link"
              active-class="active"
            >{{ linkItem.title }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import BackArrow from "@/components/UI/icons/BackArrow"

export default {
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  components: {
    BackArrow
  },
  name: "SubMenu",
  computed: {
    backRoute() {
      return `/products/${this.$route.params.slug}`
    },
    pageName() {
      // const curPath = this.$route.path
      // const link = this.links.find(({to, title}) => to === curPath)
      // return link.title ?? ''
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 4px 0;
}

.top-nav {
  display: flex;
  position: relative;
  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $color-black;
    font-weight: 500;
    font-size: 20px;
    line-height: 1;
  }
}

.sub-navigation {
  margin-top: 10px;
  &__list {
    width: 100%;
    max-width: 100%;
    display: flex;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__item + &__item {
    margin-left: 7px;
  }
  &__link {
    padding: 10px 24px;
    border-radius: 20px;
    border: 1px solid $color-dark-grey;
    text-decoration: none;
    color: $color-black;
    transition: all .25s ease;
    display: inline-block;
    &:hover, &.active {
      background: $color-accent;
      color: $color-white;
      border-color: $color-accent;
    }
  }
}
</style>
