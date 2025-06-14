
export interface Project {
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
  images?: string[];
  links?: {
    demo?: string;
    github?: string;
    paper?: string;
    patent?: string;
  };
}

export const projectCategories = [
  "All",
  "Healthcare AI",
  "Biomedical Engineering", 
  "Privacy AI",
  "Neural Interfaces",
  "Research"
];

export const projects: Project[] = [
  {
    id: "ai-medical-diagnostics",
    title: "AI Medical Diagnostics",
    category: "Healthcare AI",
    year: "2024",
    description: "Deep learning system for cardiovascular disease detection achieving 94% clinical accuracy.",
    fullDescription: "Developed a comprehensive AI system for early detection of cardiovascular diseases using advanced deep learning techniques. The system processes multiple data modalities including ECG, echocardiograms, and patient history to provide accurate diagnostic predictions. Deployed in clinical trials across 3 major hospitals.",
    technologies: ["PyTorch", "TensorFlow", "Computer Vision", "Signal Processing", "Clinical Data"],
    impact: "94% diagnostic accuracy, 40% faster diagnosis time, deployed in 3 hospitals",
    role: "Lead AI Engineer",
    duration: "18 months",
    team: "Cross-functional team of 12 (engineers, clinicians, researchers)",
    status: "Completed",
    links: {
      paper: "#",
      patent: "#"
    }
  },
  {
    id: "neural-interface-platform",
    title: "Neural Interface Platform",
    category: "Neural Interfaces",
    year: "2023",
    description: "Real-time brain-computer interface enabling device control through neural signals.",
    fullDescription: "Pioneered development of a non-invasive brain-computer interface platform that translates neural signals into digital commands. The system uses advanced signal processing and machine learning to interpret EEG patterns, enabling users to control devices through thought alone. Achieved sub-100ms latency for real-time interaction.",
    technologies: ["Signal Processing", "Machine Learning", "Real-time Systems", "EEG", "Hardware Integration"],
    impact: "Sub-100ms latency, 89% signal accuracy, 5 published patents pending",
    role: "Principal Research Engineer",
    duration: "24 months", 
    team: "Interdisciplinary team of 8 (neuroscientists, engineers, UX designers)",
    status: "In Progress",
    links: {
      demo: "#",
      paper: "#"
    }
  },
  {
    id: "federated-learning-framework",
    title: "Federated Learning Framework",
    category: "Privacy AI",
    year: "2023",
    description: "Privacy-preserving distributed learning system for collaborative healthcare research.",
    fullDescription: "Architected a federated learning framework that enables multiple healthcare institutions to collaboratively train AI models without sharing sensitive patient data. Implemented advanced differential privacy techniques and secure aggregation protocols to ensure data protection while maintaining model performance.",
    technologies: ["Federated Learning", "Differential Privacy", "Cryptography", "Distributed Systems", "Healthcare Data"],
    impact: "Enabled collaboration across 15+ institutions, 99.9% data privacy compliance",
    role: "Senior AI Researcher",
    duration: "12 months",
    team: "Privacy engineering team of 6",
    status: "Completed",
    links: {
      github: "#",
      paper: "#"
    }
  },
  {
    id: "biomarker-discovery",
    title: "AI-Driven Biomarker Discovery",
    category: "Biomedical Engineering",
    year: "2022",
    description: "Machine learning pipeline for identifying novel disease biomarkers from multi-omics data.",
    fullDescription: "Developed an end-to-end machine learning pipeline that analyzes genomics, proteomics, and metabolomics data to discover novel biomarkers for early disease detection. The system has identified 12 potential biomarkers currently undergoing clinical validation.",
    technologies: ["Bioinformatics", "Multi-omics Analysis", "Feature Selection", "Statistical Learning"],
    impact: "12 novel biomarkers identified, 3 papers published, 2 clinical trials initiated",
    role: "Computational Biology Lead",
    duration: "20 months",
    status: "Completed"
  }
];
