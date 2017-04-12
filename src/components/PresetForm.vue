<template>
  <section id="new-preset">
    <form action="#" method="POST">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="name" v-model="preset.name">
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

      <div class="from-group">
        <button type="button" @click="savePreset">Save preset</button>
      </div>
    </form>
  </section>
</template>

<script>
  import { BrowserService, PresetService } from '../main.js';

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
          PresetService.notifyOfNewPreset(this.preset);
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
