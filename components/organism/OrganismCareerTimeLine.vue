<template>
  <div class="career">
    <molecules-progress-box :items="career">
      <template slot-scope="{ item }">
        <div class="flex" style="padding: 0">
          <h1 class="career-title font-black text-xl">
            {{ item.title }}
          </h1>
          <organism-campany-input-modal
            class=""
            :status="item"
            headerTitle="職歴の編集"
            @save="updateCareerInputData($event, item.id)"
          >
            <template #ignition>
              <div style="margin-top: 6px; margin-left: 10px; color: blue">
                編集
              </div>
            </template>
          </organism-campany-input-modal>
        </div>
        <dt class="font-black text-base">{{ item.detail[0].position }}</dt>
        <dd class="text-sm career-date">
          {{ item.start_date }} -
          <span v-if="item.end_date !== '在籍中'">{{ item.end_date }}</span>
          <atom-tag v-else>在籍中</atom-tag>
        </dd>
        <ul>
          <li class="job-list" v-for="(j, index) in item.detail" :key="index">
            <dl>
              <dt>{{ j.position }}</dt>
              <dd>{{ j.job_detail }}</dd>
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
      default: () => []
    },
  },
  components: {
    MoleculesProgressBox,
    AtomTag,
    OrganismCampanyInputModal,
    AtomIcon,
  },
  setup(_, { emit }) {
    const updateCareerInputData = (value) => {
      emit('update', value);
    };

    return {
      updateCareerInputData,
    }
  }
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