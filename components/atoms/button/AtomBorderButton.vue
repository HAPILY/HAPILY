<template>
  <button class="btn-default" :style="style" @click="click">
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    color: {
      type: String,
      default: '#283233'
    }
  },
  computed: {
    style () {
      return {
        '--color': this.color
      }
    }
  },
  methods: {
    click (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-default {
  border: 1px solid;
  border-color: var(--color);
  color: var(--color);
  padding: 6px 16px;
  font-size: 0.875rem;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 6px;
  text-transform: uppercase;
}
</style>
