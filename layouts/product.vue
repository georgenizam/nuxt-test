<template>
  <div class="layout">
    <ProductHeader class="header"/>
    <main class="main">
      <Nuxt/>
    </main>
    <BottomMenu/>
    <Footer/>
  </div>
</template>

<script>
import ProductHeader from "@/components/Product/ProductHeader"
import Footer from "@/components/Footer"
import BottomMenu from "@/components/BottomMenu/BottomMenu"

export default {
  name: "product",
  components: {
    ProductHeader,
    Footer,
    BottomMenu
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    top: 6px;
    left: 0;
    position: absolute;
    z-index: 1000;
    width: 100%;
  }
  .main {
    flex-grow: 1;
  }
}
</style>
