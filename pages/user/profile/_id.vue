<template>
  <div class="user-profile">
    <section class="images">
      <div class="user-profile_inner l-container">
        <div class="profile">
          <div class="profile__inner">
            <div class="user-info">
              <h1 class="user-info_name font-extrabold text-white">
                <span class="sp:block pc:inline-block pc:mr-1 text-2xl">{{ profile.user_detail.first_name }}</span>
                <span class="sp:block pc:inline-block text-2xl">{{ profile.user_detail.last_name }}</span>
              </h1>
              <p class="mt-1 text-white text-base">{{ profile.user_detail.position }}</p>
            </div>
            <img
              class="rounded-full user-img"
              src="@/assets/img/students/students_img0.jpg"
            />
          </div>
        </div>
        <div class="slider">
          <MoleculeUserSliderProfile :items="students" :is-show-main="false" />
        </div>
      </div>
    </section>

    <section class="body">
      <div class="l-container -max-900">
        <h1 class="title">
          <span class="date sp:text-gray-400 pc:text-black">{{ profile.user_detail.created_at }}</span>
          {{ profile.user_detail.title }}
        </h1>
        <organism-profile-input-modal
          class="w-12 bl-margin-left"
          :profileTextData="profile.user_detail.detail"
          :profileTitle="profile.user_detail.title"
          @update:profile="updateProfile"
          @close="inputCloseAction('profile')"
          :key="closeKey.profile"
        />
        <div class="content">
          <p class="whitespace-pre-line">
            {{ profile.user_detail.detail }}
          </p>
        </div>
      </div>
    </section>

    <section class="career">
      <div class="l-container -max-900">
        <div class="content">
          <atoms-section-title-line>職歴</atoms-section-title-line>
          <organism-campany-input-modal
            class="w-12 bl-margin-left"
            @close="inputCloseAction('career')"
            @save="addCareerInputData"
            :key="`career-${closeKey.career}`"
          >
            <template #ignition>
              <atom-button class="w-full">追加</atom-button>
            </template>
          </organism-campany-input-modal>
          <organism-career-time-line
            :career="profile.work_history"
            @update="updateCareerInputData"
            :key="`careerTimeLine-${closeKey.careerTimeLine}`"
          />
        </div>
      </div>
    </section>

    <section class="academic">
      <div class="l-container -max-900">
        <div class="content">
          <atoms-section-title-line>学歴</atoms-section-title-line>
          <organism-academic-input-modal
            class="w-12 bl-margin-left"
            @close="inputCloseAction('academic')"
            @save="getAcademicInputData"
            :key="`academic-${closeKey.academic}`"
            ><template #ignition>
              <atom-button class="w-full">追加</atom-button>
            </template></organism-academic-input-modal
          >
          <organism-academic-time-line
            :academic="profile.school"
            :key="`academicTimeLine-${closeKey.academicTimeLine}`"
          />
        </div>
      </div>
    </section>

    <section class="dream-list">
      <div class="l-container -max-900">
        <div class="content">
          <atoms-section-title-line>やりたいこと</atoms-section-title-line>
          <organism-tag-list :tagList="profile.want_tags" />
          <organism-tag-input-modal
            @add="addTag"
            @close="inputCloseAction('todo')"
            :key="closeKey.todo"
            class="mt-4"
          >
            <template #ignition>
              <atom-border-button class="add-job-btn">
                <div class="flex justify-center">
                  <atom-icon class="w-4" name="plus" />
                  <span>やりたいことを追加</span>
                </div>
              </atom-border-button>
            </template>
          </organism-tag-input-modal>
        </div>
      </div>
    </section>

    <section class="write">
      <div class="l-container -max-900">
        <div class="content">
          <atoms-section-title-line>執筆</atoms-section-title-line>
          <organism-rect-card-list :posts="profile.writings" />
          <organism-writer-post-input-modal @add="addWrite" class="mt-4">
            <template #ignition>
              <atom-border-button class="add-job-btn">
                <div class="flex justify-center">
                  <atom-icon class="w-4" name="plus" />
                  <span>執筆を追加</span>
                </div>
              </atom-border-button>
            </template>
          </organism-writer-post-input-modal>
        </div>
      </div>
    </section>

    <section class="achievements">
      <div class="l-container -max-900">
        <div class="content">
          <atoms-section-title-line>実績</atoms-section-title-line>
          <organism-rect-card-list :posts="profile.performances" />
          <organism-writer-post-input-modal @add="addAchievements" class="mt-4">
            <template #ignition>
              <atom-border-button class="add-job-btn">
                <div class="flex justify-center">
                  <atom-icon class="w-4" name="plus" />
                  <span>実績を追加</span>
                </div>
              </atom-border-button>
            </template>
          </organism-writer-post-input-modal>
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
import OrganismTagList from "@/components/organism/OrganismTagList.vue";
import OrganismRectCardList from "@/components/organism/OrganismRectCardList.vue";
import MoleculesModal from "@/components/molecules/user/MoleculesModal.vue";
import AtomButton from "@/components/atoms/button/AtomButton.vue";
import AtomTextarea from "@/components/atoms/input/AtomTextarea.vue";
import AtomInputText from "@/components/atoms/input/AtomInputText.vue";
import OrganismProfileInputModal from "@/components/organism/OrganismProfileInputModal.vue";
import OrganismCampanyInputModal from "@/components/organism/OrganismCampanyInputModal.vue";
import OrganismAcademicInputModal from "@/components/organism/OrganismAcademicInputModal.vue";
import OrganismTagInputModal from "@/components/organism/OrganismTagInputModal.vue";
import OrganismWriterPostInputModal from "@/components/organism/OrganismPostInputModal.vue";

export default {
  async asyncData({ $axios, params }) {
    const profile = await $axios.get(`/users/${params.id}`)

    return {
      profile: profile.data,
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
    MoleculesModal,
    AtomButton,
    AtomTextarea,
    AtomInputText,
    OrganismProfileInputModal,
    OrganismCampanyInputModal,
    OrganismAcademicInputModal,
    OrganismTagInputModal,
    OrganismWriterPostInputModal,
  },
  data() {
    return {
      profile: {},
      closeKey: {
        todo: 0,
        career: 0,
        careerTimeLine: 0,
        academic: 0,
        academicTimeLine: 0,
        profile: 0,
      },
    };
  },
  methods: {
    // profile更新
    async updateProfile(value) {
      const params = {
        title: value.title,
        detail: value.textData,
      }
      const res = await this.$axios.patch(`/users/${this.$route.params.id}`, { ...params });
      if (res.status === 200) {
        this.profile = { ...res.data }
      }
    },
    // 学歴更新
    getAcademicInputData(value) {
      this.students[0].academic.push(value);
      this.inputCloseAction("academicTimeLine");
    },
    // 職歴追加
    async addCareerInputData(value) {
      const params = {
        title: value.title,
        start_date: value.start_date,
        end_date: value.end_date,
        detail: value.detail
      }
      console.log('addCareerInputData', params)
      const res = await this.$axios.post(`/users/${this.$route.params.id}/work_histories`, { ...params });
      if (res.status === 200) {
        this.profile = { ...res.data }
      }
      this.inputCloseAction("careerTimeLine");
    },
    // 職歴更新
    async updateCareerInputData(value) {
      const params = {
        id: value.id,
        title: value.title,
        start_date: value.start_date,
        end_date: value.end_date,
        detail: value.detail
      }
      console.log('updateCareerInputData', params)
      const res = await this.$axios.patch(`/users/${this.$route.params.id}/work_histories/${value.id}`, { ...params });
      if (res.status === 200) {
        this.profile = { ...res.data }
      }
    },
    inputCloseAction(closeModalName) {
      switch (closeModalName) {
        case "todo":
          this.closeKey.todo++;
          break;
        case "career":
          this.closeKey.career++;
          break;
        case "careerTimeLine":
          this.closeKey.careerTimeLine++;
          break;
        case "academic":
          this.closeKey.academic++;
          break;
        case "academicTimeLine":
          this.closeKey.academicTimeLine++;
          break;
        case "profile":
          this.closeKey.profile++;
          break;
      }
    },
    // やりたいこと更新
    addTag(newTag) {
      this.students[0].dreamList.push({ name: newTag });
    },
    // 執筆更新
    addWrite(newPost) {
      this.students[0].write.push(newPost);
    },
    // 実績更新
    addAchievements(newPost) {
      this.students[0].achievements.push(newPost);
    },
  },
};
</script>
<style lang="scss" scoped>
.user-profile_inner {
  @include pc {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.slider {
  margin-bottom: 8%;

  @include sp {
    @include noGutter;
  }
  @include pc {
    width: 54%;
  }
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
  @include sp {
    height: 160px;
  }
  @include pc {
    width: 40%;
    margin-bottom: 10%;
  }

  .user-img {
    width: 28%;
  }

  .profile__inner {
    position: relative;
    display: flex;
    justify-content: space-between;
    .user-info {
      @include sp {
        margin-top: 1.5rem;
        margin-left: 1rem;
      }
      &_name {
        @include pc {
          font-size: vw-pc(36);
        }
        @include pcL {
          font-size: 36px;
        }
      }
    }
    .user-img {
      @include sp {
        margin-top: 5rem;
      }
    }
  }
}
</style>
