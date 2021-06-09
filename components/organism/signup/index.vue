<template>
  <div class="signup">
    <section class="section-inputs">
      <div class="l-container">
        <h1 class="title">
          新規登録
        </h1>
        <AtomBoxRounded>
          <form class="form">
            <ul class="inputs-list">
              <li>
                <AtomInputText type="email" placeholder="メールアドレス" />
              </li>
              <li>
                <AtomInputText type="email" placeholder="メールアドレス" />
              </li>
              <li>
                <AtomInputText type="password" placeholder="パスワード" />
              </li>
              <li>
                <AtomInputText type="password" placeholder="パスワード" />
              </li>
            </ul>

            <div class="btn">
              <AtomButton class="m-auto">
                新規登録
              </AtomButton>
            </div>
          </form>

          <div class="login">
            <h2 class="c-title-left">
              アカウントをお持ちの方はこちら
            </h2>
            <div class="btn">
              <AtomButton color="red m-auto">
                ログイン
              </AtomButton>
            </div>
          </div>
        </AtomBoxRounded>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.signup {
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
.login {
  margin-top: 36px;
}
</style>
