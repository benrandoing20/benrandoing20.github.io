import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ViewToggle from '@/components/ViewToggle';
import KnowledgeGraph3D from '@/components/KnowledgeGraph3D';
import { digitalHealthGraphData } from '@/data/graphs/digitalHealthGraph';

const DigitalHealth = () => {
  const [view, setView] = useState<'list' | 'graph'>('graph');
  const sections = [
    // 1) Clinical AI & Decision Support
    {
      title: "Clinical AI & Decision Support",
      content: [
        {
          subtitle: "Clinical Reasoning & Diagnosis",
          description: "AI systems for symptom evaluation, differential diagnosis ranking, Bayesian reasoning, and uncertainty-aware assistance."
        },
        {
          subtitle: "Clinical Question Answering",
          description: "Retrieval-augmented clinical reasoning, guideline-grounded response generation, and integration with medical literature sources."
        },
        {
          subtitle: "Treatment & Care Pathway Support",
          description: "Evidence-based recommendations aligned with clinical guidelines, personalized therapy selection, and outcome prediction."
        }
      ]
    },

    // 2) LLMs in Healthcare
    {
      title: "LLMs in Healthcare",
      content: [
        {
          subtitle: "Medical Foundation Models",
          description: "Pretrained clinical LLMs such as Med-PaLM, GatorTron, BioGPT; tuning for safety, accuracy, and low hallucination."
        },
        {
          subtitle: "Clinical Note Intelligence",
          description: "Summarization, entity extraction, medical coding, temporal reasoning, and contextual understanding of longitudinal records."
        },
        {
          subtitle: "Agentic Healthcare Systems",
          description: "LLM-driven agents that write orders, schedule follow-ups, manage referrals, and execute EHR tool use with safety constraints."
        }
      ]
    },

    // 3) Electronic Health Records & Data Systems
    {
      title: "Healthcare Data & EHR Systems",
      content: [
        {
          subtitle: "EHR Data Engineering",
          description: "Data normalization, FHIR resource modeling, feature stores, cohort builders, and clinical ontologies."
        },
        {
          subtitle: "Interoperability at Scale",
          description: "HL7, FHIR, SMART-on-FHIR, TEFCA, and healthcare information exchange (HIE) frameworks."
        },
        {
          subtitle: "Clinical Knowledge Graphs",
          description: "Graph representations of patient states, diseases, ontologies, causal pathways, and phenotype relationships."
        }
      ]
    },

    // 4) Patient Monitoring & Digital Care
    {
      title: "Remote Monitoring & Digital Care",
      content: [
        {
          subtitle: "Remote Physiologic Monitoring (RPM)",
          description: "Wearable and at-home device integration, data aggregation, alert fatigue mitigation, and signal monitoring."
        },
        {
          subtitle: "Virtual Care Delivery",
          description: "Telehealth platforms, asynchronous care loops, patient triage flows, and virtual-first primary care."
        },
        {
          subtitle: "Digital Therapeutics (DTx)",
          description: "Evidence-based software therapies for mental health, metabolic disease, and neurology with regulatory pathways."
        }
      ]
    },

    // 5) Population & Precision Medicine
    {
      title: "Population & Precision Medicine",
      content: [
        {
          subtitle: "Risk Prediction & Stratification",
          description: "Early warning scores for sepsis, readmission, shock, CHF exacerbation, and chronic disease forecasting."
        },
        {
          subtitle: "Precision Oncology & Genomic Care",
          description: "Multi-omic tumor profiling, targeted treatment suggestions, immunotherapy biomarkers, and tumor boards."
        },
        {
          subtitle: "Pharmacogenomics",
          description: "Drug-response modeling using CYP genes, gene-drug interaction prediction, and medication optimization."
        }
      ]
    },

    // 6) Clinical Trials & Real-World Evidence
    {
      title: "Clinical Trials & Real-World Evidence",
      content: [
        {
          subtitle: "Trial Matching & Eligibility AI",
          description: "Automated eligibility parsing, phenotype extraction, decentralized trial enrollment and matching engines."
        },
        {
          subtitle: "Real-World Evidence (RWE)",
          description: "Regulatory-grade observational studies, longitudinal outcomes, and causal inference from EHR + claims data."
        },
        {
          subtitle: "Synthetic Control Arms",
          description: "External control arms using historical or synthetic cohorts to reduce trial cost and improve feasibility."
        }
      ]
    },

    // 7) Healthcare Operations & Enterprise AI
    {
      title: "Healthcare Operations & Enterprise AI",
      content: [
        {
          subtitle: "Operational Optimization",
          description: "Patient flow optimization, surgical block allocation, ED wait forecasting, and hospital throughput modeling."
        },
        {
          subtitle: "Revenue Cycle Management",
          description: "AI-driven medical coding, denial prediction, claims optimization, and payment integrity analysis."
        },
        {
          subtitle: "Payer-Provider Automation",
          description: "Prior authorization, eligibility checks, medical necessity review automation, and utilization management."
        }
      ]
    },

    // 8) Safety, Regulation & Ethics
    {
      title: "Safety, Regulation & Ethics",
      content: [
        {
          subtitle: "Model Safety & Clinical Risk",
          description: "Safety evaluation frameworks, out-of-distribution detection, fail-safes, and uncertainty gating."
        },
        {
          subtitle: "Bias & Fairness",
          description: "Subgroup calibration analysis, health equity impact, fairness constraints, and real-world auditing."
        },
        {
          subtitle: "Regulation & SaMD",
          description: "FDA Software as a Medical Device (SaMD), Good Machine Learning Practice (GMLP), post-market surveillance."
        }
      ]
    },

    // 9) Healthcare Privacy & Security
    {
      title: "Healthcare Privacy & Security",
      content: [
        {
          subtitle: "De-Identification & PHI Protection",
          description: "Structured and unstructured de-ID, privacy guarantees, k-anonymity, and protected data handling."
        },
        {
          subtitle: "Federated Learning in Healthcare",
          description: "Distributed model training without raw data sharing; NVIDIA FLARE for cross-institutional AI."
        },
        {
          subtitle: "Secure AI Deployment",
          description: "HIPAA/SOC2 compliance, role-based access control, audit logs, encryption, HIE security."
        }
      ]
    },

    // 10) Clinical Deployment & MLOps
    {
      title: "Clinical Deployment & MLOps",
      content: [
        {
          subtitle: "Clinical Validation & Monitoring",
          description: "Retrospective, silent, and shadow deployments; drift detection; pre- and post-market evaluation."
        },
        {
          subtitle: "Model Explainability in Medicine",
          description: "Case-level explanations, global transparency, auditability, and physician trust frameworks."
        },
        {
          subtitle: "Production AI Systems",
          description: "Triton inference, microservice pipelines, latency design, failover systems, and uptime guarantees."
        }
      ]
    },

    // 11) Industry & Ecosystem
    {
      title: "Health AI Industry & Ecosystem",
      content: [
        {
          subtitle: "Clinical AI Platforms",
          description: "Abridge, Nabla, Microsoft Nuance Dragon Ambient, AWS HealthScribe, Google MedLM ecosystem."
        },
        {
          subtitle: "Health Data Platforms",
          description: "Epic Cosmos, Truveta, Tempus, Flatiron, Komodo Health, OMOP-based population platforms."
        },
        {
          subtitle: "AI-Driven Care Delivery",
          description: "Forward, Oak Street Health, One Medical, K Health, Carbon Health—tech-enabled primary care."
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
              Digital Health
            </h1>
            <div className="w-24 h-px bg-black/20 mb-8"></div>
            <p className="text-xl font-light text-black/60 max-w-3xl mb-8">
              AI-powered healthcare—clinical intelligence, decision support, digital therapeutics, workflow automation, and precision medicine at scale.
            </p>
            
            <ViewToggle view={view} onViewChange={setView} />
          </div>

          {view === 'graph' ? (
            <div className="w-full" style={{ height: '800px' }}>
              <KnowledgeGraph3D data={digitalHealthGraphData} />
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
                      to={`/resources/digital-health/${section.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/${item.subtitle.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '').replace(/&/g, 'and').replace(/\//g, '-')}`}
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

export default DigitalHealth;
