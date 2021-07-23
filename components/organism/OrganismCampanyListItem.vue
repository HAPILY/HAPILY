<template>
  <div class="company-item">
    <div class="company__inner">
      <div class="campany-header bl-justify-root">
        <img class="rounded-full company-icon" :src="iconUrl" />
        <h2 class="c-link text-2xl company-name">{{ name }}</h2>
      </div>
      <div
        class="campany-thumbnail"
        :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
      ></div>
      <div class="l-container">
        <div class="content">
          <div class="campany-message">
            <h1 class="text-xl font-bold">
              {{ vision }}
            </h1>
          </div>
        </div>
      </div>
      <div class="l-container">
        <div class="content">
          <div class="campany-tags">
            <organism-tag-list :tagList="companyTags" />
            <div v-if="otherTagsNum > 0" class="company-tags-other">
              他{{ otherTagsNum }}つ
            </div>
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
import { computed } from "@vue/composition-api";
export default {
  components: { AtomTag, OrganismTagList },
  props: {
    name: {
      type: String,
      default: "",
    },
    vision: {
      type: String,
      default: "",
    },
    thumbnail: {
      type: String,
      default: "",
    },
    iconUrl: {
      type: String,
      default: "",
    },
    tags: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const companyTags = computed(() => {
      return props.tags.slice(0, 5);
    });
    const otherTagsNum = computed(() => {
      return props.tags.length - 5;
    });

    return {
      companyTags,
      otherTagsNum,
    };
  },
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
  font-weight: bold;
  margin-left: 15px;
  padding-bottom: 10px;
  text-decoration: none;
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

  > .tag {
    min-width: 160px;
    padding: 8px 0;
  }
}
.campany-thumbnail {
  padding-top: 56.25%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @include pc {
  }
  @include pcL {
  }
}
.company-tags-other {
  font-size: 12px;
  font-weight: bold;
  text-align: right;
}
</style>
