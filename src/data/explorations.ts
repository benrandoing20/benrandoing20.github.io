
export interface Exploration {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  impact: string;
  role: string;
  duration: string;
  team?: string;
  status: "Completed" | "In Progress" | "Research";
  thumbnail?: string;
  images?: string[];
  links?: {
    demo?: string;
    github?: string;
    paper?: string;
    patent?: string;
    poster?: string;
    slides?: string;
    blog?: string;
    docs?: string;
    repo?: string;
    website?: string;
  };
}

export const explorationCategories = [
  "All",
  "Generative AI",
  "Applied AI",
  "Health Technology",
  "Research"
];

export const explorations: Exploration[] = [
  // Add your technical explorations here
  // Example structure:
  // {
  //   id: "example-exploration",
  //   title: "Example Technical Exploration",
  //   category: "Applied AI",
  //   year: "2025",
  //   description: "A demonstration of technical competence in...",
  //   fullDescription: "Detailed description of the exploration...",
  //   technologies: ["Technology 1", "Technology 2"],
  //   impact: "Impact statement",
  //   role: "Technical Role",
  //   duration: "X months",
  //   status: "Completed",
  //   thumbnail: "/path/to/thumbnail.png",
  //   links: {}
  // }
];

