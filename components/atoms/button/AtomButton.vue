<template>
  <button class="btn-default" :class="color">
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    color: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scope>
.btn-default {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  width: 100%;
  border: 0;
  outline: 0;
  padding: 4px;
  background-color: map-get($color, blue, default);
  color: #fff;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &.red {
    background-color: map-get($color, red, medium);
  }

  i {
    width: 20px;
  }
}
</style>
