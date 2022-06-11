<template>
  <div class="container">
    <h1>Ошибка</h1>
    <h2 v-if="!!error.status">Код ошибки {{ error.status }}</h2>
    <p>{{ error.text }}</p>
    <nuxt-link to="/">Главная</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  name: "error"
}
</script>

<style lang="scss" scoped>

</style>
