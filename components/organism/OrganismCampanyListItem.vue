<template>
  <div class="company-item">
    <div class="company__inner">
      <div class="campany-header bl-justify-root">
        <img
          class="rounded-full company-icon"
          src="@/assets/img/students/students_img0.jpg"
        />
        <h2 class="c-link text-2xl company-name">株式会社Libry</h2>
      </div>
      <div class="campany-thumbnail"></div>
      <div class="l-container">
        <div class="content">
          <div class="campany-message">
            <h1 class="text-xl font-bold">
              一人ひとりが自分の可能性を 最大限発揮できる社会を創る
            </h1>
          </div>
        </div>
      </div>
      <div class="l-container">
        <div class="content">
          <div class="campany-tags">
            <organism-tag-list
              :tagList="[
                'プログラマー',
                'プロジェクトオーナー',
                'フロントエンジニア',
              ]"
            />
          </div>
        </div>
      </div>
      <div class="l-container">
        <div class="content">
          <div class="campany-contact">
            <atom-tag :color="'red'">声をかける</atom-tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AtomTag from "@/components/atoms/tag/AtomTag.vue";
import OrganismTagList from "@/components/organism/OrganismTagList.vue";
export default {
  components: { AtomTag, OrganismTagList },
};
</script>

<style lang="scss" scope>
.company-icon {
  margin-left: 30px;
  margin-bottom: 15px;
  width: 60px;
  height: 60px;
}
.company-name {
  margin-left: 15px;
  padding-bottom: 10px;
}
.campany-message {
  padding: 15px;

  @include pc {
    padding-left: 0;
    padding-right: 0;
  }
}
.campany-contact {
  margin-top: 10px;
}
.campany-thumbnail {
  padding-top: 56.25%;
  background-image: url("~@/assets/img/students/students_img0.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @include pc {

  }
  @include pcL {
    
  }
}
</style>