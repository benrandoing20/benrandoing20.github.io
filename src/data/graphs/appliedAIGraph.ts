import { GraphData, nodeColors, getNodeSize } from '@/types/graphData';

export const appliedAIGraphData: GraphData = {
  nodes: [
    // ================= L0 — Root =================
    { 
      id: 'applied-ai', 
      name: 'Applied AI', 
      type: 'category', 
      layer: 0,
      description: 'A practical roadmap to building real AI systems—from the math fundamentals to large language models, production deployment, RAG systems, and safety—everything you need to go from concept to production.',
      color: nodeColors.category,
      size: getNodeSize(0, 'category')
    },

    // ================= L1 — Major Domains =================
    { 
      id: 'foundations', 
      name: 'Foundations', 
      type: 'category', 
      layer: 1,
      description: 'The mathematical and algorithmic building blocks of AI—linear algebra, probability, optimization, classical machine learning, and how neural networks actually learn through backpropagation.',
      color: nodeColors.category,
      size: getNodeSize(1, 'category')
    },
    { 
      id: 'deep-learning-systems', 
      name: 'Deep Learning', 
      type: 'category', 
      layer: 1,
      description: 'Modern neural network architectures that power AI—transformers for language understanding, CNNs for image recognition, diffusion models for generating images, and the attention mechanisms that make it all work.',
      color: nodeColors.category,
      size: getNodeSize(1, 'category')
    },
    { 
      id: 'specialized-ai', 
      name: 'Specialized AI', 
      type: 'category', 
      layer: 1,
      description: 'AI techniques tailored to specific domains—computer vision for understanding images and video, reinforcement learning for sequential decision-making, and multimodal models that combine vision and language.',
      color: nodeColors.category,
      size: getNodeSize(1, 'category')
    },
    { 
      id: 'production-deployment', 
      name: 'Production & Deployment', 
      type: 'category', 
      layer: 1,
      description: 'Taking AI from notebook to production—MLOps infrastructure for tracking experiments, optimizing models for speed and cost, monitoring for drift, data pipelines, and managing models at scale.',
      color: nodeColors.category,
      size: getNodeSize(1, 'category')
    },
    { 
      id: 'agents-and-rag',
      name: 'AI Agents & RAG',
      type: 'category',
      layer: 1,
      description: 'Building AI systems that can retrieve information and use tools—RAG for grounding LLMs in your data, function calling for letting models interact with APIs, and agent orchestration for complex multi-step tasks.',
      color: nodeColors.category,
      size: getNodeSize(1, 'category')
    },
    { 
      id: 'safety-eval-alignment',
      name: 'AI Safety & Model Evaluation',
      type: 'category',
      layer: 1,
      description: 'Making AI systems reliable and safe—evaluating model quality with automated tests, adding guardrails to prevent harmful outputs, and aligning models with human preferences through RLHF.',
      color: nodeColors.category,
      size: getNodeSize(1, 'category')
    },

    // ================= L2 — Sub-Domains =================
    // Foundations
    { id: 'mathematics', name: 'Mathematics', type: 'category', layer: 2, description: 'The math you actually need for AI—matrix operations for neural networks, probability for understanding uncertainty, calculus for gradient descent, and optimization theory for training models efficiently.', color: nodeColors.category, size: getNodeSize(2, 'category') },
    { id: 'classical-ml', name: 'Classical ML', type: 'category', layer: 2, description: 'Pre-deep learning machine learning that still matters—decision trees and random forests, gradient boosting machines like XGBoost, SVMs, and ensemble methods that often outperform neural nets on tabular data.', color: nodeColors.category, size: getNodeSize(2, 'category') },
    { id: 'neural-fundamentals', name: 'Neural Fundamentals', type: 'category', layer: 2, description: 'How neural networks learn—forward and backward propagation, gradient descent variants like Adam, activation functions, regularization techniques like dropout, and how to train models that generalize.', color: nodeColors.category, size: getNodeSize(2, 'category') },

    // Deep Learning Systems
    { id: 'architectures', name: 'Architectures', type: 'category', layer: 2, description: 'The core neural network building blocks—convolutional networks for images with spatial structure, recurrent networks like LSTMs for sequences, and the evolution from ResNets to modern transformer architectures.', color: nodeColors.category, size: getNodeSize(2, 'category') },
    { id: 'nlp-transformers', name: 'NLP & Transformers', type: 'category', layer: 2, description: 'How AI understands and generates language—transformer architecture with self-attention, tokenization and embeddings, large language models like GPT and BERT, and fine-tuning with LoRA and prompt engineering.', color: nodeColors.category, size: getNodeSize(2, 'category') },
    { id: 'generative-models', name: 'Generative Models', type: 'category', layer: 2, description: 'AI that creates new content—GANs with adversarial training for generating images, VAEs for learning compressed representations, and diffusion models like Stable Diffusion that power modern image generation.', color: nodeColors.category, size: getNodeSize(2, 'category') },

    // Specialized AI
    { id: 'computer-vision', name: 'Computer Vision', type: 'category', layer: 2, description: 'Teaching machines to see—image classification for recognizing objects, object detection with YOLO and R-CNN, semantic and instance segmentation, and vision-language models that understand both images and text.', color: nodeColors.category, size: getNodeSize(2, 'category') },
    { id: 'reinforcement-learning', name: 'Reinforcement Learning', type: 'category', layer: 2, description: 'AI that learns by trial and error—Markov decision processes, value-based methods like Q-learning and DQN, policy gradient approaches like PPO, and offline RL for learning from logged data without environment interaction.', color: nodeColors.category, size: getNodeSize(2, 'category') },
    { id: 'multimodal-ai', name: 'Multimodal AI', type: 'category', layer: 2, description: 'Models that understand multiple modalities—vision-language models like CLIP that connect images and text, audio-text models for speech recognition, and unified models that can handle any combination of inputs.', color: nodeColors.category, size: getNodeSize(2, 'category') },

    // Production & Deployment
    { id: 'mlops-infrastructure', name: 'MLOps Infrastructure', type: 'category', layer: 2, description: 'The engineering systems for ML workflows—experiment tracking with W&B or MLflow, orchestrating training pipelines with DAGs, model registries for versioning, and CI/CD for machine learning.', color: nodeColors.category, size: getNodeSize(2, 'category') },
    { id: 'model-optimization', name: 'Model Optimization', type: 'category', layer: 2, description: 'Making models faster and cheaper—quantization to INT8/FP8, pruning to remove unnecessary weights, knowledge distillation to compress models, model compilation, and distributed training across GPUs.', color: nodeColors.category, size: getNodeSize(2, 'category') },
    { id: 'monitoring-governance', name: 'Monitoring & Governance', type: 'category', layer: 2, description: 'Keeping models healthy in production—tracking latency and throughput, detecting data drift and model decay, maintaining data lineage, implementing approval workflows, and alerting when things go wrong.', color: nodeColors.category, size: getNodeSize(2, 'category') },
    { id: 'serving-inference', name: 'Serving & Inference', type: 'category', layer: 2, description: 'Running models at scale—batch vs real-time inference tradeoffs, autoscaling to handle traffic, optimizing for latency and cost, serving frameworks like vLLM and TensorRT, and GPU utilization.', color: nodeColors.category, size: getNodeSize(2, 'category') },
    { id: 'data-engineering', name: 'Data Engineering', type: 'category', layer: 2, description: 'Pipelines and infrastructure for ML data—feature stores for consistent online/offline features, data quality monitoring, vector databases for similarity search, and managing embeddings at scale.', color: nodeColors.category, size: getNodeSize(2, 'category') },
    { id: 'security-privacy', name: 'Security & Privacy', type: 'category', layer: 2, description: 'Protecting models and data—handling PII and sensitive data, red-teaming to find vulnerabilities, access control and authentication, securing APIs, and compliance with data protection regulations.', color: nodeColors.category, size: getNodeSize(2, 'category') },

    // Agents & RAG
    { id: 'rag-systems', name: 'RAG Systems', type: 'category', layer: 2, description: 'Retrieval-Augmented Generation—chunking documents into retrievable pieces, creating embeddings, indexing with vector search, retrieving relevant context, re-ranking results, and injecting knowledge into LLM prompts.', color: nodeColors.category, size: getNodeSize(2, 'category') },
    { id: 'tool-use-agents', name: 'Tool-Use Agents', type: 'category', layer: 2, description: 'LLMs that can use external tools—function calling with structured outputs, defining tool schemas, letting models call APIs, calculators, databases, and web searches, and handling tool errors gracefully.', color: nodeColors.category, size: getNodeSize(2, 'category') },
    { id: 'agent-orchestration', name: 'Agent Orchestration', type: 'category', layer: 2, description: 'Coordinating complex AI agents—multi-agent patterns where agents collaborate, giving agents memory of past interactions, routing requests to specialized agents, and adding guardrails to prevent mistakes.', color: nodeColors.category, size: getNodeSize(2, 'category') },

    // Safety & Model Evaluation
    { id: 'eval-frameworks', name: 'Evaluation Frameworks', type: 'category', layer: 2, description: 'Systematically testing AI systems—building golden test sets, automated evaluation metrics, human-in-the-loop evals, A/B testing in production, regression testing, and continuous evaluation pipelines.', color: nodeColors.category, size: getNodeSize(2, 'category') },
    { id: 'safety-guardrails', name: 'Safety & Guardrails', type: 'category', layer: 2, description: 'Preventing harmful model outputs—content filtering for toxic/inappropriate content, detecting and blocking jailbreak attempts, implementing usage policies, and input/output validation with tools like Nemo Guardrails.', color: nodeColors.category, size: getNodeSize(2, 'category') },
    { id: 'alignment-training', name: 'Alignment & Training', type: 'category', layer: 2, description: 'Teaching models human preferences—Reinforcement Learning from Human Feedback (RLHF), Direct Preference Optimization (DPO), collecting preference data, constitutional AI, and safety tuning for responsible behavior.', color: nodeColors.category, size: getNodeSize(2, 'category') },

    // ================= L4 — CONCEPTS (enriching L2 nodes) =================
    // Mathematics
    { id: 'linear-algebra-topic', name: 'Linear Algebra', type: 'concept', layer: 4, description: 'Vectors, matrices, and tensors—the fundamental data structures of AI. Matrix multiplication, eigenvalues, decompositions like SVD, and how linear transformations power neural network layers.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'probability-stats', name: 'Probability & Statistics', type: 'concept', layer: 4, description: 'Reasoning under uncertainty—Bayesian inference for updating beliefs, probability distributions, maximum likelihood estimation, hypothesis testing, and the statistical foundations of machine learning.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'optimization', name: 'Optimization', type: 'concept', layer: 4, description: 'Finding the best parameters—gradient descent and its variants, constrained optimization with Lagrange multipliers, convex optimization, learning rates and scheduling, and convergence guarantees.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },

    // Classical ML
    { id: 'supervised-methods', name: 'Supervised Methods', type: 'concept', layer: 4, description: 'Learning from labeled data—classification to predict categories, regression to predict continuous values, linear and logistic regression, and evaluation metrics like accuracy, precision, recall, and F1.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'unsupervised-methods', name: 'Unsupervised Methods', type: 'concept', layer: 4, description: 'Finding patterns without labels—clustering algorithms like k-means and DBSCAN, dimensionality reduction with PCA and t-SNE, anomaly detection, and learning hidden structure in data.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },

    // Neural Fundamentals
    { id: 'training-fundamentals', name: 'Training Fundamentals', type: 'concept', layer: 4, description: 'How neural networks learn—backpropagation to compute gradients, stochastic gradient descent and momentum, adaptive optimizers like Adam and RMSprop, learning rate schedules, and mini-batch training.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'regularization', name: 'Regularization', type: 'concept', layer: 4, description: 'Preventing overfitting—dropout that randomly disables neurons during training, weight decay (L2 regularization), early stopping, data augmentation, and batch normalization for stable training.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },

    // Architectures
    { id: 'convolutional-networks', name: 'Convolutional Networks', type: 'concept', layer: 4, description: 'Neural networks for images—convolutional layers that detect features like edges and textures, pooling for translation invariance, architectures like ResNet with skip connections, and modern efficient designs.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'recurrent-networks', name: 'Recurrent Networks', type: 'concept', layer: 4, description: 'Neural networks for sequences—RNNs that maintain state over time, LSTMs with gating mechanisms for long-term memory, GRUs as a simpler alternative, and why transformers have largely replaced them.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },

    // NLP & Transformers
    { id: 'attention-mechanisms', name: 'Attention Mechanisms', type: 'concept', layer: 4, description: 'The key innovation in modern AI—self-attention that lets tokens look at each other, scaled dot-product attention, multi-head attention for parallel processing, and why attention beats recurrence for most tasks.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'language-models', name: 'Language Models', type: 'concept', layer: 4, description: 'AI that understands and generates text—pretraining on massive text corpora, autoregressive models like GPT that predict next tokens, masked models like BERT for understanding, and scaling laws for model size.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'fine-tuning-adaptation', name: 'Fine-tuning & Adaptation', type: 'concept', layer: 4, description: 'Adapting pretrained models to your task—full fine-tuning, parameter-efficient methods like LoRA that only train a small subset, adapters, prompt tuning, and few-shot in-context learning.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },

    // Generative Models
    { id: 'gans', name: 'GANs', type: 'concept', layer: 4, description: 'Generative Adversarial Networks—training a generator and discriminator against each other, mode collapse challenges, progressively growing GANs, StyleGAN for high-quality faces, and why diffusion is now preferred.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'diffusion-models', name: 'Diffusion Models', type: 'concept', layer: 4, description: 'State-of-the-art image generation—gradually adding noise then learning to denoise, score-based models, DDPM and DDIM sampling, latent diffusion for efficiency, and text-to-image with Stable Diffusion.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },

    // Computer Vision
    { id: 'image-classification', name: 'Image Classification', type: 'concept', layer: 4, description: 'Recognizing what\'s in an image—training CNNs on ImageNet, transfer learning from pretrained models, vision transformers (ViT), creating embedding spaces for similarity search, and zero-shot classification.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'object-detection-seg', name: 'Object Detection & Segmentation', type: 'concept', layer: 4, description: 'Finding and outlining objects—two-stage detectors like R-CNN, single-stage detectors like YOLO for real-time performance, instance segmentation with Mask R-CNN, semantic segmentation for pixel-level labels.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },

    // RL
    { id: 'value-based-rl', name: 'Value-Based RL', type: 'concept', layer: 4, description: 'Learning action values—Q-learning that estimates value of state-action pairs, Deep Q-Networks (DQN) with experience replay and target networks, double DQN to reduce overestimation, and dueling architectures.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'policy-based-rl', name: 'Policy-Based RL', type: 'concept', layer: 4, description: 'Learning policies directly—policy gradient theorem, actor-critic methods that combine value and policy, PPO for stable training with clipped objectives, A2C/A3C for parallel training, and trust region methods.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },

    // Multimodal
    { id: 'vision-language', name: 'Vision-Language Models', type: 'concept', layer: 4, description: 'Models that bridge vision and text—CLIP trained on image-text pairs with contrastive learning, BLIP for image captioning, Flamingo for few-shot learning, and modern VLMs like GPT-4 Vision that understand images.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },

    // MLOps
    { id: 'experiment-tracking', name: 'Experiment Tracking', type: 'concept', layer: 4, description: 'Recording and comparing ML experiments—logging hyperparameters, metrics, and artifacts, visualizing training curves, comparing runs, reproducing results, and collaborating across teams.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'pipeline-orchestration', name: 'Pipeline Orchestration', type: 'concept', layer: 4, description: 'Automating ML workflows—defining DAGs of dependent tasks, scheduling training jobs, handling retries and failures, parameterizing pipelines, and tools like Airflow, Prefect, and Kubeflow.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'quantization-pruning', name: 'Quantization & Pruning', type: 'concept', layer: 4, description: 'Compressing models for deployment—quantizing from FP32 to INT8 or FP8, post-training and quantization-aware training, structured and unstructured pruning for sparsity, and distilling knowledge to smaller models.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'distributed-training', name: 'Distributed Training', type: 'concept', layer: 4, description: 'Training across multiple GPUs—data parallelism, model parallelism for models too big for one GPU, ZeRO for memory optimization, pipeline parallelism, FSDP/DeepSpeed, and communication efficiency.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'model-monitoring', name: 'Model Monitoring', type: 'concept', layer: 4, description: 'Watching models in production—tracking prediction latency and throughput, measuring accuracy on live data, detecting when performance degrades, calibration monitoring, and setting up alerts.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },

    // Serving & Data Engineering
    { id: 'batch-vs-online', name: 'Batch vs Online', type: 'concept', layer: 4, description: 'Inference strategies—batch processing for large-scale offline predictions, online serving for real-time requests, streaming for continuous data, and choosing based on latency requirements and cost.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'feature-stores', name: 'Feature Stores', type: 'concept', layer: 4, description: 'Centralized feature management—ensuring online/offline consistency, versioning features, tracking lineage from raw data to features, sharing features across teams, and low-latency serving for inference.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'vector-databases', name: 'Vector Databases', type: 'concept', layer: 4, description: 'Storing and searching embeddings—approximate nearest neighbor search with HNSW and IVF, product quantization for compression, hybrid search combining keywords and vectors, and scaling to billions of vectors.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },

    // Agents & RAG
    { id: 'chunking-embeddings', name: 'Chunking & Embeddings', type: 'concept', layer: 4, description: 'Preparing documents for retrieval—splitting text into semantic chunks, choosing chunk size and overlap, generating dense embeddings with models like text-embedding-3, and handling different document types.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'rerankers', name: 'Re-rankers', type: 'concept', layer: 4, description: 'Improving retrieval quality—using cross-encoders to re-score retrieved documents, hybrid search combining keyword and semantic search, late interaction models like ColBERT, and balancing accuracy vs latency.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'function-calling', name: 'Function Calling', type: 'concept', layer: 4, description: 'Letting LLMs use tools—defining function schemas with JSON, structured output parsing, deciding when to call tools vs answer directly, chaining multiple tool calls, and handling errors and edge cases.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'agent-memory', name: 'Agent Memory & Planning', type: 'concept', layer: 4, description: 'Making agents stateful—storing conversation history and task context, summarizing long conversations, task decomposition into subtrees, scratchpads for intermediate reasoning, and routing to specialized sub-agents.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },

    // Safety & Evaluation
    { id: 'rag-evals', name: 'RAG Evals', type: 'concept', layer: 4, description: 'Evaluating retrieval systems—faithfulness (is the answer grounded in retrieved docs?), answer relevance, context precision/recall, measuring retrieval quality, and automated evaluation with RAGAS.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'guardrails', name: 'Guardrails', type: 'concept', layer: 4, description: 'Constraining model outputs—content filtering for toxicity and harm, input validation to block injection attacks, output validation with grammars, allow/deny lists, and policy enforcement with Nemo Guardrails.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },
    { id: 'alignment-methods', name: 'Alignment Methods', type: 'concept', layer: 4, description: 'Teaching models to be helpful and safe—RLHF with reward models and PPO, Direct Preference Optimization (DPO) as a simpler alternative, collecting preference data at scale, and safety fine-tuning.', color: nodeColors.concept, size: getNodeSize(4, 'concept') },

    // ================= L4 — RESOURCES (RED nodes linking to resource pages) =================
    // Foundations
    { id: 'resource-ml-basics', name: 'Machine Learning Basics', type: 'resource', layer: 4, description: 'Core algorithms and classical ML', url: '/resources/applied-ai/foundations/machine-learning-basics', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-neural-networks', name: 'Neural Networks', type: 'resource', layer: 4, description: 'How neural networks learn', url: '/resources/applied-ai/foundations/neural-networks', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-mathematics', name: 'Mathematics of AI', type: 'resource', layer: 4, description: 'The math you need for AI', url: '/resources/applied-ai/foundations/mathematics-of-ai', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Deep Learning
    { id: 'resource-cnns', name: 'Convolutional Neural Networks (CNNs)', type: 'resource', layer: 4, description: 'Neural networks for images', url: '/resources/applied-ai/deep-learning/convolutional-neural-networks-cnns', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-rnns', name: 'Recurrent Neural Networks (RNNs)', type: 'resource', layer: 4, description: 'Neural networks for sequences', url: '/resources/applied-ai/deep-learning/recurrent-neural-networks-rnns', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-transformers', name: 'Transformers', type: 'resource', layer: 4, description: 'Self-attention architecture', url: '/resources/applied-ai/deep-learning/transformers', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Natural Language Processing
    { id: 'resource-language-models', name: 'Language Models', type: 'resource', layer: 4, description: 'GPT, BERT and LLMs', url: '/resources/applied-ai/natural-language-processing/language-models', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-fine-tuning', name: 'Fine-tuning & Transfer Learning', type: 'resource', layer: 4, description: 'Adapting pretrained models', url: '/resources/applied-ai/natural-language-processing/fine-tuning-and-transfer-learning', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-rag', name: 'Practical Applications', type: 'resource', layer: 4, description: 'RAG and production NLP', url: '/resources/applied-ai/natural-language-processing/practical-applications', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Computer Vision
    { id: 'resource-image-classification', name: 'Image Classification', type: 'resource', layer: 4, description: 'Recognition and vision transformers', url: '/resources/applied-ai/computer-vision/image-classification', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-object-detection', name: 'Object Detection', type: 'resource', layer: 4, description: 'YOLO, R-CNN and segmentation', url: '/resources/applied-ai/computer-vision/object-detection', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-generative-models', name: 'Generative Models', type: 'resource', layer: 4, description: 'GANs and diffusion models', url: '/resources/applied-ai/computer-vision/generative-models', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Reinforcement Learning
    { id: 'resource-rl-core', name: 'Core Concepts', type: 'resource', layer: 4, description: 'Q-learning and value-based RL', url: '/resources/applied-ai/reinforcement-learning/core-concepts', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-deep-rl', name: 'Deep RL', type: 'resource', layer: 4, description: 'Policy gradients and PPO', url: '/resources/applied-ai/reinforcement-learning/deep-rl', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-rl-realworld', name: 'Real-world Applications', type: 'resource', layer: 4, description: 'RL in production', url: '/resources/applied-ai/reinforcement-learning/real-world-applications', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Production & Deployment
    { id: 'resource-mlops', name: 'MLOps', type: 'resource', layer: 4, description: 'ML engineering systems', url: '/resources/applied-ai/production-and-deployment/mlops', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-scaling', name: 'Scaling AI Systems', type: 'resource', layer: 4, description: 'Optimization and serving', url: '/resources/applied-ai/production-and-deployment/scaling-ai-systems', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-monitoring', name: 'Monitoring & Maintenance', type: 'resource', layer: 4, description: 'Production monitoring', url: '/resources/applied-ai/production-and-deployment/monitoring-and-maintenance', color: nodeColors.resource, size: getNodeSize(4, 'resource') },

    // ================= L4 — Companies/Tools =================
    // { id: 'openai', name: 'OpenAI', type: 'company', layer: 5, description: 'GPT models & APIs', url: 'https://openai.com', color: nodeColors.company, size: getNodeSize(5, 'company') },
    // { id: 'anthropic', name: 'Anthropic', type: 'company', layer: 5, description: 'Claude & safety research', url: 'https://anthropic.com', color: nodeColors.company, size: getNodeSize(5, 'company') },
    // { id: 'google-ai', name: 'Google AI', type: 'company', layer: 5, description: 'Transformers, Gemini', url: 'https://ai.google', color: nodeColors.company, size: getNodeSize(5, 'company') },
    // { id: 'mistral', name: 'Mistral', type: 'company', layer: 5, description: 'Open-weight LLMs', url: 'https://mistral.ai', color: nodeColors.company, size: getNodeSize(5, 'company') },

    // { id: 'huggingface', name: 'Hugging Face', type: 'company', layer: 5, description: 'Models, datasets, TGI', url: 'https://huggingface.co', color: nodeColors.company, size: getNodeSize(5, 'company') },
    // { id: 'langchain', name: 'LangChain', type: 'company', layer: 5, description: 'RAG & agent framework', url: 'https://langchain.com', color: nodeColors.company, size: getNodeSize(5, 'company') },
    // { id: 'llamaindex', name: 'LlamaIndex', type: 'company', layer: 5, description: 'Data framework for RAG', url: 'https://llamaindex.ai', color: nodeColors.company, size: getNodeSize(5, 'company') },

    // { id: 'pinecone', name: 'Pinecone', type: 'company', layer: 5, description: 'Vector DB service', url: 'https://www.pinecone.io', color: nodeColors.company, size: getNodeSize(5, 'company') },
    // { id: 'weaviate', name: 'Weaviate', type: 'company', layer: 5, description: 'Vector search DB', url: 'https://weaviate.io', color: nodeColors.company, size: getNodeSize(5, 'company') },
    // { id: 'chroma', name: 'Chroma', type: 'company', layer: 5, description: 'Embeddings DB', url: 'https://www.trychroma.com', color: nodeColors.company, size: getNodeSize(5, 'company') },

    // { id: 'nvidia', name: 'NVIDIA', type: 'company', layer: 5, description: 'GPUs, Triton, TensorRT-LLM', url: 'https://nvidia.com', color: nodeColors.company, size: getNodeSize(5, 'company') },
    // { id: 'vllm', name: 'vLLM', type: 'company', layer: 5, description: 'High-throughput LLM serving', url: 'https://vllm.ai', color: nodeColors.company, size: getNodeSize(5, 'company') },
    // { id: 'modal', name: 'Modal', type: 'company', layer: 5, description: 'Serverless GPU workloads', url: 'https://modal.com', color: nodeColors.company, size: getNodeSize(5, 'company') },

    // { id: 'wandb', name: 'Weights & Biases', type: 'company', layer: 5, description: 'Experiment tracking & evals', url: 'https://wandb.ai', color: nodeColors.company, size: getNodeSize(5, 'company') },
    // { id: 'mlflow', name: 'MLflow', type: 'company', layer: 5, description: 'Tracking & model registry', url: 'https://mlflow.org', color: nodeColors.company, size: getNodeSize(5, 'company') },
    // { id: 'ray', name: 'Ray', type: 'company', layer: 5, description: 'Distributed compute', url: 'https://ray.io', color: nodeColors.company, size: getNodeSize(5, 'company') },

    // { id: 'deeval', name: 'DeepEval / Promptfoo', type: 'company', layer: 5, description: 'LLM eval frameworks', url: 'https://github.com/confident-ai/deepeval', color: nodeColors.company, size: getNodeSize(5, 'company') },
    // { id: 'nemo-guardrails', name: 'Nemo Guardrails', type: 'company', layer: 5, description: 'Conversation safety policies', url: 'https://github.com/NVIDIA/NeMo-Guardrails', color: nodeColors.company, size: getNodeSize(5, 'company') },
    // { id: 'lakera', name: 'Lakera', type: 'company', layer: 5, description: 'Safety filters & red teaming', url: 'https://www.lakera.ai', color: nodeColors.company, size: getNodeSize(5, 'company') },
  ],

  links: [
    // ============= L0 → L1 =============
    { source: 'applied-ai', target: 'foundations', strength: 1 },
    { source: 'applied-ai', target: 'deep-learning-systems', strength: 1 },
    { source: 'applied-ai', target: 'specialized-ai', strength: 1 },
    { source: 'applied-ai', target: 'production-deployment', strength: 1 },
    { source: 'applied-ai', target: 'agents-and-rag', strength: 1 },
    { source: 'applied-ai', target: 'safety-eval-alignment', strength: 1 },

    // ============= L1 → L2 =============
    // Foundations
    { source: 'foundations', target: 'mathematics', strength: 1 },
    { source: 'foundations', target: 'classical-ml', strength: 1 },
    { source: 'foundations', target: 'neural-fundamentals', strength: 1 },

    // Deep Learning Systems
    { source: 'deep-learning-systems', target: 'architectures', strength: 1 },
    { source: 'deep-learning-systems', target: 'nlp-transformers', strength: 1 },
    { source: 'deep-learning-systems', target: 'generative-models', strength: 1 },

    // Specialized AI
    { source: 'specialized-ai', target: 'computer-vision', strength: 1 },
    { source: 'specialized-ai', target: 'reinforcement-learning', strength: 1 },
    { source: 'specialized-ai', target: 'multimodal-ai', strength: 1 },

    // Production & Deployment
    { source: 'production-deployment', target: 'mlops-infrastructure', strength: 1 },
    { source: 'production-deployment', target: 'model-optimization', strength: 1 },
    { source: 'production-deployment', target: 'monitoring-governance', strength: 1 },
    { source: 'production-deployment', target: 'serving-inference', strength: 1 },
    { source: 'production-deployment', target: 'data-engineering', strength: 1 },
    { source: 'production-deployment', target: 'security-privacy', strength: 1 },

    // Agents & RAG
    { source: 'agents-and-rag', target: 'rag-systems', strength: 1 },
    { source: 'agents-and-rag', target: 'tool-use-agents', strength: 1 },
    { source: 'agents-and-rag', target: 'agent-orchestration', strength: 1 },

    // Safety & Eval
    { source: 'safety-eval-alignment', target: 'eval-frameworks', strength: 1 },
    { source: 'safety-eval-alignment', target: 'safety-guardrails', strength: 1 },
    { source: 'safety-eval-alignment', target: 'alignment-training', strength: 1 },

    // ============= L2 → L4 (CONCEPTS - enriching L2 nodes) =============
    // Mathematics
    { source: 'mathematics', target: 'linear-algebra-topic', strength: 1 },
    { source: 'mathematics', target: 'probability-stats', strength: 1 },
    { source: 'mathematics', target: 'optimization', strength: 1 },

    // Classical ML
    { source: 'classical-ml', target: 'supervised-methods', strength: 1 },
    { source: 'classical-ml', target: 'unsupervised-methods', strength: 1 },

    // Neural Fundamentals
    { source: 'neural-fundamentals', target: 'training-fundamentals', strength: 1 },
    { source: 'neural-fundamentals', target: 'regularization', strength: 1 },

    // Architectures
    { source: 'architectures', target: 'convolutional-networks', strength: 1 },
    { source: 'architectures', target: 'recurrent-networks', strength: 1 },

    // NLP & Transformers
    { source: 'nlp-transformers', target: 'attention-mechanisms', strength: 1 },
    { source: 'nlp-transformers', target: 'language-models', strength: 1 },
    { source: 'nlp-transformers', target: 'fine-tuning-adaptation', strength: 1 },

    // Generative Models
    { source: 'generative-models', target: 'gans', strength: 1 },
    { source: 'generative-models', target: 'diffusion-models', strength: 1 },

    // Computer Vision
    { source: 'computer-vision', target: 'image-classification', strength: 1 },
    { source: 'computer-vision', target: 'object-detection-seg', strength: 1 },

    // RL
    { source: 'reinforcement-learning', target: 'value-based-rl', strength: 1 },
    { source: 'reinforcement-learning', target: 'policy-based-rl', strength: 1 },

    // Multimodal
    { source: 'multimodal-ai', target: 'vision-language', strength: 1 },

    // MLOps
    { source: 'mlops-infrastructure', target: 'experiment-tracking', strength: 1 },
    { source: 'mlops-infrastructure', target: 'pipeline-orchestration', strength: 1 },
    { source: 'model-optimization', target: 'quantization-pruning', strength: 1 },
    { source: 'model-optimization', target: 'distributed-training', strength: 1 },
    { source: 'monitoring-governance', target: 'model-monitoring', strength: 1 },

    // Serving/Data Eng
    { source: 'serving-inference', target: 'batch-vs-online', strength: 1 },
    { source: 'data-engineering', target: 'feature-stores', strength: 1 },
    { source: 'data-engineering', target: 'vector-databases', strength: 1 },

    // Agents & RAG
    { source: 'rag-systems', target: 'chunking-embeddings', strength: 1 },
    { source: 'rag-systems', target: 'rerankers', strength: 1 },
    { source: 'tool-use-agents', target: 'function-calling', strength: 1 },
    { source: 'agent-orchestration', target: 'agent-memory', strength: 1 },

    // Safety & Eval
    { source: 'eval-frameworks', target: 'rag-evals', strength: 1 },
    { source: 'safety-guardrails', target: 'guardrails', strength: 1 },
    { source: 'alignment-training', target: 'alignment-methods', strength: 1 },

    // ============= L2 → L4 (RESOURCES - red nodes linking to pages) =============
    // Foundations
    { source: 'classical-ml', target: 'resource-ml-basics', strength: 0.8 },
    { source: 'neural-fundamentals', target: 'resource-neural-networks', strength: 0.8 },
    { source: 'mathematics', target: 'resource-mathematics', strength: 0.8 },
    
    // Deep Learning
    { source: 'architectures', target: 'resource-cnns', strength: 0.8 },
    { source: 'architectures', target: 'resource-rnns', strength: 0.8 },
    { source: 'nlp-transformers', target: 'resource-transformers', strength: 0.8 },
    
    // NLP
    { source: 'nlp-transformers', target: 'resource-language-models', strength: 0.8 },
    { source: 'nlp-transformers', target: 'resource-fine-tuning', strength: 0.8 },
    { source: 'rag-systems', target: 'resource-rag', strength: 0.8 },
    
    // Computer Vision
    { source: 'computer-vision', target: 'resource-image-classification', strength: 0.8 },
    { source: 'computer-vision', target: 'resource-object-detection', strength: 0.8 },
    { source: 'generative-models', target: 'resource-generative-models', strength: 0.8 },
    
    // Reinforcement Learning
    { source: 'reinforcement-learning', target: 'resource-rl-core', strength: 0.8 },
    { source: 'reinforcement-learning', target: 'resource-deep-rl', strength: 0.8 },
    { source: 'reinforcement-learning', target: 'resource-rl-realworld', strength: 0.8 },
    
    // Production
    { source: 'mlops-infrastructure', target: 'resource-mlops', strength: 0.8 },
    { source: 'model-optimization', target: 'resource-scaling', strength: 0.8 },
    { source: 'monitoring-governance', target: 'resource-monitoring', strength: 0.8 },

    // ============= Companies/Tools to Topics =============
    // LLM providers
    // { source: 'language-models', target: 'openai', strength: 0.5 },
    // { source: 'language-models', target: 'anthropic', strength: 0.5 },
    // { source: 'attention-mechanisms', target: 'google-ai', strength: 0.5 },
    // { source: 'language-models', target: 'mistral', strength: 0.5 },

    // RAG/Agents stacks
    // { source: 'rag-systems', target: 'langchain', strength: 0.5 },
    // { source: 'rag-systems', target: 'llamaindex', strength: 0.5 },
    // { source: 'vector-databases', target: 'pinecone', strength: 0.5 },
    // { source: 'vector-databases', target: 'weaviate', strength: 0.5 },
    // { source: 'vector-databases', target: 'chroma', strength: 0.5 },

    // Serving/Infra
    // { source: 'serving-inference', target: 'vllm', strength: 0.5 },
    // { source: 'serving-inference', target: 'modal', strength: 0.5 },
    // { source: 'distributed-training', target: 'nvidia', strength: 0.5 },

    // MLOps
    // { source: 'experiment-tracking', target: 'wandb', strength: 0.5 },
    // { source: 'experiment-tracking', target: 'mlflow', strength: 0.5 },
    // { source: 'distributed-training', target: 'ray', strength: 0.5 },

    // Safety/Evals
    // { source: 'eval-frameworks', target: 'deeval', strength: 0.5 },
    // { source: 'safety-guardrails', target: 'nemo-guardrails', strength: 0.5 },
    // { source: 'safety-guardrails', target: 'lakera', strength: 0.5 },
  ]
};
