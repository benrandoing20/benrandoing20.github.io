import { GraphData, nodeColors, getNodeSize } from '@/types/graphData';

export const digitalBiologyGraphData: GraphData = {
  nodes: [
    // L0 — Root
    {
      id: 'digital-biology',
      name: 'Digital Biology',
      type: 'category',
      layer: 0,
      description:
        "The intersection of computer science, AI, and biology—using computational tools to understand life at the molecular level, design new therapies, automate lab experiments, and accelerate drug discovery from years to months.",
      color: nodeColors.category,
      size: getNodeSize(0, 'category'),
    },

    // ===================== L1 — TOP-LEVEL CATEGORIES (11) =====================
    {
      id: 'genomics-omics',
      name: 'Genomics & Omics',
      type: 'category',
      layer: 1,
      description:
        "Reading and analyzing the complete genetic code and molecular signatures of organisms—from sequencing your DNA to understanding which genes are active in different cells and how they influence health and disease.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'structural-biology-simulation',
      name: 'Structural Biology & Molecular Simulation',
      type: 'category',
      layer: 1,
      description:
        "Predicting and designing the 3D shapes of proteins and molecules using AI and physics simulations—crucial for understanding how drugs bind to their targets and creating new therapeutic proteins.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'ai-drug-discovery-compchem',
      name: 'AI Drug Discovery & Computational Chemistry',
      type: 'category',
      layer: 1,
      description:
        "Using AI to design new drug molecules, predict which compounds will work best, and figure out how to synthesize them—dramatically speeding up the process of turning ideas into medicines.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'gene-editing-cell-engineering',
      name: 'Gene Editing & Cell Engineering',
      type: 'category',
      layer: 1,
      description:
        "Precisely editing DNA with tools like CRISPR and engineering cells to treat diseases—from fixing genetic mutations to creating cells that can hunt down cancer.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'synthetic-biology',
      name: 'Synthetic Biology',
      type: 'category',
      layer: 1,
      description:
        "Programming cells like living computers—designing genetic circuits, engineering metabolic pathways to produce useful chemicals, and building biological systems from scratch with predictable behaviors.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'systems-biology',
      name: 'Systems Biology',
      type: 'category',
      layer: 1,
      description:
        "Understanding how all the parts of a cell work together as a system—mapping networks of interacting genes and proteins, building computer models of entire cells, and predicting how changes ripple through biology.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'bioinformatics-data-engineering',
      name: 'Bioinformatics & Data Engineering',
      type: 'category',
      layer: 1,
      description:
        "The data infrastructure of modern biology—building pipelines to process massive genomic datasets, organizing biological knowledge, and making research data findable and reusable.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'self-driving-labs-automation',
      name: 'Self-Driving Labs & Bio Automation',
      type: 'category',
      layer: 1,
      description:
        "Robots and AI that design and run experiments automatically—from liquid-handling robots that work 24/7 to AI that learns from results and decides what experiment to try next.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'bio-rd-infrastructure',
      name: 'Bio R&D Infrastructure',
      type: 'category',
      layer: 1,
      description:
        "The cloud platforms and computing infrastructure that power modern biological research—from secure data storage to GPU clusters for running AI models on genomic data.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'ai-biotech-industry',
      name: 'AI Biotech Industry Landscape',
      type: 'category',
      layer: 1,
      description:
        "The emerging ecosystem of companies using AI to discover drugs and therapies—from tech-first pharma platforms to new business models around data and computational tools.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'accelerated-bioai',
      name: 'Accelerated BioAI',
      type: 'category',
      layer: 1,
      description:
        "NVIDIA's specialized tools for biological AI—GPU-accelerated software for analyzing genomes, training biological AI models, and running predictions at massive scale.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },

    // ===================== L2 — SUBCATEGORIES (mirrors your list) =====================

    // 1) Genomics & Omics
    {
      id: 'ngs-platforms',
      name: 'Next-Generation Sequencing Platforms',
      type: 'category',
      layer: 2,
      description:
        "The technologies that read DNA and RNA sequences—from machines that sequence entire genomes in hours to software that turns raw sensor data into accurate genetic codes.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'variant-calling-phasing',
      name: 'Variant Calling and Phasing',
      type: 'category',
      layer: 2,
      description:
        "Finding the specific genetic differences between individuals—identifying mutations, determining which variants came from mom vs dad, and linking genetic changes to traits or diseases.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'transcriptomics-singlecell-spatial',
      name: 'Transcriptomics Single Cell and Spatial',
      type: 'category',
      layer: 2,
      description:
        "Measuring which genes are turned on in cells—from analyzing thousands of individual cells at once to mapping exactly where genes are active in tissues like a molecular GPS.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'epigenomics-chromatin',
      name: 'Epigenomics and Chromatin',
      type: 'category',
      layer: 2,
      description:
        "Understanding the chemical marks and 3D structure that control which genes are accessible—like reading the instruction manual that tells cells which parts of their DNA to use.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'microbiome-metagenomics',
      name: 'Microbiome and Metagenomics',
      type: 'category',
      layer: 2,
      description:
        "Analyzing communities of microbes—identifying the bacteria, viruses, and fungi living in your gut or environment and understanding what they're doing.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 2) Structural Biology & Molecular Simulation
    {
      id: 'protein-structure-prediction',
      name: 'Protein Structure Prediction',
      type: 'category',
      layer: 2,
      description:
        "Using AI like AlphaFold to predict the 3D shape of proteins from their amino acid sequence—solving a 50-year-old problem that's revolutionizing drug discovery.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'protein-antibody-design',
      name: 'Protein and Antibody Design',
      type: 'category',
      layer: 2,
      description:
        "Designing new proteins and antibodies from scratch using AI—creating molecules that bind to specific targets for use as drugs or research tools.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'molecular-docking-scoring',
      name: 'Molecular Docking and Scoring',
      type: 'category',
      layer: 2,
      description:
        "Computationally predicting how drug molecules fit into protein pockets—like testing millions of keys to see which ones unlock a specific lock.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'molecular-dynamics-enhanced-sampling',
      name: 'Molecular Dynamics and Enhanced Sampling',
      type: 'category',
      layer: 2,
      description:
        "Simulating how proteins move and flex using physics equations—watching molecular movies to understand how drugs bind and proteins function.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'qm-mm-free-energy',
      name: 'QM MM and Free Energy Methods',
      type: 'category',
      layer: 2,
      description:
        "Combining quantum mechanics with molecular simulations to precisely calculate binding energies—the gold standard for predicting which drug candidates will work best.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 3) AI Drug Discovery & Computational Chemistry
    {
      id: 'reaction-prediction-retrosynthesis',
      name: 'Reaction Prediction and Retrosynthesis',
      type: 'category',
      layer: 2,
      description:
        "AI that figures out how to synthesize complex drug molecules—working backwards from the target molecule to suggest which chemical reactions and starting materials to use.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'virtual-screening-hit-discovery',
      name: 'Virtual Screening and Hit Discovery',
      type: 'category',
      layer: 2,
      description:
        "Computationally searching through millions or billions of molecules to find promising drug candidates—like using AI to pre-filter before expensive lab experiments.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'lead-optimization-multi-objective',
      name: 'Lead Optimization and Multi Objective Design',
      type: 'category',
      layer: 2,
      description:
        "Designing better versions of drug candidates using AI—optimizing multiple properties at once like potency, safety, and how easy they are to make.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'admet-pkpd',
      name: 'ADMET and PK PD Modeling',
      type: 'category',
      layer: 2,
      description:
        "Predicting how drugs behave in the body—will it be absorbed, how long will it last, will it cause side effects—all before testing in animals or humans.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'binding-affinity-fep',
      name: 'Binding Affinity and FEP Workflows',
      type: 'category',
      layer: 2,
      description:
        "Ultra-precise physics-based calculations of how tightly drugs bind to their targets—helping choose between similar drug candidates.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 4) Gene Editing & Cell Engineering
    {
      id: 'crispr-guide-design-offtarget',
      name: 'CRISPR Guide Design and Off Target',
      type: 'category',
      layer: 2,
      description:
        "Designing CRISPR gene editors that cut exactly where you want—using AI to find guides that work well and avoid accidentally cutting the wrong places.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'gene-delivery-aav-lnp',
      name: 'Gene Delivery Vectors AAV and LNP',
      type: 'category',
      layer: 2,
      description:
        "Engineering delivery vehicles to get therapeutic genes into cells—from viral capsids that target specific organs to lipid nanoparticles like those used in mRNA vaccines.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'cell-therapy-optimization',
      name: 'Cell Therapy Optimization CAR T and NK',
      type: 'category',
      layer: 2,
      description:
        "Engineering immune cells like T-cells to hunt cancer or fight disease—designing the receptors they use and optimizing how they're manufactured.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'functional-genomics-screens',
      name: 'Functional Genomics Screens',
      type: 'category',
      layer: 2,
      description:
        "Systematically knocking out genes one by one to figure out what they do—large-scale experiments that map which genes are involved in diseases or drug responses.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 5) Synthetic Biology
    {
      id: 'genetic-circuit-design',
      name: 'Genetic Circuit Design',
      type: 'category',
      layer: 2,
      description:
        "Programming cells with genetic logic gates—building biological switches, oscillators, and controllers like electrical circuits but made of DNA and proteins.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'metabolic-engineering-fba',
      name: 'Metabolic Engineering and Flux Balance',
      type: 'category',
      layer: 2,
      description:
        "Rewiring cellular metabolism to produce valuable chemicals—from biofuels to medicines—using computer models to predict which genetic changes will work.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'bioprocess-modeling-optimization',
      name: 'Bioprocess Modeling and Optimization',
      type: 'category',
      layer: 2,
      description:
        "Scaling up from test tubes to industrial fermentation tanks—modeling and optimizing the conditions to grow engineered organisms and produce products at commercial scale.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'biofoundries-standardization',
      name: 'Biofoundries and Standardization',
      type: 'category',
      layer: 2,
      description:
        "Automated facilities that implement Design-Build-Test-Learn cycles—standardized DNA parts and robotic workflows that make synthetic biology more like software engineering.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 6) Systems Biology
    {
      id: 'pathway-network-modeling',
      name: 'Pathway and Network Modeling',
      type: 'category',
      layer: 2,
      description:
        "Mapping how proteins and metabolites interact in complex networks—understanding cellular communication pathways and how they go wrong in disease.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'gene-regulatory-networks',
      name: 'Gene Regulatory Networks',
      type: 'category',
      layer: 2,
      description:
        "Inferring the master switches that control gene expression—understanding which transcription factors activate which genes and how they orchestrate cell behavior.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'virtual-cell-digital-twins',
      name: 'Virtual Cell Models and Digital Twins',
      type: 'category',
      layer: 2,
      description:
        "Building computer models of entire cells—simulating all the molecular processes to predict how cells respond to drugs or genetic changes.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'causal-biology-perturbation',
      name: 'Causal Biology and Perturbation',
      type: 'category',
      layer: 2,
      description:
        "Using controlled experiments and statistics to figure out what causes what in biology—moving beyond correlation to understand true cause-and-effect relationships.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 7) Bioinformatics & Data Engineering
    {
      id: 'workflow-management',
      name: 'Workflow Management Nextflow and Snakemake',
      type: 'category',
      layer: 2,
      description:
        "Building reproducible analysis pipelines with tools like Nextflow—ensuring genomic analyses can be repeated exactly and scaled to thousands of samples.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'data-processing-qc',
      name: 'Data Processing and Quality Control',
      type: 'category',
      layer: 2,
      description:
        "Cleaning and normalizing messy biological data—removing technical artifacts and ensuring high-quality datasets for downstream analysis.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'statistical-analysis-de',
      name: 'Statistical Analysis and Differential Expression',
      type: 'category',
      layer: 2,
      description:
        "Finding which genes or proteins differ between conditions using rigorous statistics—accounting for noise and multiple testing to identify real biological signals.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'knowledge-graphs-ontologies',
      name: 'Knowledge Graphs and Ontologies',
      type: 'category',
      layer: 2,
      description:
        "Organizing biological knowledge in standardized vocabularies and connected graphs—making it possible to computationally reason about genes, diseases, and pathways.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'fair-data-metadata',
      name: 'FAIR Data and Metadata Standards',
      type: 'category',
      layer: 2,
      description:
        "Making research data Findable, Accessible, Interoperable, and Reusable—proper metadata and standards that enable data sharing and reproducibility.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 8) Self-Driving Labs & Bio Automation
    {
      id: 'robotic-workcells-liquid-handling',
      name: 'Robotic Workcells and Liquid Handling',
      type: 'category',
      layer: 2,
      description:
        "Automated lab equipment that handles liquids and samples—robots that can run experiments 24/7 with precision that exceeds human consistency.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'experiment-planning-bo-rl',
      name: 'Experiment Planning Agents and BO RL',
      type: 'category',
      layer: 2,
      description:
        "AI agents that design experiments—using machine learning to decide what to test next based on previous results, actively learning the fastest path to answers.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'dmta-closed-loop',
      name: 'DMTA Closed Loop Pipelines',
      type: 'category',
      layer: 2,
      description:
        "Fully automated Design-Make-Test-Analyze cycles—robots and AI working together to design molecules, synthesize them, run assays, and learn from results without human intervention.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'lims-eln-integration',
      name: 'LIMS and ELN Integration',
      type: 'category',
      layer: 2,
      description:
        "Lab information systems that track samples, experiments, and data—the digital backbone that connects automated instruments and ensures traceability.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 9) Bio R&D Infrastructure
    {
      id: 'cloud-bio-platforms',
      name: 'Cloud Bio Platforms Benchling LatchBio Watershed Lila',
      type: 'category',
      layer: 2,
      description:
        "Cloud platforms built for biological R&D—collaborative workspaces where teams can analyze data, design experiments, and manage everything from sequences to lab inventory.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'data-clouds',
      name: 'Data Clouds DNAnexus Lifebit Tempus Flatiron',
      type: 'category',
      layer: 2,
      description:
        "Secure cloud platforms that host large genomic and clinical datasets—enabling researchers to analyze cohorts of thousands without moving sensitive data.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'compute-storage-hpc-gpu',
      name: 'Compute and Storage HPC GPU and Costing',
      type: 'category',
      layer: 2,
      description:
        "The computing infrastructure for biological AI—choosing between cloud and on-premise, optimizing costs, and managing petabytes of genomic data.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'security-compliance-bio',
      name: 'Security and Compliance for Bio',
      type: 'category',
      layer: 2,
      description:
        "Keeping biological data secure and compliant—HIPAA, PHI handling, audit trails, and access controls required for clinical and patient data.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 10) AI Biotech Industry Landscape
    {
      id: 'ai-pharma-platforms',
      name: 'AI Pharma Platforms Recursion Schrodinger Insitro',
      type: 'category',
      layer: 2,
      description:
        "Companies building end-to-end AI drug discovery platforms—combining experimental automation, data generation, and machine learning to accelerate finding new medicines.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'cro-cdmo-ecosystems',
      name: 'CRO and CDMO Ecosystems Wuxi Eurofins Charles River',
      type: 'category',
      layer: 2,
      description:
        "Contract research and manufacturing organizations that run experiments and scale up production—the external partners that complement internal AI capabilities.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'business-models-bio',
      name: 'Business Models Platform Service Product IP',
      type: 'category',
      layer: 2,
      description:
        "How AI biotech companies make money—from platform services to owning drug assets, data licensing, and partnerships with traditional pharma.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'data-monetization-partnerships',
      name: 'Data Monetization and Partnerships',
      type: 'category',
      layer: 2,
      description:
        "Turning proprietary biological datasets into value—licensing data, federated learning across organizations, and data-sharing partnerships.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // 11) Accelerated BioAI (NVIDIA stack)
    {
      id: 'parabricks-accelerated-genomics',
      name: 'Parabricks Accelerated Genomics',
      type: 'category',
      layer: 2,
      description:
        "GPU-accelerated tools that analyze genomes up to 50x faster—taking workflows that took days and running them in under an hour.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'bionemo-foundation-models',
      name: 'BioNeMo Foundation Models',
      type: 'category',
      layer: 2,
      description:
        "Pre-trained AI models for biological sequences—like GPT but for proteins, DNA, and molecules, ready to fine-tune for specific tasks.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'rapids-omics-chemistry',
      name: 'RAPIDS for Omics and Chemistry',
      type: 'category',
      layer: 2,
      description:
        "GPU-accelerated data science for biology—running machine learning and data analysis on massive genomic datasets at speeds impossible on CPUs.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'flare-federated-learning',
      name: 'FLARE Federated Learning',
      type: 'category',
      layer: 2,
      description:
        "Training AI models across multiple organizations without sharing raw data—enabling collaboration while maintaining privacy and data sovereignty.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'triton-inference',
      name: 'Triton and Inference Runtimes',
      type: 'category',
      layer: 2,
      description:
        "High-performance model serving infrastructure—running biological AI predictions at scale with low latency and high throughput for production applications.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // ===================== L3 — CONCEPTS / TECHNIQUES (selected, extensible) =====================
    // Genomics & Omics concepts
    { id: 'bwa', name: 'BWA/Minimap2', type: 'concept', layer: 3, description: 'Short/long-read alignment.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'gatk', name: 'GATK/DeepVariant', type: 'concept', layer: 3, description: 'Variant calling and calibration.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'star', name: 'STAR/Salmon', type: 'concept', layer: 3, description: 'RNA-seq quantification pipelines.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'seurat', name: 'Seurat/Scanpy', type: 'concept', layer: 3, description: 'Single-cell analysis suites.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'space-ranger', name: 'SpaceRanger', type: 'concept', layer: 3, description: 'Spatial transcriptomics processing.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'macs2', name: 'MACS2', type: 'concept', layer: 3, description: 'Peak calling for ATAC/ChIP.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'metaphlan', name: 'Kraken2/MetaPhlAn', type: 'concept', layer: 3, description: 'Microbiome profiling/typing.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'multiqc', name: 'FastQC/MultiQC', type: 'concept', layer: 3, description: 'Read-level QC and summaries.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Structural biology concepts
    { id: 'alphafold', name: 'AlphaFold / OpenFold', type: 'concept', layer: 3, description: 'Structure prediction models.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'esmfold', name: 'ESMFold', type: 'concept', layer: 3, description: 'Protein LLM folding.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'rfdiffusion', name: 'RFdiffusion', type: 'concept', layer: 3, description: 'Generative protein design.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'proteinmpnn', name: 'ProteinMPNN', type: 'concept', layer: 3, description: 'Sequence design for structures.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'vina', name: 'AutoDock Vina / GNINA', type: 'concept', layer: 3, description: 'Docking and rescoring.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'gromacs', name: 'GROMACS / OpenMM', type: 'concept', layer: 3, description: 'GPU molecular dynamics.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'orca', name: 'ORCA / Psi4', type: 'concept', layer: 3, description: 'Quantum chemistry engines.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'fepplus', name: 'FEP+ / Perses', type: 'concept', layer: 3, description: 'Free-energy pipelines.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // AI drug discovery concepts
    { id: 'askcos', name: 'ASKCOS / AiZynthFinder', type: 'concept', layer: 3, description: 'Retrosynthesis planning.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'rxn', name: 'RXN for Chemistry', type: 'concept', layer: 3, description: 'Reaction prediction.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'glide', name: 'Glide / DOCK', type: 'concept', layer: 3, description: 'Structure-based VS engines.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'admet', name: 'ADMET Suites', type: 'concept', layer: 3, description: 'Tox/PK predictors & filters.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Gene editing concepts
    { id: 'azimuth', name: 'Azimuth / CFD Scores', type: 'concept', layer: 3, description: 'On/off-target scoring.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'crispor', name: 'CRISPOR/CRISPResso', type: 'concept', layer: 3, description: 'Guide design & editing QC.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'mageck', name: 'MAGeCK', type: 'concept', layer: 3, description: 'Screen hit calling.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Synthetic biology concepts
    { id: 'sbol', name: 'SBOL / SBML', type: 'concept', layer: 3, description: 'Standards for models/parts.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'cobrapy', name: 'COBRApy / OptKnock', type: 'concept', layer: 3, description: 'Flux balance & strain design.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'pat', name: 'PAT / DoE', type: 'concept', layer: 3, description: 'Process analytics & design.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Systems biology concepts
    { id: 'scenic', name: 'SCENIC / ARACNe', type: 'concept', layer: 3, description: 'GRN inference pipelines.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'msm', name: 'MSMs / ODEs', type: 'concept', layer: 3, description: 'Dynamics & state models.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Bioinformatics & DE concepts
    { id: 'nextflow', name: 'Nextflow / Snakemake / WDL', type: 'concept', layer: 3, description: 'Workflow orchestration.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'deseq2', name: 'DESeq2 / edgeR / limma', type: 'concept', layer: 3, description: 'Differential expression.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'ontologies', name: 'GO / MeSH / HPO', type: 'concept', layer: 3, description: 'Biological ontologies.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // SDL concepts
    { id: 'opentrons', name: 'Opentrons / Hamilton', type: 'concept', layer: 3, description: 'Liquid handlers & robotics.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'bo', name: 'Bayesian Optimization / RL', type: 'concept', layer: 3, description: 'Experiment planners.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'lims', name: 'LIMS / ELN', type: 'concept', layer: 3, description: 'Lab information systems.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Infrastructure concepts
    { id: 'aws-omics', name: 'AWS Omics / Google Omics', type: 'concept', layer: 3, description: 'Managed omics services.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'cleanroom', name: 'Data Clean Rooms', type: 'concept', layer: 3, description: 'Privacy-preserving joins.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // ===================== L4 — RESOURCES (RED nodes linking to resource pages) =====================
    // Genomics & Omics
    { id: 'resource-ngs-platforms', name: 'Next-Generation Sequencing Platforms', type: 'resource', layer: 4, description: 'Technologies that read DNA and RNA sequences', url: '/resources/digital-biology/genomics-and-omics/next-generation-sequencing-platforms', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-variant-phasing', name: 'Variant Calling and Phasing', type: 'resource', layer: 4, description: 'Finding specific genetic differences', url: '/resources/digital-biology/genomics-and-omics/variant-calling-and-phasing', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-transcriptomics', name: 'Transcriptomics Single Cell and Spatial', type: 'resource', layer: 4, description: 'Measuring which genes are turned on', url: '/resources/digital-biology/genomics-and-omics/transcriptomics-single-cell-and-spatial', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-epigenomics', name: 'Epigenomics and Chromatin', type: 'resource', layer: 4, description: 'Chemical marks that control gene accessibility', url: '/resources/digital-biology/genomics-and-omics/epigenomics-and-chromatin', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-microbiome', name: 'Microbiome and Metagenomics', type: 'resource', layer: 4, description: 'Analyzing communities of microbes', url: '/resources/digital-biology/genomics-and-omics/microbiome-and-metagenomics', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Structural Biology & Molecular Simulation
    { id: 'resource-structure-pred', name: 'Protein Structure Prediction', type: 'resource', layer: 4, description: 'Using AI like AlphaFold to predict protein shapes', url: '/resources/digital-biology/structural-biology-and-molecular-simulation/protein-structure-prediction', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-protein-design', name: 'Protein and Antibody Design', type: 'resource', layer: 4, description: 'Designing new proteins from scratch', url: '/resources/digital-biology/structural-biology-and-molecular-simulation/protein-and-antibody-design', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-docking', name: 'Molecular Docking and Scoring', type: 'resource', layer: 4, description: 'Predicting how drug molecules fit into proteins', url: '/resources/digital-biology/structural-biology-and-molecular-simulation/molecular-docking-and-scoring', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-md', name: 'Molecular Dynamics and Enhanced Sampling', type: 'resource', layer: 4, description: 'Simulating how proteins move and flex', url: '/resources/digital-biology/structural-biology-and-molecular-simulation/molecular-dynamics-and-enhanced-sampling', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-qmmm', name: 'QM MM and Free Energy Methods', type: 'resource', layer: 4, description: 'Combining quantum mechanics with simulations', url: '/resources/digital-biology/structural-biology-and-molecular-simulation/qm-mm-and-free-energy-methods', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // AI Drug Discovery & Computational Chemistry
    { id: 'resource-retrosynthesis', name: 'Reaction Prediction and Retrosynthesis', type: 'resource', layer: 4, description: 'AI that figures out how to synthesize molecules', url: '/resources/digital-biology/ai-drug-discovery-and-computational-chemistry/reaction-prediction-and-retrosynthesis', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-virtual-screening', name: 'Virtual Screening and Hit Discovery', type: 'resource', layer: 4, description: 'Searching through millions of molecules', url: '/resources/digital-biology/ai-drug-discovery-and-computational-chemistry/virtual-screening-and-hit-discovery', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-lead-opt', name: 'Lead Optimization and Multi Objective Design', type: 'resource', layer: 4, description: 'Designing better versions of drug candidates', url: '/resources/digital-biology/ai-drug-discovery-and-computational-chemistry/lead-optimization-and-multi-objective-design', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-admet', name: 'ADMET and PK PD Modeling', type: 'resource', layer: 4, description: 'Predicting how drugs behave in the body', url: '/resources/digital-biology/ai-drug-discovery-and-computational-chemistry/admet-and-pk-pd-modeling', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-binding-fep', name: 'Binding Affinity and FEP Workflows', type: 'resource', layer: 4, description: 'Ultra-precise binding calculations', url: '/resources/digital-biology/ai-drug-discovery-and-computational-chemistry/binding-affinity-and-fep-workflows', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Gene Editing & Cell Engineering
    { id: 'resource-crispr-design', name: 'CRISPR Guide Design and Off Target', type: 'resource', layer: 4, description: 'Designing CRISPR gene editors', url: '/resources/digital-biology/gene-editing-and-cell-engineering/crispr-guide-design-and-off-target', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-gene-delivery', name: 'Gene Delivery Vectors AAV and LNP', type: 'resource', layer: 4, description: 'Engineering delivery vehicles for genes', url: '/resources/digital-biology/gene-editing-and-cell-engineering/gene-delivery-vectors-aav-and-lnp', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-cell-therapy', name: 'Cell Therapy Optimization CAR T and NK', type: 'resource', layer: 4, description: 'Engineering immune cells to fight disease', url: '/resources/digital-biology/gene-editing-and-cell-engineering/cell-therapy-optimization-car-t-and-nk', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-functional-genomics', name: 'Functional Genomics Screens', type: 'resource', layer: 4, description: 'Systematically knocking out genes', url: '/resources/digital-biology/gene-editing-and-cell-engineering/functional-genomics-screens', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Synthetic Biology
    { id: 'resource-genetic-circuits', name: 'Genetic Circuit Design', type: 'resource', layer: 4, description: 'Programming cells with genetic logic gates', url: '/resources/digital-biology/synthetic-biology/genetic-circuit-design', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-metabolic-eng', name: 'Metabolic Engineering and Flux Balance', type: 'resource', layer: 4, description: 'Rewiring cellular metabolism', url: '/resources/digital-biology/synthetic-biology/metabolic-engineering-and-flux-balance', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-bioprocess', name: 'Bioprocess Modeling and Optimization', type: 'resource', layer: 4, description: 'Scaling up to industrial fermentation', url: '/resources/digital-biology/synthetic-biology/bioprocess-modeling-and-optimization', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-biofoundries', name: 'Biofoundries and Standardization', type: 'resource', layer: 4, description: 'Automated Design-Build-Test-Learn facilities', url: '/resources/digital-biology/synthetic-biology/biofoundries-and-standardization', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Systems Biology
    { id: 'resource-pathway-networks', name: 'Pathway and Network Modeling', type: 'resource', layer: 4, description: 'Mapping protein and metabolite interactions', url: '/resources/digital-biology/systems-biology/pathway-and-network-modeling', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-grn', name: 'Gene Regulatory Networks', type: 'resource', layer: 4, description: 'Inferring master switches that control genes', url: '/resources/digital-biology/systems-biology/gene-regulatory-networks', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-virtual-cell', name: 'Virtual Cell Models and Digital Twins', type: 'resource', layer: 4, description: 'Building computer models of entire cells', url: '/resources/digital-biology/systems-biology/virtual-cell-models-and-digital-twins', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-causal-bio', name: 'Causal Biology and Perturbation', type: 'resource', layer: 4, description: 'Understanding cause-and-effect relationships', url: '/resources/digital-biology/systems-biology/causal-biology-and-perturbation', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Bioinformatics & Data Engineering
    { id: 'resource-workflow-mgmt', name: 'Workflow Management Nextflow and Snakemake', type: 'resource', layer: 4, description: 'Building reproducible analysis pipelines', url: '/resources/digital-biology/bioinformatics-and-data-engineering/workflow-management-nextflow-and-snakemake', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-data-qc', name: 'Data Processing and Quality Control', type: 'resource', layer: 4, description: 'Cleaning and normalizing biological data', url: '/resources/digital-biology/bioinformatics-and-data-engineering/data-processing-and-quality-control', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-stat-analysis', name: 'Statistical Analysis and Differential Expression', type: 'resource', layer: 4, description: 'Finding which genes differ between conditions', url: '/resources/digital-biology/bioinformatics-and-data-engineering/statistical-analysis-and-differential-expression', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-knowledge-graphs', name: 'Knowledge Graphs and Ontologies', type: 'resource', layer: 4, description: 'Organizing biological knowledge', url: '/resources/digital-biology/bioinformatics-and-data-engineering/knowledge-graphs-and-ontologies', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-fair-data', name: 'FAIR Data and Metadata Standards', type: 'resource', layer: 4, description: 'Making research data findable and reusable', url: '/resources/digital-biology/bioinformatics-and-data-engineering/fair-data-and-metadata-standards', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Self-Driving Labs & Bio Automation
    { id: 'resource-robotic-workcells', name: 'Robotic Workcells and Liquid Handling', type: 'resource', layer: 4, description: 'Automated lab equipment', url: '/resources/digital-biology/self-driving-labs-and-bio-automation/robotic-workcells-and-liquid-handling', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-experiment-planning', name: 'Experiment Planning Agents and BO RL', type: 'resource', layer: 4, description: 'AI agents that design experiments', url: '/resources/digital-biology/self-driving-labs-and-bio-automation/experiment-planning-agents-and-bo-rl', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-dmta', name: 'DMTA Closed Loop Pipelines', type: 'resource', layer: 4, description: 'Fully automated Design-Make-Test-Analyze cycles', url: '/resources/digital-biology/self-driving-labs-and-bio-automation/dmta-closed-loop-pipelines', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-lims-eln', name: 'LIMS and ELN Integration', type: 'resource', layer: 4, description: 'Lab information systems that track everything', url: '/resources/digital-biology/self-driving-labs-and-bio-automation/lims-and-eln-integration', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Bio R&D Infrastructure
    { id: 'resource-cloud-bio', name: 'Cloud Bio Platforms Benchling LatchBio Watershed Lila', type: 'resource', layer: 4, description: 'Cloud platforms for biological R&D', url: '/resources/digital-biology/bio-rand-d-infrastructure/cloud-bio-platforms-benchling-latchbio-watershed-lila', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-data-clouds', name: 'Data Clouds DNAnexus Lifebit Tempus Flatiron', type: 'resource', layer: 4, description: 'Secure cloud platforms with genomic datasets', url: '/resources/digital-biology/bio-rand-d-infrastructure/data-clouds-dnanexus-lifebit-tempus-flatiron', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-compute-storage', name: 'Compute and Storage HPC GPU and Costing', type: 'resource', layer: 4, description: 'Computing infrastructure for biological AI', url: '/resources/digital-biology/bio-rand-d-infrastructure/compute-and-storage-hpc-gpu-and-costing', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-security-compliance', name: 'Security and Compliance for Bio', type: 'resource', layer: 4, description: 'Keeping biological data secure and compliant', url: '/resources/digital-biology/bio-rand-d-infrastructure/security-and-compliance-for-bio', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // AI Biotech Industry Landscape
    { id: 'resource-ai-pharma', name: 'AI Pharma Platforms Recursion Schrodinger Insitro', type: 'resource', layer: 4, description: 'End-to-end AI drug discovery platforms', url: '/resources/digital-biology/ai-biotech-industry-landscape/ai-pharma-platforms-recursion-schrodinger-insitro', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-cro-cdmo', name: 'CRO and CDMO Ecosystems Wuxi Eurofins Charles River', type: 'resource', layer: 4, description: 'Contract research and manufacturing organizations', url: '/resources/digital-biology/ai-biotech-industry-landscape/cro-and-cdmo-ecosystems-wuxi-eurofins-charles-river', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-business-models', name: 'Business Models Platform Service Product IP', type: 'resource', layer: 4, description: 'How AI biotech companies make money', url: '/resources/digital-biology/ai-biotech-industry-landscape/business-models-platform-service-product-ip', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-data-monetization', name: 'Data Monetization and Partnerships', type: 'resource', layer: 4, description: 'Turning proprietary datasets into value', url: '/resources/digital-biology/ai-biotech-industry-landscape/data-monetization-and-partnerships', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Accelerated BioAI
    { id: 'resource-parabricks', name: 'Parabricks Accelerated Genomics', type: 'resource', layer: 4, description: 'GPU-accelerated genomics tools', url: '/resources/digital-biology/accelerated-bioai/parabricks-accelerated-genomics', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-bionemo', name: 'BioNeMo Foundation Models', type: 'resource', layer: 4, description: 'Pre-trained AI models for biology', url: '/resources/digital-biology/accelerated-bioai/bionemo-foundation-models', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-rapids', name: 'RAPIDS for Omics and Chemistry', type: 'resource', layer: 4, description: 'GPU-accelerated data science for biology', url: '/resources/digital-biology/accelerated-bioai/rapids-for-omics-and-chemistry', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-flare', name: 'FLARE Federated Learning', type: 'resource', layer: 4, description: 'Training AI without sharing raw data', url: '/resources/digital-biology/accelerated-bioai/flare-federated-learning', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-triton-bio', name: 'Triton and Inference Runtimes', type: 'resource', layer: 4, description: 'High-performance model serving', url: '/resources/digital-biology/accelerated-bioai/triton-and-inference-runtimes', color: nodeColors.resource, size: getNodeSize(4, 'resource') },

    // ===================== L4 — COMPANIES / PLATFORMS (anchor examples) =====================
    // Platforms & tools (use type: "company" for ecosystem anchors)
    // { id: 'benchling', name: 'Benchling', type: 'company', layer: 4, description: 'R&D platform (registry, notebook, workflows).', url: 'https://www.benchling.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'latchbio', name: 'LatchBio', type: 'company', layer: 4, description: 'Bio data platform & pipelines.', url: 'https://www.latch.bio', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'watershed-bio', name: 'Watershed Bio', type: 'company', layer: 4, description: 'Bio R&D analytics platform.', url: 'https://www.watershed.bio', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'lila', name: 'Lila', type: 'company', layer: 4, description: 'Bio platform (registries & data).', url: '#', color: nodeColors.company, size: getNodeSize(4, 'company') },

    // { id: 'dnanexus', name: 'DNAnexus', type: 'company', layer: 4, description: 'Genomics data cloud & governance.', url: 'https://www.dnanexus.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'lifebit', name: 'Lifebit', type: 'company', layer: 4, description: 'Federated bio data clouds.', url: 'https://www.lifebit.ai', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'seven-bridges', name: 'Seven Bridges', type: 'company', layer: 4, description: 'Genomics cloud platform.', url: 'https://www.sevenbridges.com', color: nodeColors.company, size: getNodeSize(4, 'company') },

    // { id: 'recursion', name: 'Recursion', type: 'company', layer: 4, description: 'Phenotypic screening & imaging OS.', url: 'https://www.recursion.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'schrodinger', name: 'Schrödinger', type: 'company', layer: 4, description: 'Physics-based computation & FEP.', url: 'https://www.schrodinger.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'insitro', name: 'Insitro', type: 'company', layer: 4, description: 'Data-native drug discovery.', url: 'https://www.insitro.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'atomwise', name: 'Atomwise', type: 'company', layer: 4, description: 'AI-first small molecule discovery.', url: 'https://www.atomwise.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'exscientia', name: 'Exscientia', type: 'company', layer: 4, description: 'AI drug discovery & design.', url: 'https://www.exscientia.ai', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'deepgenomics', name: 'Deep Genomics', type: 'company', layer: 4, description: 'AI therapeutics (RNA).', url: 'https://www.deepgenomics.com', color: nodeColors.company, size: getNodeSize(4, 'company') },

    // { id: 'wuxi', name: 'WuXi', type: 'company', layer: 4, description: 'CRO/CDMO global network.', url: 'https://www.wuxiapptec.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'eurofins', name: 'Eurofins', type: 'company', layer: 4, description: 'CRO testing & analytics.', url: 'https://www.eurofins.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'charles-river', name: 'Charles River', type: 'company', layer: 4, description: 'Preclinical CRO.', url: 'https://www.criver.com', color: nodeColors.company, size: getNodeSize(4, 'company') },

    // { id: 'nvidia-bionemo', name: 'NVIDIA BioNeMo', type: 'company', layer: 4, description: 'Bio foundation models platform.', url: 'https://developer.nvidia.com/bionemo', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'nvidia-parabricks', name: 'NVIDIA Parabricks', type: 'company', layer: 4, description: 'GPU genomics acceleration.', url: 'https://www.nvidia.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'nvidia-flare', name: 'NVIDIA FLARE', type: 'company', layer: 4, description: 'Federated learning framework.', url: 'https://developer.nvidia.com/nvidia-flare', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'nvidia-triton', name: 'NVIDIA Triton', type: 'company', layer: 4, description: 'Model serving runtime.', url: 'https://developer.nvidia.com/nvidia-triton-inference-server', color: nodeColors.company, size: getNodeSize(4, 'company') },

  ],

  links: [
    // L0 → L1
    { source: 'digital-biology', target: 'genomics-omics', strength: 1 },
    { source: 'digital-biology', target: 'structural-biology-simulation', strength: 1 },
    { source: 'digital-biology', target: 'ai-drug-discovery-compchem', strength: 1 },
    { source: 'digital-biology', target: 'gene-editing-cell-engineering', strength: 1 },
    { source: 'digital-biology', target: 'synthetic-biology', strength: 1 },
    { source: 'digital-biology', target: 'systems-biology', strength: 1 },
    { source: 'digital-biology', target: 'bioinformatics-data-engineering', strength: 1 },
    { source: 'digital-biology', target: 'self-driving-labs-automation', strength: 1 },
    { source: 'digital-biology', target: 'bio-rd-infrastructure', strength: 1 },
    { source: 'digital-biology', target: 'ai-biotech-industry', strength: 1 },
    { source: 'digital-biology', target: 'accelerated-bioai', strength: 1 },

    // L1 → L2 (mirror list)
    // Genomics & Omics
    { source: 'genomics-omics', target: 'ngs-platforms', strength: 1 },
    { source: 'genomics-omics', target: 'variant-calling-phasing', strength: 1 },
    { source: 'genomics-omics', target: 'transcriptomics-singlecell-spatial', strength: 1 },
    { source: 'genomics-omics', target: 'epigenomics-chromatin', strength: 1 },
    { source: 'genomics-omics', target: 'microbiome-metagenomics', strength: 1 },

    // Structural Biology
    { source: 'structural-biology-simulation', target: 'protein-structure-prediction', strength: 1 },
    { source: 'structural-biology-simulation', target: 'protein-antibody-design', strength: 1 },
    { source: 'structural-biology-simulation', target: 'molecular-docking-scoring', strength: 1 },
    { source: 'structural-biology-simulation', target: 'molecular-dynamics-enhanced-sampling', strength: 1 },
    { source: 'structural-biology-simulation', target: 'qm-mm-free-energy', strength: 1 },

    // AI Drug Discovery
    { source: 'ai-drug-discovery-compchem', target: 'reaction-prediction-retrosynthesis', strength: 1 },
    { source: 'ai-drug-discovery-compchem', target: 'virtual-screening-hit-discovery', strength: 1 },
    { source: 'ai-drug-discovery-compchem', target: 'lead-optimization-multi-objective', strength: 1 },
    { source: 'ai-drug-discovery-compchem', target: 'admet-pkpd', strength: 1 },
    { source: 'ai-drug-discovery-compchem', target: 'binding-affinity-fep', strength: 1 },

    // Gene Editing & Cell Engineering
    { source: 'gene-editing-cell-engineering', target: 'crispr-guide-design-offtarget', strength: 1 },
    { source: 'gene-editing-cell-engineering', target: 'gene-delivery-aav-lnp', strength: 1 },
    { source: 'gene-editing-cell-engineering', target: 'cell-therapy-optimization', strength: 1 },
    { source: 'gene-editing-cell-engineering', target: 'functional-genomics-screens', strength: 1 },

    // Synthetic Biology
    { source: 'synthetic-biology', target: 'genetic-circuit-design', strength: 1 },
    { source: 'synthetic-biology', target: 'metabolic-engineering-fba', strength: 1 },
    { source: 'synthetic-biology', target: 'bioprocess-modeling-optimization', strength: 1 },
    { source: 'synthetic-biology', target: 'biofoundries-standardization', strength: 1 },

    // Systems Biology
    { source: 'systems-biology', target: 'pathway-network-modeling', strength: 1 },
    { source: 'systems-biology', target: 'gene-regulatory-networks', strength: 1 },
    { source: 'systems-biology', target: 'virtual-cell-digital-twins', strength: 1 },
    { source: 'systems-biology', target: 'causal-biology-perturbation', strength: 1 },

    // Bioinformatics & Data Engineering
    { source: 'bioinformatics-data-engineering', target: 'workflow-management', strength: 1 },
    { source: 'bioinformatics-data-engineering', target: 'data-processing-qc', strength: 1 },
    { source: 'bioinformatics-data-engineering', target: 'statistical-analysis-de', strength: 1 },
    { source: 'bioinformatics-data-engineering', target: 'knowledge-graphs-ontologies', strength: 1 },
    { source: 'bioinformatics-data-engineering', target: 'fair-data-metadata', strength: 1 },

    // Self-Driving Labs
    { source: 'self-driving-labs-automation', target: 'robotic-workcells-liquid-handling', strength: 1 },
    { source: 'self-driving-labs-automation', target: 'experiment-planning-bo-rl', strength: 1 },
    { source: 'self-driving-labs-automation', target: 'dmta-closed-loop', strength: 1 },
    { source: 'self-driving-labs-automation', target: 'lims-eln-integration', strength: 1 },

    // Bio R&D Infrastructure
    { source: 'bio-rd-infrastructure', target: 'cloud-bio-platforms', strength: 1 },
    { source: 'bio-rd-infrastructure', target: 'data-clouds', strength: 1 },
    { source: 'bio-rd-infrastructure', target: 'compute-storage-hpc-gpu', strength: 1 },
    { source: 'bio-rd-infrastructure', target: 'security-compliance-bio', strength: 1 },

    // AI Biotech Industry
    { source: 'ai-biotech-industry', target: 'ai-pharma-platforms', strength: 1 },
    { source: 'ai-biotech-industry', target: 'cro-cdmo-ecosystems', strength: 1 },
    { source: 'ai-biotech-industry', target: 'business-models-bio', strength: 1 },
    { source: 'ai-biotech-industry', target: 'data-monetization-partnerships', strength: 1 },

    // Accelerated BioAI
    { source: 'accelerated-bioai', target: 'parabricks-accelerated-genomics', strength: 1 },
    { source: 'accelerated-bioai', target: 'bionemo-foundation-models', strength: 1 },
    { source: 'accelerated-bioai', target: 'rapids-omics-chemistry', strength: 1 },
    { source: 'accelerated-bioai', target: 'flare-federated-learning', strength: 1 },
    { source: 'accelerated-bioai', target: 'triton-inference', strength: 1 },

    // L2 → L3 Concepts
    { source: 'ngs-platforms', target: 'bwa', strength: 0.7 },
    { source: 'variant-calling-phasing', target: 'gatk', strength: 0.7 },
    { source: 'transcriptomics-singlecell-spatial', target: 'star', strength: 0.7 },
    { source: 'transcriptomics-singlecell-spatial', target: 'seurat', strength: 0.7 },
    { source: 'transcriptomics-singlecell-spatial', target: 'space-ranger', strength: 0.7 },
    { source: 'epigenomics-chromatin', target: 'macs2', strength: 0.7 },
    { source: 'microbiome-metagenomics', target: 'metaphlan', strength: 0.7 },
    { source: 'data-processing-qc', target: 'multiqc', strength: 0.7 },

    { source: 'protein-structure-prediction', target: 'alphafold', strength: 0.7 },
    { source: 'protein-structure-prediction', target: 'esmfold', strength: 0.7 },
    { source: 'protein-antibody-design', target: 'rfdiffusion', strength: 0.7 },
    { source: 'protein-antibody-design', target: 'proteinmpnn', strength: 0.7 },
    { source: 'molecular-docking-scoring', target: 'vina', strength: 0.7 },
    { source: 'molecular-dynamics-enhanced-sampling', target: 'gromacs', strength: 0.7 },
    { source: 'qm-mm-free-energy', target: 'orca', strength: 0.7 },
    { source: 'binding-affinity-fep', target: 'fepplus', strength: 0.7 },

    { source: 'reaction-prediction-retrosynthesis', target: 'askcos', strength: 0.7 },
    { source: 'reaction-prediction-retrosynthesis', target: 'rxn', strength: 0.7 },
    { source: 'virtual-screening-hit-discovery', target: 'glide', strength: 0.7 },
    { source: 'admet-pkpd', target: 'admet', strength: 0.7 },

    { source: 'crispr-guide-design-offtarget', target: 'azimuth', strength: 0.7 },
    { source: 'crispr-guide-design-offtarget', target: 'crispor', strength: 0.7 },
    { source: 'functional-genomics-screens', target: 'mageck', strength: 0.7 },

    { source: 'genetic-circuit-design', target: 'sbol', strength: 0.7 },
    { source: 'metabolic-engineering-fba', target: 'cobrapy', strength: 0.7 },
    { source: 'bioprocess-modeling-optimization', target: 'pat', strength: 0.7 },

    { source: 'gene-regulatory-networks', target: 'scenic', strength: 0.7 },
    { source: 'virtual-cell-digital-twins', target: 'msm', strength: 0.7 },

    { source: 'workflow-management', target: 'nextflow', strength: 0.7 },
    { source: 'statistical-analysis-de', target: 'deseq2', strength: 0.7 },
    { source: 'knowledge-graphs-ontologies', target: 'ontologies', strength: 0.7 },

    { source: 'robotic-workcells-liquid-handling', target: 'opentrons', strength: 0.7 },
    { source: 'experiment-planning-bo-rl', target: 'bo', strength: 0.7 },
    { source: 'lims-eln-integration', target: 'lims', strength: 0.7 },

    { source: 'data-clouds', target: 'aws-omics', strength: 0.7 },
    { source: 'data-clouds', target: 'cleanroom', strength: 0.7 },

    // ============= L2 → L4 (RED Resource Nodes) =============
    // Genomics & Omics
    { source: 'ngs-platforms', target: 'resource-ngs-platforms', strength: 0.8 },
    { source: 'variant-calling-phasing', target: 'resource-variant-phasing', strength: 0.8 },
    { source: 'transcriptomics-singlecell-spatial', target: 'resource-transcriptomics', strength: 0.8 },
    { source: 'epigenomics-chromatin', target: 'resource-epigenomics', strength: 0.8 },
    { source: 'microbiome-metagenomics', target: 'resource-microbiome', strength: 0.8 },
    
    // Structural Biology & Molecular Simulation
    { source: 'protein-structure-prediction', target: 'resource-structure-pred', strength: 0.8 },
    { source: 'protein-antibody-design', target: 'resource-protein-design', strength: 0.8 },
    { source: 'molecular-docking-scoring', target: 'resource-docking', strength: 0.8 },
    { source: 'molecular-dynamics-enhanced-sampling', target: 'resource-md', strength: 0.8 },
    { source: 'qm-mm-free-energy', target: 'resource-qmmm', strength: 0.8 },
    
    // AI Drug Discovery & Computational Chemistry
    { source: 'reaction-prediction-retrosynthesis', target: 'resource-retrosynthesis', strength: 0.8 },
    { source: 'virtual-screening-hit-discovery', target: 'resource-virtual-screening', strength: 0.8 },
    { source: 'lead-optimization-multi-objective', target: 'resource-lead-opt', strength: 0.8 },
    { source: 'admet-pkpd', target: 'resource-admet', strength: 0.8 },
    { source: 'binding-affinity-fep', target: 'resource-binding-fep', strength: 0.8 },
    
    // Gene Editing & Cell Engineering
    { source: 'crispr-guide-design-offtarget', target: 'resource-crispr-design', strength: 0.8 },
    { source: 'gene-delivery-aav-lnp', target: 'resource-gene-delivery', strength: 0.8 },
    { source: 'cell-therapy-optimization', target: 'resource-cell-therapy', strength: 0.8 },
    { source: 'functional-genomics-screens', target: 'resource-functional-genomics', strength: 0.8 },
    
    // Synthetic Biology
    { source: 'genetic-circuit-design', target: 'resource-genetic-circuits', strength: 0.8 },
    { source: 'metabolic-engineering-fba', target: 'resource-metabolic-eng', strength: 0.8 },
    { source: 'bioprocess-modeling-optimization', target: 'resource-bioprocess', strength: 0.8 },
    { source: 'biofoundries-standardization', target: 'resource-biofoundries', strength: 0.8 },
    
    // Systems Biology
    { source: 'pathway-network-modeling', target: 'resource-pathway-networks', strength: 0.8 },
    { source: 'gene-regulatory-networks', target: 'resource-grn', strength: 0.8 },
    { source: 'virtual-cell-digital-twins', target: 'resource-virtual-cell', strength: 0.8 },
    { source: 'causal-biology-perturbation', target: 'resource-causal-bio', strength: 0.8 },
    
    // Bioinformatics & Data Engineering
    { source: 'workflow-management', target: 'resource-workflow-mgmt', strength: 0.8 },
    { source: 'data-processing-qc', target: 'resource-data-qc', strength: 0.8 },
    { source: 'statistical-analysis-de', target: 'resource-stat-analysis', strength: 0.8 },
    { source: 'knowledge-graphs-ontologies', target: 'resource-knowledge-graphs', strength: 0.8 },
    { source: 'fair-data-metadata', target: 'resource-fair-data', strength: 0.8 },
    
    // Self-Driving Labs & Bio Automation
    { source: 'robotic-workcells-liquid-handling', target: 'resource-robotic-workcells', strength: 0.8 },
    { source: 'experiment-planning-bo-rl', target: 'resource-experiment-planning', strength: 0.8 },
    { source: 'dmta-closed-loop', target: 'resource-dmta', strength: 0.8 },
    { source: 'lims-eln-integration', target: 'resource-lims-eln', strength: 0.8 },
    
    // Bio R&D Infrastructure
    { source: 'cloud-bio-platforms', target: 'resource-cloud-bio', strength: 0.8 },
    { source: 'data-clouds', target: 'resource-data-clouds', strength: 0.8 },
    { source: 'compute-storage-hpc-gpu', target: 'resource-compute-storage', strength: 0.8 },
    { source: 'security-compliance-bio', target: 'resource-security-compliance', strength: 0.8 },
    
    // AI Biotech Industry Landscape
    { source: 'ai-pharma-platforms', target: 'resource-ai-pharma', strength: 0.8 },
    { source: 'cro-cdmo-ecosystems', target: 'resource-cro-cdmo', strength: 0.8 },
    { source: 'business-models-bio', target: 'resource-business-models', strength: 0.8 },
    { source: 'data-monetization-partnerships', target: 'resource-data-monetization', strength: 0.8 },
    
    // Accelerated BioAI
    { source: 'parabricks-accelerated-genomics', target: 'resource-parabricks', strength: 0.8 },
    { source: 'bionemo-foundation-models', target: 'resource-bionemo', strength: 0.8 },
    { source: 'rapids-omics-chemistry', target: 'resource-rapids', strength: 0.8 },
    { source: 'flare-federated-learning', target: 'resource-flare', strength: 0.8 },
    { source: 'triton-inference', target: 'resource-triton-bio', strength: 0.8 },

    // L1/L2 → L4 Companies & Platforms
    // { source: 'cloud-bio-platforms', target: 'benchling', strength: 0.6 },
    // { source: 'cloud-bio-platforms', target: 'latchbio', strength: 0.6 },
    // { source: 'cloud-bio-platforms', target: 'watershed-bio', strength: 0.6 },
    // { source: 'cloud-bio-platforms', target: 'lila', strength: 0.6 },

    // { source: 'data-clouds', target: 'dnanexus', strength: 0.6 },
    // { source: 'data-clouds', target: 'lifebit', strength: 0.6 },
    // { source: 'data-clouds', target: 'seven-bridges', strength: 0.6 },

    // { source: 'ai-pharma-platforms', target: 'recursion', strength: 0.6 },
    // { source: 'ai-pharma-platforms', target: 'schrodinger', strength: 0.6 },
    // { source: 'ai-pharma-platforms', target: 'insitro', strength: 0.6 },
    // { source: 'ai-pharma-platforms', target: 'atomwise', strength: 0.6 },
    // { source: 'ai-pharma-platforms', target: 'exscientia', strength: 0.6 },
    // { source: 'ai-pharma-platforms', target: 'deepgenomics', strength: 0.6 },

    // { source: 'cro-cdmo-ecosystems', target: 'wuxi', strength: 0.6 },
    // { source: 'cro-cdmo-ecosystems', target: 'eurofins', strength: 0.6 },
    // { source: 'cro-cdmo-ecosystems', target: 'charles-river', strength: 0.6 },

    // { source: 'bionemo-foundation-models', target: 'nvidia-bionemo', strength: 0.7 },
    // { source: 'parabricks-accelerated-genomics', target: 'nvidia-parabricks', strength: 0.7 },
    // { source: 'flare-federated-learning', target: 'nvidia-flare', strength: 0.7 },
    // { source: 'triton-inference', target: 'nvidia-triton', strength: 0.7 },
  ],
};
