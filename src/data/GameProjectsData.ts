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
    "video/project_01-video.mp4"
  );
}

// function getProject2(): ProjectData {
//   return new ProjectData(
//     "project-2",
//     "Singing Addict",
//     "img/projects/project-2-icon.png",
//     `
//     <div class="paragraph">
//         <strong>Scary Guy Blog</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
//         <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@adonyi-gabor-604571">Adonyi Gábor</a>.
//     </div>
//     <div class="paragraph center">
//         <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
//     </div>

//     <div class="paragraph">
//         Main features :
//         <ul>
//         <li>Some stuff</li>
//         <li>Some great stuff</li>
//         <li>More awesome stuff</li>
//         <li>And then some</li>
//         </ul>
//     </div>

//     <div class="paragraph">
//     <div class="notice">
//         Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
//         Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
//     </div>
//     </div>

//     <div class="paragraph center">
//     <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
//     <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
//     <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
//     <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
//     </div>
//     `,
//     "#5a78af"
//   );
// }

// function getProject3(): ProjectData {
//   return new ProjectData(
//     "project-3",
//     "Drawing Overload",
//     "img/projects/project-3-icon.png",
//     `
//     <div class="paragraph">
//         <strong>Drawing Overload</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
//         <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@miphotography">Miesha Maiden</a>.
//     </div>
//     <div class="paragraph center">
//         <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
//     </div>

//     <div class="paragraph">
//         Main features :
//         <ul>
//         <li>Some stuff</li>
//         <li>Some great stuff</li>
//         <li>More awesome stuff</li>
//         <li>And then some</li>
//         </ul>
//     </div>

//     <div class="paragraph">
//         <div class="notice">
//         Playable in the browser (WebGL) on <a href="https://some.where/nice" target="_blank">itch.io</a>.
//         Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
//         </div>
//     </div>

//     <div class="paragraph center">
//         <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
//         <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
//         <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
//         <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
//     </div>
//     `,
//     "#383838"
//   );
// }

// function getProject4(): ProjectData {
//   return new ProjectData(
//     "project-4",
//     "Eugeneable",
//     "img/projects/project-4-icon.png",
//     `
//     <div class="paragraph">
//     <strong>Eugeneable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
//     <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
//     </div>

//     <div class="paragraph">
//         Main features :
//         <ul>
//         <li>Some stuff</li>
//         <li>Some great stuff</li>
//         <li>More awesome stuff</li>
//         <li>And then some</li>
//         </ul>
//     </div>

//     <div class="paragraph">
//         <div class="notice">
//         Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
//         </div>
//     </div>

//     <div class="paragraph center">
//         <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
//         <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
//     </div>
//     `,
//     "#e80fb7"
//   );
// }

// function getProject5(): ProjectData {
//   return new ProjectData(
//     "project-5",
//     "Cloud Drew Land",
//     "img/projects/project-5-icon.png",
//     `
//         <div class="paragraph">
//             <strong>Cloud Drew Land</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
//             <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@cottonbro">cottonbro</a>.
//         </div>

//         <div class="paragraph">
//             Main features :
//             <ul>
//             <li>Some stuff</li>
//             <li>Some great stuff</li>
//             <li>More awesome stuff</li>
//             <li>And then some</li>
//             </ul>
//         </div>

//         <div class="paragraph">
//             <div class="notice">
//             Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
//             Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
//             </div>
//         </div>

//         <div class="paragraph center">
//             <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
//             <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
//             <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
//         </div>`,
//     "#e48246"
//   );
// }

export default [
  getProject1(),
  // getProject2(),
  // getProject3(),
  // getProject4(),
  // getProject5(),
];
