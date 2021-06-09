<template>
  <div>
    <input v-model="computedValue" :placeholder="placeholder" />
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  computed: {
    computedValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  border: none;
  outline: none;
  padding-bottom: 8px;
  box-sizing: border-box;
  width: 100%;
}

.line {
  position: relative;
  border-top: 1px solid;
  &::before,
  &::after {
    position: absolute;
    bottom: 0px;
    width: 0px;
    height: 1px;
    content: "";
    background-color: #3be5ae;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }
  &::before {
    left: 50%;
  }
  &::after {
    right: 50%;
  }
  input:focus + &::before,
  input:focus + &::after {
    width: 50%;
  }
}
</style>
