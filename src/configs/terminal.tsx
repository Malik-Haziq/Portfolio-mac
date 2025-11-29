import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Malik Haziq. I am a Frontend Engineer with 3 years of
              experience. I specialize in React, Next.js, TypeScript, and Tailwind CSS.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Frontend Development / React / Next.js / TypeScript / Tailwind CSS"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content: "I'm open to collaboration on interesting frontend projects."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:malikhaziq153@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                malikhaziq153@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/Malik-Haziq"
                target="_blank"
                rel="noreferrer"
              >
                @Malik-Haziq
              </a>
            </li>
            <li>
              <a
                className="text-blue-300"
                href="https://scholar.google.com/citations?user=RuW6xgMAAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/malik-haziq-b5233a231/"
                target="_blank"
                rel="noreferrer"
              >
                malik-haziq
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://malikhaziq.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                https://malikhaziq.netlify.app/
              </a>
            </li>
            <li>
              知乎:{" "}
              <a
                className="text-blue-300"
                href="https://www.zhihu.com/people/chao-neng-gui-su"
                target="_blank"
                rel="noreferrer"
              >
                @西伯利亚大恶龙
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
