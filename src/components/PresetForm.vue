<template>
  <section id="new-preset">
    <form action="#" method="POST">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="name" autofocus v-model="preset.name">
      </div>

      <div class="form-group">
        <label for="left">Left</label>
        <input type="number" step="1" name="left" v-model="preset.left">
      </div>

      <div class="form-group">
        <label for="top">Top</label>
        <input type="number" step="1" name="top" v-model="preset.top">
      </div>

      <div class="form-group">
        <label for="width">width</label>
        <input type="number" step="1" name="width" v-model="preset.width">
      </div>

      <div class="form-group">
        <label for="height">height</label>
        <input type="number" step="1" name="height" v-model="preset.height">
      </div>

      <div class="form-group">
        <button type="button" @click="savePreset">Save preset</button>
      </div>
    </form>
  </section>
</template>

<script>
  import { BrowserService } from '../services/BrowserService';
  import { PresetService } from '../services/PresetService.js';

  export default {
    data() {
      return {
        preset: {
          name:   '',
          left:   0,
          top:    0,
          width:  0,
          height: 0
        }
      };
    },
    methods: {
      validatePreset() {
        return this.preset.name.length > 0;
      },
      savePreset() {
        if (this.validatePreset()) {
          PresetService.add(this.preset);
          this.preset.name = '';
        }
      }
    },
    mounted() {
      BrowserService.browser.windows.getCurrent((w) => {
        this.preset.left   = w.left;
        this.preset.top    = w.top;
        this.preset.width  = w.width;
        this.preset.height = w.height;
      });
    }
  }
</script>

<style scoped>
  form {
    display: flex;
    flex-wrap: wrap;
    background-color: #eee;
  }

  .form-group {
    width: 50%;
    padding: 5px;
  }

  .form-group,
  input {
    box-sizing: border-box;
  }

  input {
    width: 100%;
    height: 24px;
  }

  .form-group:first-child,
  .form-group:last-child {
    width: 100%;
  }

  .form-group:last-child {
    text-align: center;
  }

  button {
    height: 24px;
    border: none;
    width: 50%;
    background-color: #499273;
    color: white;
  }

  button:hover {
    background-color: #0D5637;
  }
</style>
