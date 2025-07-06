<template>
  <div>
    <div class="projects-list">
      <div v-for="project in projects" :key="project.id" @click="showDetails(project)" class="project-item"
        :class="{ 'wide': project.isWide, 'high': project.isHigh }">

        <div class="project-item-image">
          <video v-if="project.previewVideoUrl" class="preview-video" :src="project.previewVideoUrl" muted autoplay loop
            playsinline @mouseenter="unmuteVideo($event)" @mouseleave="muteVideo($event)"></video>
          <div v-else class="image-background" :style="{ backgroundImage: 'url(' + project.iconUrl + ')' }"></div>
        </div>

        <div class="title-bar" :style="{ 'background-color': project.accentColor + 'DD' }">
          <div class="title-text">{{ project.name }}</div>
        </div>

      </div>
    </div>

    <ProjectDetailsOverlay v-on:close="showPopup = false" :visible="showPopup" :title="popupTitle"
      :htmlContent="popupContent" :color="popupColor" :videoCaption="popupVideoCaption" :links="popupLinks" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData";
import type Link from "@/data/Link";

export default Vue.extend({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: {
      type: Array as () => ProjectData[],
      required: true,
    },
  },
  data() {
    return {
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: "",
      popupVideoCaption: "",
      popupLinks: [] as Link[],
    };
  },
  methods: {
    showDetails(item: ProjectData) {
      this.popupTitle = item.name;
      this.popupColor = item.accentColor;
      this.popupContent = item.htmlDescription;
      this.popupVideoCaption = ""; // або item.videoCaption
      this.popupLinks = item.links || [];
      this.showPopup = true;
      window.scrollTo(0, 0);
    },
    unmuteVideo(event: Event) {
      const video = event.target as HTMLVideoElement;
      video.muted = false;
      video.volume = 1.0;
    },
    muteVideo(event: Event) {
      const video = event.target as HTMLVideoElement;
      video.muted = true;
    },
  },
});
</script>


<style scoped>
.project-item {
  height: 300px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.project-item-image {
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.preview-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;
}

.project-item:hover .preview-video {
  transform: scale(1.1);
}

.project-item:hover {
  filter: brightness(120%);
}

.title-bar {
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #222222;
}

.title-text {
  padding: 10px;
}

/* Список посилань */
.links-list {
  margin: 10px 0 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.link-item a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
}

.link-icon {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}

@media only screen and (min-width: 620px) {
  .projects-list {
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(250px, auto);
  }

  .project-item {
    margin: 0px;
    height: 100%;
    width: 100%;
  }

  .wide {
    grid-column-end: span 2;
  }

  .high {
    grid-row-end: span 2;
  }
}
</style>
