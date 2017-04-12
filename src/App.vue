<template>
  <main>
    <poser-available-dimensions></poser-available-dimensions>
    <poser-navigation :activeTab="activeTab" :navigationHandler="navigateTo"></poser-navigation>
    <poser-preset-list v-show="activeTab == 'presets'"></poser-preset-list>
    <poser-preset-form v-show="activeTab == 'presets/new'"></poser-preset-form>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        activeTab: 'presets'
      };
    },
    methods: {
      navigateTo(tab) {
        this.activeTab = tab;
      }
    }
  }
</script>

<style>
  main {
    width: 200px;
  }
</style>
