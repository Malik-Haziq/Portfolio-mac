import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm Malik Haziq, a Frontend Engineer..."
      },
      {
        id: "articles",
        title: "Articles",
        file: "markdown/articles.md",
        icon: "i-mdi:file-document-edit-outline",
        excerpt: "I love to write about web development..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "auxee",
        title: "Auxee",
        file: "https://raw.githubusercontent.com/Malik-Haziq/auxee/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "A secure, private & cost-effective AI assistant for organizations...",
        link: "https://auxee-ca-frontend-qa-wus.orangerock-849186b3.westus.azurecontainerapps.io/"
      },
      {
        id: "safeherit",
        title: "Safeherit",
        file: "https://raw.githubusercontent.com/Malik-Haziq/safeherit/main/README.md",
        icon: "i-ri:shield-check-line",
        excerpt: "System designed to protect your legacy...",
        link: "https://safeherit.com/"
      },
      {
        id: "humantryx",
        title: "Humantryx",
        file: "https://raw.githubusercontent.com/Malik-Haziq/humantryx/main/README.md",
        icon: "i-ri:team-line",
        excerpt: "AI powered HR management tools designed for modern workspaces...",
        link: "https://humantryx.vercel.app/"
      },
      {
        id: "cwn",
        title: "CWN",
        file: "https://raw.githubusercontent.com/Malik-Haziq/cwn/main/README.md",
        icon: "i-ri:code-box-line",
        excerpt: "Software development agency...",
        link: "https://codewithnaqvi.netlify.app/"
      },
      {
        id: "zero-boiler",
        title: "zero boiler",
        file: "https://raw.githubusercontent.com/Malik-Haziq/zero-boiler/main/README.md",
        icon: "i-ri:terminal-box-line",
        excerpt: "npm CLI tool to start React projects with a production-ready setup...",
        link: "https://zeroboiler.netlify.app/"
      },
      {
        id: "ocean-mist",
        title: "Ocean Mist",
        file: "https://raw.githubusercontent.com/Malik-Haziq/ocean-mist/main/README.md",
        icon: "i-ri:palette-line",
        excerpt: "A beautiful VS Code theme...",
        link: "https://marketplace.visualstudio.com/items?itemName=MalikHaziq.ocean-mist"
      }
    ]
  }
];

export default bear;
