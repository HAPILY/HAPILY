<template>
  <h2 class="title-lines">
    <slot></slot>
  </h2>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.title-lines {
  display: flex;
  align-items: center;
  line-height: 1.4;
  font-weight: bold;
  font-size: 1.1rem;
  color: map-get($color, blue, default);
  &:before,
  &:after {
    content: "";
    display: block;
    height: 1px;
    flex-grow: 1;
    background-color: map-get($color, blue, default);
  }
  &:before {
    margin-right: 1em;
  }
  &:after {
    margin-left: 1em;
  }
}
</style>
