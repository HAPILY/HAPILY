<template>
  <div class="wrapper" :class="wrapperClass">
    <GlobalHeader />
    <GlobalMenu v-if="menuOpen" />
    <div class="main">
      <Nuxt />
    </div>
    <portal-target name="modal" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
      winWidth: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  computed: {
    menuOpen() {
      return this.$store.state["menu"].globalMenu;
    },
    wrapperClass() {
      return {
        "-scroll": this.scrollY > this.winWidth * 0.3,
        "-gMenuOpen": this.menuOpen,
        "-searchMenuOpen": this.$store.state["menu"].searchMenu,
      };
    },
  },
  methods: {
    onScroll() {
      this.winWidth = window.innerWidth;
      this.scrollY = window.scrollY;
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  position: relative;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  &:before {
    content: "";
    display: block;
    width: 150vw;
    height: 16vh;
    position: absolute;
    top: 0;
    left: 44%;
    z-index: -1;
    opacity: 1;
    transform: translate3d(-40%, -50%, 0);
    transition: border-radius 0.3s;
    background: map-get($color, yellow, default);
  }
  // &.-scroll {
  //   &:before {
  //     position: fixed;
  //     left: 0;
  //     width: 100%;
  //     height: 50px;
  //     border-radius: 0;
  //     z-index: 200;
  //     opacity: 1;
  //     transform: translate3d(0, 0, 0);
  //     animation: scrollHeader 0.4s forwards;
  //   }
  // }
}
// @keyframes scrollHeader {
//   0% {
//     opacity: 1;
//   }
//   10% {
//     opacity: 0.8;
//   }
//   100% {
//     opacity: 1;
//   }
// }
.main {
  flex-grow: 1;

  .-gMenuOpen &,
  .-searchMenuOpen & {
    filter: blur(10px);
  }
}
</style>
