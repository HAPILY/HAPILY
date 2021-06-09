<template>
  <div class="date-picker">
    <div class="m-3 flex flex-col">
      <label><slot name="begin" /></label>
      <atom-date-picker v-model="cBeginDate" />
    </div>
    <div class="m-3 flex flex-col">
      <label><slot name="end" /></label>
      <atom-date-picker v-model="cEndDate" />
    </div>
  </div>
</template>

<script>
import AtomDatePicker from '../atoms/input/AtomDatePicker'
export default {
  components: { AtomDatePicker },
  props: {
    beginDate: {
      type: String,
      default: ''
    },
    endDate: {
      type: String,
      default: ''
    }
  },

  computed: {
    cBeginDate: {
      get () {
        return this.beginDate
      },
      set (date) {
        this.$emit('update:beginDate', date)
      }
    },
    cEndDate: {
      get () {
        return this.endDate
      },
      set (date) {
        this.$emit('update:endDate', date)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.date-picker {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  height: 20%;
}
</style>x
