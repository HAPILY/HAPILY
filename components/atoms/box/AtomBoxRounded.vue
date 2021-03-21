<template>
  <div class="box-rounded">
    <slot />
  </div>
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
.box-rounded {
  padding: 44px 32px;
  border-radius: 32px;
  background-color: #fff;
  @include noGutter;
}
</style>
