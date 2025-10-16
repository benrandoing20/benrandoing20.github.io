import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const NextGenerationSequencing = () => {
  // Look how EASY this is to write and edit! Just plain text with simple formatting.
  const content = `
Next-Generation Sequencing (NGS) has revolutionized genomics by enabling high-throughput, parallel sequencing of DNA and RNA. Unlike traditional Sanger sequencing, NGS can sequence millions of fragments simultaneously, dramatically reducing cost and time while increasing data output.

The technology has become the backbone of modern genomics research, clinical diagnostics, and personalized medicine applications.

## NGS Workflow

1. Sample Preparation: DNA/RNA extraction, fragmentation, and quality assessment
2. Library Preparation: Adapter ligation, PCR amplification, and size selection  
3. Cluster Generation: Bridge amplification on flow cell surface
4. Sequencing by Synthesis: Cyclic addition of fluorescently labeled nucleotides
5. Data Analysis: Base calling, quality scoring, and bioinformatics processing

## Major NGS Platforms

Each sequencing platform has unique characteristics that make them suitable for different applications:

• **Illumina:** Short reads (50-300bp), high accuracy, massive throughput. Ideal for whole genome sequencing, RNA-seq, and clinical applications.
• **PacBio (SMRT):** Long reads (10-100kb), real-time sequencing, detects base modifications. Perfect for genome assembly and structural variant detection.
• **Oxford Nanopore:** Ultra-long reads (>1Mb possible), portable devices, real-time analysis. Excellent for field sequencing and complex genome regions.
• **Ion Torrent:** Semiconductor-based, rapid turnaround, cost-effective for targeted sequencing panels.

## Basic Processing Pipeline

\`\`\`bash
# Quality control with FastQC
fastqc raw_reads.fastq.gz

# Trimming adapters and low-quality bases
trimmomatic SE raw_reads.fastq.gz trimmed_reads.fastq.gz \\
    ILLUMINACLIP:adapters.fa:2:30:10 LEADING:3 TRAILING:3 \\
    SLIDINGWINDOW:4:15 MINLEN:36

# Alignment to reference genome
bwa mem reference.fa trimmed_reads.fastq.gz | \\
    samtools sort -o aligned_reads.bam

# Variant calling
gatk HaplotypeCaller \\
    -R reference.fa \\
    -I aligned_reads.bam \\
    -O variants.vcf
\`\`\`

## Applications & Use Cases

NGS technology enables a wide range of genomic applications across research and clinical settings:

• **Whole Genome Sequencing (WGS):** Complete genomic profiling for rare disease diagnosis and population studies
• **Whole Exome Sequencing (WES):** Focused on protein-coding regions, cost-effective for clinical diagnostics
• **RNA Sequencing (RNA-seq):** Gene expression analysis, transcript discovery, and alternative splicing detection
• **ChIP-seq:** Protein-DNA interactions and epigenetic modifications mapping
• **ATAC-seq:** Chromatin accessibility and transcription factor binding site identification
• **Single-cell sequencing:** Cell-type specific analysis and developmental biology studies

## Quality Metrics & Considerations

Understanding key quality metrics is crucial for successful NGS experiments:

• **Coverage depth:** Number of reads covering each genomic position
• **Q-score:** Phred quality score indicating base calling accuracy  
• **GC bias:** Preferential amplification of GC-rich or AT-rich regions
• **Duplication rate:** Percentage of PCR duplicates in the library
• **Insert size distribution:** Fragment length distribution for paired-end sequencing

## Cost & Throughput Comparison

Modern NGS platforms offer different trade-offs between cost, speed, and data output:

• **Illumina NovaSeq:** ~$1000 per genome, 3TB output, 1-2 days
• **PacBio Sequel:** ~$3000 per genome, long reads, 1 day  
• **Oxford Nanopore PromethION:** ~$1500 per genome, ultra-long reads, real-time
• **Ion Torrent:** ~$200 per targeted panel, 2-8 hours, clinical focus

The choice of platform depends on your specific research questions, budget constraints, and turnaround time requirements.
`;

  return (
    <SimpleSubsectionDetail
      category="Digital Biology"
      categoryHref="/resources/digital-biology"
      title="Genomics & Sequencing"
      subtitle="Next-Generation Sequencing (NGS)"
      description="High-throughput DNA sequencing technologies enabling whole genome, exome, and transcriptome analysis. Understanding Illumina, PacBio, and Oxford Nanopore platforms."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default NextGenerationSequencing;
