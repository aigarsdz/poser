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
  import { PresetService } from '../services/PresetService';
  import { BrowserService } from '../services/BrowserService';

  export default {
    data() {
      return {
        presets: []
      };
    },
    methods: {
      applyPreset(preset) {
        BrowserService.browser.windows.getCurrent(function(w) {
          BrowserService.browser.windows.update(w.id, {
            left:   preset.left,
            top:    preset.top,
            height: preset.height,
            width:  preset.width
          });
        });

        window.close();
      },
      deletePreset(preset) {
        PresetService.delete(preset);
      }
    },
    mounted() {
      PresetService.$on('presets.added', ($event) => {
        this.presets = $event;
      });

      PresetService.$on('presets.loaded', ($event) => {
        this.presets = $event;
      });

      PresetService.$on('presets.deleted', ($event) => {
        this.presets = $event;
      });
    }
  }
</script>

<style scoped>
  #presets {
    background-color: #eee;
    padding: 20px 10px;
    max-height: 100px;
    overflow: auto;
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
