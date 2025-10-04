import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const DigitalBiology = () => {
  const sections = [
    {
      title: "Genomics & Sequencing",
      content: [
        {
          subtitle: "Next-Generation Sequencing (NGS)",
          description: "High-throughput DNA sequencing technologies enabling whole genome, exome, and transcriptome analysis. Understanding Illumina, PacBio, and Oxford Nanopore platforms."
        },
        {
          subtitle: "Variant Calling & Analysis",
          description: "Computational methods for identifying genetic variations, SNPs, indels, and structural variants from sequencing data using tools like GATK and FreeBayes."
        },
        {
          subtitle: "Genome Assembly",
          description: "De novo and reference-guided genome assembly techniques. Handling repetitive sequences, scaffolding, and quality assessment of assembled genomes."
        }
      ]
    },
    {
      title: "Protein Structure & Function",
      content: [
        {
          subtitle: "Structure Prediction",
          description: "AlphaFold and other AI-driven approaches to protein folding prediction. Understanding secondary, tertiary, and quaternary protein structures."
        },
        {
          subtitle: "Molecular Dynamics Simulations",
          description: "Computational modeling of protein behavior over time. Force fields, simulation software, and analysis of protein conformational changes."
        },
        {
          subtitle: "Drug-Target Interactions",
          description: "Computational approaches to understanding how drugs bind to proteins. Molecular docking, binding affinity prediction, and ADMET properties."
        }
      ]
    },
    {
      title: "Bioinformatics Pipelines",
      content: [
        {
          subtitle: "Workflow Management",
          description: "Building reproducible bioinformatics workflows using Nextflow, Snakemake, and CWL. Container technologies and cloud computing for scalable analysis."
        },
        {
          subtitle: "Data Processing",
          description: "Handling large-scale biological datasets. Quality control, normalization, and preprocessing of genomic, transcriptomic, and proteomic data."
        },
        {
          subtitle: "Statistical Analysis",
          description: "Differential expression analysis, enrichment analysis, and statistical methods for biological data interpretation using R/Bioconductor."
        }
      ]
    },
    {
      title: "Systems Biology",
      content: [
        {
          subtitle: "Network Biology",
          description: "Protein-protein interaction networks, gene regulatory networks, and metabolic pathway analysis. Graph theory applications in biological systems."
        },
        {
          subtitle: "Multi-omics Integration",
          description: "Combining genomics, transcriptomics, proteomics, and metabolomics data for comprehensive biological understanding."
        },
        {
          subtitle: "Mathematical Modeling",
          description: "Ordinary differential equations, Boolean networks, and stochastic models for biological processes and cellular dynamics."
        }
      ]
    },
    {
      title: "Synthetic Biology",
      content: [
        {
          subtitle: "Genetic Circuit Design",
          description: "Engineering biological systems with predictable behaviors. Logic gates, oscillators, and switches using synthetic biology principles."
        },
        {
          subtitle: "Metabolic Engineering",
          description: "Redesigning metabolic pathways for production of biofuels, pharmaceuticals, and other valuable compounds."
        },
        {
          subtitle: "CRISPR & Gene Editing",
          description: "Computational tools for guide RNA design, off-target prediction, and optimization of gene editing strategies."
        }
      ]
    },
    {
      title: "Computational Tools & Databases",
      content: [
        {
          subtitle: "Biological Databases",
          description: "NCBI, UniProt, PDB, and other essential databases. Data retrieval, API usage, and database integration strategies."
        },
        {
          subtitle: "Visualization Tools",
          description: "Creating publication-quality figures for biological data. Tools like PyMOL, ChimeraX, Cytoscape, and custom visualization scripts."
        },
        {
          subtitle: "Machine Learning Applications",
          description: "Applying ML to biological problems: sequence classification, structure prediction, and phenotype prediction from genotype data."
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
            <p className="text-xl font-light text-black/60 max-w-3xl">
              Computational approaches to understanding life—from genomic analysis and protein modeling to systems biology and synthetic design.
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
                    <Link 
                      key={itemIndex} 
                      to={`/resources/digital-biology/${section.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/${item.subtitle.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '').replace(/&/g, 'and')}`}
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalBiology;
