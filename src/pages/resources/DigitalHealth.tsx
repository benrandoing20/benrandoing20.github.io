import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const DigitalHealth = () => {
  const sections = [
    {
      title: "Medical Imaging & Diagnostics",
      content: [
        {
          subtitle: "Diagnostic Radiology AI",
          description: "Deep learning models for X-ray, CT, and MRI analysis. Achieving radiologist-level performance in detecting cancers, fractures, and abnormalities."
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
          subtitle: "Risk Prediction Models",
          description: "Predicting patient deterioration, readmission risk, and adverse events using electronic health records and real-time monitoring."
        }
      ]
    },
    {
      title: "Personalized Medicine",
      content: [
        {
          subtitle: "Genomic Analysis",
          description: "AI-powered interpretation of whole genome sequencing, variant calling, and prediction of disease susceptibility and drug responses."
        },
        {
          subtitle: "Precision Oncology",
          description: "Tumor genomic profiling, targeted therapy selection, and immunotherapy response prediction using multi-omic data integration."
        },
        {
          subtitle: "Pharmacogenomics",
          description: "Using patient genetics and biomarkers to predict optimal drug selection, dosing, and potential adverse reactions."
        }
      ]
    },
    {
      title: "Remote Patient Monitoring",
      content: [
        {
          subtitle: "Wearable Health Devices",
          description: "Continuous monitoring with smartwatches, biosensors, and medical-grade wearables. Detecting arrhythmias, sleep apnea, and chronic disease markers."
        },
        {
          subtitle: "Vital Signs Analysis",
          description: "AI algorithms for heart rate variability, oxygen saturation, blood pressure trends, and early warning score systems."
        },
        {
          subtitle: "Digital Therapeutics",
          description: "App-based interventions for mental health, chronic disease management, and behavioral modification with clinical validation."
        }
      ]
    },
    {
      title: "Healthcare Operations AI",
      content: [
        {
          subtitle: "Hospital Resource Optimization",
          description: "Predicting bed capacity, optimizing surgical scheduling, and improving emergency department flow using operations research and ML."
        },
        {
          subtitle: "Staff Scheduling & Workflow",
          description: "AI-driven workforce management balancing patient demand, staff preferences, and regulatory requirements for optimal care delivery."
        },
        {
          subtitle: "Supply Chain Intelligence",
          description: "Predicting medical supply needs, reducing waste, and optimizing inventory using demand forecasting and predictive analytics."
        }
      ]
    },
    {
      title: "Ethics & Regulatory Compliance",
      content: [
        {
          subtitle: "Algorithmic Bias & Fairness",
          description: "Addressing bias in healthcare AI systems. Ensuring equitable outcomes across demographics and preventing discriminatory practices."
        },
        {
          subtitle: "Privacy & Data Security",
          description: "HIPAA compliance, federated learning, differential privacy, and secure multi-party computation for patient data protection."
        },
        {
          subtitle: "FDA & Medical Device Regulation",
          description: "Navigating SaMD (Software as Medical Device) regulations, clinical validation requirements, and post-market surveillance protocols."
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
              Digital Health Concepts
            </h1>
            <div className="w-24 h-px bg-black/20 mb-8"></div>
            <p className="text-xl font-light text-black/60 max-w-3xl">
              The intersection of artificial intelligence and healthcare—transforming diagnostics, treatment, and patient care through digital innovation.
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

export default DigitalHealth;
