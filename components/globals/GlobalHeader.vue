<template>
  <header class="header" id="header">
    <div class="l-container header_inner">
      <nuxt-link to="/" class="logo">
        <AtomLogomark />
      </nuxt-link>
      <div class="navi">
        <AtomHeaderSearchBtn class="search-btn btn" />
        <AtomHeaderMenuBtn class="menu-btn btn" />
        <template v-if="userId">
          <nuxt-link :to="`/user/profile${userId}`">
            <div class="avator">
              <img src="@/assets/img/common/avator.svg" alt="" />
            </div>
          </nuxt-link>
        </template>
        <template v-else>
          <div class="avator">
            <img src="@/assets/img/common/avator.svg" alt="" />
          </div>
        </template>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "GlobalHeader",
  computed: {
    userId() {
      const id = window.localStorage.getItem("id") || "";
      return id;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/component/global/_header.scss";

.avator {
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  img {
    width: 30px;
  }
}

.navi {
  display: flex;
  align-items: center;
  margin-right: -6px;
  position: relative;
  z-index: 0;
  &:before {
    content: "";
    display: block;
    border-radius: 50%;
    width: 280vw;
    height: 280vw;
    position: absolute;
    top: 22px;
    right: 66px;
    z-index: -1;
    transform: translate3d(50%, -50%, 0) scale(0);
    transform-origin: center center;
    transition: transform 0.4s cubic-bezier(0.11, 0.73, 0.5, 1);
    background: map-get($color, gradient, yellow);
  }
  .-gMenuOpen & {
    &:before {
      transform: translate3d(50%, -50%, 0) scale(1);
      z-index: 0;
    }
  }
  &:after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 280vw;
    height: 280vw;
    position: absolute;
    top: 22px;
    right: 110px;
    z-index: -1;
    transform: translate3d(50%, -50%, 0) scale(0);
    transform-origin: center center;
    transition: transform 0.4s cubic-bezier(0.11, 0.73, 0.5, 1);
    background: map-get($color, blue, default);
  }
  .-searchMenuOpen & {
    &:after {
      transform: translate3d(50%, -50%, 0) scale(1);
      z-index: 0;
    }
  }
}

.btn {
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  @include nostyles;
}
</style>
