import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const DigitalDevices = () => {
  const sections = [
    // 1) Physiological Sensors & Biosignals
    {
      title: "Physiological Sensors & Biosignals",
      content: [
        {
          subtitle: "Core Biosignals (ECG, PPG, EMG, EEG, EDA, BCG/SCG)",
          description: "Signal physics, electrode/optical interfaces, sampling, anti-aliasing, and sensor-specific artifacts in real-world conditions."
        },
        {
          subtitle: "Vital Sign Estimation",
          description: "Heart rate, HRV, respiration, SpO₂, blood pressure proxies, and temperature inference with calibration and personalization."
        },
        {
          subtitle: "Artifact Rejection & Denoising",
          description: "Motion, ambient light, baseline wander, muscle noise; adaptive filtering, ICA, wavelets, and robust feature extraction."
        }
      ]
    },

    // 2) Wearables & Health Sensing
    {
      title: "Wearables & Health Sensing",
      content: [
        {
          subtitle: "Device Modalities",
          description: "Wrist, ring, chest, ear, patch, textile; optical vs electrical trade-offs, mechanical design, skin contact quality."
        },
        {
          subtitle: "Digital Biomarkers",
          description: "Clinically anchored features for sleep, activity, cardiometabolic risk; validation against gold standards."
        },
        {
          subtitle: "Power & Battery Life",
          description: "Duty cycling, sensor scheduling, low-power DSP/NN accelerators, energy harvesting, and thermal constraints."
        }
      ]
    },

    // 3) Biomechanics & Motion AI
    {
      title: "Biomechanics & Motion AI",
      content: [
        {
          subtitle: "IMU Kinematics & Gait",
          description: "Orientation estimation, drift handling, step detection, spatiotemporal gait metrics, and fall risk analytics."
        },
        {
          subtitle: "Pose Estimation & Human Performance",
          description: "2D/3D pose, joint kinematics/kinetics, activity recognition, rehabilitation metrics, and sports performance."
        },
        {
          subtitle: "Musculoskeletal Modeling",
          description: "Inverse dynamics, joint loading estimation, OpenSim-style workflows, and validation with force plates/EMG."
        }
      ]
    },

    // 4) Medical Imaging Devices & Systems
    {
      title: "Medical Imaging Devices & Systems",
      content: [
        {
          subtitle: "Acquisition Physics (X-ray/CT, MRI, Ultrasound, PET)",
          description: "Dose/SNR trade-offs, beamforming, k-space, attenuation and emission models; hardware and protocol design."
        },
        {
          subtitle: "Reconstruction & Enhancement",
          description: "Compressed sensing, unrolled networks, super-resolution, artifact correction, and image quality metrics."
        },
        {
          subtitle: "Enterprise Imaging Integration",
          description: "DICOM, PACS/VNA, routing and de-identification, study lifecycle, and edge inference insertion points."
        }
      ]
    },

    // 5) Edge AI & Embedded Health Systems
    {
      title: "Edge AI & Embedded Health Systems",
      content: [
        {
          subtitle: "NPUs & On-Device Inference",
          description: "ARM/DSP/NPUs, Tensor cores, memory bandwidth limits; execution graphs and real-time scheduling."
        },
        {
          subtitle: "Model Optimization",
          description: "Quantization, pruning, distillation, operator fusion; latency–accuracy–power trade-off analysis."
        },
        {
          subtitle: "Firmware & RTOS",
          description: "Drivers, ISR design, secure boot, OTA updates, and deterministic execution under medical constraints."
        }
      ]
    },

    // 6) Sensor Fusion & Estimation
    {
      title: "Sensor Fusion & Estimation",
      content: [
        {
          subtitle: "Probabilistic Filters",
          description: "Kalman, EKF/UKF, particle filters; observability, noise modeling, and cross-sensor synchronization."
        },
        {
          subtitle: "Multimodal Health Fusion",
          description: "Vision + IMU + biosignals + context; late/early fusion, learned filters, and uncertainty propagation."
        },
        {
          subtitle: "Time Sync & Clock Drift",
          description: "PTP/NTP, BLE timebases, jitter compensation, and alignment with clinical ground truth systems."
        }
      ]
    },

    // 7) Real-Time Health AI Runtimes
    {
      title: "Real-Time Health AI Runtimes",
      content: [
        {
          subtitle: "Holoscan Surgical Pipelines",
          description: "Low-latency graph execution for video/US fusion, tool tracking, AR overlays, and safety fallbacks."
        },
        {
          subtitle: "Triton & Ensemble Serving",
          description: "Multi-model ensembles, dynamic batching, telemetry, and throughput tuning on edge and in-clinic servers."
        },
        {
          subtitle: "Streaming & QoS",
          description: "gRPC/WebRTC pipelines, rate control, backpressure, and end-to-end latency budgeting."
        }
      ]
    },

    // 8) Device Validation & Clinical Studies
    {
      title: "Device Validation & Clinical Studies",
      content: [
        {
          subtitle: "Feasibility & Repeatability (Apple-style)",
          description: "Study setup, IRB, cohort selection; Gage R&R, test–retest, inter/intra-device variability characterization."
        },
        {
          subtitle: "Clinical Ground Truth & Protocols",
          description: "ECG/ABP/polysomnography references, labeling quality, adjudication, and reference device calibration."
        },
        {
          subtitle: "Performance Reporting",
          description: "Agreement plots, Bland–Altman, calibration, reliability diagrams, and predefined acceptance criteria."
        }
      ]
    },

    // 9) Regulated Medical Device Engineering
    {
      title: "Regulated Medical Device Engineering",
      content: [
        {
          subtitle: "Standards & Quality Systems",
          description: "IEC 62304, ISO 13485, ISO 14971, IEC 60601; design controls, risk management, traceability."
        },
        {
          subtitle: "SaMD & AI Lifecycle",
          description: "Locked vs learning systems, change protocols, post-market surveillance, and incident response."
        },
        {
          subtitle: "Cybersecurity & Privacy",
          description: "Threat modeling, HSM/TPM, secure elements, encryption at rest/in flight, PHI handling and HIPAA."
        }
      ]
    },

    // 10) Neurotechnology & Implants
    {
      title: "Neurotechnology & Implants",
      content: [
        {
          subtitle: "Brain–Computer Interfaces",
          description: "EEG/MEG/fNIRS vs invasive arrays, decoding/encoding pipelines, and closed-loop control."
        },
        {
          subtitle: "Neuromodulation Devices",
          description: "DBS/VNS/TMS signal design, parameter tuning, safety envelopes, and therapy personalization."
        },
        {
          subtitle: "Implantable Systems",
          description: "Power/data links, biocompatibility, hermetic sealing, telemetry, and long-term reliability."
        }
      ]
    },

    // 11) Connectivity, Security & Fleet Ops
    {
      title: "Connectivity, Security & Fleet Ops",
      content: [
        {
          subtitle: "IoT Connectivity",
          description: "BLE, Wi-Fi, LTE/5G, LoRaWAN; provisioning, pairing security, roaming, and throughput management."
        },
        {
          subtitle: "Fleet Management & Telemetry",
          description: "OTA updates, remote config, device health, and privacy-preserving analytics at scale."
        },
        {
          subtitle: "Interoperability",
          description: "HL7/FHIR gateways, companion apps, cloud ingestion, and integration with clinical systems."
        }
      ]
    },

    // 12) Accelerated Healthcare Compute
    {
      title: "Accelerated Healthcare Compute",
      content: [
        {
          subtitle: "MONAI for Imaging AI",
          description: "Training/evaluation, transform pipelines, label tooling, and model zoo for clinical perception tasks."
        },
        {
          subtitle: "Holoscan on Edge Platforms",
          description: "Jetson/IGX runtimes for real-time perception; graph optimization and safety watchdogs."
        },
        {
          subtitle: "CUDA & TensorRT Optimization",
          description: "Kernel-level acceleration, INT8/FP16 quantization, layer fusion, and deployment benchmarking."
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
            <p className="text-xl font-light text-black/60 max-w-3xl">
              Hardware and software systems powering health sensing, medical imaging, and real-time edge AI—from biosignals and biomechanics to regulated device engineering.
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
                      to={`/resources/digital-devices/${section.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}/${item.subtitle.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '').replace(/&/g, 'and').replace(/\//g, '-')}`}
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalDevices;
