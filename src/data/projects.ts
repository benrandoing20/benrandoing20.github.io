
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

export const projectCategories = [
  "All",
  "Generative AI",
  "Applied AI",
  "Health Technology",
  "Research"
];

export const projects: Project[] = [
  {
    id: "conversational-ai-orchestration",
    title: "Conversational AI Rearchitecture (NVIDIA)",
    category: "Applied AI",
    year: "2025",
    description: "Re-architected real-time conversational AI using agent-based graph orchestration",
    fullDescription: "Rebuilt a production conversational AI framework using pipecat to support tool-using LLM agents capable of RAG and multimodal reasoning. Explored and advanced agent-capable architectures by integrating LangGraph with Pipecat for multimodal turn orchestration and LangSmith for agent traceability and debugging. Designed proactive agent behaviors and built task-level state management, including custom frame processors for filler word removal and silence detection using benchmarked SLMs for runtime efficiency. Contributed to deployment reliability using Kubernetes, Helm, and Docker while improving internal documentation and customer-facing integration guides to accelerate adoption.",
    thumbnail: "/resources/images/tokkio-rearch/thumbnail.png",
    technologies: ["LangGraph", "AI Agents", "Helm / K8s", "System Design", "Pipecat"],
    impact: "Reduced latency and improved ease of use of conversational AI across enterprise deployments",
    role: "Software Engineer, AI Applications",
    duration: "7 months",
    team: "AI Applications Team",
    status: "Completed",
    links: {
      docs: "https://docs.nvidia.com/ace/tokkio/5.0/index.html",
      blog: "https://www.nvidia.com/en-us/use-cases/digital-humans/",
      repo: "https://github.com/NVIDIA-AI-Blueprints/digital-human"
    }
  },
  {
    id: "ai-validation-suite",
    title: "AI Latency and Quality Validation Suite (NVIDIA)",
    category: "Applied AI",
    year: "2025",
    description: "Built automated evaluation for LLM latency and dialogue quality over WebRTC",
    fullDescription: "Developed an end-to-end validation system using a custom Python WebRTC client to simulate audio conversations. Instrumented latency with voice activity detection (VAD) and implemented LLM-based evaluation of coherence, helpfulness, and dialogue completeness for continuous testing and benchmark tracking. Built a CI workflow using GitLab runners with provisioned GPU hardware and automated build, test, and deploy stages. Integrated Kubernetes and Helm for reproducible deployments and used shell-based integration tests to validate service health, streaming stability, and model responsiveness.",
    technologies: ["WebRTC", "Python", "VAD", "Latency Profiling", "LLM as a Judge"],
    impact: "Enabled automated performance diagnostics for real-time AI applications",
    role: "Software Engineer, AI Applications",
    duration: "3 months",
    team: "AI Applications Engineering",
    status: "Completed",
    links: {}
  },
  {
    id: "ambient-soap-agent",
    title: "Ambient Clinical Note Agent (NVIDIA)",
    category: "Applied AI",
    year: "2025",
    description: "Built real-time conversation-to-summary agent with diarization",
    fullDescription: "Created a production developer-example that converts raw multi-speaker audio into structured medical summaries. Combined speech diarization, Riva ASR, LLM summarization, and SOAP-style extraction. Built a React + TypeScript frontend and deployed containerized inference pipelines on A100 and L40 GPUs.",
    technologies: ["Riva ASR", "Nemo LLM Summarization", "Riva Speaker Diarization", "React", "Docker"],
    impact: "Enabled automated medical documentation from natural conversations",
    role: "Software Engineer, AI Applications",
    duration: "2 months",
    team: "AI Applications Engineering",
    status: "Completed",
    links: {}
  },
  {
    id: "synthetic-data-agent",
    title: "Synthetic Data Generation Agent (NVIDIA)",
    category: "Applied AI",
    year: "2025",
    description: "Built an agent that generates simulation config yaml files from natural language",
    fullDescription: "Engineered an AI agent that converts natural language task descriptions into structured yaml files that prescribe a simulation scenes. Used query decomposition and scene understanding to produce Isaac Sim/Metropolis SDG config files, automating environment construction and domain randomization.",
    technologies: ["Isaac Sim", "AI Agents", "Digital Twins", "LangGraph"],
    impact: "Automated end-to-end yaml file generation for Metropolis Sim / Isaac Sim scene construction",
    role: "Software Engineer, AI Applications",
    duration: "Ongoing",
    team: "AI Applications Engineering",
    status: "In Progress",
    links: {}
  },
  {
    id: "vision-signal-pipeline",
    title: "Camera-Based Motion Signal Estimation ()",
    category: "Health Technology",
    year: "2024",
    description: "Built signal extraction from RGB video using classical vision techniques",
    fullDescription: "Developed a computer vision pipeline to extract motion signals from standard RGB video for downstream temporal analysis. Used optical flow, frequency-domain filtering, and dimensionality reduction to isolate meaningful periodic motion in noisy visual streams.",
    technologies: ["Optical Flow", "Fourier Analysis", "PCA", "Computer Vision"],
    impact: "Delivered a robust motion feature extraction pipeline for use in time-series modeling applications",
    role: "Computer Vision Engineer",
    duration: "6 months",
    team: " R&D Engineering Health Technology Team",
    status: "Completed",
    links: {}
  },
  {
    id: "lightweight-imaging-classifier",
    title: "Lightweight Image Classification Framework ()",
    category: "Health Technology",
    year: "2024",
    description: "Developed compact ML models for small-scale imaging datasets",
    fullDescription: "Designed and evaluated lightweight ML pipelines for classification on constrained and imbalanced datasets. Engineered preprocessing, feature extraction, and augmentation techniques to improve model stability and interpretability in small-data environments.",
    technologies: ["Machine Learning", "Feature Engineering", "Classification", "Data Augmentation"],
    impact: "Improved generalization and reliability of small-sample image classifiers",
    role: "Machine Learning Engineer",
    duration: "6 months",
    team: " R&D Engineering Health Technology Team",
    status: "Completed",
    links: {}
  },
  {
    id: "geometry-processing-tools",
    title: "3D Data Cleaning and Interpolation Toolkit ()",
    category: "Health Technology",
    year: "2024",
    description: "Built semi-automated tooling for cleaning and repairing 3D data assets",
    fullDescription: "Developed a hybrid workflow combining scripted automation with manual review tooling to clean and repair large collections of 3D wireframe models. Built interpolation utilities to resolve geometry gaps and inconsistencies and implemented structured labeling to enable downstream retrieval and reuse.",
    technologies: ["3D Geometry", "Data Cleaning", "PgVector", "Interpolation"],
    impact: "Reduced manual 3D data preparation time by streamlining cleanup, repair, and annotation workflows",
    role: "Software Engineer",
    duration: "6 months",
    team: " R&D Engineering Health Technology Team",
    status: "Completed",
    links: {}
  },
  {
    id: "depth-estimation-system",
    title: "Depth Estimation Prototype ()",
    category: "Health Technology",
    year: "2024",
    description: "Built prototype demonstrating RGB-based relative depth sensing",
    fullDescription: "Developed a lightweight prototype that estimated relative depth from RGB video and visualized depth contours in real time. Designed as a feasibility demo to explore how monocular depth cues could complement hardware depth sensors for downstream signal estimation tasks.",
    technologies: ["Monocular Depth Estimation", "Computer Vision", "Real Time Systems", "Swift/SwiftUI"],
    impact: "Showcased practical use of RGB-only depth inference to augment sensing pipelines",
    role: "Computer Vision Engineer",
    duration: "6 months",
    team: " R&D Engineering Health Technology Team",
    status: "Completed",
    links: {}
  },
  {
    id: "sketch-to-cad",
    title: "Sketch to CAD Generation",
    category: "Generative AI",
    year: "2023",
    description: "Encoder decoder model that converts 2D sketches into editable CAD timelines",
    "fullDescription": "Developed a generative AI system that transforms 2D isometric sketches into editable CAD design timelines. Built and evaluated four encoder decoder architectures using CNN, Transformer, and LSTM components on DeepCAD and ABC datasets. Achieved highest performance with a CNN encoder and pretrained Transformer decoder producing 93.5% command accuracy and 68.3% parameter accuracy. Demonstrated interpretable saliency maps and validated CAD reconstruction feasibility using Fusion 360 renderings.",
    thumbnail: "/resources/images/sketch-2-cad/saliency.png",
    technologies: [
      "PyTorch",
      "Computer Vision",
      "Generative AI Modelling",
      "AWS",
    ],
    impact: "93.5% command accuracy and 68.3% parameter accuracy for an accelerated CAD workflow",
    role: "Machine Learning Engineer",
    duration: "3 months",
    team: "Ben Randoing & Ghadi Nehme",
    status: "Completed",
    links: {
      paper: "/resources/pdfs/sketch-2-cad/report.pdf",
      poster: "/resources/pdfs/sketch-2-cad/poster.pdf"
    }
  },
  {
    id: "recipe-generation-nlp",
    title: "Recipe Generation from Titles Only",
    category: "Generative AI",
    year: "2023",
    description: "Transformer based text generation for ingredient and recipe synthesis",
    fullDescription: "Built a text generation system to produce full cooking recipes from only a recipe title by first predicting missing ingredients and then generating instructions. Developed and evaluated LSTM and Transformer decoder architectures on Recipe1M+, achieving BLEU 11.2 and F1 8.9 for ingredient generation. Results showed recipe generation from titles alone is feasible and produces coherent outputs, despite lower BLEU and ROUGE scores compared to models using true ingredient inputs.",
    thumbnail: "/resources/images/recipe-nlp/thumbnail.png",
    technologies: [
      "Natural Language Processing",
      "PyTorch",
      "Sequence to Sequence Models",
      "AWS EC2",
    ],
    impact: "Reduced dependency on large language models for recipe generation by evaluating lightweight Transformer performance",
    role: "NLP Engineer",
    duration: "3 months",
    team: "Ben Randoing, Kerrie Wu, & Justine Breuch ",
    status: "Completed",
    links: {
      paper: "/resources/pdfs/recipe-generation-nlp/report.pdf",
      poster: "/resources/pdfs/recipe-generation-nlp/poster.pdf",
    }
  },
  {
    id: "lesion-nst",
    title: "Neural Style Transfer for Melanoma Detection",
    category: "Generative AI",
    year: "2022",
    description: "Improved melanoma classifier recall on dark skin tones using neural style transfer augmentation",
    fullDescription: "Developed a bias mitigation pipeline to improve melanoma detection for darker skin tones by augmenting limited training data with neural style transfer generated images. Built a TensorFlow based NST generator using VGG19 to synthesize realistic dark skin lesion images and combined it with supervised melanoma classification using InceptionV3. Achieved recall improvement from 0.623 to 0.787 on dark skin tone images with NST augmentation and 0.813 using additional self supervised learning with SimCLR.",
    thumbnail: "/resources/images/nst/thumbnail.png",
    technologies: [
      "Computer Vision",
      "TensorFlow",
      "CNN",
      "Data Augmentation",
    ],
    impact: "Reduced dataset bias and improved melanoma recall on dark skin tones by 30.5%",
    role: "Computer Vision Engineer",
    duration: "4 months",
    team: "Ben Randoing, Aastha Jhunjhunwala, Anirudh Rao",
    status: "Completed",
    links: {
      paper: "/resources/pdfs/nst/report.pdf",
    }
  },
  {
    id: "emg-to-grf",
    title: "Predicting Ground Reaction Forces from EMG",
    category: "Health Technology",
    year: "2023",
    description: "Neural network prediction of ground reaction forces from wearable EMG sensors",
    fullDescription: "Built real time machine learning models to estimate ground reaction forces during human gait using only wearable electromyography inputs. Collected EMG and force plate data in the Stanford Human Performance Lab and engineered a data processing pipeline including rectification, normalization, and signal filtering. Developed and evaluated multiple neural architectures including fully connected networks and WaveNet style temporal models in PyTorch to learn EMG to GRF dynamics. Demonstrated accurate prediction of heel strike and push off gait events without force plates, enabling portable biomechanics analysis.",
    thumbnail: "/resources/images/emg-2-grf/thumbnail.png",
    technologies: [
      "PyTorch",
      "Time Series Modeling",
      "Biomechanics",
      "EMG"
    ],
    impact: "Enabled force plate free GRF estimation using wearable EMG sensors for real time human movement analysis",
    role: "Machine Learning Engineer",
    duration: "4 months",
    team: "Ben Randoing, Quincy Delp, Cooper Shea",
    status: "Completed",
    links: {
      slides: "/resources/pdfs/emg-2-grf/slides.pdf",
      paper: "/resources/pdfs/emg-2-grf/report.pdf",
      blog: "https://opensimconfluence.atlassian.net/wiki/spaces/OpenSim/pages/53084264/Predicting+Ground+Reaction+Forces+with+EMG+Data+a+Neural+Network+Approach"
    }
  },
  {
    id: "y-balance-youth-biomechanics",
    title: "Dynamic Stability Assessmentin Youth Athletes",
    category: "Research",
    year: "2021",
    description: "Analyzed age-specific return-to-sport metrics using Y-Balance Test data",
    fullDescription: "Co-authored a large-scale clinical biomechanics study evaluating the validity of the Lower-Quarter Y-Balance Test in 8–17-year-old athletes recovering from lower-extremity injury. Analyzed normalized reach metrics across 1,093 patients to quantify age and sex effects on dynamic stability and limb asymmetry. Identified statistically significant deviations in anterior reach performance among 8 to 10-year-olds compared to validated adolescent norms, challenging the use of generalized return-to-sport thresholds for younger athletes. Results provide evidence for age-specific functional benchmarks to reduce re-injury risk in pediatric sports medicine.",
    technologies: ["Biomechanics", "Statistical Analysis", "Clinical Data Research", "Sports Medicine", "MATLAB", "Epic"],
    impact: "Published peer-reviewed clinical evidence recommending age-specific return-to-sport standards for pediatric athletes",
    role: "Co-Author and Research Analyst",
    duration: "6 months",
    team: "Orthopedic Sports Medicine Research Group Scottish Rite for Children",
    status: "Completed",
    links: {
      paper: "https://doi.org/10.26603/001c.120898"
    }
  },
  {
    id: "dna-origami-ising",
    title: "Thermally Responsive DNA Origami Modeling",
    category: "Research",
    year: "2020",
    description: "Simulated DNA nanostructure interactions using Ising and Potts lattice models",
    fullDescription: "Investigated temperature-dependent self-assembly behavior of DNA origami lattices using Monte Carlo simulations of Ising and Potts spin systems. Modeled sticky-end DNA interactions as spin coupling events and quantified energy landscapes driven by entropic and enthalpic forces. Identified critical temperature thresholds for phase transitions from ordered to disordered states, enabling tunable aggregation mechanics for controlled drug release. Proposed a thermally triggered nanoscale enclosure design for selective payload release using reversible pattern formation.",
    thumbnail: "/resources/images/dna-origami/thumbnail.png",
    technologies: ["Statistical Mechanics", "Monte Carlo Simulation", "Python", "MATLAB", "Lattice Models"],
    impact: "Established a computational framework for thermal control of DNA-based drug delivery systems",
    role: "Computational Researcher",
    duration: "4 months",
    team: "Biological and Soft Materials Modeling Group",
    status: "Completed",
    links: {
      paper: "/resources/pdfs/dna-origami/report.pdf",
      website: "https://aryalab.pratt.duke.edu/"
    }
  }
];
