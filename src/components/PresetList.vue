<template>
  <section id="presets">
    <div class="preset" v-for="preset in presets">
      <div>{{preset.name}}</div>
      <div class="apply" @click="applyPreset(preset)"></div>
      <div class="delete" @click="deletePreset(preset)"></div>
    </div>

    <p v-if="presets.length == 0">No presets</p>
  </section>
</template>

<script>
  import { BrowserService, PresetService } from '../main.js';

  export default {
    data() {
      return {
        presets: []
      };
    },
    methods: {
      applyPreset(preset) {
        window.browser.windows.getCurrent(function(w) {
          window.browser.windows.update(w.id, {
            left:   preset.left,
            top:    preset.top,
            height: preset.height,
            width:  preset.width
          });
        });

        window.close();
      },
      deletePreset(preset) {
        const index = this.presets.findIndex((p) => p.name == preset.name);

        if (index > -1) {
          this.presets.splice(index, 1);
          BrowserService.browser.storage.local.set({ presets: JSON.stringify(this.presets) });
        }
      }
    },
    mounted() {
      BrowserService.browser.storage.local.get('presets', function(data) {
        if (Object.keys(data).length > 0) {
          this.presets = JSON.parse(data.presets);
        }
      }.bind(this));

      PresetService.$on('preset.add', ($event) => {
        this.presets.push({
          name:   $event.name,
          left:   $event.left,
          top:    $event.top,
          width:  $event.width,
          height: $event.height
        });

        BrowserService.browser.storage.local.set({ presets: JSON.stringify(this.presets) });
      });
    }
  }
</script>

<style scoped>
  #presets {
    background-color: #eee;
    padding: 20px 10px;
  }

  .preset {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .preset > div:first-child {
    flex-grow: 1;
  }

  .apply,
  .delete {
    width: 20px;
    height: 20px;
  }

  .apply {
    background: url(/play.svg) center center no-repeat;
  }

  .delete {
    background: url(/delete.svg) center center no-repeat;
  }
</style>
