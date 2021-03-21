<template>
  <button @click="toggleMenu">
    <div class="at-lottie-container" ref="lottieContainer"></div>
    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      fill="#fff"
    >
      <g v-if="!menuOpen">
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        />
      </g>
      <g v-else>
        <path
          d="M16.7,17.4c-0.4,0.4-1.1,0.3-1.6-0.2L2.8,4.9C2.3,4.4,2.2,3.7,2.6,3.3l0.7-0.7c0.4-0.4,1.1-0.3,1.6,0.2
	l12.4,12.4c0.5,0.5,0.6,1.2,0.2,1.6L16.7,17.4z"
        />
        <path
          d="M17.4,3.3c0.4,0.4,0.3,1.1-0.2,1.6L4.9,17.2c-0.5,0.5-1.2,0.6-1.6,0.2l-0.7-0.7c-0.4-0.4-0.3-1.1,0.2-1.6
	L15.1,2.8c0.5-0.5,1.2-0.6,1.6-0.2L17.4,3.3z"
        />
      </g>
    </svg> -->
  </button>
</template>

<script>
import lottie from "lottie-web";
import animationData from "@/assets/json/animation/searchToX.json";

export default {
  data: () => ({
    options: {
      animationData,
      loop: false,
      autoplay: false,
      rendererSettings: ""
    }
  }),
  computed: {
    menuOpen() {
      return this.$store.state["menu"].searchMenu;
    }
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      renderer: "svg",
      loop: this.options.loop,
      autoplay: this.options.autoplay,
      animationData: this.options.animationData,
      rendererSettings: this.options.rendererSettings
    });
    this.$store.watch(
      () => this.$store.state["menu"].searchMenu,
      result => this.playIcon(result)
    );
  },
  methods: {
    toggleMenu() {
      this.$store.commit("menu/searchMenuToggle");
    },
    playIcon(e) {
      if (e) {
        this.anim.setSpeed(3);
        this.anim.setDirection(1);
        this.anim.play();
      } else {
        this.anim.setSpeed(4);
        this.anim.setDirection(-1);
        this.anim.play();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  position: relative;
  z-index: 1;
  -webkit-tap-highlight-color: transparent;

  ::v-deep path {
    stroke: #fff;
  }
}
</style>
