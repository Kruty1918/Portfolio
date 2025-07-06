<template>
  <div class="overlay" v-if="visible" @click.self="close">
    <div class="dialog">
      <button class="close-button" @click="close">×</button>
      <h1 class="dialog-title" :style="{ '--title-bg': color || '#23bd69' }">
        {{ title }}
      </h1>
      <div class="dialog-content">
        <div v-html="htmlContent"></div>
        <div v-if="videoCaption" class="video-caption">
          {{ videoCaption }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProjectDetailsOverlay",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    htmlContent: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#23bd69",
    },
    videoCaption: {
      type: String,
      default: "",
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
});
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 15px;
  overflow-y: auto;
  z-index: 1000;
}

.dialog {
  background-color: white;
  color: #696969;
  border-radius: 4px;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  padding-bottom: 10px;
  position: relative;
  width: 100%;
}

h1.dialog-title {
  background-color: var(--title-bg);
  color: white;
  margin: 0;
  padding: 15px 20px;
  font-weight: 500;
  border-radius: 4px 4px 0 0;
}

.dialog-content {
  padding: 20px;
}

.video-caption {
  margin-top: 16px;
  font-style: italic;
  color: #888;
  text-align: center;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 26px;
  cursor: pointer;
  color: #999;
  transition: color 0.2s ease;
}

.close-button:hover {
  color: #333;
}
</style>