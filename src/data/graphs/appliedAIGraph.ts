import { GraphData, nodeColors, getNodeSize } from '@/types/graphData';

export const appliedAIGraphData: GraphData = {
  nodes: [
    // Layer 0 - Root Category
    { 
      id: 'applied-ai', 
      name: 'Applied AI', 
      type: 'category', 
      layer: 0,
      description: 'Comprehensive guide to practical AI implementation',
      color: nodeColors.category,
      size: getNodeSize(0, 'category')
    },

    // ============ Layer 1 - Major Domains (Black) ============
    { 
      id: 'foundations', 
      name: 'Foundations', 
      type: 'topic', 
      layer: 1,
      description: 'Core concepts and mathematical foundations',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'deep-learning-systems', 
      name: 'Deep Learning Systems', 
      type: 'topic', 
      layer: 1,
      description: 'Modern deep learning architectures',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'specialized-ai', 
      name: 'Specialized AI', 
      type: 'topic', 
      layer: 1,
      description: 'Domain-specific AI applications',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'production-deployment', 
      name: 'Production & Deployment', 
      type: 'topic', 
      layer: 1,
      description: 'Deploying AI at scale',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },

    // ============ Layer 2 - Sub-Domains (Black) ============
    
    // Foundations Sub-domains
    { 
      id: 'mathematics', 
      name: 'Mathematics', 
      type: 'topic', 
      layer: 2,
      description: 'Mathematical foundations for AI',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'classical-ml', 
      name: 'Classical ML', 
      type: 'topic', 
      layer: 2,
      description: 'Traditional machine learning',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'neural-fundamentals', 
      name: 'Neural Fundamentals', 
      type: 'topic', 
      layer: 2,
      description: 'Basic neural network concepts',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Deep Learning Sub-domains
    { 
      id: 'architectures', 
      name: 'Architectures', 
      type: 'topic', 
      layer: 2,
      description: 'Neural network architectures',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'nlp-transformers', 
      name: 'NLP & Transformers', 
      type: 'topic', 
      layer: 2,
      description: 'Natural language processing',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'generative-models', 
      name: 'Generative Models', 
      type: 'topic', 
      layer: 2,
      description: 'Content generation systems',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Specialized AI Sub-domains
    { 
      id: 'computer-vision', 
      name: 'Computer Vision', 
      type: 'topic', 
      layer: 2,
      description: 'Visual perception and processing',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'reinforcement-learning', 
      name: 'Reinforcement Learning', 
      type: 'topic', 
      layer: 2,
      description: 'Decision making and control',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'multimodal-ai', 
      name: 'Multimodal AI', 
      type: 'topic', 
      layer: 2,
      description: 'Cross-modal learning',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Production Sub-domains
    { 
      id: 'mlops-infrastructure', 
      name: 'MLOps Infrastructure', 
      type: 'topic', 
      layer: 2,
      description: 'ML operations and pipelines',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'model-optimization', 
      name: 'Model Optimization', 
      type: 'topic', 
      layer: 2,
      description: 'Efficiency and scaling',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'monitoring-governance', 
      name: 'Monitoring & Governance', 
      type: 'topic', 
      layer: 2,
      description: 'Model management and compliance',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // ============ Layer 3 - Specific Topics (Black) ============
    
    // Mathematics Topics
    { 
      id: 'linear-algebra-topic', 
      name: 'Linear Algebra', 
      type: 'topic', 
      layer: 3,
      description: 'Vectors and matrices',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'probability-stats', 
      name: 'Probability & Statistics', 
      type: 'topic', 
      layer: 3,
      description: 'Statistical foundations',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'optimization', 
      name: 'Optimization', 
      type: 'topic', 
      layer: 3,
      description: 'Gradient-based methods',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Classical ML Topics
    { 
      id: 'supervised-methods', 
      name: 'Supervised Methods', 
      type: 'topic', 
      layer: 3,
      description: 'Classification and regression',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'unsupervised-methods', 
      name: 'Unsupervised Methods', 
      type: 'topic', 
      layer: 3,
      description: 'Clustering and dimension reduction',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Neural Fundamentals Topics
    { 
      id: 'training-fundamentals', 
      name: 'Training Fundamentals', 
      type: 'topic', 
      layer: 3,
      description: 'Backpropagation and optimization',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'regularization', 
      name: 'Regularization', 
      type: 'topic', 
      layer: 3,
      description: 'Preventing overfitting',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Architectures Topics
    { 
      id: 'convolutional-networks', 
      name: 'Convolutional Networks', 
      type: 'topic', 
      layer: 3,
      description: 'CNNs and variants',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'recurrent-networks', 
      name: 'Recurrent Networks', 
      type: 'topic', 
      layer: 3,
      description: 'RNNs and LSTMs',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // NLP & Transformers Topics
    { 
      id: 'attention-mechanisms', 
      name: 'Attention Mechanisms', 
      type: 'topic', 
      layer: 3,
      description: 'Self-attention and transformers',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'language-models', 
      name: 'Language Models', 
      type: 'topic', 
      layer: 3,
      description: 'LLMs and pre-training',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'fine-tuning-adaptation', 
      name: 'Fine-tuning & Adaptation', 
      type: 'topic', 
      layer: 3,
      description: 'Transfer learning techniques',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Generative Models Topics
    { 
      id: 'gans', 
      name: 'GANs', 
      type: 'topic', 
      layer: 3,
      description: 'Generative adversarial networks',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'diffusion-models', 
      name: 'Diffusion Models', 
      type: 'topic', 
      layer: 3,
      description: 'Stable diffusion and variants',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Computer Vision Topics
    { 
      id: 'image-classification', 
      name: 'Image Classification', 
      type: 'topic', 
      layer: 3,
      description: 'Visual recognition',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'object-detection-seg', 
      name: 'Object Detection & Segmentation', 
      type: 'topic', 
      layer: 3,
      description: 'Localization and segmentation',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Reinforcement Learning Topics
    { 
      id: 'value-based-rl', 
      name: 'Value-Based RL', 
      type: 'topic', 
      layer: 3,
      description: 'Q-learning and DQN',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'policy-based-rl', 
      name: 'Policy-Based RL', 
      type: 'topic', 
      layer: 3,
      description: 'Policy gradients and PPO',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Multimodal AI Topics
    { 
      id: 'vision-language', 
      name: 'Vision-Language Models', 
      type: 'topic', 
      layer: 3,
      description: 'CLIP and multimodal transformers',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // MLOps Topics
    { 
      id: 'experiment-tracking', 
      name: 'Experiment Tracking', 
      type: 'topic', 
      layer: 3,
      description: 'Versioning and tracking',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'pipeline-orchestration', 
      name: 'Pipeline Orchestration', 
      type: 'topic', 
      layer: 3,
      description: 'Workflow automation',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Model Optimization Topics
    { 
      id: 'quantization-pruning', 
      name: 'Quantization & Pruning', 
      type: 'topic', 
      layer: 3,
      description: 'Model compression',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },
    { 
      id: 'distributed-training', 
      name: 'Distributed Training', 
      type: 'topic', 
      layer: 3,
      description: 'Scaling across GPUs',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // Monitoring Topics
    { 
      id: 'model-monitoring', 
      name: 'Model Monitoring', 
      type: 'topic', 
      layer: 3,
      description: 'Performance tracking',
      color: nodeColors.category,
      size: getNodeSize(3, 'topic')
    },

    // ============ Layer 4+ - Colored Nodes (Concepts, Companies) ============
    
    // Linear Algebra Concepts
    { 
      id: 'matrix-operations', 
      name: 'Matrix Operations', 
      type: 'concept', 
      layer: 4,
      description: 'Multiplication, decomposition',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },
    { 
      id: 'eigenvalues', 
      name: 'Eigenvalues & Eigenvectors', 
      type: 'concept', 
      layer: 4,
      description: 'Spectral decomposition',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Probability Concepts
    { 
      id: 'bayesian-inference', 
      name: 'Bayesian Inference', 
      type: 'concept', 
      layer: 4,
      description: 'Probabilistic reasoning',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Optimization Concepts
    { 
      id: 'gradient-descent', 
      name: 'Gradient Descent', 
      type: 'concept', 
      layer: 4,
      description: 'SGD, Adam, RMSprop',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Supervised Methods Concepts
    { 
      id: 'decision-trees', 
      name: 'Decision Trees', 
      type: 'concept', 
      layer: 4,
      description: 'Tree-based models',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },
    { 
      id: 'ensemble-methods', 
      name: 'Ensemble Methods', 
      type: 'concept', 
      layer: 4,
      description: 'Random forests, XGBoost',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Unsupervised Concepts
    { 
      id: 'k-means', 
      name: 'K-Means Clustering', 
      type: 'concept', 
      layer: 4,
      description: 'Centroid-based clustering',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },
    { 
      id: 'pca', 
      name: 'PCA', 
      type: 'concept', 
      layer: 4,
      description: 'Principal component analysis',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Training Concepts
    { 
      id: 'backpropagation', 
      name: 'Backpropagation', 
      type: 'concept', 
      layer: 4,
      description: 'Gradient computation',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },
    { 
      id: 'batch-normalization', 
      name: 'Batch Normalization', 
      type: 'concept', 
      layer: 4,
      description: 'Training stabilization',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Regularization Concepts
    { 
      id: 'dropout', 
      name: 'Dropout', 
      type: 'concept', 
      layer: 4,
      description: 'Random neuron deactivation',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // CNN Concepts
    { 
      id: 'resnet', 
      name: 'ResNet', 
      type: 'concept', 
      layer: 4,
      description: 'Residual connections',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },
    { 
      id: 'efficientnet', 
      name: 'EfficientNet', 
      type: 'concept', 
      layer: 4,
      description: 'Efficient scaling',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // RNN Concepts
    { 
      id: 'lstm', 
      name: 'LSTM', 
      type: 'concept', 
      layer: 4,
      description: 'Long short-term memory',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },
    { 
      id: 'gru', 
      name: 'GRU', 
      type: 'concept', 
      layer: 4,
      description: 'Gated recurrent units',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Attention Concepts
    { 
      id: 'self-attention', 
      name: 'Self-Attention', 
      type: 'concept', 
      layer: 4,
      description: 'Scaled dot-product attention',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },
    { 
      id: 'multi-head-attention', 
      name: 'Multi-Head Attention', 
      type: 'concept', 
      layer: 4,
      description: 'Parallel attention mechanisms',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Language Model Concepts
    { 
      id: 'gpt', 
      name: 'GPT Architecture', 
      type: 'concept', 
      layer: 4,
      description: 'Decoder-only transformers',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },
    { 
      id: 'bert', 
      name: 'BERT', 
      type: 'concept', 
      layer: 4,
      description: 'Bidirectional encoding',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Fine-tuning Concepts
    { 
      id: 'lora', 
      name: 'LoRA', 
      type: 'concept', 
      layer: 4,
      description: 'Low-rank adaptation',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },
    { 
      id: 'prompt-engineering', 
      name: 'Prompt Engineering', 
      type: 'concept', 
      layer: 4,
      description: 'In-context learning',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // GAN Concepts
    { 
      id: 'stylegan', 
      name: 'StyleGAN', 
      type: 'concept', 
      layer: 4,
      description: 'Style-based generation',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Diffusion Concepts
    { 
      id: 'stable-diffusion', 
      name: 'Stable Diffusion', 
      type: 'concept', 
      layer: 4,
      description: 'Latent diffusion models',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Object Detection Concepts
    { 
      id: 'yolo', 
      name: 'YOLO', 
      type: 'concept', 
      layer: 4,
      description: 'Real-time detection',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },
    { 
      id: 'mask-rcnn', 
      name: 'Mask R-CNN', 
      type: 'concept', 
      layer: 4,
      description: 'Instance segmentation',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // RL Concepts
    { 
      id: 'dqn', 
      name: 'DQN', 
      type: 'concept', 
      layer: 4,
      description: 'Deep Q-Networks',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },
    { 
      id: 'ppo', 
      name: 'PPO', 
      type: 'concept', 
      layer: 4,
      description: 'Proximal policy optimization',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Vision-Language Concepts
    { 
      id: 'clip', 
      name: 'CLIP', 
      type: 'concept', 
      layer: 4,
      description: 'Contrastive vision-language learning',
      color: nodeColors.concept,
      size: getNodeSize(4, 'concept')
    },

    // Companies
    { 
      id: 'openai', 
      name: 'OpenAI', 
      type: 'company', 
      layer: 5,
      description: 'GPT and ChatGPT',
      url: 'https://openai.com',
      color: nodeColors.company,
      size: getNodeSize(5, 'company')
    },
    { 
      id: 'anthropic', 
      name: 'Anthropic', 
      type: 'company', 
      layer: 5,
      description: 'Claude and AI safety',
      url: 'https://anthropic.com',
      color: nodeColors.company,
      size: getNodeSize(5, 'company')
    },
    { 
      id: 'huggingface', 
      name: 'Hugging Face', 
      type: 'company', 
      layer: 5,
      description: 'Transformers library',
      url: 'https://huggingface.co',
      color: nodeColors.company,
      size: getNodeSize(5, 'company')
    },
    { 
      id: 'nvidia', 
      name: 'NVIDIA', 
      type: 'company', 
      layer: 5,
      description: 'GPU computing',
      url: 'https://nvidia.com',
      color: nodeColors.company,
      size: getNodeSize(5, 'company')
    },
    { 
      id: 'deepmind', 
      name: 'DeepMind', 
      type: 'company', 
      layer: 5,
      description: 'AlphaGo and AlphaFold',
      url: 'https://deepmind.google',
      color: nodeColors.company,
      size: getNodeSize(5, 'company')
    },
    { 
      id: 'google-ai', 
      name: 'Google AI', 
      type: 'company', 
      layer: 5,
      description: 'Transformers and Gemini',
      url: 'https://ai.google',
      color: nodeColors.company,
      size: getNodeSize(5, 'company')
    },
  ],

  links: [
    // ============ Layer 0 to Layer 1 ============
    { source: 'applied-ai', target: 'foundations', strength: 1 },
    { source: 'applied-ai', target: 'deep-learning-systems', strength: 1 },
    { source: 'applied-ai', target: 'specialized-ai', strength: 1 },
    { source: 'applied-ai', target: 'production-deployment', strength: 1 },

    // ============ Layer 1 to Layer 2 ============
    
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

    // Production
    { source: 'production-deployment', target: 'mlops-infrastructure', strength: 1 },
    { source: 'production-deployment', target: 'model-optimization', strength: 1 },
    { source: 'production-deployment', target: 'monitoring-governance', strength: 1 },

    // ============ Layer 2 to Layer 3 ============
    
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

    // Reinforcement Learning
    { source: 'reinforcement-learning', target: 'value-based-rl', strength: 1 },
    { source: 'reinforcement-learning', target: 'policy-based-rl', strength: 1 },

    // Multimodal AI
    { source: 'multimodal-ai', target: 'vision-language', strength: 1 },

    // MLOps
    { source: 'mlops-infrastructure', target: 'experiment-tracking', strength: 1 },
    { source: 'mlops-infrastructure', target: 'pipeline-orchestration', strength: 1 },

    // Model Optimization
    { source: 'model-optimization', target: 'quantization-pruning', strength: 1 },
    { source: 'model-optimization', target: 'distributed-training', strength: 1 },

    // Monitoring
    { source: 'monitoring-governance', target: 'model-monitoring', strength: 1 },

    // ============ Layer 3 to Layer 4 (Colored Concepts) ============
    
    // Linear Algebra
    { source: 'linear-algebra-topic', target: 'matrix-operations', strength: 0.7 },
    { source: 'linear-algebra-topic', target: 'eigenvalues', strength: 0.7 },

    // Probability
    { source: 'probability-stats', target: 'bayesian-inference', strength: 0.7 },

    // Optimization
    { source: 'optimization', target: 'gradient-descent', strength: 0.7 },

    // Supervised Methods
    { source: 'supervised-methods', target: 'decision-trees', strength: 0.7 },
    { source: 'supervised-methods', target: 'ensemble-methods', strength: 0.7 },

    // Unsupervised Methods
    { source: 'unsupervised-methods', target: 'k-means', strength: 0.7 },
    { source: 'unsupervised-methods', target: 'pca', strength: 0.7 },

    // Training Fundamentals
    { source: 'training-fundamentals', target: 'backpropagation', strength: 0.7 },
    { source: 'training-fundamentals', target: 'batch-normalization', strength: 0.7 },

    // Regularization
    { source: 'regularization', target: 'dropout', strength: 0.7 },

    // CNNs
    { source: 'convolutional-networks', target: 'resnet', strength: 0.7 },
    { source: 'convolutional-networks', target: 'efficientnet', strength: 0.7 },

    // RNNs
    { source: 'recurrent-networks', target: 'lstm', strength: 0.7 },
    { source: 'recurrent-networks', target: 'gru', strength: 0.7 },

    // Attention
    { source: 'attention-mechanisms', target: 'self-attention', strength: 0.7 },
    { source: 'attention-mechanisms', target: 'multi-head-attention', strength: 0.7 },

    // Language Models
    { source: 'language-models', target: 'gpt', strength: 0.7 },
    { source: 'language-models', target: 'bert', strength: 0.7 },

    // Fine-tuning
    { source: 'fine-tuning-adaptation', target: 'lora', strength: 0.7 },
    { source: 'fine-tuning-adaptation', target: 'prompt-engineering', strength: 0.7 },

    // GANs
    { source: 'gans', target: 'stylegan', strength: 0.7 },

    // Diffusion
    { source: 'diffusion-models', target: 'stable-diffusion', strength: 0.7 },

    // Object Detection
    { source: 'object-detection-seg', target: 'yolo', strength: 0.7 },
    { source: 'object-detection-seg', target: 'mask-rcnn', strength: 0.7 },

    // RL
    { source: 'value-based-rl', target: 'dqn', strength: 0.7 },
    { source: 'policy-based-rl', target: 'ppo', strength: 0.7 },

    // Vision-Language
    { source: 'vision-language', target: 'clip', strength: 0.7 },

    // ============ Companies to Layer 3 Topics ============
    { source: 'language-models', target: 'openai', strength: 0.5 },
    { source: 'language-models', target: 'anthropic', strength: 0.5 },
    { source: 'fine-tuning-adaptation', target: 'huggingface', strength: 0.5 },
    { source: 'distributed-training', target: 'nvidia', strength: 0.5 },
    { source: 'policy-based-rl', target: 'deepmind', strength: 0.5 },
    { source: 'attention-mechanisms', target: 'google-ai', strength: 0.5 },
  ]
};
