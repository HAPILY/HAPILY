<template>
  <div class="user-profile">
    <section class="images">
      <div class="l-container -max-900">
        <div class="slider">
          <MoleculeUserSliderProfile :items="students" />
        </div>
      </div>
    </section>

    <section class="body">
      <div class="l-container -max-900">
        <h1 class="title">
          <span class="date">{{ $dayjs(dream.created_at).format('YYYY.MM.DD') }}</span>
          {{ dream.title }}
        </h1>
        <p class="name">@{{ dream.first_name }} {{ dream.last_name }}</p>
        <div class="content">
          <h2 class="title-lines">なぜ叶えたい</h2>
          <div class="future__inner">
            <div class="future__txt">
              <p>
                {{ dream.why_text }}
              </p>
            </div>

            <div class="future__avator">
              <img class="rounded-full" :src="dream.user_icon_url" alt="" />
            </div>
          </div>
        </div>
        <div class="content">
          <h2 class="title-lines">具合的なアクション</h2>
          <div>
            {{ dream.how_text }}
          </div>
        </div>
        <div class="price">
          <span>必要金額</span>
          {{ dream.money.toLocaleString() }}<span>円</span>
        </div>
        <!-- <div class="condition">
          <h2 class="title-center">条件</h2>
          <ul class="list-condition">
            <li>てxtてxtてxtてxtてxtてxtてxtてxt</li>
            <li>てxtてxtてxtてxtてxtてxtててxtてxtててxtてxtてxtてxt</li>
            <li>てxtてxtてxtてxtてxtてxtてxtてxt</li>
          </ul>
        </div> -->
      </div>
    </section>

    <!-- <section class="future">
      <div class="l-container -max-900">
        <div class="content">
          <h2 class="title-lines">将来の夢</h2>
          <div class="future__inner">
            <div class="future__txt">
              <p>
                テキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入ります
              </p>
            </div>

            <div class="future__avator">
              <img src="@/assets/img/common/avator.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <section class="experience">
      <div class="l-container -max-900">
        <div class="content">
          <h2 class="title-center">こんなことやります</h2>
          <p>{{ dream.can_text }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MoleculesProgressBox from "@/components/molecules/user/MoleculesProgressBox.vue";

export default {
  async asyncData({ $axios, params }) {
    const students = await $axios.get('/tops')
    const dream = await $axios.get(`/dreams/${params.id}`)
    return {
      students: students.data,
      dream: dream.data,
    };
  },
  components: {
    MoleculesProgressBox,
  },
};
</script>

<style lang="scss" scoped>
.slider {
  @include noGutter;
  margin-bottom: 8%;
}
.title {
  vertical-align: top;
  position: relative;
  padding: 0 0 ($unit * 4) ($unit * 6);
  font-size: 1.1rem;
  margin-bottom: 12px;
  line-height: 1.6;
  font-weight: bold;
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    border-radius: 2px;
    background: linear-gradient(to top, #fec22e 0%, #ffe371 80%);
  }
  .date {
    color: #ddd;
    text-align: right;
    font-size: 0.8rem;
    display: block;
    margin-bottom: ($unit * 2);
    line-height: 1.1;
    font-weight: normal;
  }
}
.price {
  border-radius: 16px;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.1;
  background-color: map-get($color, blue, pale);
  margin-top: 8%;
  text-align: right;
  span {
    font-size: 60%;
    display: inline-block;
    margin: 0 0.8em;
  }
}
.condition {
  margin-top: 8%;
}
.list-condition {
  font-weight: bold;
  > li {
    position: relative;
    line-height: 1.4;
    padding-left: 2em;
    + li {
      margin-top: 8px;
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 1em;
      top: 0.5em;
      width: 0.4em;
      height: 0.4em;
      border-radius: 20px;
      background: map-get($color, gradient, yellow);
    }
  }
}
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
.name {
  font-size: 0.9rem;
  color: #bbb;
}
.content {
  font-size: 0.9rem;
  line-height: 1.8;
  margin-top: 4%;
  p {
    + p {
      margin-top: 1em;
    }
  }
}
.future {
  margin-top: 8%;
  &__inner {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  &__txt {
    width: calc(100% - 120px);
    margin-right: 20px;
  }
  &__avator {
    height: 120px;
    width: 120px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
.experience {
  background-color: #f5f5f5;
  padding-top: 8%;
  padding-bottom: 8%;
  margin-top: 12%;

  .content {
    background-color: #fff;
    border-radius: ($unit * 4);
    padding: ($unit * 8) ($unit * 5) ($unit * 6);
    position: relative;
    .title-center {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
  }
}
.title-center {
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-weight: bold;
  padding: 8px 12px;
  line-height: 1.4;
  min-width: 220px;
  margin: 0 auto 12px;
  background-color: map-get($color, blue, default);
  font-size: 1.1rem;
}

.career {
  .career-title {
    vertical-align: 20px;
  }
  .now-title {
    display: inline-block;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-weight: bold;
    padding: 4px 4px 6px;
    line-height: 1.4;
    width: 60px;
    background-color: rgb(19, 166, 185);
    font-size: 0.9rem;
  }
  .career-date {
    padding: 5px 0px;
    color: rgb(105, 103, 103);
  }
  .job-list {
    margin-left: 18px;
    list-style-type: disc;
  }
}
</style>
