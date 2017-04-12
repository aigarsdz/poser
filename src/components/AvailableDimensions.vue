<template>
  <ul id="available-dimensions">
    <li>
      <span>Available width:</span>
      <span>{{availableWidth}}px</span>
    </li>
    <li>
      <span>Available height:</span>
      <span>{{availableHeight}}px</span>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        availableWidth: 0,
        availableHeight: 0
      };
    },
    mounted() {
      this.availableHeight = window.screen.availHeight;
      this.availableWidth  = window.screen.availWidth;
    }
  };
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0 0 20px 0;
    padding: 0;
  }

  li {
    margin-botton: 5px;
  }

  li > span:first-child {
    font-weight: bold;
  }
</style>
