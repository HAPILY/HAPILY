<template>
  <div class="login">
    <section class="section-inputs">
      <div class="l-container">
        <h1 class="title">
          ログイン
        </h1>

        <AtomBoxRounded>
          <form class="form">
            <ul class="inputs-list">
              <li>
                <AtomInputText type="email" placeholder="メールアドレス" />
              </li>
              <li>
                <AtomInputText type="password" placeholder="パスワード" />
              </li>
            </ul>
            <p class="password">
              <nuxt-link class="c-link" to="password">
                パスワードをお忘れの方はこちら
              </nuxt-link>
            </p>
            <div class="btn">
              <AtomButton class="m-auto">
                ログイン
              </AtomButton>
            </div>
          </form>

          <div class="signup">
            <h2 class="c-title-left">
              アカウントをお持ちでない方はこちら
            </h2>
            <div class="btn">
              <AtomButton color="red m-auto">
                新規会員登録
              </AtomButton>
            </div>
          </div>
        </AtomBoxRounded>
      </div>
    </section>
  </div>
</template>

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
</style>
