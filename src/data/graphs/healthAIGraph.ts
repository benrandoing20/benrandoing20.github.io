import { GraphData, nodeColors, getNodeSize } from '@/types/graphData';

export const healthAIGraphData: GraphData = {
  nodes: [
    // Layer 0 - Root Category
    { 
      id: 'health-ai', 
      name: 'Health AI', 
      type: 'category', 
      layer: 0,
      description: 'AI transforming healthcare and medicine',
      color: nodeColors.category,
      size: getNodeSize(0, 'category')
    },

    // Layer 1 - Main Topics (all black like categories)
    { 
      id: 'medical-imaging', 
      name: 'Medical Imaging AI', 
      type: 'topic', 
      layer: 1,
      description: 'AI-powered diagnostic imaging',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'clinical-decision', 
      name: 'Clinical Decision Support', 
      type: 'topic', 
      layer: 1,
      description: 'AI-assisted diagnosis and treatment',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'drug-discovery', 
      name: 'Drug Discovery & Development', 
      type: 'topic', 
      layer: 1,
      description: 'AI-accelerated pharmaceutical research',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'personalized-medicine', 
      name: 'Personalized Medicine', 
      type: 'topic', 
      layer: 1,
      description: 'Genomics and precision healthcare',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'remote-monitoring', 
      name: 'Remote Patient Monitoring', 
      type: 'topic', 
      layer: 1,
      description: 'Wearables and continuous health tracking',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'healthcare-ops', 
      name: 'Healthcare Operations', 
      type: 'topic', 
      layer: 1,
      description: 'Hospital efficiency and resource optimization',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'ethics-regulation', 
      name: 'Ethics & Regulation', 
      type: 'topic', 
      layer: 1,
      description: 'Bias, privacy, and FDA compliance',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },

    // Layer 2 - Medical Imaging Concepts
    { 
      id: 'diagnostic-radiology', 
      name: 'Diagnostic Radiology', 
      type: 'concept', 
      layer: 2,
      description: 'X-ray, CT, MRI analysis',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },
    { 
      id: 'pathology', 
      name: 'Pathology & Histology', 
      type: 'concept', 
      layer: 2,
      description: 'Digital pathology and tissue analysis',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },
    { 
      id: 'retinal-imaging', 
      name: 'Retinal Imaging', 
      type: 'concept', 
      layer: 2,
      description: 'Diabetic retinopathy detection',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },

    // Layer 2 - Clinical Decision Concepts
    { 
      id: 'diagnosis-assistance', 
      name: 'Diagnosis Assistance', 
      type: 'concept', 
      layer: 2,
      description: 'Symptom analysis and differential diagnosis',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },
    { 
      id: 'treatment-recommendations', 
      name: 'Treatment Recommendations', 
      type: 'concept', 
      layer: 2,
      description: 'Evidence-based treatment planning',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },
    { 
      id: 'risk-prediction', 
      name: 'Risk Prediction', 
      type: 'concept', 
      layer: 2,
      description: 'Patient deterioration and readmission risk',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },

    // Layer 2 - Drug Discovery Concepts
    { 
      id: 'molecular-design', 
      name: 'Molecular Design', 
      type: 'concept', 
      layer: 2,
      description: 'Generative AI for drug candidates',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },
    { 
      id: 'clinical-trials', 
      name: 'Clinical Trial Optimization', 
      type: 'concept', 
      layer: 2,
      description: 'Patient recruitment and trial design',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },
    { 
      id: 'drug-repurposing', 
      name: 'Drug Repurposing', 
      type: 'concept', 
      layer: 2,
      description: 'New applications for existing drugs',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },

    // Layer 2 - Personalized Medicine Concepts
    { 
      id: 'genomic-analysis', 
      name: 'Genomic Analysis', 
      type: 'concept', 
      layer: 2,
      description: 'Whole genome sequencing interpretation',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },
    { 
      id: 'treatment-response', 
      name: 'Treatment Response Prediction', 
      type: 'concept', 
      layer: 2,
      description: 'Predicting optimal treatment approaches',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },
    { 
      id: 'precision-oncology', 
      name: 'Precision Oncology', 
      type: 'concept', 
      layer: 2,
      description: 'Tumor profiling and targeted therapy',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },

    // Layer 2 - Remote Monitoring Concepts
    { 
      id: 'wearables', 
      name: 'Wearable Devices', 
      type: 'concept', 
      layer: 2,
      description: 'Continuous health monitoring',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },
    { 
      id: 'vital-signs', 
      name: 'Vital Signs Analysis', 
      type: 'concept', 
      layer: 2,
      description: 'Heart rate, oxygen saturation tracking',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },

    // Layer 2 - Healthcare Ops Concepts
    { 
      id: 'resource-optimization', 
      name: 'Resource Optimization', 
      type: 'concept', 
      layer: 2,
      description: 'Bed capacity and surgical scheduling',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },

    // Layer 2 - Ethics Concepts
    { 
      id: 'bias-fairness', 
      name: 'Bias & Fairness', 
      type: 'concept', 
      layer: 2,
      description: 'Algorithmic bias in healthcare AI',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },
    { 
      id: 'privacy-security', 
      name: 'Privacy & Security', 
      type: 'concept', 
      layer: 2,
      description: 'HIPAA compliance and data protection',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },
    { 
      id: 'fda-regulation', 
      name: 'FDA & Regulatory Approval', 
      type: 'concept', 
      layer: 2,
      description: 'SaMD regulations and clinical validation',
      color: nodeColors.concept,
      size: getNodeSize(2, 'concept')
    },

    // Layer 3 - Companies
    { 
      id: 'tempus', 
      name: 'Tempus', 
      type: 'company', 
      layer: 3,
      description: 'Precision medicine and genomics',
      url: 'https://tempus.com',
      color: nodeColors.company,
      size: getNodeSize(3, 'company')
    },
    { 
      id: 'paige', 
      name: 'Paige', 
      type: 'company', 
      layer: 3,
      description: 'AI-powered digital pathology',
      url: 'https://paige.ai',
      color: nodeColors.company,
      size: getNodeSize(3, 'company')
    },
    { 
      id: 'insitro', 
      name: 'Insitro', 
      type: 'company', 
      layer: 3,
      description: 'ML-driven drug discovery',
      url: 'https://insitro.com',
      color: nodeColors.company,
      size: getNodeSize(3, 'company')
    },
    { 
      id: 'recursion', 
      name: 'Recursion Pharmaceuticals', 
      type: 'company', 
      layer: 3,
      description: 'AI for drug discovery',
      url: 'https://recursion.com',
      color: nodeColors.company,
      size: getNodeSize(3, 'company')
    },
    { 
      id: 'google-health', 
      name: 'Google Health', 
      type: 'company', 
      layer: 3,
      description: 'AI-powered healthcare solutions',
      url: 'https://health.google',
      color: nodeColors.company,
      size: getNodeSize(3, 'company')
    },
    { 
      id: 'aidoc', 
      name: 'Aidoc', 
      type: 'company', 
      layer: 3,
      description: 'AI radiology solutions',
      url: 'https://aidoc.com',
      color: nodeColors.company,
      size: getNodeSize(3, 'company')
    },
  ],

  links: [
    // Root to main topics
    { source: 'health-ai', target: 'medical-imaging', strength: 1 },
    { source: 'health-ai', target: 'clinical-decision', strength: 1 },
    { source: 'health-ai', target: 'drug-discovery', strength: 1 },
    { source: 'health-ai', target: 'personalized-medicine', strength: 1 },
    { source: 'health-ai', target: 'remote-monitoring', strength: 1 },
    { source: 'health-ai', target: 'healthcare-ops', strength: 1 },
    { source: 'health-ai', target: 'ethics-regulation', strength: 1 },

    // Medical Imaging to concepts
    { source: 'medical-imaging', target: 'diagnostic-radiology', strength: 0.8 },
    { source: 'medical-imaging', target: 'pathology', strength: 0.8 },
    { source: 'medical-imaging', target: 'retinal-imaging', strength: 0.8 },

    // Clinical Decision to concepts
    { source: 'clinical-decision', target: 'diagnosis-assistance', strength: 0.8 },
    { source: 'clinical-decision', target: 'treatment-recommendations', strength: 0.8 },
    { source: 'clinical-decision', target: 'risk-prediction', strength: 0.8 },

    // Drug Discovery to concepts
    { source: 'drug-discovery', target: 'molecular-design', strength: 0.8 },
    { source: 'drug-discovery', target: 'clinical-trials', strength: 0.8 },
    { source: 'drug-discovery', target: 'drug-repurposing', strength: 0.8 },

    // Personalized Medicine to concepts
    { source: 'personalized-medicine', target: 'genomic-analysis', strength: 0.8 },
    { source: 'personalized-medicine', target: 'treatment-response', strength: 0.8 },
    { source: 'personalized-medicine', target: 'precision-oncology', strength: 0.8 },

    // Remote Monitoring to concepts
    { source: 'remote-monitoring', target: 'wearables', strength: 0.8 },
    { source: 'remote-monitoring', target: 'vital-signs', strength: 0.8 },

    // Healthcare Ops to concepts
    { source: 'healthcare-ops', target: 'resource-optimization', strength: 0.8 },

    // Ethics to concepts
    { source: 'ethics-regulation', target: 'bias-fairness', strength: 0.8 },
    { source: 'ethics-regulation', target: 'privacy-security', strength: 0.8 },
    { source: 'ethics-regulation', target: 'fda-regulation', strength: 0.8 },

    // Companies connect to TOPICS (black nodes) only
    { source: 'personalized-medicine', target: 'tempus', strength: 0.6 },
    { source: 'medical-imaging', target: 'paige', strength: 0.6 },
    { source: 'drug-discovery', target: 'insitro', strength: 0.6 },
    { source: 'drug-discovery', target: 'recursion', strength: 0.6 },
    { source: 'medical-imaging', target: 'google-health', strength: 0.5 },
    { source: 'medical-imaging', target: 'aidoc', strength: 0.6 },
  ]
};

