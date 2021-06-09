/* eslint no-tabs: ["error", { allowIndentationTabs: true }] */
<template>
  <button @click="toggleMenu">
    <div ref="lottieContainer" class="at-lottie-container"></div>
    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="#fff"
    >
      <g v-if="!menuOpen">
        <path
          d="M10,5.7c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S8.9,5.7,10,5.7z"
        />
        <circle cx="10" cy="10" r="2" />
        <path
          d="M10,14.3c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S11.1,14.3,10,14.3z"
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
import lottie from 'lottie-web'
import animationData from '@/assets/json/animation/menuV2.json'

export default {
  data: () => ({
    options: {
      animationData,
      loop: false,
      autoplay: false,
      rendererSettings: ''
    }
  }),
  computed: {
    menuOpen () {
      return this.$store.state.menu.globalMenu
    }
  },
  mounted () {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      renderer: 'svg',
      loop: this.options.loop,
      autoplay: this.options.autoplay,
      animationData: this.options.animationData,
      rendererSettings: this.options.rendererSettings
    })
    this.$store.watch(
      () => this.$store.state.menu.globalMenu,
      result => this.playIcon(result)
    )
  },
  methods: {
    toggleMenu () {
      this.$store.commit('menu/globalMenuToggle')
    },
    playIcon (e) {
      if (e) {
        this.anim.setSpeed(3)
        this.anim.setDirection(1)
        this.anim.play()
      } else {
        this.anim.setSpeed(4)
        this.anim.setDirection(-1)
        this.anim.play()
      }
    }
  }
}
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
