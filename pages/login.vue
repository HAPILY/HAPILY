<template>
  <div class="login">
    <section class="section-inputs">
      <div class="l-container">
        <h1 class="title">
          ログイン
        </h1>

        <AtomBoxRounded>
          <ValidationObserver ref="myform" v-slot="{ handleSubmit }">
            <form class="form" @submit.stop.prevent="handleSubmit(sendLogin)">
              <ul class="inputs-list">
                <li>
                  <validation-provider v-slot="{ errors }" name="email" rules="email|required">
                    <AtomInputText v-model="state.email" type="email" name="email" placeholder="メールアドレス" />
                    <div class="validate">{{ errors[0] }}</div>
                  </validation-provider>
                </li>
                <li>
                  <validation-provider v-slot="{ errors }" name="password" rules="required">
                    <AtomInputText v-model="state.password" type="password" placeholder="パスワード" />
                    <div class="validate">{{ errors[0] }}</div>
                  </validation-provider>
                </li>
              </ul>
              <p class="password">
                <nuxt-link class="c-link" to="password"
                  >パスワードをお忘れの方はこちら</nuxt-link
                >
              </p>
              <div class="btn">
                <SubmitButton class="m-auto">
                  ログイン
                </SubmitButton>
              </div>
            </form>
          </ValidationObserver>

          <div class="signup">
            <h2 class="c-title-left">
              アカウントをお持ちでない方はこちら
            </h2>
            <nuxt-link to="/signup">
              <div class="btn">
                <AtomButton color="red m-auto">
                  新規会員登録
                </AtomButton>
              </div>
            </nuxt-link>
          </div>
        </AtomBoxRounded>
      </div>
    </section>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api'
import SubmitButton from '@/components/atoms/button/Submit.vue'

export default {
  components: {
    SubmitButton
  },
  setup(_, { root }) {
    const state = reactive({
      email: '',
      password: '',
    });

    const sendLogin = async () => {
      console.log('sendLogin', state)
      const res = await root.$axios.post('/auth/login', { ...state })
      if (res.status === "success") {
        window.location.href = "/"
      } else {
        console.log('fail login', res)
      }
    }

    return {
      state,
      sendLogin,
    }
  },
}
</script>

<style lang="scss" scoped>
.login {
  @include pc {
    display: flex;
    flex-direction: column;
    height: 70vh;
    &:before,&:after {
      content: '';
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
.signup {
  margin-top: 36px;
}
.validate {
  color: #F00;
  font-size: 10px;
}
</style>
