<template>
  <div class="global-search-menu">
    <div class="tab-wrap">
      <ul class="tab container l-container">
        <li>
          <button
            class="tab-btn tracking-tighter"
            :class="{ '-active': tab === 0 }"
            @click.prevent="tab = 0"
          >
            やりたいことを探す
          </button>
        </li>
        <li>
          <button
            class="tab-btn"
            :class="{ '-active': tab === 1 }"
            @click.prevent="tab = 1"
          >
            企業を探す
          </button>
        </li>
      </ul>
    </div>
    <!-- やりたいことを探す -->
    <div v-if="tab === 0" class="container l-container">
      <ValidationObserver>
        <ul class="form-list">
          <li>
            <GlobalMenuInput
              v-model="dream.keyword"
              icon="search"
              placeholder="キーワードを入力"
              class="rounded-shadow"
            />
          </li>
          <li>
            <div class="row">
              <div class="col">
                <validation-provider
                  v-slot="{ errors }"
                  name="金額"
                  rules="numeric"
                >
                  <GlobalMenuInput
                    v-model="dream.min"
                    icon="yen"
                    placeholder="最小金額"
                    type="number"
                    class="rounded-shadow"
                  />
                  <div class="validate">{{ errors[0] }}</div>
                </validation-provider>
              </div>
              <span class="text">〜</span>
              <div class="col">
                <validation-provider
                  v-slot="{ errors }"
                  name="金額"
                  rules="numeric"
                >
                  <GlobalMenuInput
                    v-model="dream.max"
                    icon="yen"
                    placeholder="最大金額"
                    type="number"
                    class="rounded-shadow"
                  />
                  <div class="validate">{{ errors[0] }}</div>
                </validation-provider>
              </div>
            </div>
          </li>
          <li>
            <GlobalMenuInputTags
              @tags="dream.tags = $event"
              class="rounded-shadow"
            />
          </li>
        </ul>
        <button type="submit" class="search-btn" @click="searchDream">
          検索
        </button>
      </ValidationObserver>
    </div>
    <!-- 企業を探す -->
    <div v-if="tab === 1" class="container l-container">
      <ValidationObserver>
        <ul class="form-list">
          <li>
            <GlobalMenuInput
              v-model="company.keyword"
              icon="search"
              placeholder="企業名を入力"
              class="rounded-shadow"
            />
          </li>
          <li>
            <GlobalMenuInputTags
              @tags="company.tags = $event"
              class="rounded-shadow"
            />
          </li>
        </ul>
        <button type="submit" class="search-btn" @click="searchCompany">
          検索
        </button>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      dream: {
        keyword: "",
        min: "",
        max: "",
        tags: [],
      },
      company: {
        keyword: "",
        tags: [],
      },
    };
  },
  methods: {
    getParams(value) {
      const params = { ...value };
      Object.keys(params).forEach((key) => {
        if (!params[key]) {
          delete params[key];
        }
      });

      return params;
    },
    searchDream() {
      const keyword = this.dream.keyword;
      const minPrice = this.dream.min;
      const maxPrice = this.dream.max;
      const tags = this.dream.tags;
      // 全て未入力なら何もしない
      if (!keyword && !minPrice && !maxPrice && !tags.length) {
        return;
      }

      const params = this.getParams(this.dream);

      this.dream = {
        keyword: "",
        min: "",
        max: "",
        tags: [],
      };

      this.$router.push({
        path: "dream-list",
        query: params,
      });
    },
    searchCompany() {
      const keyword = this.company.keyword;
      const tags = this.company.tags;
      // 全て未入力なら何もしない
      if (!keyword && !tags.length) {
        return;
      }

      const params = this.getParams(this.company);

      this.dream = { keyword: "", tags: [] };

      this.$router.push({
        path: "company/list",
        query: params,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.global-search-menu {
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  .container {
    max-width: 900px;
  }
}
.tab {
  display: flex;
  align-items: flex-end;
  height: 48px;
  @include pc {
    height: 64px;
  }
  &-wrap {
    background-color: rgba(#fff, 0.9);
    border-bottom: 1px solid #4676cb;
  }
  > li {
    width: 54%;
    &:first-child {
      margin-right: -4%;
      .tab-btn {
        &:not(.-active) {
          padding-right: 14%;
        }
      }
    }
    &:last-child {
      margin-left: -4%;
      .tab-btn {
        &:not(.-active) {
          padding-left: 14%;
        }
      }
    }
  }
  &-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 32px;
    appearance: none;
    background-color: #fff;
    font-size: 12px;
    color: map-get($color, blue, default);
    box-shadow: 3px 1px 0 -1px #4676cb;
    border-radius: 20px 20px 0 0;
    outline: transparent;
    -webkit-tap-highlight-color: transparent;
    transition: 0.2s;
    position: relative;
    z-index: 0;
    cursor: pointer;
    font-weight: 500;
    @include pc {
      height: 40px;
      font-size: 15px;
    }
    &.-active {
      height: 40px;
      font-size: 14px;
      background-color: map-get($color, blue, default);
      color: #fff;
      z-index: 1;
      @include pc {
        height: 52px;
        font-size: 16px;
      }
    }
  }
}
.form-list {
  padding-top: 12px;
  padding-bottom: 12px;
  @include pc {
    padding-top: 24px;
    padding-bottom: 24px;
  }
  > li {
    padding-top: 8px;
    padding-bottom: 12px;
    position: relative;
    @include pc {
      padding-top: 12px;
      padding-bottom: 16px;
    }
    .row {
      display: flex;
      align-items: center;
      > .col {
        flex-grow: 1;
      }
      > .text {
        color: #fff;
        font-weight: bold;
        margin-left: 0.5em;
        margin-right: 0.5em;
      }
    }
    .validate {
      color: #fff;
      font-size: 11px;
      position: absolute;
      left: 0;
    }
  }
}
.rounded-shadow {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 3px 4px 0 0 #4676cb;
}
.search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  border: none;
  outline: transparent;
  width: 100%;
  max-width: 400px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffdb4a;
  border-radius: 20px;
  box-shadow: 3px 4px 0 0 #c6a933;
  font-size: 18px;
  font-weight: bold;
  color: #1e3a6c;
  @include pc {
    height: 56px;
    font-size: 20px;
  }
  &:hover {
    box-shadow: 3px 2px 0 0 #c6a933 inset, 3px 4px 0 0 #ffdb4a;
  }
}
</style>
