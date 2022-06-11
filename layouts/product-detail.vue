<template>
  <div class="layout">
<!--    <Header/>-->
    <SubMenu :links="links"/>
    <main class="main">
      <Nuxt/>
    </main>
    <BottomMenu/>
    <Footer/>
  </div>
</template>

<script>
import SubMenu from "@/components/Comment/SubMenu"
import Footer from "@/components/Footer"
import BottomMenu from "@/components/BottomMenu/BottomMenu"

export default {
  // name: "detail",
  components: {
    SubMenu,
    Footer,
    BottomMenu
  },
  head () {
    return {
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no'
        },
        { hid: 'description', name: 'description', content: 'Главная' }
      ]
    }
  },
  computed: {
    slug() {
      return this.$route.params.slug
    },
    links() {
      return [
        {
          to: `/products/${this.slug}/video-reviews`,
          title: 'Видеообзоры'
        },
        {
          to: `/products/${this.slug}/reviews`,
          title: 'Отзывы'
        },
        {
          to: `/products/${this.slug}/questions`,
          title: 'Вопросы'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  .main {
    flex-grow: 1;
  }
}
</style>
