<template>
  <div>
    <section class="mv">
      <div class="mv_inner l-container relative">
        <p class="copy">コピー入ります<br />コピー入ります<br />コピー</p>
        <div class="mv_img">
          <img src="@/assets/img/top/mv1.svg" alt="" />
        </div>
        <div class="search-box">
          <div class="input">
            <AtomInputText
              v-model="search"
              type="search"
              placeholder="応援したい人材を探す"
            />
          </div>
          <div class="btn">
            <AtomButton @click="onSearch">
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
        <h1 class="title">
          <AtomLogo />
        </h1>
      </div>
    </section>

    <section class="students">
      <div class="students__slider">
        <MoleculeUserSliderStudents :items="students" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  async asyncData({ $axios }) {
    const students = await $axios.get("/v1/tops");
    return {
      students: students.data,
    };
  },
  methods: {
    onSearch() {
      if (!this.search) {
        return;
      }
      console.log("onSearch", this.search);
      this.$router.push({
        name: "dream-list",
        params: {
          search: this.search,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.mv {
  position: relative;
  margin-bottom: 12%;

  @include pc {
    margin-bottom: vw-pc(220);
  }

  @include pcL {
    margin-bottom: 220px;
  }

  &_inner {
    padding-top: 74%;

    @include pc {
      padding-top: vw-pc(270);
    }
    @include pcL {
      padding-top: 270px;
    }
  }

  &_img {
    position: absolute;
    top: 4vw;
    right: -50vw;
    width: 105vw;

    @include pc {
      top: vw-pc(50);
      right: 0;
      transform: translate(10%, 0);
      width: vw-pc(900);
    }

    @include pcL {
      top: 50px;
      width: 900px;
    }
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

  @include pc {
    top: vw-pc(80);
    left: $paddingPc;
    font-size: vw-pc(40);
  }

  @include pcL {
    top: 80px;
    font-size: 40px;
  }
}
.title {
  @include sp {
    width: 40%;
    margin: 10% auto 0;
  }

  @include pc {
    width: 20%;
    margin-top: 4%;
    margin-left: 6%;

    ::v-deep {
      path {
        fill: #fff;
      }
    }
  }

  @include pcL {
  }
}
.search-box {
  display: flex;
  justify-content: space-between;

  @include pc {
    width: 40%;
    max-width: 400px;
    margin-top: 5%;
  }

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
  }
}
</style>
