<template>
  <header class="header" id="header">
    <div class="l-container header_inner">
      <nuxt-link to="/" class="logo">
        <AtomLogomark />
      </nuxt-link>
      <div class="navi">
        <AtomHeaderSearchBtn class="search-btn btn" />
        <AtomHeaderMenuBtn class="menu-btn btn" />
        <div class="avator">
          <img src="@/assets/img/common/avator.svg" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 999;
  > * {
    position: relative;
    z-index: 1;
  }
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: 0.4s ease-out;
    background: map-get($color, gradient, yellow);
    opacity: 0;
    .wrapper.-scroll & {
      opacity: 1;
    }
  }
  &_inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
  }
}
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
.logo {
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -8px;
  position: relative;
  z-index: 1;

  img {
    width: 26px;
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
