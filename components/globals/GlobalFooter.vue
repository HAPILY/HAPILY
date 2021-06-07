<template>
  <footer class="footer">
    <div class="l-container">
      <p class="copy">© HAPILY</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 7vw;
  padding: 20px 0;
  color: #fff;
  font-weight: bold;
  position: relative;
  z-index: -1;

  @include pc {
    margin-top: vw-pc(200);
  }

  @include pcL {
    margin-top: vw-pc(200);
  }

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

    @include pc {
      width: vw-pc(280) * 12;
      height: vw-pc(150) * 12;
    }

    @include pcL {
      width: 280px * 12;
      height: 150px * 12;
    }
  }
}
.copy {
  position: relative;
  z-index: 1;
  font-size: 0.8rem;

  @include pc {
    font-size: 1rem;
  }
}
</style>
