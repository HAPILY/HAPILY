<template>
  <div class="user-profile">
    <section class="images">
      <div class="user-profile_inner l-container">
        <div class="profile">
          <div class="profile__inner">
            <div class="user-info">
              <h1 class="user-info_name font-extrabold text-white">
                <span class="sp:block pc:inline-block pc:mr-1">Taichiro</span>
                <span class="sp:block pc:inline-block">Hasegawa</span>
              </h1>
              <p class="mt-1 text-white text-base">
                東京大学 法学部
              </p>
            </div>
            <!-- <img
              class="rounded-full user-img"
              src="@/assets/img/students/students_img0.jpg"
            /> -->
          </div>
        </div>
        <div class="slider">
          <MoleculeUserSliderProfile :items="students" />
        </div>
      </div>
    </section>

    <section class="body">
      <div class="l-container -max-900">
        <h1 class="title">
          <span class="date sp:text-gray-400 pc:text-black">2021.01.07</span>
          {{ saveProfileData.title }}
        </h1>
        <organism-profile-input-modal
          :key="closeKey.profile"
          class="w-12 bl-margin-left"
          :profile-text-data="saveProfileData.textData"
          :profile-title="saveProfileData.title"
          @update:profileTextData="getProfileTextData"
          @update:profileTitle="getProfileTitle"
          @close="inputCloseAction('profile')"
        />
        <p class="name">
          @usernameusername
        </p>
        <div class="content">
          <p>
            {{ saveProfileData.textData }}
          </p>
        </div>
      </div>
    </section>

    <section class="career">
      <div class="l-container -max-900">
        <div class="content">
          <atoms-section-title-line>職歴</atoms-section-title-line>
          <organism-campany-input-modal
            :key="`career-${closeKey.career}`"
            class="w-12 bl-margin-left"
            @close="inputCloseAction('career')"
            @save="getCareerInputData"
          >
            <template #ignition>
              <atom-button class="w-full">
                追加
              </atom-button>
            </template>
          </organism-campany-input-modal>
          <organism-career-time-line
            :key="`careerTimeLine-${closeKey.careerTimeLine}`"
            :career="students[0].career"
          />
        </div>
      </div>
    </section>

    <section class="academic">
      <div class="l-container -max-900">
        <div class="content">
          <atoms-section-title-line>学歴</atoms-section-title-line>
          <organism-academic-input-modal
            :key="`academic-${closeKey.academic}`"
            class="w-12 bl-margin-left"
            @close="inputCloseAction('academic')"
            @save="getAcademicInputData"
          >
            <template #ignition>
              <atom-button class="w-full">
                追加
              </atom-button>
            </template>
          </organism-academic-input-modal>
          <organism-academic-time-line
            :key="`academicTimeLine-${closeKey.academicTimeLine}`"
            :academic="students[0].academic"
          />
        </div>
      </div>
    </section>

    <section class="dream-list">
      <div class="l-container -max-900">
        <div class="content">
          <atoms-section-title-line>やりたいこと</atoms-section-title-line>
          <organism-tag-list :tag-list="students[0].dreamList" />
          <organism-tag-input-modal
            :key="closeKey.todo"
            class="mt-4"
            @add="addTag"
            @close="inputCloseAction('todo')"
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
          <organism-rect-card-list :posts="students[0].write" />
          <organism-writer-post-input-modal class="mt-4" @add="addWrite">
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
          <organism-rect-card-list :posts="students[0].achievements" />
          <organism-writer-post-input-modal class="mt-4" @add="addAchievements">
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
import OrganismCareerTimeLine from '@/components/organism/OrganismCareerTimeLine.vue'
import OrganismAcademicTimeLine from '@/components/organism/OrganismAcademicTimeLine.vue'
import AtomsSectionTitleLine from '@/components/atoms/line/AtomsSectionTitleLine.vue'
import OrganismTagList from '../../components/organism/OrganismTagList.vue'
import OrganismRectCardList from '../../components/organism/OrganismRectCardList.vue'
import AtomButton from '../../components/atoms/button/AtomButton.vue'
import OrganismProfileInputModal from '../../components/organism/OrganismProfileInputModal.vue'
import OrganismCampanyInputModal from '../../components/organism/OrganismCampanyInputModal.vue'
import OrganismAcademicInputModal from '../../components/organism/OrganismAcademicInputModal.vue'
import OrganismTagInputModal from '../../components/organism/OrganismTagInputModal.vue'
import OrganismWriterPostInputModal from '../../components/organism/OrganismPostInputModal.vue'

export default {
  components: {
    OrganismCareerTimeLine,
    OrganismAcademicTimeLine,
    AtomsSectionTitleLine,
    OrganismTagList,
    OrganismRectCardList,
    AtomButton,
    OrganismProfileInputModal,
    OrganismCampanyInputModal,
    OrganismAcademicInputModal,
    OrganismTagInputModal,
    OrganismWriterPostInputModal
  },
  asyncData () {
    const saveProfileData = {
      title: '【諦めたくない！】コロナで海外留学打ち切り…十年越しの夢の続きを',
      textData: 'testtesttesttesttesttesttesttesttesttesttesttest'
    }
    return {
      students: require('~/assets/json/students.json'),
      saveProfileData
    }
  },
  data () {
    return {
      closeKey: {
        todo: 0,
        career: 0,
        careerTimeLine: 0,
        academic: 0,
        academicTimeLine: 0,
        profile: 0
      }
    }
  },
  watch: {},
  beforeMount () {},
  methods: {
    getProfileTextData (value) {
      this.saveProfileData.textData = value
    },
    getProfileTitle (value) {
      this.saveProfileData.title = value
    },
    getAcademicInputData (value) {
      this.students[0].academic.push(value)
      this.inputCloseAction('academicTimeLine')
    },
    getCareerInputData (value) {
      this.students[0].career.push(value)
      this.inputCloseAction('careerTimeLine')
    },
    inputCloseAction (closeModalName) {
      switch (closeModalName) {
        case 'todo':
          this.closeKey.todo++
          break
        case 'career':
          this.closeKey.career++
          break
        case 'careerTimeLine':
          this.closeKey.careerTimeLine++
          break
        case 'academic':
          this.closeKey.academic++
          break
        case 'academicTimeLine':
          this.closeKey.academicTimeLine++
          break
        case 'profile':
          this.closeKey.profile++
          break
      }
    },
    addTag (newTag) {
      this.students[0].dreamList.push({ name: newTag })
    },
    addWrite (newPost) {
      this.students[0].write.push(newPost)
    },
    addAchievements (newPost) {
      this.students[0].achievements.push(newPost)
    }
  }
}
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
    height: 150px;
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
        margin-top: 6rem;
      }
    }
  }
}
</style>
