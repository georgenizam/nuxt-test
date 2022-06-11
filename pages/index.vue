<template>
  <section class="main-page">
      Главная страница
  </section>
</template>

<script>
export default {
  name: "index",
  head() {
    return {
      title: 'Главная'
    }
  },
}
</script>
<style lang="scss" scoped>
.main-page {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
