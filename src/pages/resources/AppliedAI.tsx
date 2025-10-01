import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AppliedAI = () => {
  const sections = [
    {
      title: "Foundations",
      content: [
        {
          subtitle: "Machine Learning Basics",
          description: "Understanding supervised, unsupervised, and reinforcement learning paradigms. Core algorithms include linear regression, logistic regression, decision trees, and ensemble methods."
        },
        {
          subtitle: "Neural Networks",
          description: "From perceptrons to deep architectures. Understanding backpropagation, activation functions, and gradient descent optimization."
        },
        {
          subtitle: "Mathematics of AI",
          description: "Linear algebra, calculus, probability theory, and statistics as the foundation for all machine learning systems."
        }
      ]
    },
    {
      title: "Deep Learning",
      content: [
        {
          subtitle: "Convolutional Neural Networks (CNNs)",
          description: "Architecture for visual recognition. Key concepts: convolution layers, pooling, batch normalization, and residual connections."
        },
        {
          subtitle: "Recurrent Neural Networks (RNNs)",
          description: "Sequential data processing with LSTMs and GRUs. Applications in time series, language modeling, and speech recognition."
        },
        {
          subtitle: "Transformers",
          description: "Attention mechanisms and self-attention. The architecture behind GPT, BERT, and modern large language models."
        }
      ]
    },
    {
      title: "Natural Language Processing",
      content: [
        {
          subtitle: "Language Models",
          description: "From n-grams to GPT-4. Understanding tokenization, embeddings, and the transformer revolution."
        },
        {
          subtitle: "Fine-tuning & Transfer Learning",
          description: "Adapting pre-trained models to specific tasks. Techniques like LoRA, prompt engineering, and few-shot learning."
        },
        {
          subtitle: "Practical Applications",
          description: "Building chatbots, sentiment analysis, text summarization, and question-answering systems."
        }
      ]
    },
    {
      title: "Computer Vision",
      content: [
        {
          subtitle: "Image Classification",
          description: "ResNet, EfficientNet, Vision Transformers. State-of-the-art architectures for visual recognition."
        },
        {
          subtitle: "Object Detection",
          description: "YOLO, R-CNN family, and real-time detection systems. Applications in autonomous vehicles and surveillance."
        },
        {
          subtitle: "Generative Models",
          description: "GANs, VAEs, and diffusion models. Creating photorealistic images and video synthesis."
        }
      ]
    },
    {
      title: "Reinforcement Learning",
      content: [
        {
          subtitle: "Core Concepts",
          description: "Markov Decision Processes, Q-learning, policy gradients, and value functions."
        },
        {
          subtitle: "Deep RL",
          description: "DQN, A3C, PPO, and modern algorithms powering game-playing AI and robotics."
        },
        {
          subtitle: "Real-world Applications",
          description: "From AlphaGo to autonomous systems—how RL solves complex decision-making problems."
        }
      ]
    },
    {
      title: "Production & Deployment",
      content: [
        {
          subtitle: "MLOps",
          description: "Model versioning, experiment tracking, and continuous training pipelines."
        },
        {
          subtitle: "Scaling AI Systems",
          description: "Distributed training, model optimization, quantization, and serving at scale."
        },
        {
          subtitle: "Monitoring & Maintenance",
          description: "Data drift detection, model performance tracking, and A/B testing in production."
        }
      ]
    }
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
              Applied AI Concepts
            </h1>
            <div className="w-24 h-px bg-black/20 mb-8"></div>
            <p className="text-xl font-light text-black/60 max-w-3xl">
              A comprehensive guide to modern artificial intelligence—from foundational theory to production deployment.
            </p>
          </div>

          <div className="space-y-20">
            {sections.map((section, index) => (
              <div key={index} className="border-l-2 border-black/5 pl-8">
                <h2 className="text-3xl font-light mb-12 tracking-tight">
                  {section.title}
                </h2>
                <div className="space-y-10">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="group">
                      <h3 className="text-xl font-light mb-3 group-hover:text-black/70 transition-colors duration-300">
                        {item.subtitle}
                      </h3>
                      <p className="text-base font-light text-black/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AppliedAI;
