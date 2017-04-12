<template>
  <nav>
    <a href="#/presets"
       :class="{ current: activeTab == 'presets'}"
       @click="navigationHandler('presets')">Presets</a>
    <a href="#/presets/new"
       :class="{ current: activeTab == 'presets/new'}"
       @click="navigationHandler('presets/new')">New preset</a>
  </nav>
</template>

<script>
  export default {
    props: {
      activeTab: {
        type: String,
        default: 'presets'
      },
      navigationHandler: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style scoped>
  nav {
    height: 32px;
    display: flex;
    border-bottom: 1px solid #cfcfcf;
    margin-bottom: 20px;
  }

  a {
    outline: none;
    text-decoration: none;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    align-items: center;
    padding: 0 10px;
    height: 32px;
  }

  a.current {
    border-bottom: 4px solid #55AA55;
  }
</style>
