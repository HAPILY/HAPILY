<template>
  <div class="academic">
    <molecules-progress-box :items="academic">
      <template slot-scope="{ item }">
        <div class="flex" style="padding: 0">
          <h1 class="academic-title font-black text-xl">
            {{ item.orgName }}
          </h1>
          <organism-academic-input-modal
            :status="item"
            headerTitle="学歴の編集"
          >
            <template #ignition>
              <div style="margin-top: 6px; margin-left: 10px; color: blue">
                編集
              </div>
            </template>
          </organism-academic-input-modal>
        </div>

        <template v-for="(_item, index) in item.classList">
          <div :key="index" style="padding: 0" class="mb-1">
            <dt class="font-black text-base">{{ _item.className }}</dt>
            <p>{{ _item.classDetail }}</p>
          </div>
        </template>
        <dd class="text-sm career-date">
          <span v-if="item.endDate">{{ item.endDate }} 卒業</span>
          <atom-tag v-else>在籍中</atom-tag>
        </dd>
      </template>
    </molecules-progress-box>
  </div>
</template>

<script>
import MoleculesProgressBox from "@/components/molecules/user/MoleculesProgressBox.vue";
import AtomTag from "@/components/atoms/tag/AtomTag.vue";
import OrganismAcademicInputModal from "./OrganismAcademicInputModal.vue";
export default {
  props: {
    academic: {
      type: Array,
    },
  },
  components: {
    MoleculesProgressBox,
    AtomTag,
    OrganismAcademicInputModal,
  },
};
</script>

<style>
</style>
    OrganismAcademicInputModal