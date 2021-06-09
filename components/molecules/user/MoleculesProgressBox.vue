<template>
  <ul :id="EId" class="timeline">
    <li v-for="(item, index) in items" :key="index" class="timeline-point">
      <div>
        <slot :item="item"></slot>
      </div>
      <span class="border-line"></span>
    </li>
  </ul>
</template>

<script>
const marginBottom = 30
const tileLineCalc = (EId) => {
  document.getElementById(EId).children.forEach((element, i, a) => {
    if (i === a.length - 1) { return }
    element.lastElementChild.style.height = `${
      element.offsetHeight + marginBottom
    }px`
  })
}

export default {
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      EId: `#${Math.random().toString(32).substring(2)}`
    }
  },
  mounted () {
    tileLineCalc(this.EId)
  }
}
</script>

<style lang="scss" scoped>
.timeline {
  max-width: 400px;
  width: 100%;
}

.timeline-point {
  margin-bottom: 30px;
}

.timeline .timeline-point {
  position: relative;
  list-style: none;
}

.timeline div {
  padding-left: 55px;
}

.border-line {
  position: absolute;
  left: 1.1em;
  top: 0;
  width: 3px;
  height: 0;
  background: #ccc;
}

.timeline .timeline-point:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 35px;
  height: 35px;
  background: gray;
  background-image: url("~static/icon/graduation.png");
  background-position: center;
  background-size: 15px 15px;
  background-repeat: no-repeat;
  border-radius: 50%;
}
</style>
