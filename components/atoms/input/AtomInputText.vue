<template>
  <input :type="type" :placeholder="placeholder" class="input-text" />
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scope>
.input-text {
  width: 100%;
  border: 0;
  outline: 0;
  border-radius: 20px;
  padding: 16px;
  background-color: map-get($color, blue, light);
  color: #61677c;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: -1px -1px 2px #fff, 1px 1px 2px rgba(#000, 0.2);
  }

  &:active {
    box-shadow: inset 1px 1px 2px rgba(#000, 0.2), inset -1px -1px 2px #fff;
  }

  .icon {
    margin-right: $ruler/2;
  }

  &.unit {
    border-radius: $ruler/2;
    line-height: 0;
    width: $ruler * 3;
    height: $ruler * 3;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 $ruler/2;
    font-size: $ruler * 1.2;

    .icon {
      margin-right: 0;
    }
  }
}
</style>
