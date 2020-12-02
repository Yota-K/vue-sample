import Vue from 'vue';
import App from './App.vue';

// MEMO: Vue起動時のプロダクションのヒントの表示の設定
// false・・・プロダクションのヒントが非表示になる。
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
