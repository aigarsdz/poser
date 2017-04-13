import Vue from 'vue';
import App from './App.vue';
import AvailableDimensions from './components/AvailableDimensions.vue';
import Navigation from './components/Navigation.vue'
import PresetList from './components/PresetList.vue';
import PresetForm from './components/PresetForm.vue';

Vue.component('poser-available-dimensions', AvailableDimensions);
Vue.component('poser-navigation', Navigation);
Vue.component('poser-preset-list', PresetList);
Vue.component('poser-preset-form', PresetForm);

new Vue({
  el: '#app',
  render: h => h(App)
});
