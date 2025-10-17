import { GraphData, nodeColors, getNodeSize } from '@/types/graphData';

export const digitalHealthGraphData: GraphData = {
  nodes: [
    // Layer 0 - Root Category
    { 
      id: 'digital-health', 
      name: 'Digital Health', 
      type: 'category', 
      layer: 0,
      description: 'AI-powered healthcare systems',
      color: nodeColors.category,
      size: getNodeSize(0, 'category')
    },

    // ============ Layer 1 - Major Domains ============
    { 
      id: 'clinical-ai', 
      name: 'Clinical AI', 
      type: 'topic', 
      layer: 1,
      description: 'Decision support systems',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'llms-healthcare', 
      name: 'LLMs in Healthcare', 
      type: 'topic', 
      layer: 1,
      description: 'Medical foundation models',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'ehr-data', 
      name: 'EHR & Data Systems', 
      type: 'topic', 
      layer: 1,
      description: 'Health data infrastructure',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'remote-monitoring', 
      name: 'Remote Monitoring', 
      type: 'topic', 
      layer: 1,
      description: 'Digital care delivery',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'precision-medicine', 
      name: 'Precision Medicine', 
      type: 'topic', 
      layer: 1,
      description: 'Personalized healthcare',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'clinical-trials', 
      name: 'Clinical Trials', 
      type: 'topic', 
      layer: 1,
      description: 'Trial optimization',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'healthcare-ops', 
      name: 'Healthcare Operations', 
      type: 'topic', 
      layer: 1,
      description: 'Workflow automation',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'safety-regulation', 
      name: 'Safety & Regulation', 
      type: 'topic', 
      layer: 1,
      description: 'Clinical AI governance',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },

    // ============ Layer 2 - Sub-Domains ============
    
    // Clinical AI Sub-domains
    { 
      id: 'clinical-reasoning', 
      name: 'Clinical Reasoning', 
      type: 'topic', 
      layer: 2,
      description: 'Diagnosis and reasoning',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'clinical-qa', 
      name: 'Clinical QA', 
      type: 'topic', 
      layer: 2,
      description: 'Question answering',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'treatment-support', 
      name: 'Treatment Support', 
      type: 'topic', 
      layer: 2,
      description: 'Care pathway guidance',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // LLMs Sub-domains
    { 
      id: 'medical-foundation', 
      name: 'Medical Foundation Models', 
      type: 'topic', 
      layer: 2,
      description: 'Clinical LLMs',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'note-intelligence', 
      name: 'Note Intelligence', 
      type: 'topic', 
      layer: 2,
      description: 'Clinical documentation',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'agentic-systems', 
      name: 'Agentic Systems', 
      type: 'topic', 
      layer: 2,
      description: 'Autonomous healthcare agents',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // EHR Sub-domains
    { 
      id: 'ehr-engineering', 
      name: 'EHR Engineering', 
      type: 'topic', 
      layer: 2,
      description: 'Data normalization',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'interoperability', 
      name: 'Interoperability', 
      type: 'topic', 
      layer: 2,
      description: 'FHIR and standards',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'knowledge-graphs', 
      name: 'Knowledge Graphs', 
      type: 'topic', 
      layer: 2,
      description: 'Clinical ontologies',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Remote Monitoring Sub-domains
    { 
      id: 'rpm', 
      name: 'RPM', 
      type: 'topic', 
      layer: 2,
      description: 'Remote physiologic monitoring',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'virtual-care', 
      name: 'Virtual Care', 
      type: 'topic', 
      layer: 2,
      description: 'Telehealth platforms',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'digital-therapeutics', 
      name: 'Digital Therapeutics', 
      type: 'topic', 
      layer: 2,
      description: 'Evidence-based software therapy',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Precision Medicine Sub-domains
    { 
      id: 'risk-prediction', 
      name: 'Risk Prediction', 
      type: 'topic', 
      layer: 2,
      description: 'Early warning systems',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'precision-oncology', 
      name: 'Precision Oncology', 
      type: 'topic', 
      layer: 2,
      description: 'Genomic-driven cancer care',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'pharmacogenomics', 
      name: 'Pharmacogenomics', 
      type: 'topic', 
      layer: 2,
      description: 'Drug-gene interactions',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Clinical Trials Sub-domains
    { 
      id: 'trial-matching', 
      name: 'Trial Matching', 
      type: 'topic', 
      layer: 2,
      description: 'Eligibility AI',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'rwe', 
      name: 'RWE', 
      type: 'topic', 
      layer: 2,
      description: 'Real-world evidence',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'synthetic-controls', 
      name: 'Synthetic Controls', 
      type: 'topic', 
      layer: 2,
      description: 'External control arms',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Healthcare Ops Sub-domains
    { 
      id: 'operational-optimization', 
      name: 'Operational Optimization', 
      type: 'topic', 
      layer: 2,
      description: 'Patient flow',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'revenue-cycle', 
      name: 'Revenue Cycle', 
      type: 'topic', 
      layer: 2,
      description: 'Coding and claims',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'prior-auth', 
      name: 'Prior Authorization', 
      type: 'topic', 
      layer: 2,
      description: 'Payer automation',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Safety & Regulation Sub-domains
    { 
      id: 'model-safety', 
      name: 'Model Safety', 
      type: 'topic', 
      layer: 2,
      description: 'Clinical risk management',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'bias-fairness', 
      name: 'Bias & Fairness', 
      type: 'topic', 
      layer: 2,
      description: 'Health equity',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'fda-regulation', 
      name: 'FDA Regulation', 
      type: 'topic', 
      layer: 2,
      description: 'SaMD pathways',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // ============ Layer 3 - Concepts (Colored) ============
    
    // Clinical Reasoning
    { 
      id: 'differential-diagnosis', 
      name: 'Differential Diagnosis', 
      type: 'concept', 
      layer: 3,
      description: 'Diagnosis ranking',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'bayesian-reasoning', 
      name: 'Bayesian Reasoning', 
      type: 'concept', 
      layer: 3,
      description: 'Probabilistic diagnosis',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'uncertainty-quantification', 
      name: 'Uncertainty Quantification', 
      type: 'concept', 
      layer: 3,
      description: 'Confidence estimation',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Clinical QA
    { 
      id: 'rag-clinical', 
      name: 'RAG for Clinical QA', 
      type: 'concept', 
      layer: 3,
      description: 'Retrieval-augmented generation',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'guideline-grounded', 
      name: 'Guideline-Grounded', 
      type: 'concept', 
      layer: 3,
      description: 'Evidence-based responses',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Treatment Support
    { 
      id: 'care-pathways', 
      name: 'Care Pathways', 
      type: 'concept', 
      layer: 3,
      description: 'Treatment protocols',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'outcome-prediction', 
      name: 'Outcome Prediction', 
      type: 'concept', 
      layer: 3,
      description: 'Prognosis models',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Medical Foundation Models
    { 
      id: 'med-palm', 
      name: 'Med-PaLM', 
      type: 'concept', 
      layer: 3,
      description: 'Medical language model',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'biogpt', 
      name: 'BioGPT', 
      type: 'concept', 
      layer: 3,
      description: 'Biomedical LLM',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'clinical-bert', 
      name: 'ClinicalBERT', 
      type: 'concept', 
      layer: 3,
      description: 'Clinical text encoding',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Note Intelligence
    { 
      id: 'note-summarization', 
      name: 'Note Summarization', 
      type: 'concept', 
      layer: 3,
      description: 'Clinical documentation',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'entity-extraction', 
      name: 'Entity Extraction', 
      type: 'concept', 
      layer: 3,
      description: 'NER for medical text',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'medical-coding', 
      name: 'Medical Coding', 
      type: 'concept', 
      layer: 3,
      description: 'ICD/CPT automation',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Agentic Systems
    { 
      id: 'ehr-agents', 
      name: 'EHR Agents', 
      type: 'concept', 
      layer: 3,
      description: 'Autonomous EHR interaction',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'order-entry', 
      name: 'Order Entry', 
      type: 'concept', 
      layer: 3,
      description: 'Automated orders',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // EHR Engineering
    { 
      id: 'fhir-resources', 
      name: 'FHIR Resources', 
      type: 'concept', 
      layer: 3,
      description: 'Health data modeling',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'cohort-builder', 
      name: 'Cohort Builder', 
      type: 'concept', 
      layer: 3,
      description: 'Patient selection',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'feature-stores', 
      name: 'Feature Stores', 
      type: 'concept', 
      layer: 3,
      description: 'Clinical features',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Interoperability
    { 
      id: 'hl7-fhir', 
      name: 'HL7 FHIR', 
      type: 'concept', 
      layer: 3,
      description: 'Health data standard',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'smart-on-fhir', 
      name: 'SMART on FHIR', 
      type: 'concept', 
      layer: 3,
      description: 'App integration',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'hie', 
      name: 'HIE', 
      type: 'concept', 
      layer: 3,
      description: 'Health information exchange',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Knowledge Graphs
    { 
      id: 'clinical-ontologies', 
      name: 'Clinical Ontologies', 
      type: 'concept', 
      layer: 3,
      description: 'Disease taxonomies',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'phenotype-graphs', 
      name: 'Phenotype Graphs', 
      type: 'concept', 
      layer: 3,
      description: 'Patient state graphs',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // RPM
    { 
      id: 'wearable-integration', 
      name: 'Wearable Integration', 
      type: 'concept', 
      layer: 3,
      description: 'Device data aggregation',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'alert-fatigue', 
      name: 'Alert Fatigue Mitigation', 
      type: 'concept', 
      layer: 3,
      description: 'Smart alerting',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Virtual Care
    { 
      id: 'telehealth', 
      name: 'Telehealth', 
      type: 'concept', 
      layer: 3,
      description: 'Virtual visits',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'triage-ai', 
      name: 'Triage AI', 
      type: 'concept', 
      layer: 3,
      description: 'Patient routing',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Digital Therapeutics
    { 
      id: 'mental-health-dtx', 
      name: 'Mental Health DTx', 
      type: 'concept', 
      layer: 3,
      description: 'CBT and therapy apps',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'metabolic-dtx', 
      name: 'Metabolic DTx', 
      type: 'concept', 
      layer: 3,
      description: 'Diabetes management',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Risk Prediction
    { 
      id: 'sepsis-prediction', 
      name: 'Sepsis Prediction', 
      type: 'concept', 
      layer: 3,
      description: 'Early warning',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'readmission-risk', 
      name: 'Readmission Risk', 
      type: 'concept', 
      layer: 3,
      description: '30-day readmission',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Precision Oncology
    { 
      id: 'multi-omic-profiling', 
      name: 'Multi-Omic Profiling', 
      type: 'concept', 
      layer: 3,
      description: 'Tumor analysis',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'targeted-therapy', 
      name: 'Targeted Therapy', 
      type: 'concept', 
      layer: 3,
      description: 'Treatment selection',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Pharmacogenomics
    { 
      id: 'cyp-genes', 
      name: 'CYP Genes', 
      type: 'concept', 
      layer: 3,
      description: 'Drug metabolism',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'drug-gene-interactions', 
      name: 'Drug-Gene Interactions', 
      type: 'concept', 
      layer: 3,
      description: 'Response prediction',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Trial Matching
    { 
      id: 'eligibility-parsing', 
      name: 'Eligibility Parsing', 
      type: 'concept', 
      layer: 3,
      description: 'Criteria extraction',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'phenotype-extraction', 
      name: 'Phenotype Extraction', 
      type: 'concept', 
      layer: 3,
      description: 'Patient matching',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // RWE
    { 
      id: 'observational-studies', 
      name: 'Observational Studies', 
      type: 'concept', 
      layer: 3,
      description: 'EHR-based research',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'causal-inference', 
      name: 'Causal Inference', 
      type: 'concept', 
      layer: 3,
      description: 'Treatment effects',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Operational Optimization
    { 
      id: 'patient-flow', 
      name: 'Patient Flow', 
      type: 'concept', 
      layer: 3,
      description: 'Throughput optimization',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'ed-wait-time', 
      name: 'ED Wait Time', 
      type: 'concept', 
      layer: 3,
      description: 'Emergency dept forecasting',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Revenue Cycle
    { 
      id: 'auto-coding', 
      name: 'Auto-Coding', 
      type: 'concept', 
      layer: 3,
      description: 'ICD/CPT automation',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'denial-prediction', 
      name: 'Denial Prediction', 
      type: 'concept', 
      layer: 3,
      description: 'Claims optimization',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Model Safety
    { 
      id: 'ood-detection', 
      name: 'OOD Detection', 
      type: 'concept', 
      layer: 3,
      description: 'Out-of-distribution',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'fail-safes', 
      name: 'Fail-Safes', 
      type: 'concept', 
      layer: 3,
      description: 'Safety fallbacks',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Bias & Fairness
    { 
      id: 'subgroup-calibration', 
      name: 'Subgroup Calibration', 
      type: 'concept', 
      layer: 3,
      description: 'Demographic fairness',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'equity-auditing', 
      name: 'Equity Auditing', 
      type: 'concept', 
      layer: 3,
      description: 'Bias detection',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // FDA Regulation
    { 
      id: 'fda-samd-pathway', 
      name: 'FDA SaMD Pathway', 
      type: 'concept', 
      layer: 3,
      description: 'Regulatory approval',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'gmlp', 
      name: 'GMLP', 
      type: 'concept', 
      layer: 3,
      description: 'Good ML practice',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Companies
    { 
      id: 'abridge', 
      name: 'Abridge', 
      type: 'company', 
      layer: 4,
      description: 'Clinical note automation',
      url: 'https://abridge.com',
      color: nodeColors.company,
      size: getNodeSize(4, 'company')
    },
    { 
      id: 'nabla', 
      name: 'Nabla', 
      type: 'company', 
      layer: 4,
      description: 'AI clinical assistant',
      url: 'https://nabla.com',
      color: nodeColors.company,
      size: getNodeSize(4, 'company')
    },
    { 
      id: 'epic-cosmos', 
      name: 'Epic (Cosmos)', 
      type: 'company', 
      layer: 4,
      description: 'EHR data network',
      url: 'https://epic.com',
      color: nodeColors.company,
      size: getNodeSize(4, 'company')
    },
    { 
      id: 'tempus', 
      name: 'Tempus', 
      type: 'company', 
      layer: 4,
      description: 'Precision medicine',
      url: 'https://tempus.com',
      color: nodeColors.company,
      size: getNodeSize(4, 'company')
    },
    { 
      id: 'flatiron', 
      name: 'Flatiron Health', 
      type: 'company', 
      layer: 4,
      description: 'Oncology data',
      url: 'https://flatiron.com',
      color: nodeColors.company,
      size: getNodeSize(4, 'company')
    },
  ],

  links: [
    // ============ Layer 0 to Layer 1 ============
    { source: 'digital-health', target: 'clinical-ai', strength: 1 },
    { source: 'digital-health', target: 'llms-healthcare', strength: 1 },
    { source: 'digital-health', target: 'ehr-data', strength: 1 },
    { source: 'digital-health', target: 'remote-monitoring', strength: 1 },
    { source: 'digital-health', target: 'precision-medicine', strength: 1 },
    { source: 'digital-health', target: 'clinical-trials', strength: 1 },
    { source: 'digital-health', target: 'healthcare-ops', strength: 1 },
    { source: 'digital-health', target: 'safety-regulation', strength: 1 },

    // ============ Layer 1 to Layer 2 ============
    
    // Clinical AI
    { source: 'clinical-ai', target: 'clinical-reasoning', strength: 1 },
    { source: 'clinical-ai', target: 'clinical-qa', strength: 1 },
    { source: 'clinical-ai', target: 'treatment-support', strength: 1 },

    // LLMs
    { source: 'llms-healthcare', target: 'medical-foundation', strength: 1 },
    { source: 'llms-healthcare', target: 'note-intelligence', strength: 1 },
    { source: 'llms-healthcare', target: 'agentic-systems', strength: 1 },

    // EHR & Data
    { source: 'ehr-data', target: 'ehr-engineering', strength: 1 },
    { source: 'ehr-data', target: 'interoperability', strength: 1 },
    { source: 'ehr-data', target: 'knowledge-graphs', strength: 1 },

    // Remote Monitoring
    { source: 'remote-monitoring', target: 'rpm', strength: 1 },
    { source: 'remote-monitoring', target: 'virtual-care', strength: 1 },
    { source: 'remote-monitoring', target: 'digital-therapeutics', strength: 1 },

    // Precision Medicine
    { source: 'precision-medicine', target: 'risk-prediction', strength: 1 },
    { source: 'precision-medicine', target: 'precision-oncology', strength: 1 },
    { source: 'precision-medicine', target: 'pharmacogenomics', strength: 1 },

    // Clinical Trials
    { source: 'clinical-trials', target: 'trial-matching', strength: 1 },
    { source: 'clinical-trials', target: 'rwe', strength: 1 },
    { source: 'clinical-trials', target: 'synthetic-controls', strength: 1 },

    // Healthcare Ops
    { source: 'healthcare-ops', target: 'operational-optimization', strength: 1 },
    { source: 'healthcare-ops', target: 'revenue-cycle', strength: 1 },
    { source: 'healthcare-ops', target: 'prior-auth', strength: 1 },

    // Safety & Regulation
    { source: 'safety-regulation', target: 'model-safety', strength: 1 },
    { source: 'safety-regulation', target: 'bias-fairness', strength: 1 },
    { source: 'safety-regulation', target: 'fda-regulation', strength: 1 },

    // ============ Layer 2 to Layer 3 (Colored Concepts) ============
    
    // Clinical Reasoning
    { source: 'clinical-reasoning', target: 'differential-diagnosis', strength: 0.7 },
    { source: 'clinical-reasoning', target: 'bayesian-reasoning', strength: 0.7 },
    { source: 'clinical-reasoning', target: 'uncertainty-quantification', strength: 0.7 },

    // Clinical QA
    { source: 'clinical-qa', target: 'rag-clinical', strength: 0.7 },
    { source: 'clinical-qa', target: 'guideline-grounded', strength: 0.7 },

    // Treatment Support
    { source: 'treatment-support', target: 'care-pathways', strength: 0.7 },
    { source: 'treatment-support', target: 'outcome-prediction', strength: 0.7 },

    // Medical Foundation
    { source: 'medical-foundation', target: 'med-palm', strength: 0.7 },
    { source: 'medical-foundation', target: 'biogpt', strength: 0.7 },
    { source: 'medical-foundation', target: 'clinical-bert', strength: 0.7 },

    // Note Intelligence
    { source: 'note-intelligence', target: 'note-summarization', strength: 0.7 },
    { source: 'note-intelligence', target: 'entity-extraction', strength: 0.7 },
    { source: 'note-intelligence', target: 'medical-coding', strength: 0.7 },

    // Agentic Systems
    { source: 'agentic-systems', target: 'ehr-agents', strength: 0.7 },
    { source: 'agentic-systems', target: 'order-entry', strength: 0.7 },

    // EHR Engineering
    { source: 'ehr-engineering', target: 'fhir-resources', strength: 0.7 },
    { source: 'ehr-engineering', target: 'cohort-builder', strength: 0.7 },
    { source: 'ehr-engineering', target: 'feature-stores', strength: 0.7 },

    // Interoperability
    { source: 'interoperability', target: 'hl7-fhir', strength: 0.7 },
    { source: 'interoperability', target: 'smart-on-fhir', strength: 0.7 },
    { source: 'interoperability', target: 'hie', strength: 0.7 },

    // Knowledge Graphs
    { source: 'knowledge-graphs', target: 'clinical-ontologies', strength: 0.7 },
    { source: 'knowledge-graphs', target: 'phenotype-graphs', strength: 0.7 },

    // RPM
    { source: 'rpm', target: 'wearable-integration', strength: 0.7 },
    { source: 'rpm', target: 'alert-fatigue', strength: 0.7 },

    // Virtual Care
    { source: 'virtual-care', target: 'telehealth', strength: 0.7 },
    { source: 'virtual-care', target: 'triage-ai', strength: 0.7 },

    // Digital Therapeutics
    { source: 'digital-therapeutics', target: 'mental-health-dtx', strength: 0.7 },
    { source: 'digital-therapeutics', target: 'metabolic-dtx', strength: 0.7 },

    // Risk Prediction
    { source: 'risk-prediction', target: 'sepsis-prediction', strength: 0.7 },
    { source: 'risk-prediction', target: 'readmission-risk', strength: 0.7 },

    // Precision Oncology
    { source: 'precision-oncology', target: 'multi-omic-profiling', strength: 0.7 },
    { source: 'precision-oncology', target: 'targeted-therapy', strength: 0.7 },

    // Pharmacogenomics
    { source: 'pharmacogenomics', target: 'cyp-genes', strength: 0.7 },
    { source: 'pharmacogenomics', target: 'drug-gene-interactions', strength: 0.7 },

    // Trial Matching
    { source: 'trial-matching', target: 'eligibility-parsing', strength: 0.7 },
    { source: 'trial-matching', target: 'phenotype-extraction', strength: 0.7 },

    // RWE
    { source: 'rwe', target: 'observational-studies', strength: 0.7 },
    { source: 'rwe', target: 'causal-inference', strength: 0.7 },

    // Operational Optimization
    { source: 'operational-optimization', target: 'patient-flow', strength: 0.7 },
    { source: 'operational-optimization', target: 'ed-wait-time', strength: 0.7 },

    // Revenue Cycle
    { source: 'revenue-cycle', target: 'auto-coding', strength: 0.7 },
    { source: 'revenue-cycle', target: 'denial-prediction', strength: 0.7 },

    // Model Safety
    { source: 'model-safety', target: 'ood-detection', strength: 0.7 },
    { source: 'model-safety', target: 'fail-safes', strength: 0.7 },

    // Bias & Fairness
    { source: 'bias-fairness', target: 'subgroup-calibration', strength: 0.7 },
    { source: 'bias-fairness', target: 'equity-auditing', strength: 0.7 },

    // FDA Regulation
    { source: 'fda-regulation', target: 'fda-samd-pathway', strength: 0.7 },
    { source: 'fda-regulation', target: 'gmlp', strength: 0.7 },

    // ============ Companies to Topics ============
    { source: 'note-intelligence', target: 'abridge', strength: 0.5 },
    { source: 'note-intelligence', target: 'nabla', strength: 0.5 },
    { source: 'ehr-data', target: 'epic-cosmos', strength: 0.5 },
    { source: 'precision-oncology', target: 'tempus', strength: 0.5 },
    { source: 'precision-oncology', target: 'flatiron', strength: 0.5 },
  ]
};

