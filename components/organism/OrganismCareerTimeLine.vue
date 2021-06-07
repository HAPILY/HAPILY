<template>
  <div class="career">
    <molecules-progress-box :items="career">
      <template slot-scope="{ item }">
        <div class="flex" style="padding: 0">
          <h1 class="career-title font-black text-xl">
            {{ item.orgName }}
          </h1>
          <organism-campany-input-modal
            class=""
            :status="item"
            headerTitle="職歴の編集"
          >
            <template #ignition>
              <div style="margin-top: 6px; margin-left: 10px; color: blue">
                編集
              </div>
            </template>
          </organism-campany-input-modal>
        </div>
        <dt class="font-black text-base">{{ item.jobList[0].jobName }}</dt>
        <dd class="text-sm career-date">
          {{ item.beginDate }} -
          <span v-if="item.endDate">{{ item.endDate }}</span>
          <atom-tag v-else>現在</atom-tag>
        </dd>
        <ul>
          <li class="job-list" v-for="(j, index) in item.jobList" :key="index">
            <dl>
              <dt>{{ j.jobName }}</dt>
              <dd>{{ j.jobDetail }}</dd>
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
import OrganismCampanyInputModal from "./OrganismCampanyInputModal.vue";
import AtomIcon from "../atoms/icon/AtomIcon.vue";
export default {
  props: {
    career: {
      type: Array,
    },
  },
  components: {
    MoleculesProgressBox,
    AtomTag,
    OrganismCampanyInputModal,
    AtomIcon,
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