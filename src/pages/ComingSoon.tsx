import { Link, useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ComingSoon = () => {
  const location = useLocation();
  const state = location.state as { title?: string } | null;
  
  // Use the original title from state, or extract from URL as fallback
  const getPageTitle = () => {
    if (state?.title) {
      return state.title;
    }
    const paths = location.pathname.split('/').filter(Boolean);
    const lastPath = paths[paths.length - 1];
    
    // Comprehensive title mapping for exact matches
    const titleMap: Record<string, string> = {
      // === DIGITAL DEVICES ===
      // Physiological Sensors & Biosignals
      'core-biosignals-ecg-ppg-emg-eeg-eda-bcg-scg': 'Core Biosignals (ECG, PPG, EMG, EEG, EDA, BCG/SCG)',
      'vital-sign-estimation': 'Vital Sign Estimation',
      'artifact-rejection-and-denoising': 'Artifact Rejection & Denoising',
      // Medical Imaging
      'acquisition-physics-x-ray-ct-mri-ultrasound-pet': 'Acquisition Physics (X-ray/CT, MRI, Ultrasound, PET)',
      'reconstruction-and-enhancement': 'Reconstruction & Enhancement',
      'enterprise-imaging-integration': 'Enterprise Imaging Integration',
      // Wearables & Health Sensing
      'device-modalities': 'Device Modalities',
      'digital-biomarkers': 'Digital Biomarkers',
      'power-and-battery-life': 'Power & Battery Life',
      // Biomechanics & Motion AI
      'imu-kinematics-and-gait': 'IMU Kinematics & Gait',
      'pose-estimation-and-human-performance': 'Pose Estimation & Human Performance',
      'musculoskeletal-modeling': 'Musculoskeletal Modeling',
      // Edge AI & Embedded Health Systems
      'npus-and-on-device-inference': 'NPUs & On-Device Inference',
      'model-optimization': 'Model Optimization',
      'firmware-and-rtos': 'Firmware & RTOS',
      // Sensor Fusion & Estimation
      'probabilistic-filters': 'Probabilistic Filters',
      'multimodal-health-fusion': 'Multimodal Health Fusion',
      'time-sync-and-clock-drift': 'Time Sync & Clock Drift',
      // Real-Time Health AI Runtimes
      'holoscan-surgical-pipelines': 'Holoscan Surgical Pipelines',
      'triton-and-ensemble-serving': 'Triton & Ensemble Serving',
      'streaming-and-qos': 'Streaming & QoS',
      // Device Validation & Clinical Studies
      'feasibility-and-repeatability-apple-style': 'Feasibility & Repeatability (Apple-style)',
      'clinical-ground-truth-and-protocols': 'Clinical Ground Truth & Protocols',
      'performance-reporting': 'Performance Reporting',
      // Regulated Medical Device Engineering
      'standards-and-quality-systems': 'Standards & Quality Systems',
      'samd-and-ai-lifecycle': 'SaMD & AI Lifecycle',
      'cybersecurity-and-privacy': 'Cybersecurity & Privacy',
      // Neurotechnology & Implants
      'brain-computer-interfaces': 'Brain–Computer Interfaces',
      'neuromodulation-devices': 'Neuromodulation Devices',
      'implantable-systems': 'Implantable Systems',
      // Connectivity, Security & Fleet Ops
      'iot-connectivity': 'IoT Connectivity',
      'fleet-management-and-telemetry': 'Fleet Management & Telemetry',
      // Accelerated Healthcare Compute
      'monai-for-imaging-ai': 'MONAI for Imaging AI',
      'holoscan-on-edge-platforms': 'Holoscan on Edge Platforms',
      'cuda-and-tensorrt-optimization': 'CUDA & TensorRT Optimization',
      
      // === APPLIED AI ===
      'mathematics': 'Mathematics',
      'classical-ml': 'Classical ML',
      'neural-fundamentals': 'Neural Fundamentals',
      'architectures': 'Architectures',
      'nlp-and-transformers': 'NLP & Transformers',
      'generative-models': 'Generative Models',
      'computer-vision': 'Computer Vision',
      'reinforcement-learning': 'Reinforcement Learning',
      'multimodal-ai': 'Multimodal AI',
      'mlops-infrastructure': 'MLOps Infrastructure',
      'monitoring-and-governance': 'Monitoring & Governance',
      'serving-and-inference': 'Serving & Inference',
      'data-engineering': 'Data Engineering',
      'security-and-privacy': 'Security & Privacy',
      'rag-systems': 'RAG Systems',
      'tool-use-agents': 'Tool-Use Agents',
      'agent-orchestration': 'Agent Orchestration',
      'evaluation-frameworks': 'Evaluation Frameworks',
      'safety-and-guardrails': 'Safety & Guardrails',
      'alignment-and-training': 'Alignment & Training',
      
      // === HEDGE FUND AI ===
      'statistical-arbitrage': 'Statistical Arbitrage',
      'momentum-and-trend-following': 'Momentum & Trend Following',
      'high-frequency-trading': 'High-Frequency Trading',
      'price-forecasting': 'Price Forecasting',
      'volatility-modeling': 'Volatility Modeling',
      'regime-detection': 'Regime Detection',
      'modern-portfolio-theory': 'Modern Portfolio Theory',
      'black-litterman-model': 'Black-Litterman Model',
      'deep-reinforcement-learning': 'Deep Reinforcement Learning',
      'value-at-risk-var': 'Value at Risk (VaR)',
      'stress-testing': 'Stress Testing',
      'factor-models': 'Factor Models',
      'sentiment-analysis': 'Sentiment Analysis',
      'satellite-and-geospatial-data': 'Satellite & Geospatial Data',
      'web-scraping-and-crawling': 'Web Scraping & Crawling',
      'optimal-execution': 'Optimal Execution',
      'smart-order-routing': 'Smart Order Routing',
      'market-making': 'Market Making',
      'feature-engineering': 'Feature Engineering',
      'backtesting-frameworks': 'Backtesting Frameworks',
      'production-systems': 'Production Systems',
      'algorithmic-trading-regulations': 'Algorithmic Trading Regulations',
      'model-explainability': 'Model Explainability',
      'market-manipulation-detection': 'Market Manipulation Detection',
      'limit-order-book-simulation': 'Limit Order Book Simulation',
      'transaction-costs-and-slippage': 'Transaction Costs & Slippage',
      'evaluation-and-walk-forward': 'Evaluation & Walk-Forward',
      
      // === DIGITAL HEALTH ===
      'clinical-reasoning-and-diagnosis': 'Clinical Reasoning & Diagnosis',
      'clinical-question-answering': 'Clinical Question Answering',
      'treatment-and-care-pathway-support': 'Treatment & Care Pathway Support',
      'medical-foundation-models': 'Medical Foundation Models',
      'clinical-note-intelligence': 'Clinical Note Intelligence',
      'agentic-healthcare-systems': 'Agentic Healthcare Systems',
      'ehr-data-engineering': 'EHR Data Engineering',
      'interoperability-at-scale': 'Interoperability at Scale',
      'clinical-knowledge-graphs': 'Clinical Knowledge Graphs',
      'remote-physiologic-monitoring-rpm': 'Remote Physiologic Monitoring (RPM)',
      'virtual-care-delivery': 'Virtual Care Delivery',
      'digital-therapeutics-dtx': 'Digital Therapeutics (DTx)',
      'risk-prediction-and-stratification': 'Risk Prediction & Stratification',
      'precision-oncology-and-genomic-care': 'Precision Oncology & Genomic Care',
      'pharmacogenomics': 'Pharmacogenomics',
      'trial-matching-and-eligibility-ai': 'Trial Matching & Eligibility AI',
      'real-world-evidence-rwe': 'Real-World Evidence (RWE)',
      'synthetic-control-arms': 'Synthetic Control Arms',
      'operational-optimization': 'Operational Optimization',
      'revenue-cycle-management': 'Revenue Cycle Management',
      'payer-provider-automation': 'Payer-Provider Automation',
      'model-safety-and-clinical-risk': 'Model Safety & Clinical Risk',
      'bias-and-fairness': 'Bias & Fairness',
      'regulation-and-samd': 'Regulation & SaMD',
      'de-identification-and-phi-protection': 'De-Identification & PHI Protection',
      'federated-learning-in-healthcare': 'Federated Learning in Healthcare',
      'secure-ai-deployment': 'Secure AI Deployment',
      'clinical-validation-and-monitoring': 'Clinical Validation & Monitoring',
      'model-explainability-in-medicine': 'Model Explainability in Medicine',
      'production-ai-systems': 'Production AI Systems',
      'clinical-ai-platforms': 'Clinical AI Platforms',
      'health-data-platforms': 'Health Data Platforms',
      'ai-driven-care-delivery': 'AI-Driven Care Delivery',
      
      // === DIGITAL BIOLOGY ===
      'next-generation-sequencing-platforms': 'Next-Generation Sequencing Platforms',
      'variant-calling-and-phasing': 'Variant Calling and Phasing',
      'transcriptomics-single-cell-and-spatial': 'Transcriptomics Single Cell and Spatial',
      'epigenomics-and-chromatin': 'Epigenomics and Chromatin',
      'microbiome-and-metagenomics': 'Microbiome and Metagenomics',
      'protein-structure-prediction': 'Protein Structure Prediction',
      'protein-and-antibody-design': 'Protein and Antibody Design',
      'molecular-docking-and-scoring': 'Molecular Docking and Scoring',
      'molecular-dynamics-and-enhanced-sampling': 'Molecular Dynamics and Enhanced Sampling',
      'qm-mm-and-free-energy-methods': 'QM MM and Free Energy Methods',
      'reaction-prediction-and-retrosynthesis': 'Reaction Prediction and Retrosynthesis',
      'virtual-screening-and-hit-discovery': 'Virtual Screening and Hit Discovery',
      'lead-optimization-and-multi-objective-design': 'Lead Optimization and Multi Objective Design',
      'admet-and-pk-pd-modeling': 'ADMET and PK PD Modeling',
      'binding-affinity-and-fep-workflows': 'Binding Affinity and FEP Workflows',
      'crispr-guide-design-and-off-target': 'CRISPR Guide Design and Off Target',
      'gene-delivery-vectors-aav-and-lnp': 'Gene Delivery Vectors AAV and LNP',
      'cell-therapy-optimization-car-t-and-nk': 'Cell Therapy Optimization CAR T and NK',
      'functional-genomics-screens': 'Functional Genomics Screens',
      'genetic-circuit-design': 'Genetic Circuit Design',
      'metabolic-engineering-and-flux-balance': 'Metabolic Engineering and Flux Balance',
      'bioprocess-modeling-and-optimization': 'Bioprocess Modeling and Optimization',
      'biofoundries-and-standardization': 'Biofoundries and Standardization',
      'pathway-and-network-modeling': 'Pathway and Network Modeling',
      'gene-regulatory-networks': 'Gene Regulatory Networks',
      'virtual-cell-models-and-digital-twins': 'Virtual Cell Models and Digital Twins',
      'causal-biology-and-perturbation': 'Causal Biology and Perturbation',
      'workflow-management-nextflow-and-snakemake': 'Workflow Management Nextflow and Snakemake',
      'data-processing-and-quality-control': 'Data Processing and Quality Control',
      'statistical-analysis-and-differential-expression': 'Statistical Analysis and Differential Expression',
      'knowledge-graphs-and-ontologies': 'Knowledge Graphs and Ontologies',
      'fair-data-and-metadata-standards': 'FAIR Data and Metadata Standards',
      'robotic-workcells-and-liquid-handling': 'Robotic Workcells and Liquid Handling',
      'experiment-planning-agents-and-bo-rl': 'Experiment Planning Agents and BO RL',
      'dmta-closed-loop-pipelines': 'DMTA Closed Loop Pipelines',
      'lims-and-eln-integration': 'LIMS and ELN Integration',
      'cloud-bio-platforms-benchling-latchbio-watershed-lila': 'Cloud Bio Platforms Benchling LatchBio Watershed Lila',
      'data-clouds-dnanexus-lifebit-tempus-flatiron': 'Data Clouds DNAnexus Lifebit Tempus Flatiron',
      'compute-and-storage-hpc-gpu-and-costing': 'Compute and Storage HPC GPU and Costing',
      'security-and-compliance-for-bio': 'Security and Compliance for Bio',
      'ai-pharma-platforms-recursion-schrodinger-insitro': 'AI Pharma Platforms Recursion Schrodinger Insitro',
      'cro-and-cdmo-ecosystems-wuxi-eurofins-charles-river': 'CRO and CDMO Ecosystems Wuxi Eurofins Charles River',
      'business-models-platform-service-product-ip': 'Business Models Platform Service Product IP',
      'data-monetization-and-partnerships': 'Data Monetization and Partnerships',
      'parabricks-accelerated-genomics': 'Parabricks Accelerated Genomics',
      'bionemo-foundation-models': 'BioNeMo Foundation Models',
      'rapids-for-omics-and-chemistry': 'RAPIDS for Omics and Chemistry',
      'flare-federated-learning': 'FLARE Federated Learning',
      'triton-and-inference-runtimes': 'Triton and Inference Runtimes',
    };
    
    // Check for exact match first
    if (titleMap[lastPath]) {
      return titleMap[lastPath];
    }
    
    // Fallback: capitalize words with smart acronym handling
    const acronyms = ['ecg', 'ppg', 'emg', 'eeg', 'eda', 'bcg', 'scg', 'ct', 'mri', 'pet', 'ai', 'ml', 'nlp', 'llm', 'api', 'cnn', 'rnn', 'rl', 'roi', 'var', 'hft', 'ppo', 'qa', 'ehr', 'fhir', 'hl7', 'hipaa', 'samd', 'fda', 'npu', 'gpu', 'rtos', 'iot', 'bci', 'dbs', 'vns', 'tms', 'monai', 'cuda'];
    
    return lastPath
      .split('-')
      .map(word => {
        if (acronyms.includes(word.toLowerCase())) {
          return word.toUpperCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  };

  // Get the parent page path (go back two levels)
  const getBackPath = () => {
    const paths = location.pathname.split('/').filter(Boolean);
    if (paths.length >= 2) {
      return `/${paths.slice(0, 2).join('/')}`;
    }
    return '/resources';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32 pb-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-24">
            <Link 
              to={getBackPath()} 
              className="inline-flex items-center text-sm font-light text-black/60 hover:text-black mb-12 transition-colors duration-300"
            >
              <span className="mr-2">←</span> Back
            </Link>
            
            <div className="text-center py-20">
              <h1 className="text-3xl md:text-4xl font-extralight mb-8 tracking-tight">
                {getPageTitle()}
              </h1>
              
              <div className="w-24 h-px bg-black/20 mb-8 mx-auto"></div>
              
              <p className="text-2xl font-light text-black/40 mb-4">
                Coming Soon
              </p>
              
              <p className="text-lg font-light text-black/60 max-w-2xl mx-auto leading-relaxed">
                This resource page is currently under development. Check back soon for comprehensive insights and detailed write-ups on this topic.
              </p>
              
              <div className="mt-16">
                <Link 
                  to="/resources"
                  className="inline-flex items-center text-sm font-light text-black/60 hover:text-black transition-colors duration-300 border border-black/10 px-8 py-4 hover:border-black/30"
                >
                  <span className="mr-2">←</span> Browse All Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;

