<template>
  <div class="career">
    <molecules-progress-box :items="career">
      <template slot-scope="{ item }">
        <h1 class="career-title font-black text-xl">
          {{ item.title }}
        </h1>
        <dt class="font-black text-base">{{ item.subTitle }}</dt>
        <dd class="text-sm career-date">
          {{ item.startDate }} -
          <span v-if="item.endDate">{{ item.endDate }}</span>
          <atom-tag v-else>現在</atom-tag>
        </dd>
        <ul>
          <li class="job-list" v-for="(j, index) in item.job" :key="index">
            <dl>
              <dt>{{ j.name }}</dt>
              <dd>{{ j.details }}</dd>
            </dl>
          </li>
        </ul>
      </template>
    </molecules-progress-box>
  </div>
</template>

<script>
import MoleculesProgressBox from "@/components/molecules/user/MoleculesProgressBox.vue";
import AtomTag from "@/components/atoms/tag/AtomTag.vue";
export default {
  props: {
    career: {
      type: Array,
    },
  },
  components: {
    MoleculesProgressBox,
    AtomTag,
  },
};
</script>

<style lang="scss" scoped>
.career {
  .career-title {
    vertical-align: 20px;
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