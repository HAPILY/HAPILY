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
@import "assets/css/component/layout/_wrapper.scss";
</style>
