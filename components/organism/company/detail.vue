<template>
  <div class="detail">
    <div class="company-info">
      <div class="bl-justify-root info__inner">
        <img
          class="rounded-full company-icon"
          src="@/assets/img/students/students_img0.jpg"
        />
        <atom-button class="contact-btn" :color="'red'">声をかける</atom-button>
      </div>
      <div class="company-sub-info">
        <h1 class="company-name">株式会社ハピリー</h1>
        <div class="bl-justify-root">
          <p class="contact">yamada@mail.jp</p>
          <p class="location">
            <atom-icon name="location" class="location-icon" />神奈川県
          </p>
        </div>
      </div>
      <organism-tag-list
        class="company-tag"
        :tagList="[
          { name: 'tag' },
          { name: 'tag' },
          { name: 'tag' },
          { name: 'tag' },
          { name: 'tag' },
        ]"
      />
      <h1 class="title mt-6">
        <span class="date">2021.01.07</span>
        あなたの夢を応援させてください
      </h1>
      <div class="content">
        テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
      </div>
      <h1 class="title mt-6">企業概要</h1>
    </div>
  </div>
</template>

<script>
import AtomButton from "@/components/atoms/button/AtomButton.vue";
import AtomIcon from "@/components/atoms/icon/AtomIcon.vue";
import OrganismTagList from "@/components/organism/OrganismTagList.vue";
export default {
  components: { AtomButton, AtomIcon, OrganismTagList },
};
</script>

<style lang="scss" scoped>
.company-icon {
  width: 60px;
}
.contact-btn {
  width: 115px;
}
.info__inner {
  justify-content: space-between;
}
.company-info {
  padding: 0 30px;
}

.contact {
  color: map-get($color, blue, default);
}

.company-name {
  font-size: 20px;
  font-weight: 600;
}
.company-sub-info {
  margin-top: 15px;
  padding-left: 30px;
}
.thumbnail {
  width: 75px;
}

.company-tag {
  margin-top: 15px;
}

.location {
  margin-left: 5px;
  &-icon {
    width: 15px;
    display: inline-block;
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
    color: #ddd;
    text-align: right;
    font-size: 0.8rem;
    display: block;
    margin-bottom: ($unit * 2);
    line-height: 1.1;
    font-weight: normal;
  }
}
</style>