<template>
  <div class="user-profile">
    <section class="images">
      <UserProfile :user-detail="profile.user_detail" :students="students" />
    </section>

    <section class="body">
      <div class="l-container -max-900">
        <h1 class="title">
          <span class="date sp:text-gray-400 pc:text-black">{{
            profile.user_detail.created_at
          }}</span>
          {{ profile.user_detail.title }}
        </h1>
        <organism-profile-input-modal
          class="w-12 bl-margin-left"
          :profileTextData="profile.user_detail.detail"
          :profileTitle="profile.user_detail.title"
          :is-mypage="true"
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
            @save="addAcademicInputData"
            :key="`academic-${closeKey.academic}`"
            ><template #ignition>
              <atom-button class="w-full">追加</atom-button>
            </template></organism-academic-input-modal
          >
          <organism-academic-time-line
            :academic="profile.school"
            @update="updateAcademicInputData"
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
import UserProfile from "@/components/organism/UserProfile.vue";
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
  name: "mypage",
  async asyncData({ $axios }) {
    const id = window.localStorage.getItem("id");
    const profile = await $axios.get(`/v1/users/${id}`);

    return {
      id,
      profile: profile.data,
      students: require(`~/assets/json/students.json`),
    };
  },
  components: {
    UserProfile,
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
      id: undefined,
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
      };
      const res = await this.$axios.patch(`/v1/users/${this.id}`, {
        ...params,
      });
      if (res.status === 200) {
        this.profile = { ...res.data };
      }
    },
    // 職歴追加
    async addCareerInputData(value) {
      const params = {
        title: value.title,
        start_date: value.start_date,
        end_date: value.end_date,
        detail: value.detail,
      };
      console.log("addCareerInputData", params);
      const res = await this.$axios.post(
        `/v1/users/${this.id}/work_histories`,
        {
          ...params,
        }
      );
      if (res.status === 200) {
        this.profile = { ...res.data };
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
        detail: value.detail,
      };
      console.log("updateCareerInputData", params);
      const res = await this.$axios.patch(
        `/v1/users/${this.id}/work_histories/${value.id}`,
        { ...params }
      );
      if (res.status === 200) {
        this.profile = { ...res.data };
      }
    },
    // 学歴追加
    async addAcademicInputData(value) {
      const params = {
        title: value.title,
        start_date: value.start_date,
        end_date: value.end_date,
        class_name: value.class_name,
      };
      console.log("addAcademicInputData", params);
      const res = await this.$axios.post(
        `/v1/users/${this.id}/ed_backgrounds`,
        {
          ...params,
        }
      );
      if (res.status === 200) {
        this.profile = { ...res.data };
      }
      this.inputCloseAction("academicTimeLine");
    },
    // 学歴更新
    async updateAcademicInputData(value) {
      const params = {
        id: value.id,
        title: value.title,
        start_date: value.start_date,
        end_date: value.end_date,
        class_name: value.class_name,
      };
      console.log("updateAcademicInputData", params);
      const res = await this.$axios.patch(
        `/v1/users/${this.id}/ed_backgrounds/${value.id}`,
        { ...params }
      );
      if (res.status === 200) {
        this.profile = { ...res.data };
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
    async addTag(value) {
      const params = {
        name: value,
      };
      console.log("addTag", params);
      const res = await this.$axios.post(`/v1/users/${this.id}/want_tags`, {
        ...params,
      });
      if (res.status === 200) {
        this.profile = { ...res.data };
      }
    },
    // 執筆追加
    async addWrite(newPost) {
      const params = {
        title: newPost.title,
        thumbnail: newPost.thumbnail,
        redirect_url: newPost.redirect_url,
      };
      console.log("addWrite", params);
      const res = await this.$axios.post(`/v1/users/${this.id}/writings`, {
        ...params,
      });
      if (res.status === 200) {
        this.profile = { ...res.data };
      }
    },
    // 実績追加
    async addAchievements(newPost) {
      const params = {
        title: newPost.title,
        thumbnail: newPost.thumbnail,
        redirect_url: newPost.redirect_url,
      };
      console.log("addAchievements", params);
      const res = await this.$axios.post(`/v1/users/${this.id}/performances`, {
        ...params,
      });
      if (res.status === 200) {
        this.profile = { ...res.data };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/component/user/_profile.scss";
</style>
