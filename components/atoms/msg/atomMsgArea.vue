<template>
  <div class="msg" :class="[type ? l : r]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    kind: {
      type: String,
      default: 'pair',
      validator (val) {
        return ['pair', 'my'].includes(val)
      }
    }
  },
  data () {
    return {
      l: 'l',
      r: 'r'
    }
  },
  beforeMount () {
    this.type = this.kind === 'pair'
  }
}
</script>

<style lang="scss" scoped>
.l {
  background-color: map-get($color, blue, light);
  color: #61677c;
  border-radius: 32px;
  border-top-left-radius: 8px;
}

.r {
  background-color: map-get($color, blue, default);
  color: #ffffff;
  border-radius: 32px;
  border-bottom-right-radius: 8px;
}

.msg {
  display: inline-block;
  min-width: 50px;
  font-weight: 300;
  border: 0;
  outline: 0;
  padding: 16px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  word-break: break-all;
}
</style>
