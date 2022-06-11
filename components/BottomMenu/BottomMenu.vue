<template>
  <div class="container">
    <nav class="navigation">
      <ul class="navigation-list">
        <BottomMenuItem
          to="/"
          title="Главная"
          exact
        >
          <MainPage/>
        </BottomMenuItem>
        <BottomMenuItem
          to="/products"
          title="Каталог"
        >
          <Catalog/>
        </BottomMenuItem>
        <BottomMenuItem
          to="/cart"
          title="Корзина"
        >
          <Cart/>
        </BottomMenuItem>
        <BottomMenuItem
          to="/profile"
          title="Профиль"
        >
          <Profile/>
        </BottomMenuItem>
        <BottomMenuItem
          to="/contact"
          title="Контакт"
        >
          <Contact/>
        </BottomMenuItem>
      </ul>
    </nav>
  </div>
</template>

<script>
import MainPage from "@/components/UI/icons/MainPage"
import Catalog from "@/components/UI/icons/Catalog"
import Cart from "@/components/UI/icons/Cart"
import Profile from "@/components/UI/icons/Profile"
import Contact from "@/components/UI/icons/Contact"
import BottomMenuItem from "@/components/BottomMenu/BottomMenuItem"

export default {
  name: "BottomMenu",
  components: {
    MainPage,
    Catalog,
    Cart,
    Profile,
    Contact,
    BottomMenuItem
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  padding: 5px 0;
  width: 100%;
  position: fixed;
  z-index: 1000;
  background: $color-white;
  border-top: 1px solid $color-grey;
  bottom: 0;
  left: 0;
  &-list {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(5, 1fr);
    justify-content: space-evenly;
    //grid-gap: 0 25px;
  }
}
</style>
