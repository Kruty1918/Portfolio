<template>
  <div class="overlay" v-if="visible" @click.self="close">
    <div class="dialog">
      <button class="close-button" @click="close">×</button>
      <h1 class="dialog-title" :style="{ '--title-bg': color || '#23bd69' }">
        {{ title }}
      </h1>
      <div class="dialog-content">
        <div v-html="htmlContent"></div>

        <!-- Список лінків -->
        <div v-if="links.length" class="links-section">
          <div class="links-header">
            <span class="links-title">Links</span>
          </div>
          <ul class="links-list">
            <li v-for="link in links" :key="link.url" class="link-item">
              <a :href="link.url" target="_blank" rel="noopener noreferrer">
                <i v-if="link.iconClass" :class="link.iconClass + ' link-fa-icon'"></i>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Відео-підпис -->
        <div v-if="videoCaption" class="video-caption">
          {{ videoCaption }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { PropType } from "vue";
import type Link from "@/data/Link";

export default Vue.extend({
  name: "ProjectDetailsOverlay",
  props: {
    visible: { type: Boolean, required: true },
    title: { type: String, required: true },
    htmlContent: { type: String, required: true },
    color: { type: String, default: "#23bd69" },
    videoCaption: { type: String, default: "" },
    links: {
      type: Array as PropType<Link[]>,
      default: () => [],
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

/* Секція посилань */
.links-section {
  margin-top: 30px;
}

.links-header {
  margin-bottom: 10px;
  border-left: 4px solid var(--title-bg, #454b48);
  padding-left: 10px;
}

.links-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

/* Стиль списку лінків */
.links-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.link-item a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1d1d1d;
  background: #f0f0f0;
  border-radius: 4px;
  padding: 6px 10px;
  font-weight: 500;
  transition: background 0.2s ease;
}

.link-item a:hover {
  background: #e0e0e0;
}

.link-fa-icon {
  margin-right: 8px;
  font-size: 16px;
  vertical-align: middle;
}
</style>
