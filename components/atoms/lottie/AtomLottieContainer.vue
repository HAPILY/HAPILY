<template>
  <div ref="lavContainer" class="at-lottie-container"></div>
</template>

<script>
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
  mounted () {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      loop: this.options.loop !== false,
      autoplay: this.options.autoplay !== false,
      animationData: this.options.animationData,
      rendererSettings: this.options.rendererSettings
    })
  },
  methods: {
    start () {
      this.anim.play()
    },
    finish () {
      this.anim.stop()
    }
  }
}
</script>
