import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ViewToggle from '@/components/ViewToggle';
import KnowledgeGraph3D from '@/components/KnowledgeGraph3D';
import { digitalBiologyGraphData } from '@/data/graphs/digitalBiologyGraph';

const DigitalBiology = () => {
  const [view, setView] = useState<'list' | 'graph'>('graph');
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set());
  
  const toggleSection = (index: number) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  
  const sections = [
    // 1) Genomics & Omics
    {
      title: "Genomics & Omics",
      content: [
        {
          subtitle: "Next-Generation Sequencing Platforms",
          description: "The technologies that read DNA and RNA sequences—from machines that sequence entire genomes in hours to software that turns raw sensor data into accurate genetic codes. Includes whole genome, exome, and transcriptome sequencing with Illumina, PacBio HiFi, Oxford Nanopore; basecalling, alignment, pangenomes."
        },
        {
          subtitle: "Variant Calling and Phasing",
          description: "Finding the specific genetic differences between individuals—identifying mutations, determining which variants came from mom vs dad, and linking genetic changes to traits or diseases. Covers SNP, indel, CNV and SV discovery with GATK, DeepVariant, Manta; haplotype phasing and quality calibration."
        },
        {
          subtitle: "Transcriptomics Single Cell and Spatial",
          description: "Measuring which genes are turned on in cells—from analyzing thousands of individual cells at once to mapping exactly where genes are active in tissues like a molecular GPS. Includes bulk RNA-seq, scRNA-seq, spatial transcriptomics; quantification, clustering, trajectory inference, cell typing."
        },
        {
          subtitle: "Epigenomics and Chromatin",
          description: "Understanding the chemical marks and 3D structure that control which genes are accessible—like reading the instruction manual that tells cells which parts of their DNA to use. Covers ATAC-seq, ChIP-seq, methylation, chromatin states and 3D genome; peak calling and differential accessibility."
        },
        {
          subtitle: "Microbiome and Metagenomics",
          description: "Analyzing communities of microbes—identifying the bacteria, viruses, and fungi living in your gut or environment and understanding what they're doing. Includes taxonomic profiling, assembly, functional inference and strain-level analysis for complex microbial communities."
        }
      ]
    },

    // 2) Structural Biology & Molecular Simulation
    {
      title: "Structural Biology & Molecular Simulation",
      content: [
        {
          subtitle: "Protein Structure Prediction",
          description: "Using AI like AlphaFold to predict the 3D shape of proteins from their amino acid sequence—solving a 50-year-old problem that's revolutionizing drug discovery. AlphaFold and ESMFold families, confidence metrics, complex modeling and structure annotation workflows."
        },
        {
          subtitle: "Protein and Antibody Design",
          description: "Designing new proteins and antibodies from scratch using AI—creating molecules that bind to specific targets for use as drugs or research tools. RFdiffusion and inverse folding for binders and antibodies; developability screening and stability engineering."
        },
        {
          subtitle: "Molecular Docking and Scoring",
          description: "Computationally predicting how drug molecules fit into protein pockets—like testing millions of keys to see which ones unlock a specific lock. Ligand and structure-based docking, rescoring with ML and physics-informed approaches, pose filtering."
        },
        {
          subtitle: "Molecular Dynamics and Enhanced Sampling",
          description: "Simulating how proteins move and flex using physics equations—watching molecular movies to understand how drugs bind and proteins function. GPU MD with GROMACS and OpenMM; REMD, metadynamics, accelerated sampling and Markov state models."
        },
        {
          subtitle: "QM MM and Free Energy Methods",
          description: "Combining quantum mechanics with molecular simulations to precisely calculate binding energies—the gold standard for predicting which drug candidates will work best. QM and DFT for reactivity, QM MM hybrids, FEP and TI for binding free energies; Anton-class acceleration."
        }
      ]
    },

    // 3) AI Drug Discovery & Computational Chemistry
    {
      title: "AI Drug Discovery & Computational Chemistry",
      content: [
        {
          subtitle: "Reaction Prediction and Retrosynthesis",
          description: "AI that figures out how to synthesize complex drug molecules—working backwards from the target molecule to suggest which chemical reactions and starting materials to use. Template and template-free models; synthesis route planning, reagent and condition recommendation."
        },
        {
          subtitle: "Virtual Screening and Hit Discovery",
          description: "Computationally searching through millions or billions of molecules to find promising drug candidates—like using AI to pre-filter before expensive lab experiments. Ligand-based and structure-based screening, multi-objective ranking, active learning and triage."
        },
        {
          subtitle: "Lead Optimization and Multi Objective Design",
          description: "Designing better versions of drug candidates using AI—optimizing multiple properties at once like potency, safety, and how easy they are to make. Generative chemistry, potency and selectivity tradeoffs, synthesizability and novelty constraints."
        },
        {
          subtitle: "ADMET and PK PD Modeling",
          description: "Predicting how drugs behave in the body—will it be absorbed, how long will it last, will it cause side effects—all before testing in animals or humans. In silico absorption, distribution, metabolism, excretion and toxicity; exposure and efficacy modeling."
        },
        {
          subtitle: "Binding Affinity and FEP Workflows",
          description: "Ultra-precise physics-based calculations of how tightly drugs bind to their targets—helping choose between similar drug candidates. Physics and ML hybrids for ΔG prediction; alchemical pipelines, uncertainty and convergence checks."
        }
      ]
    },

    // 4) Gene Editing & Cell Engineering
    {
      title: "Gene Editing & Cell Engineering",
      content: [
        {
          subtitle: "CRISPR Guide Design and Off Target",
          description: "Designing CRISPR gene editors that cut exactly where you want—using AI to find guides that work well and avoid accidentally cutting the wrong places. On target scoring, off target prediction, prime and base editing models; library design and QC."
        },
        {
          subtitle: "Gene Delivery Vectors AAV and LNP",
          description: "Engineering delivery vehicles to get therapeutic genes into cells—from viral capsids that target specific organs to lipid nanoparticles like those used in mRNA vaccines. Capsid and payload design, tropism prediction, formulation optimization and biodistribution modeling."
        },
        {
          subtitle: "Cell Therapy Optimization CAR T and NK",
          description: "Engineering immune cells like T-cells to hunt cancer or fight disease—designing the receptors they use and optimizing how they're manufactured. Construct design, receptor engineering, phenotype control and manufacturability analytics."
        },
        {
          subtitle: "Functional Genomics Screens",
          description: "Systematically knocking out genes one by one to figure out what they do—large-scale experiments that map which genes are involved in diseases or drug responses. CRISPR and RNAi perturbation screens, hit calling, pathway enrichment and causal inference."
        }
      ]
    },

    // 5) Synthetic Biology
    {
      title: "Synthetic Biology",
      content: [
        {
          subtitle: "Genetic Circuit Design",
          description: "Programming cells with genetic logic gates—building biological switches, oscillators, and controllers like electrical circuits but made of DNA and proteins. Logic gates, oscillators and switches; resource competition modeling and controller design."
        },
        {
          subtitle: "Metabolic Engineering and Flux Balance",
          description: "Rewiring cellular metabolism to produce valuable chemicals—from biofuels to medicines—using computer models to predict which genetic changes will work. FBA and kinetic models for pathway optimization; strain design and titer rate yield improvements."
        },
        {
          subtitle: "Bioprocess Modeling and Optimization",
          description: "Scaling up from test tubes to industrial fermentation tanks—modeling and optimizing the conditions to grow engineered organisms and produce products at commercial scale. Fermentation scale up, process control, PAT analytics and quality by design strategies."
        },
        {
          subtitle: "Biofoundries and Standardization",
          description: "Automated facilities that implement Design-Build-Test-Learn cycles—standardized DNA parts and robotic workflows that make synthetic biology more like software engineering. Design build test learn pipelines, standards, registries and automated assembly workflows."
        }
      ]
    },

    // 6) Systems Biology
    {
      title: "Systems Biology",
      content: [
        {
          subtitle: "Pathway and Network Modeling",
          description: "Mapping how proteins and metabolites interact in complex networks—understanding cellular communication pathways and how they go wrong in disease. PPI, metabolic and signaling networks; graph algorithms and dynamical analysis."
        },
        {
          subtitle: "Gene Regulatory Networks",
          description: "Inferring the master switches that control gene expression—understanding which transcription factors activate which genes and how they orchestrate cell behavior. Inference of transcriptional programs, motif discovery and perturbation response."
        },
        {
          subtitle: "Virtual Cell Models and Digital Twins",
          description: "Building computer models of entire cells—simulating all the molecular processes to predict how cells respond to drugs or genetic changes. Whole cell and organelle scale models; parameter estimation, sensitivity and validation."
        },
        {
          subtitle: "Causal Biology and Perturbation",
          description: "Using controlled experiments and statistics to figure out what causes what in biology—moving beyond correlation to understand true cause-and-effect relationships. SCMs, counterfactuals and interventional analysis for mechanistic understanding."
        }
      ]
    },

    // 7) Bioinformatics & Data Engineering
    {
      title: "Bioinformatics & Data Engineering",
      content: [
        {
          subtitle: "Workflow Management Nextflow and Snakemake",
          description: "Building reproducible analysis pipelines with tools like Nextflow—ensuring genomic analyses can be repeated exactly and scaled to thousands of samples. Reproducible pipelines with containers and CWL; scalable execution on cloud and HPC."
        },
        {
          subtitle: "Data Processing and Quality Control",
          description: "Cleaning and normalizing messy biological data—removing technical artifacts and ensuring high-quality datasets for downstream analysis. QC, normalization and batch correction for genomic, transcriptomic and proteomic data."
        },
        {
          subtitle: "Statistical Analysis and Differential Expression",
          description: "Finding which genes or proteins differ between conditions using rigorous statistics—accounting for noise and multiple testing to identify real biological signals. R and Bioconductor toolchains; enrichment tests and rigorous multiple hypothesis control."
        },
        {
          subtitle: "Knowledge Graphs and Ontologies",
          description: "Organizing biological knowledge in standardized vocabularies and connected graphs—making it possible to computationally reason about genes, diseases, and pathways. GO, MeSH and disease ontologies; schema design and graph augmented analytics."
        },
        {
          subtitle: "FAIR Data and Metadata Standards",
          description: "Making research data Findable, Accessible, Interoperable, and Reusable—proper metadata and standards that enable data sharing and reproducibility. Findable, accessible, interoperable and reusable data; provenance and audit trails."
        }
      ]
    },

    // 8) Self-Driving Labs & Bio Automation
    {
      title: "Self-Driving Labs & Bio Automation",
      content: [
        {
          subtitle: "Robotic Workcells and Liquid Handling",
          description: "Automated lab equipment that handles liquids and samples—robots that can run experiments 24/7 with precision that exceeds human consistency. Automated sample prep, colony picking, microfluidics and high throughput screening."
        },
        {
          subtitle: "Experiment Planning Agents and BO RL",
          description: "AI agents that design experiments—using machine learning to decide what to test next based on previous results, actively learning the fastest path to answers. Bayesian optimization and reinforcement learning for adaptive design of experiments."
        },
        {
          subtitle: "DMTA Closed Loop Pipelines",
          description: "Fully automated Design-Make-Test-Analyze cycles—robots and AI working together to design molecules, synthesize them, run assays, and learn from results without human intervention. Design make test analyze orchestration, feedback learning and assay harmonization."
        },
        {
          subtitle: "LIMS and ELN Integration",
          description: "Lab information systems that track samples, experiments, and data—the digital backbone that connects automated instruments and ensures traceability. Sample tracking, inventory, barcoding and provenance linked to data lakes."
        }
      ]
    },

    // 9) Bio R&D Infrastructure
    {
      title: "Bio R&D Infrastructure",
      content: [
        {
          subtitle: "Cloud Bio Platforms Benchling LatchBio Watershed Lila",
          description: "Cloud platforms built for biological R&D—collaborative workspaces where teams can analyze data, design experiments, and manage everything from sequences to lab inventory. R&D data models, notebook and registry systems; collaborative analysis and governance."
        },
        {
          subtitle: "Data Clouds DNAnexus Lifebit Tempus Flatiron",
          description: "Secure cloud platforms that host large genomic and clinical datasets—enabling researchers to analyze cohorts of thousands without moving sensitive data. Cohort scale compute, secure enclaves, controlled data access and monetization models."
        },
        {
          subtitle: "Compute and Storage HPC GPU and Costing",
          description: "The computing infrastructure for biological AI—choosing between cloud and on-premise, optimizing costs, and managing petabytes of genomic data. Cluster sizing, spot and on demand tradeoffs, storage tiers and cost observability."
        },
        {
          subtitle: "Security and Compliance for Bio",
          description: "Keeping biological data secure and compliant—HIPAA, PHI handling, audit trails, and access controls required for clinical and patient data. PHI handling, role based access control, audit logging and SOC2 HIPAA alignment."
        }
      ]
    },

    // 10) AI Biotech Industry Landscape
    {
      title: "AI Biotech Industry Landscape",
      content: [
        {
          subtitle: "AI Pharma Platforms Recursion Schrodinger Insitro",
          description: "Companies building end-to-end AI drug discovery platforms—combining experimental automation, data generation, and machine learning to accelerate finding new medicines. From imaging OS to physics ML; platform and pipeline strategies for discovery."
        },
        {
          subtitle: "CRO and CDMO Ecosystems Wuxi Eurofins Charles River",
          description: "Contract research and manufacturing organizations that run experiments and scale up production—the external partners that complement internal AI capabilities. Assay outsourcing, scale up and regulatory grade data integration with DMTA cycles."
        },
        {
          subtitle: "Business Models Platform Service Product IP",
          description: "How AI biotech companies make money—from platform services to owning drug assets, data licensing, and partnerships with traditional pharma. Data moats, SaaS APIs, milestone deals and asset creation pathways."
        },
        {
          subtitle: "Data Monetization and Partnerships",
          description: "Turning proprietary biological datasets into value—licensing data, federated learning across organizations, and data-sharing partnerships. RWE and genomics networks, licensing, federated access and clean room collaboration."
        }
      ]
    },

    // 11) Accelerated BioAI (NVIDIA stack)
    {
      title: "Accelerated BioAI",
      content: [
        {
          subtitle: "Parabricks Accelerated Genomics",
          description: "GPU-accelerated tools that analyze genomes up to 50x faster—taking workflows that took days and running them in under an hour. GPU fast alignment, variant calling and CNV SV detection for population scale studies."
        },
        {
          subtitle: "BioNeMo Foundation Models",
          description: "Pre-trained AI models for biological sequences—like GPT but for proteins, DNA, and molecules, ready to fine-tune for specific tasks. Protein, RNA and small molecule foundation models for generation and property prediction."
        },
        {
          subtitle: "RAPIDS for Omics and Chemistry",
          description: "GPU-accelerated data science for biology—running machine learning and data analysis on massive genomic datasets at speeds impossible on CPUs. GPU dataframes and ML for cohort analytics, similarity search and large scale featurization."
        },
        {
          subtitle: "FLARE Federated Learning",
          description: "Training AI models across multiple organizations without sharing raw data—enabling collaboration while maintaining privacy and data sovereignty. Multi site training with privacy preservation, governance and auditable updates."
        },
        {
          subtitle: "Triton and Inference Runtimes",
          description: "High-performance model serving infrastructure—running biological AI predictions at scale with low latency and high throughput for production applications. High throughput model serving, ensembles and observability for regulated workloads."
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
                <button 
                  onClick={() => toggleSection(index)}
                  className="w-full flex items-center justify-between text-left mb-12 group hover:opacity-70 transition-opacity duration-300"
                >
                  <h2 className="text-3xl font-light tracking-tight">
                    {section.title}
                  </h2>
                  <span className="text-2xl font-light text-black/40 transition-transform duration-300" style={{ transform: expandedSections.has(index) ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                    →
                  </span>
                </button>
                {expandedSections.has(index) && (
                  <div className="space-y-10">
                    {section.content.map((item, itemIndex) => (
                    <Link 
                      key={itemIndex} 
                      to={`/resources/digital-biology/${section.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/${item.subtitle.toLowerCase().replace(/\s+/g, '-').replace(/[(),]/g, '').replace(/&/g, 'and').replace(/\//g, '-')}`}
                      state={{ title: item.subtitle }}
                      target="_blank"
                      rel="noopener noreferrer"
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
                )}
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
