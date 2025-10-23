import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ViewToggle from '@/components/ViewToggle';
import KnowledgeGraph3D from '@/components/KnowledgeGraph3D';
import { digitalDevicesGraphData } from '@/data/graphs/digitalDevicesGraph';

const DigitalDevices = () => {
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
    // 1) Physiological Sensors & Biosignals
    {
      title: "Physiological Sensors & Biosignals",
      content: [
        {
          subtitle: "Core Biosignals (ECG, PPG, EMG, EEG, EDA, BCG/SCG)",
          description: "The fundamental biological signals we can measure—electrical activity from your heart (ECG), optical blood flow (PPG), muscle signals (EMG), brain waves (EEG), skin conductance for stress, and heart vibrations. Covers signal physics, electrode/optical interfaces, sampling, anti-aliasing, and sensor-specific artifacts in real-world conditions."
        },
        {
          subtitle: "Vital Sign Estimation",
          description: "Measuring the basics of life—heart rate, breathing rate, blood oxygen levels, blood pressure approximations, and body temperature—calibrated and personalized for accuracy. Includes heart rate, HRV, respiration, SpO₂, blood pressure proxies, and temperature inference with calibration and personalization."
        },
        {
          subtitle: "Artifact Rejection & Denoising",
          description: "Cleaning up noisy sensor data—filtering out motion, light interference, muscle tension, and other artifacts to get clean, reliable signals from messy real-world measurements. Uses motion, ambient light, baseline wander, muscle noise; adaptive filtering, ICA, wavelets, and robust feature extraction."
        }
      ]
    },

    // 2) Wearables & Health Sensing
    {
      title: "Wearables & Health Sensing",
      content: [
        {
          subtitle: "Device Modalities",
          description: "The different places you can wear health sensors—wrist (smartwatch), finger (ring), chest (patch), ear (hearable), or even embedded in clothing—each with different accuracy and comfort tradeoffs. Covers wrist, ring, chest, ear, patch, textile; optical vs electrical trade-offs, mechanical design, skin contact quality."
        },
        {
          subtitle: "Digital Biomarkers",
          description: "Clinically meaningful health metrics from wearables—measures of sleep quality, activity intensity, and cardiovascular risk that have been validated against medical-grade equipment. Clinically anchored features for sleep, activity, cardiometabolic risk; validation against gold standards."
        },
        {
          subtitle: "Power & Battery Life",
          description: "Making wearables last between charges—smart sensor scheduling, low-power processors, energy harvesting from body heat or motion, all while managing the heat they generate. Duty cycling, sensor scheduling, low-power DSP/NN accelerators, energy harvesting, and thermal constraints."
        }
      ]
    },

    // 3) Biomechanics & Motion AI
    {
      title: "Biomechanics & Motion AI",
      content: [
        {
          subtitle: "IMU Kinematics & Gait",
          description: "Using motion sensors to understand how you walk—detecting steps, measuring stride length and timing, assessing gait quality, and predicting fall risk from movement patterns. Orientation estimation, drift handling, step detection, spatiotemporal gait metrics, and fall risk analytics."
        },
        {
          subtitle: "Pose Estimation & Human Performance",
          description: "Tracking body position and movement—using cameras or sensors to analyze exercise form, measure athletic performance, track rehabilitation progress, and understand human movement. 2D/3D pose, joint kinematics/kinetics, activity recognition, rehabilitation metrics, and sports performance."
        },
        {
          subtitle: "Musculoskeletal Modeling",
          description: "Simulating the forces in your joints and muscles—combining sensor data with biomechanical models to estimate joint loading, useful for injury prevention and ergonomics. Inverse dynamics, joint loading estimation, OpenSim-style workflows, and validation with force plates/EMG."
        }
      ]
    },

    // 4) Medical Imaging Devices & Systems
    {
      title: "Medical Imaging Devices & Systems",
      content: [
        {
          subtitle: "Acquisition Physics (X-ray/CT, MRI, Ultrasound, PET)",
          description: "The science behind medical imaging—how X-rays, CT, MRI, ultrasound, and PET scanners work at the physics level, trading off between image quality, radiation dose, and scan time. Dose/SNR trade-offs, beamforming, k-space, attenuation and emission models; hardware and protocol design."
        },
        {
          subtitle: "Reconstruction & Enhancement",
          description: "Turning raw scanner data into clear images—using AI and signal processing to reconstruct images faster, enhance quality, reduce artifacts, and recover more detail. Compressed sensing, unrolled networks, super-resolution, artifact correction, and image quality metrics."
        },
        {
          subtitle: "Enterprise Imaging Integration",
          description: "The IT systems that store and move medical images—DICOM standards, picture archiving systems (PACS), routing images to the right specialists, and connecting AI into the workflow. DICOM, PACS/VNA, routing and de-identification, study lifecycle, and edge inference insertion points."
        }
      ]
    },

    // 5) Edge AI & Embedded Health Systems
    {
      title: "Edge AI & Embedded Health Systems",
      content: [
        {
          subtitle: "NPUs & On-Device Inference",
          description: "Specialized AI chips for medical devices—neural processing units and tensor cores that run AI models locally on the device with minimal power consumption. ARM/DSP/NPUs, Tensor cores, memory bandwidth limits; execution graphs and real-time scheduling."
        },
        {
          subtitle: "Model Optimization",
          description: "Making AI models small and fast enough to run on devices—compressing models through quantization, pruning, and distillation while maintaining accuracy. Quantization, pruning, distillation, operator fusion; latency–accuracy–power trade-off analysis."
        },
        {
          subtitle: "Firmware & RTOS",
          description: "The low-level software that runs on medical devices—real-time operating systems, device drivers, secure boot, and over-the-air update mechanisms. Drivers, ISR design, secure boot, OTA updates, and deterministic execution under medical constraints."
        }
      ]
    },

    // 6) Sensor Fusion & Estimation
    {
      title: "Sensor Fusion & Estimation",
      content: [
        {
          subtitle: "Probabilistic Filters",
          description: "Mathematical frameworks for combining sensor data—Kalman filters and particle filters that optimally merge noisy measurements to estimate true states. Kalman, EKF/UKF, particle filters; observability, noise modeling, and cross-sensor synchronization."
        },
        {
          subtitle: "Multimodal Health Fusion",
          description: "Combining different types of sensors—merging camera images with motion sensors and biosignals, learning how to weight each source based on reliability and context. Vision + IMU + biosignals + context; late/early fusion, learned filters, and uncertainty propagation."
        },
        {
          subtitle: "Time Sync & Clock Drift",
          description: "Keeping sensors synchronized—aligning timestamps across multiple devices and compensating for clock drift so data from different sources lines up correctly. PTP/NTP, BLE timebases, jitter compensation, and alignment with clinical ground truth systems."
        }
      ]
    },

    // 7) Real-Time Health AI Runtimes
    {
      title: "Real-Time Health AI Runtimes",
      content: [
        {
          subtitle: "Holoscan Surgical Pipelines",
          description: "Real-time AI platforms for surgery—combining video streams, ultrasound, tool tracking, and augmented reality overlays with low enough latency for live surgical guidance. Low-latency graph execution for video/US fusion, tool tracking, AR overlays, and safety fallbacks."
        },
        {
          subtitle: "Triton & Ensemble Serving",
          description: "High-performance AI model serving—running multiple models together, batching requests efficiently, and monitoring performance in clinical settings. Multi-model ensembles, dynamic batching, telemetry, and throughput tuning on edge and in-clinic servers."
        },
        {
          subtitle: "Streaming & QoS",
          description: "Managing real-time data streams—ensuring video and sensor data flows smoothly with controlled latency, handling network hiccups gracefully. gRPC/WebRTC pipelines, rate control, backpressure, and end-to-end latency budgeting."
        }
      ]
    },

    // 8) Device Validation & Clinical Studies
    {
      title: "Device Validation & Clinical Studies",
      content: [
        {
          subtitle: "Feasibility & Repeatability (Apple-style)",
          description: "Testing if devices work consistently—running studies with proper ethical approval, measuring test-retest reliability, and assessing how results vary across devices and users. Study setup, IRB, cohort selection; Gage R&R, test–retest, inter/intra-device variability characterization."
        },
        {
          subtitle: "Clinical Ground Truth & Protocols",
          description: "Establishing what the right answer is—using gold-standard medical equipment as reference, getting expert annotations, and ensuring high-quality training data. ECG/ABP/polysomnography references, labeling quality, adjudication, and reference device calibration."
        },
        {
          subtitle: "Performance Reporting",
          description: "Showing how accurate devices are—Bland-Altman plots, agreement statistics, calibration curves, and clear criteria for whether performance is acceptable. Agreement plots, Bland–Altman, calibration, reliability diagrams, and predefined acceptance criteria."
        }
      ]
    },

    // 9) Regulated Medical Device Engineering
    {
      title: "Regulated Medical Device Engineering",
      content: [
        {
          subtitle: "Standards & Quality Systems",
          description: "Following the rules for medical device development—IEC and ISO standards for software, quality systems, design controls, risk management, and documentation traceability. IEC 62304, ISO 13485, ISO 14971, IEC 60601; design controls, risk management, traceability."
        },
        {
          subtitle: "SaMD & AI Lifecycle",
          description: "Managing software as a medical device—deciding between locked and learning models, handling algorithm changes, monitoring performance after deployment. Locked vs learning systems, change protocols, post-market surveillance, and incident response."
        },
        {
          subtitle: "Cybersecurity & Privacy",
          description: "Keeping medical devices secure—threat modeling, encryption, secure hardware, protecting patient data, and meeting HIPAA privacy requirements. Threat modeling, HSM/TPM, secure elements, encryption at rest/in flight, PHI handling and HIPAA."
        }
      ]
    },

    // 10) Neurotechnology & Implants
    {
      title: "Neurotechnology & Implants",
      content: [
        {
          subtitle: "Brain–Computer Interfaces",
          description: "Reading brain signals to control devices—from non-invasive EEG headsets to surgically implanted electrode arrays, decoding intended movements or thoughts. EEG/MEG/fNIRS vs invasive arrays, decoding/encoding pipelines, and closed-loop control."
        },
        {
          subtitle: "Neuromodulation Devices",
          description: "Electrically stimulating the nervous system—deep brain stimulators for Parkinson's, vagus nerve stimulation for epilepsy, and other therapeutic electrical interventions. DBS/VNS/TMS signal design, parameter tuning, safety envelopes, and therapy personalization."
        },
        {
          subtitle: "Implantable Systems",
          description: "Devices that live inside the body long-term—solving challenges of wireless power and data, biocompatibility, hermetic sealing, and decade-long reliability. Power/data links, biocompatibility, hermetic sealing, telemetry, and long-term reliability."
        }
      ]
    },

    // 11) Connectivity, Security & Fleet Ops
    {
      title: "Connectivity, Security & Fleet Ops",
      content: [
        {
          subtitle: "IoT Connectivity",
          description: "Wireless technologies for health devices—Bluetooth Low Energy, Wi-Fi, cellular, and specialized protocols, handling pairing, roaming, and bandwidth management. BLE, Wi-Fi, LTE/5G, LoRaWAN; provisioning, pairing security, roaming, and throughput management."
        },
        {
          subtitle: "Fleet Management & Telemetry",
          description: "Managing thousands of deployed devices—over-the-air updates, remote configuration, monitoring device health, and collecting usage analytics while preserving privacy. OTA updates, remote config, device health, and privacy-preserving analytics at scale."
        },
        {
          subtitle: "Interoperability",
          description: "Connecting devices to health IT systems—gateways to hospital HL7/FHIR systems, companion smartphone apps, cloud data ingestion, and clinical workflow integration. HL7/FHIR gateways, companion apps, cloud ingestion, and integration with clinical systems."
        }
      ]
    },

    // 12) Accelerated Healthcare Compute
    {
      title: "Accelerated Healthcare Compute",
      content: [
        {
          subtitle: "MONAI for Imaging AI",
          description: "NVIDIA's framework for medical imaging AI—pre-built pipelines, data transforms, labeling tools, and model libraries specifically designed for clinical imaging tasks. Training/evaluation, transform pipelines, label tooling, and model zoo for clinical perception tasks."
        },
        {
          subtitle: "Holoscan on Edge Platforms",
          description: "High-performance AI edge platforms for healthcare—NVIDIA Jetson and IGX systems running real-time AI with safety monitoring and optimized workflows. Jetson/IGX runtimes for real-time perception; graph optimization and safety watchdogs."
        },
        {
          subtitle: "CUDA & TensorRT Optimization",
          description: "Low-level GPU optimization for medical AI—kernel-level acceleration, mixed-precision inference, layer fusion, and throughput benchmarking for clinical deployment. Kernel-level acceleration, INT8/FP16 quantization, layer fusion, and deployment benchmarking."
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
              Digital Devices
            </h1>
            <div className="w-24 h-px bg-black/20 mb-8"></div>
            <p className="text-xl font-light text-black/60 max-w-3xl mb-8">
              Hardware and software systems powering health sensing, medical imaging, and real-time edge AI—from biosignals and biomechanics to regulated device engineering.
            </p>
            
            <ViewToggle view={view} onViewChange={setView} />
          </div>

          {view === 'graph' ? (
            <div className="w-full" style={{ height: '800px' }}>
              <KnowledgeGraph3D data={digitalDevicesGraphData} />
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
                      to={`/resources/digital-devices/${section.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/${item.subtitle.toLowerCase().replace(/\s+/g, '-').replace(/[(),]/g, '').replace(/&/g, 'and').replace(/\//g, '-')}`}
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

export default DigitalDevices;
