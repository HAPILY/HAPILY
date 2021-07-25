<template>
  <div class="signup">
    <section class="section-inputs">
      <div class="l-container">
        <h1 class="title">新規登録</h1>

        <AtomBoxRounded>
          <ValidationObserver ref="myform" v-slot="{ handleSubmit }">
            <form class="form" @submit.stop.prevent="handleSubmit(sendSignup)">
              <ul class="inputs-list">
                <li>
                  <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="email|required"
                  >
                    <AtomInputText
                      v-model="state.email"
                      type="email"
                      name="email"
                      placeholder="メールアドレス"
                    />
                    <div class="validate">{{ errors[0] }}</div>
                  </validation-provider>
                </li>
                <li>
                  <validation-provider
                    v-slot="{ errors }"
                    name="password"
                    :rules="`required|min:6|is:${state.password_confirmation}`"
                  >
                    <AtomInputText
                      v-model="state.password"
                      type="password"
                      name="password"
                      placeholder="パスワード"
                    />
                    <div class="validate">{{ errors[0] }}</div>
                  </validation-provider>
                </li>
                <li>
                  <AtomInputText
                    v-model="state.password_confirmation"
                    type="password"
                    name="password_confirmation"
                    placeholder="パスワード(確認)"
                  />
                </li>
              </ul>

              <div class="btn">
                <SubmitButton class="m-auto"> 新規登録 </SubmitButton>
              </div>
            </form>
          </ValidationObserver>

          <div class="login">
            <h2 class="c-title-left">アカウントをお持ちの方はこちら</h2>
            <nuxt-link to="/login">
              <div class="btn">
                <AtomButton color="red m-auto"> ログイン </AtomButton>
              </div>
            </nuxt-link>
          </div>
        </AtomBoxRounded>
      </div>
    </section>
  </div>
</template>

<script>
import { reactive } from "@vue/composition-api";
import SubmitButton from "@/components/atoms/button/Submit.vue";

export default {
  components: {
    SubmitButton,
  },
  setup(_, { root }) {
    const state = reactive({
      email: "",
      password: "",
      password_confirmation: "",
    });

    const sendSignup = async () => {
      const res = await root.$axios.post("/auth", { ...state });
      console.log("sendSignup", res);
      if (res.status === "success") {
        window.localStorage.setItem("id", res.data.id);
        window.location.href = "/";
      } else {
        // Todo: 失敗時の表記
        console.log("fail login", res);
      }
    };

    return {
      state,
      sendSignup,
    };
  },
};
</script>

<style lang="scss" scoped>
.signup {
  @include pc {
    display: flex;
    flex-direction: column;
    height: 70vh;
    &:before,
    &:after {
      content: "";
      display: block;
      flex: 1;
      min-height: 50px;
    }
  }
}
.title {
  text-align: center;
  font-size: 20px;
  line-height: 1.4;
  padding-top: 20px;
  padding-bottom: 30px;
  color: #fff;
  font-weight: bold;
}
.inputs-list {
  > li {
    + li {
      margin-top: 16px;
    }
  }
}
.password {
  text-align: right;
  font-size: 0.8rem;
  margin-top: 20px;
}
.btn {
  margin-top: 20px;
}
.login {
  margin-top: 36px;
}
.validate {
  color: #f00;
  font-size: 10px;
}
</style>
