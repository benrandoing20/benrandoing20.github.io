import { GraphData, nodeColors, getNodeSize } from '@/types/graphData';

export const digitalBiologyGraphData: GraphData = {
  nodes: [
    // Layer 0 - Root Category
    { 
      id: 'digital-biology', 
      name: 'Digital Biology', 
      type: 'category', 
      layer: 0,
      description: 'Computational approaches to understanding life',
      color: nodeColors.category,
      size: getNodeSize(0, 'category')
    },

    // ============ Layer 1 - Major Domains ============
    { 
      id: 'genomics-omics', 
      name: 'Genomics & Omics', 
      type: 'topic', 
      layer: 1,
      description: 'Sequencing and multi-omic analysis',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'structural-biology', 
      name: 'Structural Biology', 
      type: 'topic', 
      layer: 1,
      description: 'Protein structure and simulation',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'drug-discovery', 
      name: 'AI Drug Discovery', 
      type: 'topic', 
      layer: 1,
      description: 'Computational drug design',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'gene-editing', 
      name: 'Gene Editing', 
      type: 'topic', 
      layer: 1,
      description: 'CRISPR and cell engineering',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'synthetic-biology', 
      name: 'Synthetic Biology', 
      type: 'topic', 
      layer: 1,
      description: 'Engineering biological systems',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'systems-biology', 
      name: 'Systems Biology', 
      type: 'topic', 
      layer: 1,
      description: 'Network and pathway modeling',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'bio-infrastructure', 
      name: 'Bio R&D Infrastructure', 
      type: 'topic', 
      layer: 1,
      description: 'Platforms and automation',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },

    // ============ Layer 2 - Sub-Domains ============
    
    // Genomics & Omics Sub-domains
    { 
      id: 'sequencing', 
      name: 'Sequencing', 
      type: 'topic', 
      layer: 2,
      description: 'NGS platforms and technologies',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'transcriptomics', 
      name: 'Transcriptomics', 
      type: 'topic', 
      layer: 2,
      description: 'RNA expression analysis',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'epigenomics', 
      name: 'Epigenomics', 
      type: 'topic', 
      layer: 2,
      description: 'Chromatin and methylation',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Structural Biology Sub-domains
    { 
      id: 'structure-prediction', 
      name: 'Structure Prediction', 
      type: 'topic', 
      layer: 2,
      description: 'AI-powered structure modeling',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'protein-design', 
      name: 'Protein Design', 
      type: 'topic', 
      layer: 2,
      description: 'De novo protein engineering',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'molecular-dynamics', 
      name: 'Molecular Dynamics', 
      type: 'topic', 
      layer: 2,
      description: 'Simulation and free energy',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Drug Discovery Sub-domains
    { 
      id: 'virtual-screening', 
      name: 'Virtual Screening', 
      type: 'topic', 
      layer: 2,
      description: 'Hit identification',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'lead-optimization', 
      name: 'Lead Optimization', 
      type: 'topic', 
      layer: 2,
      description: 'Multi-objective design',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'admet', 
      name: 'ADMET', 
      type: 'topic', 
      layer: 2,
      description: 'Pharmacokinetics modeling',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Gene Editing Sub-domains
    { 
      id: 'crispr-design', 
      name: 'CRISPR Design', 
      type: 'topic', 
      layer: 2,
      description: 'Guide RNA optimization',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'cell-therapy', 
      name: 'Cell Therapy', 
      type: 'topic', 
      layer: 2,
      description: 'CAR-T and engineering',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Synthetic Biology Sub-domains
    { 
      id: 'circuit-design', 
      name: 'Circuit Design', 
      type: 'topic', 
      layer: 2,
      description: 'Genetic circuits',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'metabolic-engineering', 
      name: 'Metabolic Engineering', 
      type: 'topic', 
      layer: 2,
      description: 'Pathway optimization',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Systems Biology Sub-domains
    { 
      id: 'network-modeling', 
      name: 'Network Modeling', 
      type: 'topic', 
      layer: 2,
      description: 'Pathway analysis',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'digital-twins', 
      name: 'Digital Twins', 
      type: 'topic', 
      layer: 2,
      description: 'Virtual cell models',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Infrastructure Sub-domains
    { 
      id: 'bio-platforms', 
      name: 'Bio Platforms', 
      type: 'topic', 
      layer: 2,
      description: 'Cloud and data systems',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'automation', 
      name: 'Automation', 
      type: 'topic', 
      layer: 2,
      description: 'Self-driving labs',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // ============ Layer 3 - Concepts (Colored) ============
    
    // Sequencing Concepts
    { 
      id: 'illumina', 
      name: 'Illumina', 
      type: 'concept', 
      layer: 3,
      description: 'Short-read sequencing',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'pacbio', 
      name: 'PacBio HiFi', 
      type: 'concept', 
      layer: 3,
      description: 'Long-read sequencing',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'nanopore', 
      name: 'Nanopore', 
      type: 'concept', 
      layer: 3,
      description: 'Real-time sequencing',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Transcriptomics Concepts
    { 
      id: 'scrna-seq', 
      name: 'scRNA-seq', 
      type: 'concept', 
      layer: 3,
      description: 'Single-cell RNA sequencing',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'spatial-transcriptomics', 
      name: 'Spatial Transcriptomics', 
      type: 'concept', 
      layer: 3,
      description: 'Spatial gene expression',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Epigenomics Concepts
    { 
      id: 'atac-seq', 
      name: 'ATAC-seq', 
      type: 'concept', 
      layer: 3,
      description: 'Chromatin accessibility',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'chip-seq', 
      name: 'ChIP-seq', 
      type: 'concept', 
      layer: 3,
      description: 'Protein-DNA interactions',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Structure Prediction Concepts
    { 
      id: 'alphafold', 
      name: 'AlphaFold', 
      type: 'concept', 
      layer: 3,
      description: 'Deep learning structure prediction',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'esmfold', 
      name: 'ESMFold', 
      type: 'concept', 
      layer: 3,
      description: 'Language model-based folding',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Protein Design Concepts
    { 
      id: 'rfdiffusion', 
      name: 'RFdiffusion', 
      type: 'concept', 
      layer: 3,
      description: 'Diffusion-based design',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'proteinmpnn', 
      name: 'ProteinMPNN', 
      type: 'concept', 
      layer: 3,
      description: 'Sequence design',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Molecular Dynamics Concepts
    { 
      id: 'gromacs', 
      name: 'GROMACS', 
      type: 'concept', 
      layer: 3,
      description: 'MD simulation engine',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'fep', 
      name: 'Free Energy Perturbation', 
      type: 'concept', 
      layer: 3,
      description: 'Binding affinity calculation',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Virtual Screening Concepts
    { 
      id: 'docking', 
      name: 'Molecular Docking', 
      type: 'concept', 
      layer: 3,
      description: 'Ligand binding prediction',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'active-learning', 
      name: 'Active Learning', 
      type: 'concept', 
      layer: 3,
      description: 'Iterative screening',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Lead Optimization Concepts
    { 
      id: 'generative-chemistry', 
      name: 'Generative Chemistry', 
      type: 'concept', 
      layer: 3,
      description: 'De novo molecule design',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'multi-objective', 
      name: 'Multi-Objective Optimization', 
      type: 'concept', 
      layer: 3,
      description: 'Property trade-offs',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // ADMET Concepts
    { 
      id: 'pkpd-modeling', 
      name: 'PK/PD Modeling', 
      type: 'concept', 
      layer: 3,
      description: 'Drug exposure modeling',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'toxicity-prediction', 
      name: 'Toxicity Prediction', 
      type: 'concept', 
      layer: 3,
      description: 'Safety assessment',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // CRISPR Concepts
    { 
      id: 'guide-design', 
      name: 'Guide RNA Design', 
      type: 'concept', 
      layer: 3,
      description: 'On-target optimization',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'base-editing', 
      name: 'Base Editing', 
      type: 'concept', 
      layer: 3,
      description: 'Precise nucleotide editing',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Cell Therapy Concepts
    { 
      id: 'car-t', 
      name: 'CAR-T Design', 
      type: 'concept', 
      layer: 3,
      description: 'Chimeric antigen receptors',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'aav', 
      name: 'AAV Vectors', 
      type: 'concept', 
      layer: 3,
      description: 'Gene delivery',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Circuit Design Concepts
    { 
      id: 'genetic-circuits', 
      name: 'Genetic Circuits', 
      type: 'concept', 
      layer: 3,
      description: 'Logic gates and switches',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'part-standardization', 
      name: 'Part Standardization', 
      type: 'concept', 
      layer: 3,
      description: 'BioBrick standards',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Metabolic Engineering Concepts
    { 
      id: 'fba', 
      name: 'Flux Balance Analysis', 
      type: 'concept', 
      layer: 3,
      description: 'Metabolic modeling',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'strain-design', 
      name: 'Strain Design', 
      type: 'concept', 
      layer: 3,
      description: 'Yield optimization',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Network Modeling Concepts
    { 
      id: 'ppi-networks', 
      name: 'PPI Networks', 
      type: 'concept', 
      layer: 3,
      description: 'Protein interaction networks',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'pathway-analysis', 
      name: 'Pathway Analysis', 
      type: 'concept', 
      layer: 3,
      description: 'Enrichment and dynamics',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Digital Twins Concepts
    { 
      id: 'virtual-cell', 
      name: 'Virtual Cell Models', 
      type: 'concept', 
      layer: 3,
      description: 'Whole-cell simulation',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'causal-biology', 
      name: 'Causal Biology', 
      type: 'concept', 
      layer: 3,
      description: 'Causal inference',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Bio Platforms Concepts
    { 
      id: 'benchling', 
      name: 'Benchling', 
      type: 'company', 
      layer: 3,
      description: 'R&D data platform',
      url: 'https://benchling.com',
      color: nodeColors.company,
      size: getNodeSize(3, 'company')
    },
    { 
      id: 'latchbio', 
      name: 'Latch Bio', 
      type: 'company', 
      layer: 3,
      description: 'Bioinformatics platform',
      url: 'https://latch.bio',
      color: nodeColors.company,
      size: getNodeSize(3, 'company')
    },

    // Automation Concepts
    { 
      id: 'bayesian-optimization', 
      name: 'Bayesian Optimization', 
      type: 'concept', 
      layer: 3,
      description: 'Adaptive experiment design',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'dmta', 
      name: 'DMTA Loops', 
      type: 'concept', 
      layer: 3,
      description: 'Design-Make-Test-Analyze',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Companies
    { 
      id: 'recursion', 
      name: 'Recursion', 
      type: 'company', 
      layer: 4,
      description: 'AI drug discovery platform',
      url: 'https://recursion.com',
      color: nodeColors.company,
      size: getNodeSize(4, 'company')
    },
    { 
      id: 'schrodinger', 
      name: 'Schrödinger', 
      type: 'company', 
      layer: 4,
      description: 'Computational chemistry',
      url: 'https://schrodinger.com',
      color: nodeColors.company,
      size: getNodeSize(4, 'company')
    },
    { 
      id: 'insitro', 
      name: 'Insitro', 
      type: 'company', 
      layer: 4,
      description: 'ML-driven drug discovery',
      url: 'https://insitro.com',
      color: nodeColors.company,
      size: getNodeSize(4, 'company')
    },
    { 
      id: 'deepmind-bio', 
      name: 'DeepMind (AlphaFold)', 
      type: 'company', 
      layer: 4,
      description: 'Protein structure prediction',
      url: 'https://deepmind.google/technologies/alphafold/',
      color: nodeColors.company,
      size: getNodeSize(4, 'company')
    },
  ],

  links: [
    // ============ Layer 0 to Layer 1 ============
    { source: 'digital-biology', target: 'genomics-omics', strength: 1 },
    { source: 'digital-biology', target: 'structural-biology', strength: 1 },
    { source: 'digital-biology', target: 'drug-discovery', strength: 1 },
    { source: 'digital-biology', target: 'gene-editing', strength: 1 },
    { source: 'digital-biology', target: 'synthetic-biology', strength: 1 },
    { source: 'digital-biology', target: 'systems-biology', strength: 1 },
    { source: 'digital-biology', target: 'bio-infrastructure', strength: 1 },

    // ============ Layer 1 to Layer 2 ============
    
    // Genomics & Omics
    { source: 'genomics-omics', target: 'sequencing', strength: 1 },
    { source: 'genomics-omics', target: 'transcriptomics', strength: 1 },
    { source: 'genomics-omics', target: 'epigenomics', strength: 1 },

    // Structural Biology
    { source: 'structural-biology', target: 'structure-prediction', strength: 1 },
    { source: 'structural-biology', target: 'protein-design', strength: 1 },
    { source: 'structural-biology', target: 'molecular-dynamics', strength: 1 },

    // Drug Discovery
    { source: 'drug-discovery', target: 'virtual-screening', strength: 1 },
    { source: 'drug-discovery', target: 'lead-optimization', strength: 1 },
    { source: 'drug-discovery', target: 'admet', strength: 1 },

    // Gene Editing
    { source: 'gene-editing', target: 'crispr-design', strength: 1 },
    { source: 'gene-editing', target: 'cell-therapy', strength: 1 },

    // Synthetic Biology
    { source: 'synthetic-biology', target: 'circuit-design', strength: 1 },
    { source: 'synthetic-biology', target: 'metabolic-engineering', strength: 1 },

    // Systems Biology
    { source: 'systems-biology', target: 'network-modeling', strength: 1 },
    { source: 'systems-biology', target: 'digital-twins', strength: 1 },

    // Infrastructure
    { source: 'bio-infrastructure', target: 'bio-platforms', strength: 1 },
    { source: 'bio-infrastructure', target: 'automation', strength: 1 },

    // ============ Layer 2 to Layer 3 (Colored Concepts) ============
    
    // Sequencing
    { source: 'sequencing', target: 'illumina', strength: 0.7 },
    { source: 'sequencing', target: 'pacbio', strength: 0.7 },
    { source: 'sequencing', target: 'nanopore', strength: 0.7 },

    // Transcriptomics
    { source: 'transcriptomics', target: 'scrna-seq', strength: 0.7 },
    { source: 'transcriptomics', target: 'spatial-transcriptomics', strength: 0.7 },

    // Epigenomics
    { source: 'epigenomics', target: 'atac-seq', strength: 0.7 },
    { source: 'epigenomics', target: 'chip-seq', strength: 0.7 },

    // Structure Prediction
    { source: 'structure-prediction', target: 'alphafold', strength: 0.7 },
    { source: 'structure-prediction', target: 'esmfold', strength: 0.7 },

    // Protein Design
    { source: 'protein-design', target: 'rfdiffusion', strength: 0.7 },
    { source: 'protein-design', target: 'proteinmpnn', strength: 0.7 },

    // Molecular Dynamics
    { source: 'molecular-dynamics', target: 'gromacs', strength: 0.7 },
    { source: 'molecular-dynamics', target: 'fep', strength: 0.7 },

    // Virtual Screening
    { source: 'virtual-screening', target: 'docking', strength: 0.7 },
    { source: 'virtual-screening', target: 'active-learning', strength: 0.7 },

    // Lead Optimization
    { source: 'lead-optimization', target: 'generative-chemistry', strength: 0.7 },
    { source: 'lead-optimization', target: 'multi-objective', strength: 0.7 },

    // ADMET
    { source: 'admet', target: 'pkpd-modeling', strength: 0.7 },
    { source: 'admet', target: 'toxicity-prediction', strength: 0.7 },

    // CRISPR Design
    { source: 'crispr-design', target: 'guide-design', strength: 0.7 },
    { source: 'crispr-design', target: 'base-editing', strength: 0.7 },

    // Cell Therapy
    { source: 'cell-therapy', target: 'car-t', strength: 0.7 },
    { source: 'cell-therapy', target: 'aav', strength: 0.7 },

    // Circuit Design
    { source: 'circuit-design', target: 'genetic-circuits', strength: 0.7 },
    { source: 'circuit-design', target: 'part-standardization', strength: 0.7 },

    // Metabolic Engineering
    { source: 'metabolic-engineering', target: 'fba', strength: 0.7 },
    { source: 'metabolic-engineering', target: 'strain-design', strength: 0.7 },

    // Network Modeling
    { source: 'network-modeling', target: 'ppi-networks', strength: 0.7 },
    { source: 'network-modeling', target: 'pathway-analysis', strength: 0.7 },

    // Digital Twins
    { source: 'digital-twins', target: 'virtual-cell', strength: 0.7 },
    { source: 'digital-twins', target: 'causal-biology', strength: 0.7 },

    // Bio Platforms
    { source: 'bio-platforms', target: 'benchling', strength: 0.7 },
    { source: 'bio-platforms', target: 'latchbio', strength: 0.7 },

    // Automation
    { source: 'automation', target: 'bayesian-optimization', strength: 0.7 },
    { source: 'automation', target: 'dmta', strength: 0.7 },

    // ============ Companies to Topics ============
    { source: 'drug-discovery', target: 'recursion', strength: 0.5 },
    { source: 'drug-discovery', target: 'schrodinger', strength: 0.5 },
    { source: 'drug-discovery', target: 'insitro', strength: 0.5 },
    { source: 'structure-prediction', target: 'deepmind-bio', strength: 0.5 },
  ]
};

