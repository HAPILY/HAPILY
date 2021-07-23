<template>
  <div class="chat-header">
    <div class="chat-header__inner">
      <div class="profile-img">
        <img class="rounded-full thumbnail" :src="iconUrl" />
      </div>
      <div class="profile-info">
        <h1 class="user-name">{{ name }}</h1>
        <div class="sub-info">
          <p class="contact">yamada@mail.jp</p>
          <p class="location">
            <atom-icon name="location" class="location-icon" />神奈川県
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    iconUrl: {
      type: String,
      default: "",
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
      // width: 70%;
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

.thumbnail {
  width: 75px;
  height: 75px;
}

.contact,
.location {
  font-size: 10px;
  font-weight: 300;
}

.contact {
  color: map-get($color, blue, default);
}

.location {
  margin-left: 5px;
  &-icon {
    width: 15px;
    display: inline-block;
  }
}

.photograph-icon,
.arrowright-icon {
  width: 25px;
  height: 30px;
  margin-top: 23px;
  margin-left: 10px;
}

.sub-info {
  display: flex;
}

.profile-info {
  float: left;
}

.user-name {
  font-size: 20px;
  font-weight: 600;
}
</style>
