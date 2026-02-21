import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Manu Ventero",
  EMAIL: "manuel@ojoaldato.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Data, AI & Leadership",
  DESCRIPTION:
    "AI, ML, and software lead who codes. Building data-driven products and leading engineering teams.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Writing about machine learning, data science, engineering leadership, and AI.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "My career journey across data science, ML engineering, and leadership.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Side projects, open source work, and experiments.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/ojoaldato",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/manuel-ventero-pe%C3%B1a-a1727064",
  },
];
