<template>
  <div class="user-profile">
    <section class="images">
      <div class="l-container">
        <div class="slider">
          <div class="profile">
            <div class="profile__inner">
              <div class="user-info">
                <h1 class="font-extrabold text-3xl text-white">Taichiro</h1>
                <h1 class="font-extrabold text-3xl text-white">Hasegawa</h1>
                <p class="mt-1 text-white text-base">東京大学 法学部</p>
              </div>
              <!-- <img
                class="rounded-full user-img"
                src="@/assets/img/students/students_img0.jpg"
              /> -->
            </div>
          </div>
          <MoleculeUserSliderProfile :items="students" />
        </div>
      </div>
    </section>

    <section class="body">
      <div class="l-container">
        <h1 class="title">
          <span class="date">2021.01.07</span>
          【諦めたくない！】コロナで海外留学打ち切り…十年越しの夢の続きを
        </h1>
        <p class="name">@usernameusername</p>
        <div class="content">
          <p>
            テキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入ります
          </p>
          <p>
            テキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますΩテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入ります
          </p>
          <p>
            テキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入りますテキスト入ります
          </p>
        </div>
      </div>
    </section>

    <section class="career">
      <div class="l-container">
        <div class="content">
          <atoms-section-title-line>職歴</atoms-section-title-line>
          <organism-career-time-line :career="students[0].career" />
        </div>
      </div>
    </section>

    <section class="academic">
      <div class="l-container">
        <div class="content">
          <atoms-section-title-line>学歴</atoms-section-title-line>
          <organism-academic-time-line :academic="students[0].academic" />
        </div>
      </div>
    </section>

    <section class="dream-list">
      <div class="l-container">
        <div class="content">
          <atoms-section-title-line>やりたいこと</atoms-section-title-line>
          <organism-tag-list :tagList="students[0].dreamList" />
        </div>
      </div>
    </section>

    <section class="write">
      <div class="l-container">
        <div class="content">
          <atoms-section-title-line>執筆</atoms-section-title-line>
          <organism-rect-card-list :posts="students[0].write" />
        </div>
      </div>
    </section>

    <section class="achievements">
      <div class="l-container">
        <div class="content">
          <atoms-section-title-line>実績</atoms-section-title-line>
          <organism-rect-card-list :posts="students[0].achievements" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import OrganismCareerTimeLine from "@/components/organism/OrganismCareerTimeLine.vue";
import OrganismAcademicTimeLine from "@/components/organism/OrganismAcademicTimeLine.vue";
import MoleculesProgressBox from "@/components/molecules/user/MoleculesProgressBox.vue";
import MoleculesRectCard from "@/components/molecules/user/MoleculesRectCard.vue";
import AtomsSectionTitleLine from "@/components/atoms/line/AtomsSectionTitleLine.vue";
import OrganismTagList from "../../components/organism/OrganismTagList.vue";
import OrganismRectCardList from "../../components/organism/OrganismRectCardList.vue";

export default {
  asyncData() {
    return {
      students: require(`~/assets/json/students.json`),
    };
  },
  components: {
    MoleculesProgressBox,
    MoleculesRectCard,
    OrganismCareerTimeLine,
    OrganismAcademicTimeLine,
    AtomsSectionTitleLine,
    OrganismTagList,
    OrganismRectCardList,
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
    width: 65%;
  }
  &__avator {
    width: 30%;

    img {
      width: 100%;
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

.profile {
  z-index: 100;
  height: 150px;
  .user-img {
    width: 28%;
  }

  .profile__inner {
    position: relative;
    .user-info {
      position: absolute;
      top: 1.5rem;
      left: 3rem;
    }
    .user-img {
      position: absolute;
      top: 6rem;
      right: 2.5rem;
    }
  }
}
</style>
