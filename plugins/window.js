import Vue from "vue";
/**
 *  window情報を管理する
 */

Vue.use({
  install(Vue) {
    const $window = Vue.observable({
      width: 0,
      height: 0,
      pageYOffset: 0,
    });

    if (process.isClient) {
      const onScroll = () => {
        $window.pageYOffset = global.pageYOffset;
      };
      const onResize = () => {
        $window.width = document.documentElement.clientWidth;
        $window.height = global.innerHeight;
      };
      global.addEventListener("scroll", onScroll);
      global.addEventListener("resize", onResize);
      // スクロールハンドラとリサイズハンドラを直接呼んで初期値をセット
      onScroll();
      onResize();
    }
    Vue.prototype.$window = $window;
  },
});
