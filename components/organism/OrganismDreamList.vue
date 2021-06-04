<template>
  <div class="dream-list">
    <div class="dream-list__inner">
      <molecule-dream-list-item />
      <molecule-dream-list-item />
      <molecule-dream-list-item />
      <molecule-dream-list-item />
      <molecule-dream-list-item />
    </div>
  </div>
</template>

<script>
import MoleculeDreamListItem from "../molecules/user/MoleculeDreamListItem.vue";
export default {
  components: { MoleculeDreamListItem },
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