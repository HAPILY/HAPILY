<template>
  <transition name="modal">
    <portal to="modal">
      <div v-if="isActive" id="overlay" class="is-active">
        <div class="modal" :class="[{ 'is-full-screen': fullScreen }]">
          <div class="modal-header bl-justify-root">
            <atom-icon
              name="cancel"
              class="modal-header-cancel-icon"
              @click="beforeModalInvalid"
            />
            <h6 class="header-title">
              <slot name="header" />
            </h6>
          </div>
          <div class="content">
            <slot name="content"></slot>
          </div>
          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </portal>
  </transition>
</template>

<script>
import AtomIcon from '../../atoms/icon/AtomIcon.vue'

export default {
  components: { AtomIcon },
  model: {
    prop: 'active',
    event: 'update'
  },
  props: {
    fullScreen: {
      type: Boolean
    },
    active: {
      type: Boolean
    }
  },
  data () {
    return {
      savePageYOffset: 0,
      isActive: false
    }
  },
  watch: {
    active (newValue) {
      if (newValue) {
        this.beforeModalActive()
      } else {
        this.beforeModalInvalid()
      }
    }
  },
  beforeDestroy () {
    this.beforeModalInvalid()
  },
  methods: {
    beforeModalActive () {
      this.savePageYOffset = parseInt(window.pageYOffset || '0') * -1
      document.body.style.top = `-${window.pageYOffset}px`
      document.body.style.position = 'fixed'
      document.body.style.width = '100vw' // モーダル発火時、bodyの幅が縮むため、応急処置
      this.isActive = true
    },
    beforeModalInvalid () {
      document.body.style.position = ''
      document.body.style.top = ''
      window.scrollTo(0, parseInt(this.savePageYOffset || '0') * -1)
      this.key++
      this.isActive = false
      this.$emit('update', false)
    }
  }
}
</script>

<style lang="scss" scoped>
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  background: rgba(45, 45, 45, 0.5);
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.modal-header {
  text-align: center;
  padding: 10px;
  background: linear-gradient(to top, #fec22e 0%, #ffe371 80%);
}

.header-title {
  font-size: 1.25rem;
  padding: 10px;
}
.modal {
  z-index: 1001;
  width: 640px;
  background-color: white;
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.is-full-screen {
  height: 100%;
}

.modal-header-cancel-icon {
  margin: 0;
  margin-left: 5px;
  margin-top: 5px;
  width: 1.25rem;
  padding: 3px;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
