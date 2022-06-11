<template>
  <section class="products-catalog">
    <div class="container">
      Каталог продуктов
      <ul>
        <li>
          <nuxt-link
            to="/products/57791673"
          >product 1</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "index",
  head() {
    return {
      title: 'Каталог'
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
