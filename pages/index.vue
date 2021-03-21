<template>
  <div>
    <section class="mv">
      <div class="l-container">
        <h1 class="title">
          <AtomLogo />
        </h1>
        <p class="copy">コピー入ります<br />コピー入ります<br />コピー</p>
        <div class="mv_img">
          <img src="@/assets/img/top/mv1.svg" alt="" />
        </div>
        <div class="search-box">
          <div class="input">
            <AtomInputText type="search" placeholder="応援したい人材を探す" />
          </div>
          <div class="btn">
            <AtomButton>
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#fff"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </i>
            </AtomButton>
          </div>
        </div>
      </div>
    </section>

    <section class="students">
      <div class="l-container">
        <div class="students__slider">
          <MoleculeUserSliderStudents :items="students" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      students: require(`~/assets/json/students.json`)
    };
  }
};
</script>

<style lang="scss" scoped>
.mv {
  position: relative;
  padding-top: 74%;
  margin-bottom: 16%;

  &_img {
    position: absolute;
    top: 4vw;
    right: -50vw;
    width: 105vw;
  }
}
.copy {
  font-size: 5vw;
  color: #fff;
  font-weight: bold;
  position: absolute;
  top: 18vw;
  left: $paddingSp;
  z-index: 100;
  // text-shadow: 1px 1px 3px rgba(#000, 0.2);
}
.title {
  width: 40%;
  margin: 0 auto 10%;
}
.search-box {
  display: flex;
  justify-content: space-between;

  .input {
    width: 80%;
  }
  .btn {
    width: 15%;
    button {
      height: 100%;
    }
  }
}
.students {
  &__slider {
    @include noGutter;
  }
}
</style>
