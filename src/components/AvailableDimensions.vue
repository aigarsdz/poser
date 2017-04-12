<template>
  <div id="available-dimensions">
    <span>{{availableWidth}}px</span>
    <div class="times"></div>
    <span>{{availableHeight}}px</span>
  </div>
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
  #available-dimensions {
    padding: 20px 10px;
    font-size: 1rem;
    display: flex;
    justify-content: center;
  }

  .times {
    background: url(/times.svg) center center no-repeat;
    width: 20px;
    height: 20px;
    padding: 0 6px;
  }
</style>
