<template>
  <section class="cart-page">
    Станица корзины
  </section>
</template>

<script>
export default {
  name: "Cart",
  head() {
    return {
      title: 'Корзина'
    }
  },
}
</script>

<style lang="scss" scoped>
.cart-page {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
