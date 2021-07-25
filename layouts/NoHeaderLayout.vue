<template>
  <div class="wrapper" :class="wrapperClass">
    <header class="header" id="header">
      <div class="l-container header_inner">
        <div class="logo">
          <AtomLogomark />
        </div>
      </div>
    </header>
    <div class="main">
      <Nuxt />
    </div>
    <GlobalFooter />
  </div>
</template>

<script>
export default {
  name: "NoHeaderLayout",
};
</script>

<style lang="scss" scoped>
@import "assets/css/component/global/_header.scss";
@import "assets/css/component/layout/_wrapper.scss";
</style>
