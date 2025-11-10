import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ViewToggle from '@/components/ViewToggle';
import KnowledgeGraph3D from '@/components/KnowledgeGraph3D';
import { appliedAIGraphData } from '@/data/graphs/appliedAIGraph';

const AppliedAI = () => {
  const [view, setView] = useState<'list' | 'graph'>('graph');

  const sections = [
    {
      title: "Foundations",
      content: [
        {
          subtitle: "Mathematics",
          description:
            "The math you actually need for AI—matrix operations for neural networks, probability for understanding uncertainty, calculus for gradient descent, and optimization theory for training models efficiently.",
        },
        {
          subtitle: "Classical ML",
          description:
            "Pre-deep learning machine learning that still matters—decision trees and random forests, gradient boosting machines like XGBoost, SVMs, and ensemble methods that often outperform neural nets on tabular data.",
        },
        {
          subtitle: "Neural Fundamentals",
          description:
            "How neural networks learn—forward and backward propagation, gradient descent variants like Adam, activation functions, regularization techniques like dropout, and how to train models that generalize.",
        },
      ],
    },
    {
      title: "Deep Learning",
      content: [
        {
          subtitle: "Architectures",
          description:
            "The core neural network building blocks—convolutional networks for images with spatial structure, recurrent networks like LSTMs for sequences, and the evolution from ResNets to modern transformer architectures.",
        },
        {
          subtitle: "NLP & Transformers",
          description:
            "How AI understands and generates language—transformer architecture with self-attention, tokenization and embeddings, large language models like GPT and BERT, and fine-tuning with LoRA and prompt engineering.",
        },
        {
          subtitle: "Generative Models",
          description:
            "AI that creates new content—GANs with adversarial training for generating images, VAEs for learning compressed representations, and diffusion models like Stable Diffusion that power modern image generation.",
        },
      ],
    },
    {
      title: "Specialized AI",
      content: [
        {
          subtitle: "Computer Vision",
          description:
            "Teaching machines to see—image classification for recognizing objects, object detection with YOLO and R-CNN, semantic and instance segmentation, and vision-language models that understand both images and text.",
        },
        {
          subtitle: "Reinforcement Learning",
          description:
            "AI that learns by trial and error—Markov decision processes, value-based methods like Q-learning and DQN, policy gradient approaches like PPO, and offline RL for learning from logged data without environment interaction.",
        },
        {
          subtitle: "Multimodal AI",
          description:
            "Models that understand multiple modalities—vision-language models like CLIP that connect images and text, audio-text models for speech recognition, and unified models that can handle any combination of inputs.",
        },
      ],
    },
    {
      title: "Production & Deployment",
      content: [
        {
          subtitle: "MLOps Infrastructure",
          description:
            "The engineering systems for ML workflows—experiment tracking with W&B or MLflow, orchestrating training pipelines with DAGs, model registries for versioning, and CI/CD for machine learning.",
        },
        {
          subtitle: "Model Optimization",
          description:
            "Making models faster and cheaper—quantization to INT8/FP8, pruning to remove unnecessary weights, knowledge distillation to compress models, model compilation, and distributed training across GPUs.",
        },
        {
          subtitle: "Monitoring & Governance",
          description:
            "Keeping models healthy in production—tracking latency and throughput, detecting data drift and model decay, maintaining data lineage, implementing approval workflows, and alerting when things go wrong.",
        },
        {
          subtitle: "Serving & Inference",
          description:
            "Running models at scale—batch vs real-time inference tradeoffs, autoscaling to handle traffic, optimizing for latency and cost, serving frameworks like vLLM and TensorRT, and GPU utilization.",
        },
        {
          subtitle: "Data Engineering",
          description:
            "Pipelines and infrastructure for ML data—feature stores for consistent online/offline features, data quality monitoring, vector databases for similarity search, and managing embeddings at scale.",
        },
        {
          subtitle: "Security & Privacy",
          description:
            "Protecting models and data—handling PII and sensitive data, red-teaming to find vulnerabilities, access control and authentication, securing APIs, and compliance with data protection regulations.",
        },
      ],
    },
    {
      title: "AI Agents & RAG",
      content: [
        {
          subtitle: "RAG Systems",
          description:
            "Retrieval-Augmented Generation—chunking documents into retrievable pieces, creating embeddings, indexing with vector search, retrieving relevant context, re-ranking results, and injecting knowledge into LLM prompts.",
        },
        {
          subtitle: "Tool-Use Agents",
          description:
            "LLMs that can use external tools—function calling with structured outputs, defining tool schemas, letting models call APIs, calculators, databases, and web searches, and handling tool errors gracefully.",
        },
        {
          subtitle: "Agent Orchestration",
          description:
            "Coordinating complex AI agents—multi-agent patterns where agents collaborate, giving agents memory of past interactions, routing requests to specialized agents, and adding guardrails to prevent mistakes.",
        },
      ],
    },
    {
      title: "AI Safety & Model Evaluation",
      content: [
        {
          subtitle: "Evaluation Frameworks",
          description:
            "Systematically testing AI systems—building golden test sets, automated evaluation metrics, human-in-the-loop evals, A/B testing in production, regression testing, and continuous evaluation pipelines.",
        },
        {
          subtitle: "Safety & Guardrails",
          description:
            "Preventing harmful model outputs—content filtering for toxic/inappropriate content, detecting and blocking jailbreak attempts, implementing usage policies, and input/output validation with tools like Nemo Guardrails.",
        },
        {
          subtitle: "Alignment & Training",
          description:
            "Teaching models human preferences—Reinforcement Learning from Human Feedback (RLHF), Direct Preference Optimization (DPO), collecting preference data, constitutional AI, and safety tuning for responsible behavior.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-32 pb-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-24">
            <Link
              to="/resources"
              className="inline-flex items-center text-sm font-light text-black/60 hover:text-black mb-12 transition-colors duration-300"
            >
              <span className="mr-2">←</span> Back to Resources
            </Link>

            <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight">
              Applied AI
            </h1>
            <div className="w-24 h-px bg-black/20 mb-8"></div>
            <p className="text-xl font-light text-black/60 max-w-3xl mb-8">
              The complete landscape of applied artificial intelligence—from mathematical foundations to production-scale systems, intelligent agents, and safe deployment.
            </p>

            <ViewToggle view={view} onViewChange={setView} />
          </div>

          {view === 'graph' ? (
            <div className="w-full" style={{ height: '800px' }}>
              <KnowledgeGraph3D data={appliedAIGraphData} />
            </div>
          ) : (
            <div className="space-y-24">
              {sections.map((section, index) => (
                <div key={index}>
                  <div className="mb-8">
                    <h2 className="text-3xl font-light tracking-tight">
                      {section.title}
                    </h2>
                  </div>
                  
                  {/* Horizontal Scroll Container */}
                  <div className="relative">
                    <div className="overflow-x-auto pb-8 scrollbar-hide -mx-8 px-8">
                      <div className="flex gap-6 min-w-max">
                        {section.content.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            to={`/resources/applied-ai/${section.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/${item.subtitle.toLowerCase().replace(/\s+/g, '-').replace(/[(),]/g, '').replace(/&/g, 'and').replace(/\//g, '-')}`}
                            state={{ title: item.subtitle }}
                            className="group w-80 flex-shrink-0 border border-black/10 hover:border-black/30 transition-all duration-300 bg-white cursor-pointer overflow-hidden"
                          >
                            {/* Image with hover overlay for description */}
                            <div className="relative w-full h-48 overflow-hidden border-b border-black/5 bg-black/90 group-hover:bg-black transition-colors duration-300">
                              {/* Sleek title display */}
                              <div className="absolute inset-0 flex items-center justify-center p-8">
                                <h4 className="text-2xl font-extralight text-white/90 text-center leading-tight tracking-tight">
                                  {item.subtitle}
                                </h4>
                              </div>
                              
                              {/* Description overlay on hover */}
                              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 overflow-y-auto">
                                <p className="text-xs font-light text-white/90 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* Scroll Indicator */}
                    <div className="text-center mt-2">
                      <p className="text-xs font-light text-black/40 tracking-wide">
                        ← Scroll to explore →
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AppliedAI;
