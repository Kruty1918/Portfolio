<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Oleksii Havryliuk</strong>, also known as <strong>Kruty1918</strong> — a solo game developer from Ukraine.
      </div>

      <div style="margin-top: 20px;">
        I create PC and mobile games to express ideas and reflect on the real world through gameplay.
        My work often touches on history, identity, and the meaning of war.
      </div>

      <div style="margin-top: 40px;">
        You can explore my <router-link to="/game-projects">games</router-link>, other <router-link to="/other-projects">projects</router-link>, or view my <router-link to="/resume">experience</router-link>.
        Feel free to <router-link to="/contact">reach out</router-link> or email me at <a href="mailto:kruty1918.dev@gmail.com">kruty1918.dev@gmail.com</a>.
      </div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Oleksii" />
    </div>

    <div style="clear: both;"></div>
  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
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
    padding: 10px;
    padding-left: 80px;
  }
}
</style>
