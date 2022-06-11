<template>
  <div class="layout">
    <Header/>
    <main class="main">
      <Nuxt/>
    </main>
    <BottomMenu/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BottomMenu from "@/components/BottomMenu/BottomMenu"

export default {
  // name: "default",
  components: {
    Header,
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
  }
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
