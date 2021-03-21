<template>
  <footer class="footer">
    <div class="l-container">
      <p class="copy">© HAPILY</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 20%;
  padding: 20px 0;
  color: #666;
  position: relative;

  .-gMenuOpen &,
  .-searchMenuOpen & {
    filter: blur(10px);
  }

  &:before {
    content: "";
    display: block;
    border-radius: 50%;
    width: 280vw;
    height: 150vw;
    position: absolute;
    bottom: 0;
    left: 44%;
    z-index: 0;
    transform: translate3d(-60%, 87%, 0);
    background: linear-gradient(to top, #fec22e 90%, #ffe371 99%);
  }
}
.copy {
  position: relative;
  z-index: 1;
  font-size: 0.8rem;
}
</style>
