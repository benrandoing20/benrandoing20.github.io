import { GraphData, nodeColors, getNodeSize } from '@/types/graphData';

export const digitalHealthGraphData: GraphData = {
  nodes: [
    // L0 - Root
    {
      id: 'digital-health',
      name: 'Digital Health',
      type: 'category',
      layer: 0,
      description:
        "The big picture of how technology and AI are transforming healthcare-from how doctors diagnose patients to how hospitals run, how clinical data flows, and how new treatments are discovered and approved.",
      color: nodeColors.category,
      size: getNodeSize(0, 'category'),
    },

    // ===================== L1 - TOP-LEVEL CATEGORIES (11) =====================
    {
      id: 'clinical-ai-decision-support',
      name: 'Clinical AI & Decision Support',
      type: 'category',
      layer: 1,
      description:
        "AI tools that help doctors and nurses make better decisions right when they\'re with patients-like suggesting what might be causing symptoms, recommending the right tests, or helping choose the best treatment based on medical guidelines.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'llms-in-healthcare',
      name: 'LLMs in Healthcare',
      type: 'category',
      layer: 1,
      description:
        "Large language models (like ChatGPT, but trained on medical knowledge) that can write clinical notes, answer medical questions, pull information from patient records, and even help with routine tasks-all while keeping patient safety front and center.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'healthcare-data-ehr-systems',
      name: 'Healthcare Data & EHR Systems',
      type: 'category',
      layer: 1,
      description:
        "The digital infrastructure that stores patient records and makes sure different hospital systems can talk to each other. This includes cleaning up messy data and organizing it so AI models can actually use it to help patients.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'remote-monitoring-digital-care',
      name: 'Remote Monitoring & Digital Care',
      type: 'category',
      layer: 1,
      description:
        "Healthcare that happens outside the hospital-think video visits with your doctor, smart watches that track your heart rate and alert your care team, and apps that help manage chronic conditions like diabetes or mental health from home.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'population-precision-medicine',
      name: 'Population & Precision Medicine',
      type: 'category',
      layer: 1,
      description:
        "Using large-scale data and genetics to predict who's at risk for diseases and tailor treatments to each person's unique biology. It's about catching problems early and giving everyone the right care for their specific situation.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'clinical-trials-rwe',
      name: 'Clinical Trials & Real-World Evidence',
      type: 'category',
      layer: 1,
      description:
        "Making clinical trials smarter by using AI to find the right patients for studies, design better trials, and learn from real patient data in everyday care-not just controlled experiments. This helps get new treatments to patients faster.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'healthcare-ops-enterprise-ai',
      name: 'Healthcare Operations & Enterprise AI',
      type: 'category',
      layer: 1,
      description:
        "The behind-the-scenes AI that keeps hospitals running smoothly-like predicting how many patients will show up in the ER, managing billing and insurance claims, and reducing administrative paperwork so healthcare workers can focus on patients.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'safety-regulation-ethics',
      name: 'Safety, Regulation & Ethics',
      type: 'category',
      layer: 1,
      description:
        "Ensuring AI in healthcare is safe, fair, and properly regulated. This covers getting FDA approval for medical AI, making sure algorithms don't discriminate against certain groups, and continuously monitoring AI systems once they're being used with real patients.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'healthcare-privacy-security',
      name: 'Healthcare Privacy & Security',
      type: 'category',
      layer: 1,
      description:
        "Protecting patient privacy and keeping medical data secure. This includes techniques to remove identifying information, ways to train AI without sharing sensitive data between hospitals, and meeting strict healthcare privacy laws like HIPAA.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'clinical-deployment-mlops',
      name: 'Clinical Deployment & MLOps',
      type: 'category',
      layer: 1,
      description:
        "The practical work of getting AI models from the lab into actual hospitals and clinics-testing them carefully, making sure doctors can understand how they work, keeping them running reliably, and watching for any problems over time.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'industry-ecosystem',
      name: 'Health AI Industry & Ecosystem',
      type: 'category',
      layer: 1,
      description:
        "The companies, startups, and platforms actually building and selling healthcare AI-from big tech companies to innovative startups, and new models of care delivery that use AI from day one.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },

    // ===================== L2 - SUBCATEGORIES (list view coverage) =====================

    // 1) Clinical AI & Decision Support
    {
      id: 'clinical-reasoning-dx',
      name: 'Clinical Reasoning & Diagnosis',
      type: 'category',
      layer: 2,
      description:
        "AI that helps doctors figure out what's wrong with a patient by analyzing symptoms, suggesting possible diagnoses ranked by likelihood, and being honest about what it doesn't know.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'clinical-question-answering',
      name: 'Clinical Question Answering',
      type: 'category',
      layer: 2,
      description:
        "Medical AI that can answer doctors' questions by searching through medical guidelines, research papers, and best practices-designed to give accurate, trustworthy answers without making things up.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'treatment-care-pathways',
      name: 'Treatment & Care Pathway Support',
      type: 'category',
      layer: 2,
      description:
        "AI that suggests the best treatment options for each patient, helps ensure care teams follow proven protocols, and predicts how well different treatments might work.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 2) LLMs in Healthcare
    {
      id: 'medical-foundation-models',
      name: 'Medical Foundation Models',
      type: 'category',
      layer: 2,
      description:
        "Specialized AI language models trained specifically on medical knowledge-like GPT but with years of medical school training-that understand medical terminology, research, and clinical reasoning.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'clinical-note-intelligence',
      name: 'Clinical Note Intelligence',
      type: 'category',
      layer: 2,
      description:
        "AI that helps with the mountain of paperwork in healthcare-automatically writing visit summaries, pulling out key medical information, and assigning the right billing codes, so doctors can spend more time with patients.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'agentic-healthcare-systems',
      name: 'Agentic Healthcare Systems',
      type: 'category',
      layer: 2,
      description:
        "AI assistants that can take action in medical records-like scheduling appointments, entering medication orders, or sending referrals-all with safety checks to prevent mistakes.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 3) Healthcare Data & EHR Systems
    {
      id: 'ehr-data-engineering',
      name: 'EHR Data Engineering',
      type: 'category',
      layer: 2,
      description:
        "The technical work of cleaning and organizing messy hospital data so it's actually usable. This includes standardizing how different systems represent the same information (like \"heart attack\" vs \"myocardial infarction\") and making it easy to find groups of similar patients.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'interoperability-at-scale',
      name: 'Interoperability at Scale',
      type: 'category',
      layer: 2,
      description:
        "Getting different hospital computer systems to share patient information seamlessly-so when you visit a new doctor, they can see your complete medical history, even if it's from different hospitals using different software.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'clinical-knowledge-graphs',
      name: 'Clinical Knowledge Graphs',
      type: 'category',
      layer: 2,
      description:
        "Mapping out how diseases, symptoms, treatments, and patient characteristics are all connected-like a knowledge web that helps AI understand the relationships between different medical concepts and make smarter predictions.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 4) Remote Monitoring & Digital Care
    {
      id: 'remote-physiologic-monitoring',
      name: 'Remote Physiologic Monitoring (RPM)',
      type: 'category',
      layer: 2,
      description:
        "Technology that lets doctors monitor patients at home using devices like smart watches, blood pressure cuffs, and glucose monitors-collecting all that data, making sure it's accurate, and alerting care teams only when something really needs attention.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'virtual-care-delivery',
      name: 'Virtual Care Delivery',
      type: 'category',
      layer: 2,
      description:
        "The platforms and workflows that make video visits, messaging with your doctor, and online health consultations work smoothly-from deciding who needs to be seen urgently to practices that operate almost entirely online.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'digital-therapeutics-dtx',
      name: 'Digital Therapeutics (DTx)',
      type: 'category',
      layer: 2,
      description:
        "Apps and software that actually treat medical conditions (not just track them)-like programs for depression, diabetes management, or cognitive therapy-with real clinical evidence behind them and sometimes even covered by insurance.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 5) Population & Precision Medicine
    {
      id: 'risk-prediction-stratification',
      name: 'Risk Prediction & Stratification',
      type: 'category',
      layer: 2,
      description:
        "AI that predicts which patients are at risk of getting seriously ill-like catching signs of infection before it becomes life-threatening, or identifying who's likely to end up back in the hospital so extra support can be provided.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'precision-oncology-genomic-care',
      name: 'Precision Oncology & Genomic Care',
      type: 'category',
      layer: 2,
      description:
        "Using genetic analysis of cancers to find the specific mutations driving each patient's tumor and match them to targeted therapies-making cancer treatment more personalized and effective.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'pharmacogenomics',
      name: 'Pharmacogenomics',
      type: 'category',
      layer: 2,
      description:
        "Using your genetic makeup to predict how you'll respond to different medications-helping doctors choose the right drug and dose for you, and avoiding ones that might not work or cause side effects based on your DNA.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 6) Clinical Trials & RWE
    {
      id: 'trial-matching-eligibility-ai',
      name: 'Trial Matching & Eligibility AI',
      type: 'category',
      layer: 2,
      description:
        "AI that reads complex clinical trial requirements and automatically finds patients who qualify, making it easier for people to find trials that might help them and for researchers to recruit participants faster.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'real-world-evidence',
      name: 'Real-World Evidence (RWE)',
      type: 'category',
      layer: 2,
      description:
        "Learning from real patient data in everyday care (not just formal trials) to understand how treatments work in the real world, what side effects happen, and which patients benefit most-evidence that can support FDA approvals and insurance coverage.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'synthetic-control-arms',
      name: 'Synthetic Control Arms',
      type: 'category',
      layer: 2,
      description:
        "Using historical patient data or AI-generated comparison groups instead of giving some patients placebo or standard treatment-making trials faster, cheaper, and more ethical, especially for rare diseases.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 7) Healthcare Operations & Enterprise AI
    {
      id: 'operational-optimization',
      name: 'Operational Optimization',
      type: 'category',
      layer: 2,
      description:
        "Using AI to predict how busy a hospital will be, optimize operating room schedules, reduce ER wait times, and make sure patients flow smoothly through the system-improving care and reducing costs.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'revenue-cycle-management',
      name: 'Revenue Cycle Management',
      type: 'category',
      layer: 2,
      description:
        "Automating the complex billing and insurance side of healthcare-making sure procedures are coded correctly, claims get paid, and identifying billing errors before they become problems.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'payer-provider-automation',
      name: 'Payer-Provider Automation',
      type: 'category',
      layer: 2,
      description:
        "Streamlining the frustrating back-and-forth between doctors and insurance companies-automatically checking if treatments need approval, verifying coverage, and reducing administrative delays that slow down patient care.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 8) Safety, Regulation & Ethics
    {
      id: 'model-safety-clinical-risk',
      name: 'Model Safety & Clinical Risk',
      type: 'category',
      layer: 2,
      description:
        "Safety systems that detect when medical AI encounters something unusual it hasn't seen before, stop it from making risky decisions, and ensure humans review critical choices-plus protocols for responding when something goes wrong.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'bias-fairness',
      name: 'Bias & Fairness',
      type: 'category',
      layer: 2,
      description:
        "Ensuring medical AI works equally well for everyone-actively checking that algorithms don't perform worse for certain racial, gender, or socioeconomic groups, and fixing disparities when they're found.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'regulation-samd',
      name: 'Regulation & SaMD',
      type: 'category',
      layer: 2,
      description:
        "The regulatory pathways and best practices for getting medical AI approved by the FDA and keeping it compliant-including special considerations for software that acts as a medical device and ongoing monitoring after it's released.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 9) Healthcare Privacy & Security
    {
      id: 'deidentification-phi-protection',
      name: 'De-Identification & PHI Protection',
      type: 'category',
      layer: 2,
      description:
        "Techniques for removing or masking identifying information from medical records so data can be used for research and AI training while protecting patient privacy-with mathematical guarantees that individuals can't be re-identified.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'federated-learning-healthcare',
      name: 'Federated Learning in Healthcare',
      type: 'category',
      layer: 2,
      description:
        "A clever way to train AI across multiple hospitals without any sensitive patient data leaving each hospital-the algorithm travels to the data rather than the data traveling to a central location.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'secure-ai-deployment',
      name: 'Secure AI Deployment',
      type: 'category',
      layer: 2,
      description:
        "The security infrastructure needed to run medical AI in real healthcare settings-meeting strict privacy regulations, controlling who can access what, tracking all system activity, and encrypting sensitive data.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 10) Clinical Deployment & MLOps
    {
      id: 'clinical-validation-monitoring',
      name: 'Clinical Validation & Monitoring',
      type: 'category',
      layer: 2,
      description:
        "Testing AI carefully before it goes live-running it in \"shadow mode\" where it makes predictions but doesn't affect care, continuously monitoring performance after launch, and detecting when its accuracy starts to decline over time.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'model-explainability-medicine',
      name: 'Model Explainability in Medicine',
      type: 'category',
      layer: 2,
      description:
        "Making AI understandable to doctors and patients-explaining why the AI made a specific recommendation for this patient, how the model works in general, and building systems that doctors can trust and audit when needed.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'production-ai-systems',
      name: 'Production AI Systems',
      type: 'category',
      layer: 2,
      description:
        "The technical infrastructure that keeps medical AI running reliably 24/7-making predictions fast enough for clinical use, having backup systems when things fail, and maintaining the kind of uptime you'd expect from critical hospital systems.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 11) Industry & Ecosystem
    {
      id: 'clinical-ai-platforms',
      name: 'Clinical AI Platforms',
      type: 'category',
      layer: 2,
      description:
        "Complete AI platforms that doctors can use during patient visits-tools that listen to conversations and write notes automatically, suggest diagnoses and treatments, and integrate seamlessly into clinical workflow.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'health-data-platforms',
      name: 'Health Data Platforms',
      type: 'category',
      layer: 2,
      description:
        "Large-scale databases and networks that aggregate patient data from many hospitals and clinics-powering research, helping develop AI models, and enabling population health analytics while maintaining privacy.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'ai-driven-care-delivery',
      name: 'AI-Driven Care Delivery',
      type: 'category',
      layer: 2,
      description:
        "New models of healthcare built around AI from the ground up-like tech-forward clinics that use data and automation to deliver better, more personalized care, often at lower cost than traditional practices.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // ===================== L3 - KEY CONCEPTS (selected examples) =====================
    { id: 'diff-dx', name: 'Differential Diagnosis', type: 'concept', layer: 3, description: 'Ranking hypotheses with priors and likelihoods.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'bayes', name: 'Bayesian Reasoning', type: 'concept', layer: 3, description: 'Probabilistic updates from evidence streams.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'uncertainty', name: 'Uncertainty Quantification', type: 'concept', layer: 3, description: 'Predictive confidence and abstention policies.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    { id: 'clinical-rag', name: 'RAG for Clinical QA', type: 'concept', layer: 3, description: 'Guideline + literature retrieval with synthesis.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'guideline-grounding', name: 'Guideline Grounding', type: 'concept', layer: 3, description: 'Anchoring answers to trusted sources.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    { id: 'fhir', name: 'FHIR Resources', type: 'concept', layer: 3, description: 'Standardized clinical entities for APIs.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'feature-stores', name: 'Feature Stores', type: 'concept', layer: 3, description: 'Reusable clinical features for modeling.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'cohort-builder', name: 'Cohort Builder', type: 'concept', layer: 3, description: 'Querying patient populations for studies or ops.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    { id: 'wearables', name: 'Wearable Integration', type: 'concept', layer: 3, description: 'Aggregation and QA for device signals.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'alert-fatigue', name: 'Alert Fatigue Mitigation', type: 'concept', layer: 3, description: 'Tiered, context-aware alerting strategies.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    { id: 'telehealth', name: 'Telehealth', type: 'concept', layer: 3, description: 'Synchronous and asynchronous virtual visits.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'triage-ai', name: 'Triage AI', type: 'concept', layer: 3, description: 'Routing patients to the right modality and time.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    { id: 'sepsis-ewss', name: 'Sepsis Prediction', type: 'concept', layer: 3, description: 'Early warning and escalation criteria.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'readmission', name: 'Readmission Risk', type: 'concept', layer: 3, description: '30-day risk for care management targeting.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    { id: 'multi-omic', name: 'Multi-Omic Profiling', type: 'concept', layer: 3, description: 'Genomic, transcriptomic, proteomic signals.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'targeted-therapy', name: 'Targeted Therapy', type: 'concept', layer: 3, description: 'Mutation-guided treatment selection.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    { id: 'eligibility-parsing', name: 'Eligibility Parsing', type: 'concept', layer: 3, description: 'Turning textual criteria into logic.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'phenotype-extraction', name: 'Phenotype Extraction', type: 'concept', layer: 3, description: 'Linking records to trial phenotypes.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    { id: 'ood', name: 'OOD Detection', type: 'concept', layer: 3, description: 'Detecting distribution shift and unsafe inputs.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'fail-safes', name: 'Fail-Safes', type: 'concept', layer: 3, description: 'Fallbacks and circuit breakers.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    { id: 'subgroup-cal', name: 'Subgroup Calibration', type: 'concept', layer: 3, description: 'Measuring fairness by cohort.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'equity-audit', name: 'Equity Auditing', type: 'concept', layer: 3, description: 'Bias detection and mitigation.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    { id: 'samd', name: 'FDA SaMD Pathway', type: 'concept', layer: 3, description: 'Regulatory routes and evidence types.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'gmlp', name: 'GMLP', type: 'concept', layer: 3, description: 'Good Machine Learning Practice.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // ===================== L4 - RESOURCES (RED nodes linking to resource pages) =====================
    // Clinical AI & Decision Support
    { id: 'resource-clinical-reasoning', name: 'Clinical Reasoning & Diagnosis', type: 'resource', layer: 4, description: 'AI that helps doctors figure out diagnoses', url: '/resources/digital-health/clinical-ai-and-decision-support/clinical-reasoning-and-diagnosis', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-clinical-qa', name: 'Clinical Question Answering', type: 'resource', layer: 4, description: 'Medical AI that answers clinical questions', url: '/resources/digital-health/clinical-ai-and-decision-support/clinical-question-answering', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-treatment-pathways', name: 'Treatment & Care Pathway Support', type: 'resource', layer: 4, description: 'AI suggesting best treatment options', url: '/resources/digital-health/clinical-ai-and-decision-support/treatment-and-care-pathway-support', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // LLMs in Healthcare
    { id: 'resource-medical-foundation', name: 'Medical Foundation Models', type: 'resource', layer: 4, description: 'Specialized medical language models', url: '/resources/digital-health/llms-in-healthcare/medical-foundation-models', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-clinical-notes', name: 'Clinical Note Intelligence', type: 'resource', layer: 4, description: 'AI for healthcare documentation', url: '/resources/digital-health/llms-in-healthcare/clinical-note-intelligence', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-agentic-healthcare', name: 'Agentic Healthcare Systems', type: 'resource', layer: 4, description: 'AI assistants that take action in EHRs', url: '/resources/digital-health/llms-in-healthcare/agentic-healthcare-systems', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Healthcare Data & EHR Systems
    { id: 'resource-ehr-data', name: 'EHR Data Engineering', type: 'resource', layer: 4, description: 'Cleaning and organizing hospital data', url: '/resources/digital-health/healthcare-data-and-ehr-systems/ehr-data-engineering', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-interoperability', name: 'Interoperability at Scale', type: 'resource', layer: 4, description: 'Getting hospital systems to share data', url: '/resources/digital-health/healthcare-data-and-ehr-systems/interoperability-at-scale', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-knowledge-graphs', name: 'Clinical Knowledge Graphs', type: 'resource', layer: 4, description: 'Mapping medical concept relationships', url: '/resources/digital-health/healthcare-data-and-ehr-systems/clinical-knowledge-graphs', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Remote Monitoring & Digital Care
    { id: 'resource-rpm', name: 'Remote Physiologic Monitoring (RPM)', type: 'resource', layer: 4, description: 'Technology for monitoring patients at home', url: '/resources/digital-health/remote-monitoring-and-digital-care/remote-physiologic-monitoring-rpm', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-virtual-care', name: 'Virtual Care Delivery', type: 'resource', layer: 4, description: 'Platforms for video visits and online care', url: '/resources/digital-health/remote-monitoring-and-digital-care/virtual-care-delivery', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-dtx', name: 'Digital Therapeutics (DTx)', type: 'resource', layer: 4, description: 'Apps that actually treat medical conditions', url: '/resources/digital-health/remote-monitoring-and-digital-care/digital-therapeutics-dtx', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Population & Precision Medicine
    { id: 'resource-risk-prediction', name: 'Risk Prediction & Stratification', type: 'resource', layer: 4, description: 'AI predicting which patients are at risk', url: '/resources/digital-health/population-and-precision-medicine/risk-prediction-and-stratification', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-precision-oncology', name: 'Precision Oncology & Genomic Care', type: 'resource', layer: 4, description: 'Using genetic analysis for cancer treatment', url: '/resources/digital-health/population-and-precision-medicine/precision-oncology-and-genomic-care', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-pharmacogenomics', name: 'Pharmacogenomics', type: 'resource', layer: 4, description: 'Using genetics to predict drug response', url: '/resources/digital-health/population-and-precision-medicine/pharmacogenomics', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Clinical Trials & RWE
    { id: 'resource-trial-matching', name: 'Trial Matching & Eligibility AI', type: 'resource', layer: 4, description: 'AI finding patients for clinical trials', url: '/resources/digital-health/clinical-trials-and-real-world-evidence/trial-matching-and-eligibility-ai', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-rwe', name: 'Real-World Evidence (RWE)', type: 'resource', layer: 4, description: 'Learning from real patient data', url: '/resources/digital-health/clinical-trials-and-real-world-evidence/real-world-evidence-rwe', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-synthetic-control', name: 'Synthetic Control Arms', type: 'resource', layer: 4, description: 'Using historical data instead of placebo', url: '/resources/digital-health/clinical-trials-and-real-world-evidence/synthetic-control-arms', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Healthcare Operations & Enterprise AI
    { id: 'resource-ops-optimization', name: 'Operational Optimization', type: 'resource', layer: 4, description: 'AI optimizing hospital operations', url: '/resources/digital-health/healthcare-operations-and-enterprise-ai/operational-optimization', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-revenue-cycle', name: 'Revenue Cycle Management', type: 'resource', layer: 4, description: 'Automating healthcare billing', url: '/resources/digital-health/healthcare-operations-and-enterprise-ai/revenue-cycle-management', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-payer-provider', name: 'Payer-Provider Automation', type: 'resource', layer: 4, description: 'Streamlining insurance processes', url: '/resources/digital-health/healthcare-operations-and-enterprise-ai/payer-provider-automation', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Safety, Regulation & Ethics
    { id: 'resource-model-safety', name: 'Model Safety & Clinical Risk', type: 'resource', layer: 4, description: 'Safety systems for medical AI', url: '/resources/digital-health/safety-regulation-and-ethics/model-safety-and-clinical-risk', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-bias-fairness', name: 'Bias & Fairness', type: 'resource', layer: 4, description: 'Ensuring AI works equally well for everyone', url: '/resources/digital-health/safety-regulation-and-ethics/bias-and-fairness', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-regulation', name: 'Regulation & SaMD', type: 'resource', layer: 4, description: 'FDA pathways for medical AI', url: '/resources/digital-health/safety-regulation-and-ethics/regulation-and-samd', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Healthcare Privacy & Security
    { id: 'resource-deidentification', name: 'De-Identification & PHI Protection', type: 'resource', layer: 4, description: 'Protecting patient privacy', url: '/resources/digital-health/healthcare-privacy-and-security/de-identification-and-phi-protection', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-federated-learning', name: 'Federated Learning in Healthcare', type: 'resource', layer: 4, description: 'Training AI without sharing data', url: '/resources/digital-health/healthcare-privacy-and-security/federated-learning-in-healthcare', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-secure-deployment', name: 'Secure AI Deployment', type: 'resource', layer: 4, description: 'Security infrastructure for medical AI', url: '/resources/digital-health/healthcare-privacy-and-security/secure-ai-deployment', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Clinical Deployment & MLOps
    { id: 'resource-clinical-validation', name: 'Clinical Validation & Monitoring', type: 'resource', layer: 4, description: 'Testing AI before it goes live', url: '/resources/digital-health/clinical-deployment-and-mlops/clinical-validation-and-monitoring', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-explainability', name: 'Model Explainability in Medicine', type: 'resource', layer: 4, description: 'Making AI understandable to doctors', url: '/resources/digital-health/clinical-deployment-and-mlops/model-explainability-in-medicine', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-production-ai', name: 'Production AI Systems', type: 'resource', layer: 4, description: 'Keeping medical AI running reliably', url: '/resources/digital-health/clinical-deployment-and-mlops/production-ai-systems', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Health AI Industry & Ecosystem
    { id: 'resource-clinical-platforms', name: 'Clinical AI Platforms', type: 'resource', layer: 4, description: 'Complete AI platforms for doctors', url: '/resources/digital-health/health-ai-industry-and-ecosystem/clinical-ai-platforms', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-health-data-platforms', name: 'Health Data Platforms', type: 'resource', layer: 4, description: 'Large-scale patient data networks', url: '/resources/digital-health/health-ai-industry-and-ecosystem/health-data-platforms', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-ai-care-delivery', name: 'AI-Driven Care Delivery', type: 'resource', layer: 4, description: 'New healthcare models built around AI', url: '/resources/digital-health/health-ai-industry-and-ecosystem/ai-driven-care-delivery', color: nodeColors.resource, size: getNodeSize(4, 'resource') },

    // ===================== L4 - COMPANIES (examples to anchor edges) =====================
    // { id: 'abridge', name: 'Abridge', type: 'company', layer: 4, description: 'Ambient clinical documentation.', url: 'https://abridge.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'nabla', name: 'Nabla', type: 'company', layer: 4, description: 'AI clinical assistant.', url: 'https://nabla.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'nuance-dragon-ambient', name: 'Nuance Dragon Ambient', type: 'company', layer: 4, description: 'Ambient documentation by Microsoft.', url: 'https://www.nuance.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'aws-healthscribe', name: 'AWS HealthScribe', type: 'company', layer: 4, description: 'Note-generation API.', url: 'https://aws.amazon.com/healthscribe/', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'google-medlm', name: 'Google MedLM', type: 'company', layer: 4, description: 'Medical LLM suite.', url: 'https://cloud.google.com/medical-imaging', color: nodeColors.company, size: getNodeSize(4, 'company') },

    // { id: 'epic-cosmos', name: 'Epic Cosmos', type: 'company', layer: 4, description: 'EHR data network.', url: 'https://www.epic.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'truveta', name: 'Truveta', type: 'company', layer: 4, description: 'De-identified EHR data platform.', url: 'https://www.truveta.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'tempus', name: 'Tempus', type: 'company', layer: 4, description: 'Precision medicine platform.', url: 'https://www.tempus.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'flatiron', name: 'Flatiron Health', type: 'company', layer: 4, description: 'Oncology RWE.', url: 'https://flatiron.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'komodo', name: 'Komodo Health', type: 'company', layer: 4, description: 'Healthcare map & insights.', url: 'https://www.komodohealth.com', color: nodeColors.company, size: getNodeSize(4, 'company') },

    // { id: 'forward', name: 'Forward', type: 'company', layer: 4, description: 'Tech-enabled primary care.', url: 'https://goforward.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'one-medical', name: 'One Medical', type: 'company', layer: 4, description: 'Concierge primary care.', url: 'https://www.onemedical.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
  ],

  links: [
    // L0 → L1
    { source: 'digital-health', target: 'clinical-ai-decision-support', strength: 1 },
    { source: 'digital-health', target: 'llms-in-healthcare', strength: 1 },
    { source: 'digital-health', target: 'healthcare-data-ehr-systems', strength: 1 },
    { source: 'digital-health', target: 'remote-monitoring-digital-care', strength: 1 },
    { source: 'digital-health', target: 'population-precision-medicine', strength: 1 },
    { source: 'digital-health', target: 'clinical-trials-rwe', strength: 1 },
    { source: 'digital-health', target: 'healthcare-ops-enterprise-ai', strength: 1 },
    { source: 'digital-health', target: 'safety-regulation-ethics', strength: 1 },
    { source: 'digital-health', target: 'healthcare-privacy-security', strength: 1 },
    { source: 'digital-health', target: 'clinical-deployment-mlops', strength: 1 },
    { source: 'digital-health', target: 'industry-ecosystem', strength: 1 },

    // L1 → L2 (mirrors your list)
    { source: 'clinical-ai-decision-support', target: 'clinical-reasoning-dx', strength: 1 },
    { source: 'clinical-ai-decision-support', target: 'clinical-question-answering', strength: 1 },
    { source: 'clinical-ai-decision-support', target: 'treatment-care-pathways', strength: 1 },

    { source: 'llms-in-healthcare', target: 'medical-foundation-models', strength: 1 },
    { source: 'llms-in-healthcare', target: 'clinical-note-intelligence', strength: 1 },
    { source: 'llms-in-healthcare', target: 'agentic-healthcare-systems', strength: 1 },

    { source: 'healthcare-data-ehr-systems', target: 'ehr-data-engineering', strength: 1 },
    { source: 'healthcare-data-ehr-systems', target: 'interoperability-at-scale', strength: 1 },
    { source: 'healthcare-data-ehr-systems', target: 'clinical-knowledge-graphs', strength: 1 },

    { source: 'remote-monitoring-digital-care', target: 'remote-physiologic-monitoring', strength: 1 },
    { source: 'remote-monitoring-digital-care', target: 'virtual-care-delivery', strength: 1 },
    { source: 'remote-monitoring-digital-care', target: 'digital-therapeutics-dtx', strength: 1 },

    { source: 'population-precision-medicine', target: 'risk-prediction-stratification', strength: 1 },
    { source: 'population-precision-medicine', target: 'precision-oncology-genomic-care', strength: 1 },
    { source: 'population-precision-medicine', target: 'pharmacogenomics', strength: 1 },

    { source: 'clinical-trials-rwe', target: 'trial-matching-eligibility-ai', strength: 1 },
    { source: 'clinical-trials-rwe', target: 'real-world-evidence', strength: 1 },
    { source: 'clinical-trials-rwe', target: 'synthetic-control-arms', strength: 1 },

    { source: 'healthcare-ops-enterprise-ai', target: 'operational-optimization', strength: 1 },
    { source: 'healthcare-ops-enterprise-ai', target: 'revenue-cycle-management', strength: 1 },
    { source: 'healthcare-ops-enterprise-ai', target: 'payer-provider-automation', strength: 1 },

    { source: 'safety-regulation-ethics', target: 'model-safety-clinical-risk', strength: 1 },
    { source: 'safety-regulation-ethics', target: 'bias-fairness', strength: 1 },
    { source: 'safety-regulation-ethics', target: 'regulation-samd', strength: 1 },

    { source: 'healthcare-privacy-security', target: 'deidentification-phi-protection', strength: 1 },
    { source: 'healthcare-privacy-security', target: 'federated-learning-healthcare', strength: 1 },
    { source: 'healthcare-privacy-security', target: 'secure-ai-deployment', strength: 1 },

    { source: 'clinical-deployment-mlops', target: 'clinical-validation-monitoring', strength: 1 },
    { source: 'clinical-deployment-mlops', target: 'model-explainability-medicine', strength: 1 },
    { source: 'clinical-deployment-mlops', target: 'production-ai-systems', strength: 1 },

    { source: 'industry-ecosystem', target: 'clinical-ai-platforms', strength: 1 },
    { source: 'industry-ecosystem', target: 'health-data-platforms', strength: 1 },
    { source: 'industry-ecosystem', target: 'ai-driven-care-delivery', strength: 1 },

    // L2 → L3 (concept edges)
    { source: 'clinical-reasoning-dx', target: 'diff-dx', strength: 0.7 },
    { source: 'clinical-reasoning-dx', target: 'bayes', strength: 0.7 },
    { source: 'clinical-reasoning-dx', target: 'uncertainty', strength: 0.7 },

    { source: 'clinical-question-answering', target: 'clinical-rag', strength: 0.7 },
    { source: 'clinical-question-answering', target: 'guideline-grounding', strength: 0.7 },

    { source: 'ehr-data-engineering', target: 'fhir', strength: 0.7 },
    { source: 'ehr-data-engineering', target: 'feature-stores', strength: 0.7 },
    { source: 'ehr-data-engineering', target: 'cohort-builder', strength: 0.7 },

    { source: 'remote-physiologic-monitoring', target: 'wearables', strength: 0.7 },
    { source: 'remote-physiologic-monitoring', target: 'alert-fatigue', strength: 0.7 },

    { source: 'virtual-care-delivery', target: 'telehealth', strength: 0.7 },
    { source: 'virtual-care-delivery', target: 'triage-ai', strength: 0.7 },

    { source: 'risk-prediction-stratification', target: 'sepsis-ewss', strength: 0.7 },
    { source: 'risk-prediction-stratification', target: 'readmission', strength: 0.7 },

    { source: 'precision-oncology-genomic-care', target: 'multi-omic', strength: 0.7 },
    { source: 'precision-oncology-genomic-care', target: 'targeted-therapy', strength: 0.7 },

    { source: 'trial-matching-eligibility-ai', target: 'eligibility-parsing', strength: 0.7 },
    { source: 'trial-matching-eligibility-ai', target: 'phenotype-extraction', strength: 0.7 },

    { source: 'model-safety-clinical-risk', target: 'ood', strength: 0.7 },
    { source: 'model-safety-clinical-risk', target: 'fail-safes', strength: 0.7 },

    { source: 'bias-fairness', target: 'subgroup-cal', strength: 0.7 },
    { source: 'bias-fairness', target: 'equity-audit', strength: 0.7 },

    { source: 'regulation-samd', target: 'samd', strength: 0.7 },
    { source: 'regulation-samd', target: 'gmlp', strength: 0.7 },

    // ============= L2 → L4 (RED Resource Nodes) =============
    // Clinical AI & Decision Support
    { source: 'clinical-reasoning-dx', target: 'resource-clinical-reasoning', strength: 0.8 },
    { source: 'clinical-question-answering', target: 'resource-clinical-qa', strength: 0.8 },
    { source: 'treatment-care-pathways', target: 'resource-treatment-pathways', strength: 0.8 },
    
    // LLMs in Healthcare
    { source: 'medical-foundation-models', target: 'resource-medical-foundation', strength: 0.8 },
    { source: 'clinical-note-intelligence', target: 'resource-clinical-notes', strength: 0.8 },
    { source: 'agentic-healthcare-systems', target: 'resource-agentic-healthcare', strength: 0.8 },
    
    // Healthcare Data & EHR Systems
    { source: 'ehr-data-engineering', target: 'resource-ehr-data', strength: 0.8 },
    { source: 'interoperability-at-scale', target: 'resource-interoperability', strength: 0.8 },
    { source: 'clinical-knowledge-graphs', target: 'resource-knowledge-graphs', strength: 0.8 },
    
    // Remote Monitoring & Digital Care
    { source: 'remote-physiologic-monitoring', target: 'resource-rpm', strength: 0.8 },
    { source: 'virtual-care-delivery', target: 'resource-virtual-care', strength: 0.8 },
    { source: 'digital-therapeutics-dtx', target: 'resource-dtx', strength: 0.8 },
    
    // Population & Precision Medicine
    { source: 'risk-prediction-stratification', target: 'resource-risk-prediction', strength: 0.8 },
    { source: 'precision-oncology-genomic-care', target: 'resource-precision-oncology', strength: 0.8 },
    { source: 'pharmacogenomics', target: 'resource-pharmacogenomics', strength: 0.8 },
    
    // Clinical Trials & RWE
    { source: 'trial-matching-eligibility-ai', target: 'resource-trial-matching', strength: 0.8 },
    { source: 'real-world-evidence', target: 'resource-rwe', strength: 0.8 },
    { source: 'synthetic-control-arms', target: 'resource-synthetic-control', strength: 0.8 },
    
    // Healthcare Operations & Enterprise AI
    { source: 'operational-optimization', target: 'resource-ops-optimization', strength: 0.8 },
    { source: 'revenue-cycle-management', target: 'resource-revenue-cycle', strength: 0.8 },
    { source: 'payer-provider-automation', target: 'resource-payer-provider', strength: 0.8 },
    
    // Safety, Regulation & Ethics
    { source: 'model-safety-clinical-risk', target: 'resource-model-safety', strength: 0.8 },
    { source: 'bias-fairness', target: 'resource-bias-fairness', strength: 0.8 },
    { source: 'regulation-samd', target: 'resource-regulation', strength: 0.8 },
    
    // Healthcare Privacy & Security
    { source: 'deidentification-phi-protection', target: 'resource-deidentification', strength: 0.8 },
    { source: 'federated-learning-healthcare', target: 'resource-federated-learning', strength: 0.8 },
    { source: 'secure-ai-deployment', target: 'resource-secure-deployment', strength: 0.8 },
    
    // Clinical Deployment & MLOps
    { source: 'clinical-validation-monitoring', target: 'resource-clinical-validation', strength: 0.8 },
    { source: 'model-explainability-medicine', target: 'resource-explainability', strength: 0.8 },
    { source: 'production-ai-systems', target: 'resource-production-ai', strength: 0.8 },
    
    // Health AI Industry & Ecosystem
    { source: 'clinical-ai-platforms', target: 'resource-clinical-platforms', strength: 0.8 },
    { source: 'health-data-platforms', target: 'resource-health-data-platforms', strength: 0.8 },
    { source: 'ai-driven-care-delivery', target: 'resource-ai-care-delivery', strength: 0.8 },

    // Companies → relevant categories
    // { source: 'clinical-note-intelligence', target: 'abridge', strength: 0.5 },
    // { source: 'clinical-note-intelligence', target: 'nabla', strength: 0.5 },
    // { source: 'llms-in-healthcare', target: 'nuance-dragon-ambient', strength: 0.5 },
    // { source: 'llms-in-healthcare', target: 'aws-healthscribe', strength: 0.5 },
    // { source: 'llms-in-healthcare', target: 'google-medlm', strength: 0.5 },

    // { source: 'healthcare-data-ehr-systems', target: 'epic-cosmos', strength: 0.5 },
    // { source: 'healthcare-data-ehr-systems', target: 'truveta', strength: 0.5 },

    // { source: 'precision-oncology-genomic-care', target: 'tempus', strength: 0.5 },
    // { source: 'precision-oncology-genomic-care', target: 'flatiron', strength: 0.5 },

    // { source: 'industry-ecosystem', target: 'komodo', strength: 0.5 },
    // { source: 'ai-driven-care-delivery', target: 'forward', strength: 0.5 },
    // { source: 'ai-driven-care-delivery', target: 'one-medical', strength: 0.5 },
  ],
};
