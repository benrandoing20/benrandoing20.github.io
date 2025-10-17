import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ViewToggle from '@/components/ViewToggle';
import KnowledgeGraph3D from '@/components/KnowledgeGraph3D';
import { digitalBiologyGraphData } from '@/data/graphs/digitalBiologyGraph';

const DigitalBiology = () => {
  const [view, setView] = useState<'list' | 'graph'>('graph');
  const sections = [
    // 1) Genomics & Omics
    {
      title: "Genomics & Omics",
      content: [
        {
          subtitle: "Next-Generation Sequencing Platforms",
          description: "Whole genome, exome, and transcriptome sequencing. Illumina, PacBio HiFi, Oxford Nanopore; basecalling, alignment, pangenomes."
        },
        {
          subtitle: "Variant Calling and Phasing",
          description: "SNP, indel, CNV and SV discovery with GATK, DeepVariant, Manta; haplotype phasing and quality calibration."
        },
        {
          subtitle: "Transcriptomics Single Cell and Spatial",
          description: "Bulk RNA-seq, scRNA-seq, spatial transcriptomics; quantification, clustering, trajectory inference, cell typing."
        },
        {
          subtitle: "Epigenomics and Chromatin",
          description: "ATAC-seq, ChIP-seq, methylation, chromatin states and 3D genome; peak calling and differential accessibility."
        },
        {
          subtitle: "Microbiome and Metagenomics",
          description: "Taxonomic profiling, assembly, functional inference and strain-level analysis for complex microbial communities."
        }
      ]
    },

    // 2) Structural Biology & Molecular Simulation
    {
      title: "Structural Biology & Molecular Simulation",
      content: [
        {
          subtitle: "Protein Structure Prediction",
          description: "AlphaFold and ESMFold families, confidence metrics, complex modeling and structure annotation workflows."
        },
        {
          subtitle: "Protein and Antibody Design",
          description: "RFdiffusion and inverse folding for binders and antibodies; developability screening and stability engineering."
        },
        {
          subtitle: "Molecular Docking and Scoring",
          description: "Ligand and structure-based docking, rescoring with ML and physics-informed approaches, pose filtering."
        },
        {
          subtitle: "Molecular Dynamics and Enhanced Sampling",
          description: "GPU MD with GROMACS and OpenMM; REMD, metadynamics, accelerated sampling and Markov state models."
        },
        {
          subtitle: "QM MM and Free Energy Methods",
          description: "QM and DFT for reactivity, QM MM hybrids, FEP and TI for binding free energies; Anton-class acceleration."
        }
      ]
    },

    // 3) AI Drug Discovery & Computational Chemistry
    {
      title: "AI Drug Discovery & Computational Chemistry",
      content: [
        {
          subtitle: "Reaction Prediction and Retrosynthesis",
          description: "Template and template-free models; synthesis route planning, reagent and condition recommendation."
        },
        {
          subtitle: "Virtual Screening and Hit Discovery",
          description: "Ligand-based and structure-based screening, multi-objective ranking, active learning and triage."
        },
        {
          subtitle: "Lead Optimization and Multi Objective Design",
          description: "Generative chemistry, potency and selectivity tradeoffs, synthesizability and novelty constraints."
        },
        {
          subtitle: "ADMET and PK PD Modeling",
          description: "In silico absorption, distribution, metabolism, excretion and toxicity; exposure and efficacy modeling."
        },
        {
          subtitle: "Binding Affinity and FEP Workflows",
          description: "Physics and ML hybrids for ΔG prediction; alchemical pipelines, uncertainty and convergence checks."
        }
      ]
    },

    // 4) Gene Editing & Cell Engineering
    {
      title: "Gene Editing & Cell Engineering",
      content: [
        {
          subtitle: "CRISPR Guide Design and Off Target",
          description: "On target scoring, off target prediction, prime and base editing models; library design and QC."
        },
        {
          subtitle: "Gene Delivery Vectors AAV and LNP",
          description: "Capsid and payload design, tropism prediction, formulation optimization and biodistribution modeling."
        },
        {
          subtitle: "Cell Therapy Optimization CAR T and NK",
          description: "Construct design, receptor engineering, phenotype control and manufacturability analytics."
        },
        {
          subtitle: "Functional Genomics Screens",
          description: "CRISPR and RNAi perturbation screens, hit calling, pathway enrichment and causal inference."
        }
      ]
    },

    // 5) Synthetic Biology
    {
      title: "Synthetic Biology",
      content: [
        {
          subtitle: "Genetic Circuit Design",
          description: "Logic gates, oscillators and switches; resource competition modeling and controller design."
        },
        {
          subtitle: "Metabolic Engineering and Flux Balance",
          description: "FBA and kinetic models for pathway optimization; strain design and titer rate yield improvements."
        },
        {
          subtitle: "Bioprocess Modeling and Optimization",
          description: "Fermentation scale up, process control, PAT analytics and quality by design strategies."
        },
        {
          subtitle: "Biofoundries and Standardization",
          description: "Design build test learn pipelines, standards, registries and automated assembly workflows."
        }
      ]
    },

    // 6) Systems Biology
    {
      title: "Systems Biology",
      content: [
        {
          subtitle: "Pathway and Network Modeling",
          description: "PPI, metabolic and signaling networks; graph algorithms and dynamical analysis."
        },
        {
          subtitle: "Gene Regulatory Networks",
          description: "Inference of transcriptional programs, motif discovery and perturbation response."
        },
        {
          subtitle: "Virtual Cell Models and Digital Twins",
          description: "Whole cell and organelle scale models; parameter estimation, sensitivity and validation."
        },
        {
          subtitle: "Causal Biology and Perturbation",
          description: "SCMs, counterfactuals and interventional analysis for mechanistic understanding."
        }
      ]
    },

    // 7) Bioinformatics & Data Engineering
    {
      title: "Bioinformatics & Data Engineering",
      content: [
        {
          subtitle: "Workflow Management Nextflow and Snakemake",
          description: "Reproducible pipelines with containers and CWL; scalable execution on cloud and HPC."
        },
        {
          subtitle: "Data Processing and Quality Control",
          description: "QC, normalization and batch correction for genomic, transcriptomic and proteomic data."
        },
        {
          subtitle: "Statistical Analysis and Differential Expression",
          description: "R and Bioconductor toolchains; enrichment tests and rigorous multiple hypothesis control."
        },
        {
          subtitle: "Knowledge Graphs and Ontologies",
          description: "GO, MeSH and disease ontologies; schema design and graph augmented analytics."
        },
        {
          subtitle: "FAIR Data and Metadata Standards",
          description: "Findable, accessible, interoperable and reusable data; provenance and audit trails."
        }
      ]
    },

    // 8) Self-Driving Labs & Bio Automation
    {
      title: "Self-Driving Labs & Bio Automation",
      content: [
        {
          subtitle: "Robotic Workcells and Liquid Handling",
          description: "Automated sample prep, colony picking, microfluidics and high throughput screening."
        },
        {
          subtitle: "Experiment Planning Agents and BO RL",
          description: "Bayesian optimization and reinforcement learning for adaptive design of experiments."
        },
        {
          subtitle: "DMTA Closed Loop Pipelines",
          description: "Design make test analyze orchestration, feedback learning and assay harmonization."
        },
        {
          subtitle: "LIMS and ELN Integration",
          description: "Sample tracking, inventory, barcoding and provenance linked to data lakes."
        }
      ]
    },

    // 9) Bio R&D Infrastructure
    {
      title: "Bio R&D Infrastructure",
      content: [
        {
          subtitle: "Cloud Bio Platforms Benchling LatchBio Watershed Lila",
          description: "R&D data models, notebook and registry systems; collaborative analysis and governance."
        },
        {
          subtitle: "Data Clouds DNAnexus Lifebit Tempus Flatiron",
          description: "Cohort scale compute, secure enclaves, controlled data access and monetization models."
        },
        {
          subtitle: "Compute and Storage HPC GPU and Costing",
          description: "Cluster sizing, spot and on demand tradeoffs, storage tiers and cost observability."
        },
        {
          subtitle: "Security and Compliance for Bio",
          description: "PHI handling, role based access control, audit logging and SOC2 HIPAA alignment."
        }
      ]
    },

    // 10) AI Biotech Industry Landscape
    {
      title: "AI Biotech Industry Landscape",
      content: [
        {
          subtitle: "AI Pharma Platforms Recursion Schrodinger Insitro",
          description: "From imaging OS to physics ML; platform and pipeline strategies for discovery."
        },
        {
          subtitle: "CRO and CDMO Ecosystems Wuxi Eurofins Charles River",
          description: "Assay outsourcing, scale up and regulatory grade data integration with DMTA cycles."
        },
        {
          subtitle: "Business Models Platform Service Product IP",
          description: "Data moats, SaaS APIs, milestone deals and asset creation pathways."
        },
        {
          subtitle: "Data Monetization and Partnerships",
          description: "RWE and genomics networks, licensing, federated access and clean room collaboration."
        }
      ]
    },

    // 11) Accelerated BioAI (NVIDIA stack)
    {
      title: "Accelerated BioAI",
      content: [
        {
          subtitle: "Parabricks Accelerated Genomics",
          description: "GPU fast alignment, variant calling and CNV SV detection for population scale studies."
        },
        {
          subtitle: "BioNeMo Foundation Models",
          description: "Protein, RNA and small molecule foundation models for generation and property prediction."
        },
        {
          subtitle: "RAPIDS for Omics and Chemistry",
          description: "GPU dataframes and ML for cohort analytics, similarity search and large scale featurization."
        },
        {
          subtitle: "FLARE Federated Learning",
          description: "Multi site training with privacy preservation, governance and auditable updates."
        },
        {
          subtitle: "Triton and Inference Runtimes",
          description: "High throughput model serving, ensembles and observability for regulated workloads."
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
              Digital Biology
            </h1>
            <div className="w-24 h-px bg-black/20 mb-8"></div>
            <p className="text-xl font-light text-black/60 max-w-3xl mb-8">
              Computational approaches to understanding life—from genomic analysis and protein modeling to systems biology, automation, and AI-first drug discovery.
            </p>
            
            <ViewToggle view={view} onViewChange={setView} />
          </div>

          {view === 'graph' ? (
            <div className="w-full" style={{ height: '800px' }}>
              <KnowledgeGraph3D data={digitalBiologyGraphData} />
            </div>
          ) : (
            <div className="space-y-20">
            {sections.map((section, index) => (
              <div key={index} className="border-l-2 border-black/5 pl-8">
                <h2 className="text-3xl font-light mb-12 tracking-tight">
                  {section.title}
                </h2>
                <div className="space-y-10">
                  {section.content.map((item, itemIndex) => (
                    <Link 
                      key={itemIndex} 
                      to={`/resources/digital-biology/${section.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/${item.subtitle.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '').replace(/&/g, 'and').replace(/\//g, '-')}`}
                      state={{ title: item.subtitle }}
                      className="group block hover:bg-black/2 p-4 -m-4 rounded-lg transition-all duration-300"
                    >
                      <h3 className="text-xl font-light mb-3 group-hover:text-black transition-colors duration-300 flex items-center">
                        {item.subtitle}
                        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                      </h3>
                      <p className="text-base font-light text-black/60 leading-relaxed">
                        {item.description}
                      </p>
                    </Link>
                  ))}
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

export default DigitalBiology;
