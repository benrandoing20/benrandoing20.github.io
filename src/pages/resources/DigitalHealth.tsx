import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ViewToggle from '@/components/ViewToggle';
import KnowledgeGraph3D from '@/components/KnowledgeGraph3D';
import { digitalHealthGraphData } from '@/data/graphs/digitalHealthGraph';

const DigitalHealth = () => {
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
    // 1) Clinical AI & Decision Support
    {
      title: "Clinical AI & Decision Support",
      content: [
        {
          subtitle: "Clinical Reasoning & Diagnosis",
          description: "AI that helps doctors figure out what's wrong with a patient by analyzing symptoms, suggesting possible diagnoses ranked by likelihood, and being honest about what it doesn't know. Includes symptom evaluation, differential ranking, Bayesian reasoning, and uncertainty-aware assistance."
        },
        {
          subtitle: "Clinical Question Answering",
          description: "Medical AI that can answer doctors' questions by searching through medical guidelines, research papers, and best practices—designed to give accurate, trustworthy answers without making things up. Uses guideline-grounded retrieval and synthesis tuned for clinical evidence and low hallucination."
        },
        {
          subtitle: "Treatment & Care Pathway Support",
          description: "AI that suggests the best treatment options for each patient, helps ensure care teams follow proven protocols, and predicts how well different treatments might work. Includes personalized therapy selection, protocol adherence, and outcome prediction integrated into clinician tools."
        }
      ]
    },

    // 2) LLMs in Healthcare
    {
      title: "LLMs in Healthcare",
      content: [
        {
          subtitle: "Medical Foundation Models",
          description: "Specialized AI language models trained specifically on medical knowledge—like GPT but with years of medical school training—that understand medical terminology, research, and clinical reasoning. Domain-pretrained LLMs/VLMs (e.g., Med-PaLM, GatorTron, BioGPT) adapted for medical safety and accuracy."
        },
        {
          subtitle: "Clinical Note Intelligence",
          description: "AI that helps with the mountain of paperwork in healthcare—automatically writing visit summaries, pulling out key medical information, and assigning the right billing codes, so doctors can spend more time with patients. Includes summarization, entity/temporal extraction, and medical coding that reduce burden and improve data quality."
        },
        {
          subtitle: "Agentic Healthcare Systems",
          description: "AI assistants that can take action in medical records—like scheduling appointments, entering medication orders, or sending referrals—all with safety checks to prevent mistakes. LLM-driven agents that write orders, schedule follow-ups, and execute EHR tool use with guardrails."
        }
      ]
    },

    // 3) Healthcare Data & EHR Systems
    {
      title: "Healthcare Data & EHR Systems",
      content: [
        {
          subtitle: "EHR Data Engineering",
          description: "The technical work of cleaning and organizing messy hospital data so it's actually usable. This includes standardizing how different systems represent the same information (like \"heart attack\" vs \"myocardial infarction\") and making it easy to find groups of similar patients. Covers normalization, FHIR resource modeling, feature stores, cohort builders, and ontology mapping."
        },
        {
          subtitle: "Interoperability at Scale",
          description: "Getting different hospital computer systems to share patient information seamlessly—so when you visit a new doctor, they can see your complete medical history, even if it's from different hospitals using different software. Includes HL7, FHIR, SMART-on-FHIR, TEFCA, and health information exchange frameworks."
        },
        {
          subtitle: "Clinical Knowledge Graphs",
          description: "Mapping out how diseases, symptoms, treatments, and patient characteristics are all connected—like a knowledge web that helps AI understand the relationships between different medical concepts and make smarter predictions. Graph representations of patient states, diseases, causal pathways, and phenotype relationships."
        }
      ]
    },

    // 4) Remote Monitoring & Digital Care
    {
      title: "Remote Monitoring & Digital Care",
      content: [
        {
          subtitle: "Remote Physiologic Monitoring (RPM)",
          description: "Technology that lets doctors monitor patients at home using devices like smart watches, blood pressure cuffs, and glucose monitors—collecting all that data, making sure it's accurate, and alerting care teams only when something really needs attention. Includes wearables, device integration, data aggregation, signal QA, and alert fatigue mitigation."
        },
        {
          subtitle: "Virtual Care Delivery",
          description: "The platforms and workflows that make video visits, messaging with your doctor, and online health consultations work smoothly—from deciding who needs to be seen urgently to practices that operate almost entirely online. Covers telehealth platforms, asynchronous care loops, patient triage flows, and virtual-first primary care."
        },
        {
          subtitle: "Digital Therapeutics (DTx)",
          description: "Apps and software that actually treat medical conditions (not just track them)—like programs for depression, diabetes management, or cognitive therapy—with real clinical evidence behind them and sometimes even covered by insurance. Evidence-based software therapies (mental health, metabolic, neuro) with regulatory and payer pathways."
        }
      ]
    },

    // 5) Population & Precision Medicine
    {
      title: "Population & Precision Medicine",
      content: [
        {
          subtitle: "Risk Prediction & Stratification",
          description: "AI that predicts which patients are at risk of getting seriously ill—like catching signs of infection before it becomes life-threatening, or identifying who's likely to end up back in the hospital so extra support can be provided. Includes early warning scores for sepsis, readmission, shock, CHF exacerbation, and chronic disease forecasting."
        },
        {
          subtitle: "Precision Oncology & Genomic Care",
          description: "Using genetic analysis of cancers to find the specific mutations driving each patient's tumor and match them to targeted therapies—making cancer treatment more personalized and effective. Covers multi-omic tumor profiling, targeted treatment suggestions, and biomarker-driven tumor boards."
        },
        {
          subtitle: "Pharmacogenomics",
          description: "Using your genetic makeup to predict how you'll respond to different medications—helping doctors choose the right drug and dose for you, and avoiding ones that might not work or cause side effects based on your DNA. Includes drug-response modeling using CYP genes, gene–drug interaction prediction, and medication optimization."
        }
      ]
    },

    // 6) Clinical Trials & Real-World Evidence
    {
      title: "Clinical Trials & Real-World Evidence",
      content: [
        {
          subtitle: "Trial Matching & Eligibility AI",
          description: "AI that reads complex clinical trial requirements and automatically finds patients who qualify, making it easier for people to find trials that might help them and for researchers to recruit participants faster. Includes automated eligibility parsing, phenotype extraction, and decentralized enrollment workflows."
        },
        {
          subtitle: "Real-World Evidence (RWE)",
          description: "Learning from real patient data in everyday care (not just formal trials) to understand how treatments work in the real world, what side effects happen, and which patients benefit most—evidence that can support FDA approvals and insurance coverage. Uses regulatory-grade observational studies, longitudinal outcomes, and causal inference using EHR + claims."
        },
        {
          subtitle: "Synthetic Control Arms",
          description: "Using historical patient data or AI-generated comparison groups instead of giving some patients placebo or standard treatment—making trials faster, cheaper, and more ethical, especially for rare diseases. External control arms using historical or synthetic cohorts to reduce trial cost and improve feasibility."
        }
      ]
    },

    // 7) Healthcare Operations & Enterprise AI
    {
      title: "Healthcare Operations & Enterprise AI",
      content: [
        {
          subtitle: "Operational Optimization",
          description: "Using AI to predict how busy a hospital will be, optimize operating room schedules, reduce ER wait times, and make sure patients flow smoothly through the system—improving care and reducing costs. Includes patient flow optimization, surgical block allocation, ED wait forecasting, and hospital throughput modeling."
        },
        {
          subtitle: "Revenue Cycle Management",
          description: "Automating the complex billing and insurance side of healthcare—making sure procedures are coded correctly, claims get paid, and identifying billing errors before they become problems. Covers AI-driven medical coding, denial prediction, claims optimization, and payment integrity analysis."
        },
        {
          subtitle: "Payer-Provider Automation",
          description: "Streamlining the frustrating back-and-forth between doctors and insurance companies—automatically checking if treatments need approval, verifying coverage, and reducing administrative delays that slow down patient care. Includes prior authorization, eligibility checks, medical necessity review automation, and utilization management."
        }
      ]
    },

    // 8) Safety, Regulation & Ethics
    {
      title: "Safety, Regulation & Ethics",
      content: [
        {
          subtitle: "Model Safety & Clinical Risk",
          description: "Safety systems that detect when medical AI encounters something unusual it hasn't seen before, stop it from making risky decisions, and ensure humans review critical choices—plus protocols for responding when something goes wrong. Includes OOD detection, fail-safes, uncertainty gating, human-in-the-loop, and incident response for patient safety."
        },
        {
          subtitle: "Bias & Fairness",
          description: "Ensuring medical AI works equally well for everyone—actively checking that algorithms don't perform worse for certain racial, gender, or socioeconomic groups, and fixing disparities when they're found. Covers subgroup calibration analysis, health equity impact, fairness constraints, and real-world auditing."
        },
        {
          subtitle: "Regulation & SaMD",
          description: "The regulatory pathways and best practices for getting medical AI approved by the FDA and keeping it compliant—including special considerations for software that acts as a medical device and ongoing monitoring after it's released. FDA Software as a Medical Device (SaMD), Good Machine Learning Practice (GMLP), and post-market surveillance."
        }
      ]
    },

    // 9) Healthcare Privacy & Security
    {
      title: "Healthcare Privacy & Security",
      content: [
        {
          subtitle: "De-Identification & PHI Protection",
          description: "Techniques for removing or masking identifying information from medical records so data can be used for research and AI training while protecting patient privacy—with mathematical guarantees that individuals can't be re-identified. Includes structured and unstructured de-ID, privacy guarantees (e.g., k-anonymity), and protected data handling."
        },
        {
          subtitle: "Federated Learning in Healthcare",
          description: "A clever way to train AI across multiple hospitals without any sensitive patient data leaving each hospital—the algorithm travels to the data rather than the data traveling to a central location. Distributed model training without raw data sharing; cross-institutional collaboration patterns."
        },
        {
          subtitle: "Secure AI Deployment",
          description: "The security infrastructure needed to run medical AI in real healthcare settings—meeting strict privacy regulations, controlling who can access what, tracking all system activity, and encrypting sensitive data. HIPAA/SOC2 compliance, RBAC, audit logs, encryption, and HIE security for production AI."
        }
      ]
    },

    // 10) Clinical Deployment & MLOps
    {
      title: "Clinical Deployment & MLOps",
      content: [
        {
          subtitle: "Clinical Validation & Monitoring",
          description: "Testing AI carefully before it goes live—running it in \"shadow mode\" where it makes predictions but doesn't affect care, continuously monitoring performance after launch, and detecting when its accuracy starts to decline over time. Includes retrospective, silent, and shadow deployments; drift detection; pre- and post-market evaluation."
        },
        {
          subtitle: "Model Explainability in Medicine",
          description: "Making AI understandable to doctors and patients—explaining why the AI made a specific recommendation for this patient, how the model works in general, and building systems that doctors can trust and audit when needed. Covers case-level explanations, global transparency, auditability, and physician trust frameworks."
        },
        {
          subtitle: "Production AI Systems",
          description: "The technical infrastructure that keeps medical AI running reliably 24/7—making predictions fast enough for clinical use, having backup systems when things fail, and maintaining the kind of uptime you'd expect from critical hospital systems. Triton inference, microservice pipelines, latency budgets, failover systems, and uptime guarantees."
        }
      ]
    },

    // 11) Health AI Industry & Ecosystem
    {
      title: "Health AI Industry & Ecosystem",
      content: [
        {
          subtitle: "Clinical AI Platforms",
          description: "Complete AI platforms that doctors can use during patient visits—tools that listen to conversations and write notes automatically, suggest diagnoses and treatments, and integrate seamlessly into clinical workflow. Ambient and point-of-care platforms offering documentation and decision support at scale."
        },
        {
          subtitle: "Health Data Platforms",
          description: "Large-scale databases and networks that aggregate patient data from many hospitals and clinics—powering research, helping develop AI models, and enabling population health analytics while maintaining privacy. EHR networks and population datasets powering analytics, research, and payer/provider products."
        },
        {
          subtitle: "AI-Driven Care Delivery",
          description: "New models of healthcare built around AI from the ground up—like tech-forward clinics that use data and automation to deliver better, more personalized care, often at lower cost than traditional practices. Tech-enabled clinics and virtual care models integrating data, operations, and AI."
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
                      to={`/resources/digital-health/${section.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/${item.subtitle.toLowerCase().replace(/\s+/g, '-').replace(/[(),]/g, '').replace(/&/g, 'and').replace(/\//g, '-')}`}
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

export default DigitalHealth;
