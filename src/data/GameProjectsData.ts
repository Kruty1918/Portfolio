import ProjectData from "@/data/ProjectData";

function getProject1(): ProjectData {
  return new ProjectData(
    "project-1",
    "Scary Guy",
    "img/projects/project-1-icon.png",
    /* html */ `
      <div class="paragraph">
        <strong>Scary Guy</strong> is a short horror experience where you play as a night-shift cashier caught in the middle of a maniacal outbreak.
      </div>
      <div class="paragraph">
        As you're heading to work, you encounter a corpse on the road surrounded by police. Soon after, a radio broadcast confirms that something terrible is happening.
      </div>
      <div class="paragraph">
        You continue working your shift — until a suspicious police officer shows up. He warns you about a potential serial killer... and then disappears.
      </div>
      <div class="paragraph">
        Moments later — things start to go terribly wrong.
      </div>
      <div class="paragraph center">
        <iframe
          class="youtube"
          src="https://www.youtube.com/embed/3j0k8ZDkiC8?start=10&autoplay=1&mute=1"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    `,
    "#111024",
    true,
    true,
    "video/project_01-video.mp4",
    "Це підпис під відео, який буде показано під YouTube iframe."
  );
}

export default [getProject1()];
