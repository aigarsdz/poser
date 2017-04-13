import Vue from 'vue';

export const BrowserService = new Vue({
  data: {
    browser: null
  },
  created() {
    this.browser = (function() {
      return window.msBrowser || window.browser || window.chrome;
    })();
  }
});
