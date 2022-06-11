<template>
  <section class="profile-page">
    Страница профиля
  </section>
</template>

<script>
export default {
  name: "Profile",
  head() {
    return {
      title: 'Профиль'
    }
  },
}
</script>

<style lang="scss" scoped>
.profile-page {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
