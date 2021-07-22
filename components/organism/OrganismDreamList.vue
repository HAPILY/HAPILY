<template>
  <div class="dream-list">
    <div class="dream-list__inner">
      <template v-for="dream in dreams" >
        <molecule-dream-list-item
          :key="dream.id"
          :id="dream.id"
          :title="dream.title"
          :money="dream.money"
          :thumbnail="dream.thumbnail_url"
          :user-name="`${dream.first_name} ${dream.last_name}`"
          :user-icon-url="dream.user_icon_url"
        />
      </template>
    </div>
  </div>
</template>

<script>
import MoleculeDreamListItem from "@/components/molecules/user/MoleculeDreamListItem.vue";

export default {
  components: {
    MoleculeDreamListItem
  },
  props: {
    dreams: {
      type: Array,
      default: () => []
    }
  },
};
</script>

<style lang="scss" scoped>

.dream-list__inner {
  display: flex;
  flex-wrap: wrap;
  max-width: $pcMaxWidth;

  @include pc {
    padding-top: 30px;
    margin-left: auto;
    margin-right: auto;
    padding-left: $paddingPc;
    padding-right: $paddingPc;

    > * {
      width: 31%;
      margin-top: 20px;
      margin-bottom: 20px;

      &:not(:nth-child(3n)) {
        margin-right: ((100% - 31% * 3) / 2);
      }
    }
  }
}
</style>