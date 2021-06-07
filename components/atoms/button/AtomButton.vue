<template>
  <button class="btn-default" @click="click" :class="color">
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    color: {
      type: String,
      default: "",
    },
  },
  methods: {
    click(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-default {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  border: 0;
  outline: 0;
  padding: 4px;
  background-color: map-get($color, blue, default);
  color: #fff;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  width: 100%;

  &.red {
    background-color: map-get($color, red, medium);
  }

  i {
    width: 20px;
  }
}
</style>
