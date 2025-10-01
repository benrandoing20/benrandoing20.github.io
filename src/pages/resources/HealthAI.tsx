import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const HealthAI = () => {
  const sections = [
    {
      title: "Medical Imaging AI",
      content: [
        {
          subtitle: "Diagnostic Radiology",
          description: "AI systems for X-ray, CT, and MRI analysis. Deep learning models achieving radiologist-level performance in detecting cancers, fractures, and abnormalities."
        },
        {
          subtitle: "Pathology & Histology",
          description: "Digital pathology with AI-powered tissue analysis. Automated detection of cancer cells, tumor classification, and prognostic predictions."
        },
        {
          subtitle: "Retinal Imaging",
          description: "Diabetic retinopathy detection, glaucoma screening, and age-related macular degeneration diagnosis using fundus photography and OCT scans."
        }
      ]
    },
    {
      title: "Clinical Decision Support",
      content: [
        {
          subtitle: "Diagnosis Assistance",
          description: "AI systems that analyze patient symptoms, medical history, and lab results to suggest differential diagnoses and recommend next steps."
        },
        {
          subtitle: "Treatment Recommendations",
          description: "Evidence-based treatment planning using machine learning on clinical guidelines, literature, and patient-specific factors."
        },
        {
          subtitle: "Risk Prediction",
          description: "Predicting patient deterioration, readmission risk, and adverse events using electronic health records and real-time monitoring."
        }
      ]
    },
    {
      title: "Drug Discovery & Development",
      content: [
        {
          subtitle: "Molecular Design",
          description: "Generative AI for novel drug candidate creation. Predicting molecular properties, binding affinity, and toxicity profiles."
        },
        {
          subtitle: "Clinical Trial Optimization",
          description: "Patient recruitment, trial design, and endpoint prediction using machine learning on historical trial data."
        },
        {
          subtitle: "Repurposing Existing Drugs",
          description: "Identifying new therapeutic applications for approved drugs using network analysis and biological pathway modeling."
        }
      ]
    },
    {
      title: "Personalized Medicine",
      content: [
        {
          subtitle: "Genomic Analysis",
          description: "AI-powered interpretation of whole genome sequencing, variant calling, and prediction of disease susceptibility."
        },
        {
          subtitle: "Treatment Response Prediction",
          description: "Using patient genetics, biomarkers, and clinical data to predict optimal treatment approaches and drug responses."
        },
        {
          subtitle: "Precision Oncology",
          description: "Tumor genomic profiling, targeted therapy selection, and immunotherapy response prediction using multi-omic data."
        }
      ]
    },
    {
      title: "Remote Patient Monitoring",
      content: [
        {
          subtitle: "Wearable Devices",
          description: "Continuous health monitoring with smartwatches, biosensors, and medical-grade wearables. Detecting arrhythmias, sleep apnea, and chronic disease markers."
        },
        {
          subtitle: "Vital Signs Analysis",
          description: "AI algorithms for heart rate variability, oxygen saturation, blood pressure trends, and early warning score systems."
        },
        {
          subtitle: "Behavioral Health",
          description: "Mental health monitoring through smartphone sensors, speech analysis, and digital phenotyping for depression and anxiety."
        }
      ]
    },
    {
      title: "Healthcare Operations",
      content: [
        {
          subtitle: "Hospital Resource Optimization",
          description: "Predicting bed capacity, optimizing surgical scheduling, and improving emergency department flow using operations research and ML."
        },
        {
          subtitle: "Staff Scheduling",
          description: "AI-driven workforce management balancing patient demand, staff preferences, and regulatory requirements."
        },
        {
          subtitle: "Supply Chain Management",
          description: "Predicting medical supply needs, reducing waste, and optimizing inventory using demand forecasting models."
        }
      ]
    },
    {
      title: "Ethics & Regulation",
      content: [
        {
          subtitle: "Bias & Fairness",
          description: "Addressing algorithmic bias in healthcare AI. Ensuring equitable outcomes across demographics and preventing discrimination."
        },
        {
          subtitle: "Privacy & Security",
          description: "HIPAA compliance, federated learning, differential privacy, and secure multi-party computation for patient data protection."
        },
        {
          subtitle: "FDA & Regulatory Approval",
          description: "Navigating SaMD (Software as Medical Device) regulations, clinical validation requirements, and post-market surveillance."
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
              Health AI
            </h1>
            <div className="w-24 h-px bg-black/20 mb-8"></div>
            <p className="text-xl font-light text-black/60 max-w-3xl">
              Artificial intelligence transforming healthcare—from diagnostic precision to personalized treatment and operational excellence.
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
                    <div key={itemIndex} className="group">
                      <h3 className="text-xl font-light mb-3 group-hover:text-black/70 transition-colors duration-300">
                        {item.subtitle}
                      </h3>
                      <p className="text-base font-light text-black/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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

export default HealthAI;
