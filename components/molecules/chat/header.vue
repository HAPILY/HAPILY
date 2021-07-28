<template>
  <div class="chat-header">
    <div class="chat-header__inner">
      <div class="profile-img">
        <img class="rounded-full thumbnail" :src="profile.icon_url" />
      </div>
      <div class="profile-info">
        <h1 v-if="type === 'company'" class="user-name">
          {{ profile.first_name }} {{ profile.last_name }}
        </h1>
        <h1 v-else-if="type === 'user'" class="user-name">
          {{ profile.name }}
        </h1>
        <!-- <div class="sub-info">
          <p class="contact">yamada@mail.jp</p>
          <p class="location">
            <atom-icon name="location" class="location-icon" />神奈川県
          </p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import AtomIcon from "@/components/atoms/icon/AtomIcon.vue";

export default {
  name: "ChatHeader",
  components: {
    AtomIcon,
  },
  props: {
    profile: {
      type: Object,
      default: () => ({}),
    },
    type: {
      type: String,
      default: "user",
    },
  },
};
</script>

<style lang="scss" scoped>
.chat {
  &-header {
    background: map-get($color, yellow, default);
    height: 140px;
    width: 100%;
    padding-top: 53px;
    padding-left: 25px;
    position: fixed;
    left: 0;
    top: 0;
    &__inner {
      display: flex;
      width: 70%;
      .profile {
        &-img {
          margin-right: 20px;
        }
        &-info {
          padding-top: 10px;
        }
      }
    }
  }
}

.contact {
  color: map-get($color, blue, default);
}

.thumbnail {
  width: 75px;
}

.location {
  margin-left: 5px;
  &-icon {
    width: 15px;
    display: inline-block;
  }
}

.profile-info {
  float: left;
}
</style>
