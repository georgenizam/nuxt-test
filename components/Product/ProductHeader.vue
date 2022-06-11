<template>
  <header class="header">
    <div class="container">
      <nav class="header-navigation">
        <ul class="navigation-list">
          <li class="navigation-list__item">
            <nuxt-link
              to="/products"
            >
              <BackArrow class="navigation-list__icon"/>
            </nuxt-link>
          </li>
          <li class="navigation-list__item">
            <button class="navigation-list__item-btn">
              <Search class="navigation-list__item-icon"/>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import BackArrow from "@/components/UI/icons/BackArrow"
import Search from "@/components/UI/icons/Search"

export default {
  name: "ProductHeader",
  components: {
    BackArrow,
    Search
  }
}
</script>

<style lang="scss" scoped>
.navigation-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  &__item {
    &-btn {
      background: transparent;
      border: none;
      padding: 0;
    }
  }
}
</style>
