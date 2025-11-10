
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
  "Hedge Fund AI",
  "Applied AI",
  // "Model Training",
  // "Research"
];

export const explorations: Exploration[] = [
  {
    id: "patient-intake-voice-agent",
    title: "Voice-Based Patient Intake Agent with Twilio & Pipecat (Assort Health)",
    category: "Applied AI",
    year: "2024",
    description: "Take-home assignment: Production telephony agent for automated patient intake using real-time voice conversation",
    fullDescription: "Built a production-ready voice conversation system for automated patient intake as a take-home assignment for Assort Health. Implemented using Twilio telephony infrastructure and Pipecat's open-source conversational framework. Architected single-agent system with scripted call flow management, real-time field validation, and state persistence. Implemented WebSocket-based streaming audio pipeline with ngrok tunneling for development. Designed agent with structured prompting for natural conversation flow while maintaining compliance with healthcare intake requirements. Integrated email notification system for completed intake forms with validation confirmation. Explored advanced architectural patterns during subsequent work trials with Dodo AI and Cekura AI including supervisor agent orchestration for dynamic agent routing based on conversation state, hierarchical failure mode classification using tree-structured taxonomies with UI visualization, and semantic embedding-based content matching for intelligent error categorization and routing. Demonstrated scalability considerations for multi-agent telephony systems with conversation handoff protocols and state transfer mechanisms.",
    technologies: [
      "Pipecat",
      "Twilio API",
      "WebSocket",
      "LLM Agents",
      "Voice AI",
      "ngrok",
    ],
    impact: "Automated patient intake workflow with natural voice interaction and real-time validation",
    role: "AI Engineer",
    duration: "1 day",
    status: "Completed",
    links: {
    }
  },
  {
    id: "mini-rag-take-home",
    title: "Mini-RAG System for Hedge Fund Portfolio Manager (Verition Fund Management)",
    category: "Hedge Fund AI",
    year: "2025",
    description: "Time-boxed RAG system for mixed-language document retrieval achieving 90.7% quality score",
    fullDescription: "Built a production-ready Retrieval-Augmented Generation system within a 4-hour constraint for hedge fund take-home assignment. Ingested ~100 mixed-language documents (PDF, HTML, PNG) using recursive chunking (500 tokens, 100 overlap), OpenAI text-embedding-3-large embeddings, and FAISS vector store. Implemented multimodal extraction pipeline combining PyPDF text parsing, Tesseract OCR, and Gemini 2.0 Flash vision summaries for complex graphics. Deployed FastAPI REST endpoint with GPT-4o generation. Achieved 90.7% end-to-end quality score using RAGAS evaluation framework across 6 metrics: answer relevance (0.913), faithfulness (0.857), context precision (0.931), context recall (0.950), answer correctness (0.682), and answer similarity (0.883). Systematically documented architectural trade-offs including chunking strategy, embedding model selection (cost vs quality), retrieval approach (simplicity vs optimization), and multimodal handling. Analyzed failure modes identifying verbosity (prompt engineering), OCR quality (vision models), and extraction gaps (table parsing) as primary improvement areas. Demonstrated engineering judgment by prioritizing end-to-end functionality over perfection, with clear roadmap for production scaling including re-ranking layer, GPU acceleration, caching strategy, and agentic query routing.",
    technologies: [
      "RAG",
      "Multilingual Embeddings",
      "FAISS",
      "RAGAS",
      "Tesseract OCR",
      "Gemini Vision",
    ],
    impact: "90.7% overall quality score with 94.1% retrieval quality across multilingual queries",
    role: "AI Engineer",
    duration: "4 hours",
    status: "Completed",
    links: {
    }
  }
];

