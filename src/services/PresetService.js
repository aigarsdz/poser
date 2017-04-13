import Vue from 'vue';
import { BrowserService } from './BrowserService';

export const PresetService = new Vue({
  data: {
    presets: []
  },
  methods: {
    add(preset) {
      this.presets.push({
        name:   preset.name,
        left:   preset.left,
        top:    preset.top,
        width:  preset.width,
        height: preset.height
      });

      BrowserService.browser.storage.local.set({ presets: JSON.stringify(this.presets) });
      this.$emit('presets.added', this.presets);
    },
    delete(preset) {
      const index = this.presets.findIndex((p) => p.name == preset.name);

      if (index > -1) {
        this.presets.splice(index, 1);
        BrowserService.browser.storage.local.set({ presets: JSON.stringify(this.presets) });
        this.$emit('presets.deleted', this.presets);
      }
    }
  },
  created() {
    BrowserService.browser.storage.local.get('presets', function(data) {
      if (Object.keys(data).length > 0) {
        this.presets = JSON.parse(data.presets);

        this.$emit('presets.loaded', this.presets);
      }
    }.bind(this));
  }
});
