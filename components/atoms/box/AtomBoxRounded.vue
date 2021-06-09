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
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scope>
.box-rounded {
  padding: 44px 32px;
  border-radius: 32px;
  background-color: #fff;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @include sp {
    @include noGutter;
  }
  @include pc {
    box-shadow: 8px 8px 0 0 #e9eff9;
  }
}
</style>
