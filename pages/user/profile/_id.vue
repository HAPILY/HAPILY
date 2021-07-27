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
          <organism-career-time-line :career="profile.work_history" />
        </div>
      </div>
    </section>

    <section class="academic">
      <div class="l-container -max-900">
        <div class="content">
          <atoms-section-title-line>学歴</atoms-section-title-line>
          <organism-academic-time-line :academic="profile.school" />
        </div>
      </div>
    </section>

    <section class="dream-list">
      <div class="l-container -max-900">
        <div class="content">
          <atoms-section-title-line>やりたいこと</atoms-section-title-line>
          <organism-tag-list :tagList="profile.want_tags" />
        </div>
      </div>
    </section>

    <section class="write">
      <div class="l-container -max-900">
        <div class="content">
          <atoms-section-title-line>執筆</atoms-section-title-line>
          <organism-rect-card-list :posts="profile.writings" />
        </div>
      </div>
    </section>

    <section class="achievements">
      <div class="l-container -max-900">
        <div class="content">
          <atoms-section-title-line>実績</atoms-section-title-line>
          <organism-rect-card-list :posts="profile.performances" />
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

export default {
  async asyncData({ $axios, params }) {
    const profile = await $axios.get(`/v1/users/${params.id}`);

    return {
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
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/component/user/_profile.scss";
</style>
