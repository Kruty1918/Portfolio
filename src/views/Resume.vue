<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      My name is <strong>Oleksii Havryliuk</strong>, and I’m a game developer with over 7 years of experience working in
      Unity. I started when I was just 10 years old, and over the last 3 years I've gained hands-on commercial
      experience.
      <br />I'm 17 years old, highly responsible, and passionate about technology. I spend over 10 hours a day working
      on projects, exploring new tools, and building things.
      <br />I've taken part in several projects, including commercial ones with tight deadlines and real teamwork
      management.
      <br />
      <br />I’m currently open to new opportunities and collaborations. If you're interested — feel free to <router-link
        to="/contact">get in touch</router-link>.
      <br />
      <br />Besides game dev, I’m passionate about electronics, music, and learning new technologies.

      <!-- <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download PDF</a>
        <div style="clear:both"></div>
      </div> -->
    </div>

    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of Oleksii" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Fub and Ball – hybrid casual mobile game</h3>
      <h4>2024</h4>
      <div>Worked on gameplay logic, feedback systems, and general mechanics. Collaborated with a partner.</div>
      <div class="tech-stack">Unity, C#, DOTween, ScriptableObject</div>

      <h3>Commercial horror game project (10-day deadline)</h3>
      <h4>2024</h4>
      <div>Built a full horror game from scratch with a small team. Led the team and handled architecture and
        implementation.</div>
      <div class="tech-stack">Unity, Zenject, DOTween, AI systems, project management</div>

      <h3>Story-based game about life and death</h3>
      <h4>2024</h4>
      <div>Ongoing project with a focus on narrative, emotional experience, and technical systems.</div>
      <div class="tech-stack">Unity, ScriptableObject, Custom Dialogue System</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Technical</h3>
        <SkillRate name="Unity Engine" :rate="5" />
        <SkillRate name="C#" :rate="5" />
        <SkillRate name="DOTween" :rate="5" />
        <SkillRate name="Zenject" :rate="4" />
        <SkillRate name="ScriptableObject" :rate="5" />
        <SkillRate name="2D World Generation" :rate="4" />
        <SkillRate name="MonoSingletons" :rate="3" />
      </div>

      <div class="skill-set">
        <h3>Soft Skills</h3>
        <SkillRate name="Communication" :rate="5" />
        <SkillRate name="Responsibility" :rate="5" />
        <SkillRate name="Team management" :rate="4" />
        <SkillRate name="Project ownership" :rate="4" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Khmelnytskyi NVK #6 (Ukraine)</h3>
      <h4>Grades 1–11</h4>

      <h3>Am Wasserturm Schule, Grevesmühlen (Germany)</h3>
      <h4>2.5 years</h4>

      <h3>Berufsschule, Zierow (Germany)</h3>
      <h4>1 year</h4>

      <div>Planning to study at Design Schule in Schwerin.</div>

      <h2>Languages</h2>

      <h3>Ukrainian</h3>
      <div>Native</div>

      <h3>English</h3>
      <div>Upper-Intermediate (B2)</div>

      <h3>German</h3>
      <div>Intermediate (B1)</div>

      <h2>Besides...</h2>
      <div>
        <h3>💡 Technology</h3>
        <div>I enjoy exploring new tools, game development patterns, and programming techniques.</div>

        <h3>🎸 Hobbies</h3>
        <div>Music, playing instruments, soldering, electronics, and creative tech projects.</div>

        <h3>🧠 Self-learning</h3>
        <div>I have no formal IT education — everything I know, I’ve learned through practice and real projects.</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}

h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}

h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float: left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px;
  }
}
</style>