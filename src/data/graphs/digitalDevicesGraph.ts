import { GraphData, nodeColors, getNodeSize } from '@/types/graphData';

export const digitalDevicesGraphData: GraphData = {
  nodes: [
    // ================= L0 — Root =================
    {
      id: 'digital-devices',
      name: 'Digital Devices',
      type: 'category',
      layer: 0,
      description: "The hardware and software that makes modern health monitoring possible—from wearable sensors that track your heart to medical imaging machines to the AI chips that analyze it all in real-time.",
      color: nodeColors.category,
      size: getNodeSize(0, 'category'),
    },

    // ================= L1 — Major Domains (mirror list view 1–12) =================
    {
      id: 'physio-sensors-biosignals',
      name: 'Physiological Sensors & Biosignals',
      type: 'category',
      layer: 1,
      description: "The sensors and signals that measure what your body is doing—tracking electrical signals from your heart (ECG), oxygen in your blood (pulse oximetry), muscle activity, brain waves, and more.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'wearables-health-sensing',
      name: 'Wearables & Health Sensing',
      type: 'category',
      layer: 1,
      description: "Devices you wear that continuously monitor your health—smartwatches, rings, patches, and other form factors that track sleep, activity, heart health, and other biomarkers throughout your day.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'biomechanics-motion-ai',
      name: 'Biomechanics & Motion AI',
      type: 'category',
      layer: 1,
      description: "Understanding how your body moves—using sensors to track gait, posture, and joint mechanics for applications in sports performance, rehabilitation, and fall prevention.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'medical-imaging-systems',
      name: 'Medical Imaging Devices & Systems',
      type: 'category',
      layer: 1,
      description: "The sophisticated machines and software that let doctors see inside the body—X-rays, CT scanners, MRIs, and ultrasound systems, plus the AI that enhances and analyzes these images.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'edge-ai-embedded',
      name: 'Edge AI & Embedded Health Systems',
      type: 'category',
      layer: 1,
      description: "Running AI directly on medical devices instead of the cloud—from smart sensors that analyze data on-chip to surgical robots with real-time computer vision, all while meeting strict power and latency requirements.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'sensor-fusion-estimation',
      name: 'Sensor Fusion & Estimation',
      type: 'category',
      layer: 1,
      description: "Combining data from multiple sensors to get more accurate measurements—like using both an accelerometer and gyroscope together, or fusing heart rate data with motion to filter out artifacts.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'realtime-health-ai-runtimes',
      name: 'Real-Time Health AI Runtimes',
      type: 'category',
      layer: 1,
      description: "The software infrastructure that runs AI models in time-critical medical situations—like surgical guidance systems that need to respond in milliseconds, not seconds.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'device-validation-clinical-studies',
      name: 'Device Validation & Clinical Studies',
      type: 'category',
      layer: 1,
      description: "Proving that medical devices actually work through rigorous clinical testing—designing studies, comparing to gold-standard equipment, and measuring accuracy and reliability.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'regulated-medical-device-eng',
      name: 'Regulated Medical Device Engineering',
      type: 'category',
      layer: 1,
      description: "Building medical devices that meet strict safety regulations—following FDA rules, international standards, managing risks, and maintaining quality systems throughout the product lifecycle.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'neurotechnology-implants',
      name: 'Neurotechnology & Implants',
      type: 'category',
      layer: 1,
      description: "Devices that interface directly with the nervous system—brain-computer interfaces that let paralyzed patients control computers, deep brain stimulators for Parkinson's, and other implanted systems.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'connectivity-security-fleet-ops',
      name: 'Connectivity, Security & Fleet Ops',
      type: 'category',
      layer: 1,
      description: "Keeping medical devices connected, secure, and manageable at scale—wireless connectivity, over-the-air updates, fleet monitoring, and integration with hospital systems.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },
    {
      id: 'accelerated-healthcare-compute',
      name: 'Accelerated Healthcare Compute',
      type: 'category',
      layer: 1,
      description: "NVIDIA's specialized tools for medical AI—GPU-accelerated platforms for training models on medical images, running real-time inference on surgical video, and deploying AI in hospitals.",
      color: nodeColors.category,
      size: getNodeSize(1, 'category'),
    },

    // ================= L2 — Subdomains (mirror each list section’s subtitles) =================

    // (1) Physiological Sensors & Biosignals
    {
      id: 'core-biosignals',
      name: 'Core Biosignals (ECG, PPG, EMG, EEG, EDA, BCG/SCG)',
      type: 'category',
      layer: 2,
      description: "The fundamental biological signals we can measure—electrical activity from your heart (ECG), optical blood flow (PPG), muscle signals (EMG), brain waves (EEG), skin conductance for stress, and heart vibrations.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'vital-sign-estimation',
      name: 'Vital Sign Estimation',
      type: 'category',
      layer: 2,
      description: "Measuring the basics of life—heart rate, breathing rate, blood oxygen levels, blood pressure approximations, and body temperature—calibrated and personalized for accuracy.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'artifact-rejection-denoising',
      name: 'Artifact Rejection & Denoising',
      type: 'category',
      layer: 2,
      description: "Cleaning up noisy sensor data—filtering out motion, light interference, muscle tension, and other artifacts to get clean, reliable signals from messy real-world measurements.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // (2) Wearables & Health Sensing
    {
      id: 'device-modalities',
      name: 'Device Modalities',
      type: 'category',
      layer: 2,
      description: "The different places you can wear health sensors—wrist (smartwatch), finger (ring), chest (patch), ear (hearable), or even embedded in clothing—each with different accuracy and comfort tradeoffs.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'digital-biomarkers',
      name: 'Digital Biomarkers',
      type: 'category',
      layer: 2,
      description: "Clinically meaningful health metrics from wearables—measures of sleep quality, activity intensity, and cardiovascular risk that have been validated against medical-grade equipment.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'power-battery-life',
      name: 'Power & Battery Life',
      type: 'category',
      layer: 2,
      description: "Making wearables last between charges—smart sensor scheduling, low-power processors, energy harvesting from body heat or motion, all while managing the heat they generate.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // (3) Biomechanics & Motion AI
    {
      id: 'imu-kinematics-gait',
      name: 'IMU Kinematics & Gait',
      type: 'category',
      layer: 2,
      description: "Using motion sensors to understand how you walk—detecting steps, measuring stride length and timing, assessing gait quality, and predicting fall risk from movement patterns.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'pose-performance',
      name: 'Pose Estimation & Human Performance',
      type: 'category',
      layer: 2,
      description: "Tracking body position and movement—using cameras or sensors to analyze exercise form, measure athletic performance, track rehabilitation progress, and understand human movement.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'musculoskeletal-modeling',
      name: 'Musculoskeletal Modeling',
      type: 'category',
      layer: 2,
      description: "Simulating the forces in your joints and muscles—combining sensor data with biomechanical models to estimate joint loading, useful for injury prevention and ergonomics.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // (4) Medical Imaging Devices & Systems
    {
      id: 'acquisition-physics',
      name: 'Acquisition Physics (X-ray/CT, MRI, Ultrasound, PET)',
      type: 'category',
      layer: 2,
      description: "The science behind medical imaging—how X-rays, CT, MRI, ultrasound, and PET scanners work at the physics level, trading off between image quality, radiation dose, and scan time.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'recon-enhancement',
      name: 'Reconstruction & Enhancement',
      type: 'category',
      layer: 2,
      description: "Turning raw scanner data into clear images—using AI and signal processing to reconstruct images faster, enhance quality, reduce artifacts, and recover more detail.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'enterprise-imaging',
      name: 'Enterprise Imaging Integration',
      type: 'category',
      layer: 2,
      description: "The IT systems that store and move medical images—DICOM standards, picture archiving systems (PACS), routing images to the right specialists, and connecting AI into the workflow.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // (5) Edge AI & Embedded Health Systems
    {
      id: 'npus-ondevice',
      name: 'NPUs & On-Device Inference',
      type: 'category',
      layer: 2,
      description: "Specialized AI chips for medical devices—neural processing units and tensor cores that run AI models locally on the device with minimal power consumption.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'model-optimization',
      name: 'Model Optimization',
      type: 'category',
      layer: 2,
      description: "Making AI models small and fast enough to run on devices—compressing models through quantization, pruning, and distillation while maintaining accuracy.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'firmware-rtos',
      name: 'Firmware & RTOS',
      type: 'category',
      layer: 2,
      description: "The low-level software that runs on medical devices—real-time operating systems, device drivers, secure boot, and over-the-air update mechanisms.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // (6) Sensor Fusion & Estimation
    {
      id: 'probabilistic-filters',
      name: 'Probabilistic Filters',
      type: 'category',
      layer: 2,
      description: "Mathematical frameworks for combining sensor data—Kalman filters and particle filters that optimally merge noisy measurements to estimate true states.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'multimodal-fusion',
      name: 'Multimodal Health Fusion',
      type: 'category',
      layer: 2,
      description: "Combining different types of sensors—merging camera images with motion sensors and biosignals, learning how to weight each source based on reliability and context.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'time-sync-clock-drift',
      name: 'Time Sync & Clock Drift',
      type: 'category',
      layer: 2,
      description: "Keeping sensors synchronized—aligning timestamps across multiple devices and compensating for clock drift so data from different sources lines up correctly.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // (7) Real-Time Health AI Runtimes
    {
      id: 'holoscan-surgical',
      name: 'Holoscan Surgical Pipelines',
      type: 'category',
      layer: 2,
      description: "Real-time AI platforms for surgery—combining video streams, ultrasound, tool tracking, and augmented reality overlays with low enough latency for live surgical guidance.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'triton-ensemble-serving',
      name: 'Triton & Ensemble Serving',
      type: 'category',
      layer: 2,
      description: "High-performance AI model serving—running multiple models together, batching requests efficiently, and monitoring performance in clinical settings.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'streaming-qos',
      name: 'Streaming & QoS',
      type: 'category',
      layer: 2,
      description: "Managing real-time data streams—ensuring video and sensor data flows smoothly with controlled latency, handling network hiccups gracefully.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // (8) Device Validation & Clinical Studies
    {
      id: 'feasibility-repeatability',
      name: 'Feasibility & Repeatability (Apple-style)',
      type: 'category',
      layer: 2,
      description: "Testing if devices work consistently—running studies with proper ethical approval, measuring test-retest reliability, and assessing how results vary across devices and users.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'clinical-ground-truth',
      name: 'Clinical Ground Truth & Protocols',
      type: 'category',
      layer: 2,
      description: "Establishing what the right answer is—using gold-standard medical equipment as reference, getting expert annotations, and ensuring high-quality training data.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'performance-reporting',
      name: 'Performance Reporting',
      type: 'category',
      layer: 2,
      description: "Showing how accurate devices are—Bland-Altman plots, agreement statistics, calibration curves, and clear criteria for whether performance is acceptable.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // (9) Regulated Medical Device Engineering
    {
      id: 'standards-quality',
      name: 'Standards & Quality Systems',
      type: 'category',
      layer: 2,
      description: "Following the rules for medical device development—IEC and ISO standards for software, quality systems, design controls, risk management, and documentation traceability.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'samd-ai-lifecycle',
      name: 'SaMD & AI Lifecycle',
      type: 'category',
      layer: 2,
      description: "Managing software as a medical device—deciding between locked and learning models, handling algorithm changes, monitoring performance after deployment.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'cybersecurity-privacy',
      name: 'Cybersecurity & Privacy',
      type: 'category',
      layer: 2,
      description: "Keeping medical devices secure—threat modeling, encryption, secure hardware, protecting patient data, and meeting HIPAA privacy requirements.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // (10) Neurotechnology & Implants
    {
      id: 'brain-computer-interfaces',
      name: 'Brain–Computer Interfaces',
      type: 'category',
      layer: 2,
      description: "Reading brain signals to control devices—from non-invasive EEG headsets to surgically implanted electrode arrays, decoding intended movements or thoughts.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'neuromodulation-devices',
      name: 'Neuromodulation Devices',
      type: 'category',
      layer: 2,
      description: "Electrically stimulating the nervous system—deep brain stimulators for Parkinson's, vagus nerve stimulation for epilepsy, and other therapeutic electrical interventions.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'implantable-systems',
      name: 'Implantable Systems',
      type: 'category',
      layer: 2,
      description: "Devices that live inside the body long-term—solving challenges of wireless power and data, biocompatibility, hermetic sealing, and decade-long reliability.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // (11) Connectivity, Security & Fleet Ops
    {
      id: 'iot-connectivity',
      name: 'IoT Connectivity',
      type: 'category',
      layer: 2,
      description: "Wireless technologies for health devices—Bluetooth Low Energy, Wi-Fi, cellular, and specialized protocols, handling pairing, roaming, and bandwidth management.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'fleet-management-telemetry',
      name: 'Fleet Management & Telemetry',
      type: 'category',
      layer: 2,
      description: "Managing thousands of deployed devices—over-the-air updates, remote configuration, monitoring device health, and collecting usage analytics while preserving privacy.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'interoperability',
      name: 'Interoperability',
      type: 'category',
      layer: 2,
      description: "Connecting devices to health IT systems—gateways to hospital HL7/FHIR systems, companion smartphone apps, cloud data ingestion, and clinical workflow integration.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // (12) Accelerated Healthcare Compute
    {
      id: 'monai-imaging-ai',
      name: 'MONAI for Imaging AI',
      type: 'category',
      layer: 2,
      description: "NVIDIA's framework for medical imaging AI—pre-built pipelines, data transforms, labeling tools, and model libraries specifically designed for clinical imaging tasks.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'holoscan-edge-platforms',
      name: 'Holoscan on Edge Platforms',
      type: 'category',
      layer: 2,
      description: "High-performance AI edge platforms for healthcare—NVIDIA Jetson and IGX systems running real-time AI with safety monitoring and optimized workflows.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },
    {
      id: 'cuda-tensorrt',
      name: 'CUDA & TensorRT Optimization',
      type: 'category',
      layer: 2,
      description: "Low-level GPU optimization for medical AI—kernel-level acceleration, mixed-precision inference, layer fusion, and throughput benchmarking for clinical deployment.",
      color: nodeColors.category,
      size: getNodeSize(2, 'category'),
    },

    // ================= L3 — Concepts (selected, high-signal) =================
    // Biosignals & Vital Signs
    { id: 'ecg', name: 'ECG', type: 'concept', layer: 3, description: 'Electrocardiography acquisition & features.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'ppg', name: 'PPG', type: 'concept', layer: 3, description: 'Optical photoplethysmography & motion artifacts.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'eeg', name: 'EEG', type: 'concept', layer: 3, description: 'Electroencephalography & source localization.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'emg', name: 'EMG', type: 'concept', layer: 3, description: 'Electromyography & activation timing.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'eda', name: 'EDA', type: 'concept', layer: 3, description: 'Electrodermal activity for arousal/stress.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'bcg', name: 'BCG/SCG', type: 'concept', layer: 3, description: 'Cardio-mechanical signals & denoising.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'hrv', name: 'HRV', type: 'concept', layer: 3, description: 'Time/frequency/nonlinear metrics.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'bp-proxies', name: 'BP Proxies', type: 'concept', layer: 3, description: 'Pulse transit time & learning-based mapping.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Wearables
    { id: 'wrist', name: 'Wrist', type: 'concept', layer: 3, description: 'Smartwatch ergonomics & optics.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'ring', name: 'Ring', type: 'concept', layer: 3, description: 'Thermal stability & PPG geometry.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'patch', name: 'Patch', type: 'concept', layer: 3, description: 'Adhesion, skin impedance, comfort.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'sleep-biomarkers', name: 'Sleep Biomarkers', type: 'concept', layer: 3, description: 'Sleep staging & fragmentation indices.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'activity-biomarkers', name: 'Activity Biomarkers', type: 'concept', layer: 3, description: 'METs, step cadence, gait variability.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'duty-cycling', name: 'Duty Cycling', type: 'concept', layer: 3, description: 'Sensor/compute scheduling for battery.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'energy-harvesting', name: 'Energy Harvesting', type: 'concept', layer: 3, description: 'Thermal/kinetic/solar scavenging.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Biomechanics
    { id: 'orientation', name: 'Orientation Estimation', type: 'concept', layer: 3, description: 'Quaternions, drift & zero-velocity updates.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'gait-metrics', name: 'Gait Metrics', type: 'concept', layer: 3, description: 'Spatiotemporal features & risk.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'pose-2d-3d', name: '2D/3D Pose', type: 'concept', layer: 3, description: 'Keypoints, kinematics/kinetics from vision.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'inverse-dynamics', name: 'Inverse Dynamics', type: 'concept', layer: 3, description: 'Joint torques & loading.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Imaging
    { id: 'ct-mri', name: 'CT/MRI', type: 'concept', layer: 3, description: 'Tomographic physics & protocols.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'ultrasound', name: 'Ultrasound', type: 'concept', layer: 3, description: 'Beamforming & speckle handling.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'compressed-sensing', name: 'Compressed Sensing', type: 'concept', layer: 3, description: 'Sparse recon & acceleration.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'super-res', name: 'Super-Resolution', type: 'concept', layer: 3, description: 'Detail recovery & de-noise.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'dicom', name: 'DICOM', type: 'concept', layer: 3, description: 'Metadata, transfer syntaxes & privacy.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'pacs-vna', name: 'PACS/VNA', type: 'concept', layer: 3, description: 'Archive/routing & study lifecycle.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Edge AI / Embedded
    { id: 'arm-ethos', name: 'ARM Ethos NPUs', type: 'concept', layer: 3, description: 'On-device accelerators.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'tensor-cores', name: 'Tensor Cores', type: 'concept', layer: 3, description: 'Matrix acceleration for inference.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'quantization', name: 'Quantization', type: 'concept', layer: 3, description: 'INT8/FP16 & accuracy trade-offs.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'pruning', name: 'Pruning', type: 'concept', layer: 3, description: 'Sparsity & compression.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'rtos', name: 'RTOS', type: 'concept', layer: 3, description: 'Deterministic scheduling & ISR.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'ota', name: 'OTA Updates', type: 'concept', layer: 3, description: 'Secure, staged rollouts.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Fusion
    { id: 'kf', name: 'Kalman Filter', type: 'concept', layer: 3, description: 'Linear Gaussian state estimation.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'pf', name: 'Particle Filter', type: 'concept', layer: 3, description: 'Nonlinear/non-Gaussian tracking.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'early-late', name: 'Early/Late Fusion', type: 'concept', layer: 3, description: 'Architectural fusion strategies.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'learned-fusion', name: 'Learned Filters', type: 'concept', layer: 3, description: 'Neural fusion + uncertainty.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Runtimes
    { id: 'holoscan-ops', name: 'Holoscan Operators', type: 'concept', layer: 3, description: 'Zero-copy, schedulers & graphs.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'triton-ensembles', name: 'Triton Ensembles', type: 'concept', layer: 3, description: 'Pipelines & dynamic batching.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'qos', name: 'Quality of Service', type: 'concept', layer: 3, description: 'Latency, jitter, backpressure.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Validation
    { id: 'bland-altman', name: 'Bland–Altman', type: 'concept', layer: 3, description: 'Agreement and bias plots.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'calibration', name: 'Calibration', type: 'concept', layer: 3, description: 'Reliability diagrams & ECE.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Regulated Eng
    { id: 'iec-62304', name: 'IEC 62304', type: 'concept', layer: 3, description: 'Software lifecycle processes.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'iso-13485', name: 'ISO 13485', type: 'concept', layer: 3, description: 'Quality management systems.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'iso-14971', name: 'ISO 14971', type: 'concept', layer: 3, description: 'Risk management for devices.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'iec-60601', name: 'IEC 60601', type: 'concept', layer: 3, description: 'Electrical safety/EMC.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'fda-samd', name: 'FDA SaMD', type: 'concept', layer: 3, description: 'Regulatory pathway & changes.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'hsm-tpm', name: 'HSM/TPM', type: 'concept', layer: 3, description: 'Secure key storage.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'encryption', name: 'Encryption', type: 'concept', layer: 3, description: 'At rest / in flight.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Neurotech
    { id: 'noninvasive-bci', name: 'Noninvasive BCI', type: 'concept', layer: 3, description: 'EEG/MEG/fNIRS decoding.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'invasive-arrays', name: 'Invasive Arrays', type: 'concept', layer: 3, description: 'Utah/soft arrays & stability.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'closed-loop', name: 'Closed-Loop Control', type: 'concept', layer: 3, description: 'Neurofeedback & safety.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Connectivity / Interop
    { id: 'ble', name: 'BLE', type: 'concept', layer: 3, description: 'Profiles, pairing & throughput.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'wifi', name: 'Wi-Fi', type: 'concept', layer: 3, description: 'QoS vs power trade-offs.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'lte-5g', name: 'LTE/5G', type: 'concept', layer: 3, description: 'Backhaul and roaming.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'lora', name: 'LoRaWAN', type: 'concept', layer: 3, description: 'Low-power long-range.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'fhir-gateway', name: 'FHIR Gateways', type: 'concept', layer: 3, description: 'HL7/FHIR integration patterns.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // Accelerated Compute
    { id: 'monai', name: 'MONAI Toolkit', type: 'concept', layer: 3, description: 'Training/eval for imaging AI.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'holoscan', name: 'Holoscan SDK', type: 'concept', layer: 3, description: 'Operator graphs & schedulers.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },
    { id: 'tensorrt', name: 'TensorRT', type: 'concept', layer: 3, description: 'Graph fusion & calibrations.', color: nodeColors.concept, size: getNodeSize(3, 'concept') },

    // ================= L4 — RESOURCES (RED nodes linking to resource pages) =================
    // Physiological Sensors & Biosignals
    { id: 'resource-core-biosignals', name: 'Core Biosignals (ECG, PPG, EMG, EEG, EDA, BCG/SCG)', type: 'resource', layer: 4, description: 'The fundamental biological signals', url: '/resources/digital-devices/physiological-sensors-and-biosignals/core-biosignals-ecg-ppg-emg-eeg-eda-bcg-scg', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-vital-sign', name: 'Vital Sign Estimation', type: 'resource', layer: 4, description: 'Measuring the basics of life', url: '/resources/digital-devices/physiological-sensors-and-biosignals/vital-sign-estimation', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-artifact-rejection', name: 'Artifact Rejection & Denoising', type: 'resource', layer: 4, description: 'Cleaning up noisy sensor data', url: '/resources/digital-devices/physiological-sensors-and-biosignals/artifact-rejection-and-denoising', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Wearables & Health Sensing
    { id: 'resource-device-modalities', name: 'Device Modalities', type: 'resource', layer: 4, description: 'Different places to wear health sensors', url: '/resources/digital-devices/wearables-and-health-sensing/device-modalities', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-digital-biomarkers', name: 'Digital Biomarkers', type: 'resource', layer: 4, description: 'Clinically meaningful health metrics', url: '/resources/digital-devices/wearables-and-health-sensing/digital-biomarkers', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-power-battery', name: 'Power & Battery Life', type: 'resource', layer: 4, description: 'Making wearables last between charges', url: '/resources/digital-devices/wearables-and-health-sensing/power-and-battery-life', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Biomechanics & Motion AI
    { id: 'resource-imu-gait', name: 'IMU Kinematics & Gait', type: 'resource', layer: 4, description: 'Understanding how you walk', url: '/resources/digital-devices/biomechanics-and-motion-ai/imu-kinematics-and-gait', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-pose-estimation', name: 'Pose Estimation & Human Performance', type: 'resource', layer: 4, description: 'Tracking body position and movement', url: '/resources/digital-devices/biomechanics-and-motion-ai/pose-estimation-and-human-performance', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-musculoskeletal', name: 'Musculoskeletal Modeling', type: 'resource', layer: 4, description: 'Simulating forces in joints and muscles', url: '/resources/digital-devices/biomechanics-and-motion-ai/musculoskeletal-modeling', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Medical Imaging Devices & Systems
    { id: 'resource-acquisition-physics', name: 'Acquisition Physics (X-ray/CT, MRI, Ultrasound, PET)', type: 'resource', layer: 4, description: 'The science behind medical imaging', url: '/resources/digital-devices/medical-imaging-devices-and-systems/acquisition-physics-x-ray-ct-mri-ultrasound-pet', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-reconstruction', name: 'Reconstruction & Enhancement', type: 'resource', layer: 4, description: 'Turning raw scanner data into clear images', url: '/resources/digital-devices/medical-imaging-devices-and-systems/reconstruction-and-enhancement', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-enterprise-imaging', name: 'Enterprise Imaging Integration', type: 'resource', layer: 4, description: 'IT systems that store and move medical images', url: '/resources/digital-devices/medical-imaging-devices-and-systems/enterprise-imaging-integration', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Edge AI & Embedded Health Systems
    { id: 'resource-npus', name: 'NPUs & On-Device Inference', type: 'resource', layer: 4, description: 'Specialized AI chips for medical devices', url: '/resources/digital-devices/edge-ai-and-embedded-health-systems/npus-and-on-device-inference', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-model-opt', name: 'Model Optimization', type: 'resource', layer: 4, description: 'Making AI models small and fast', url: '/resources/digital-devices/edge-ai-and-embedded-health-systems/model-optimization', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-firmware-rtos', name: 'Firmware & RTOS', type: 'resource', layer: 4, description: 'Low-level software for medical devices', url: '/resources/digital-devices/edge-ai-and-embedded-health-systems/firmware-and-rtos', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Sensor Fusion & Estimation
    { id: 'resource-prob-filters', name: 'Probabilistic Filters', type: 'resource', layer: 4, description: 'Mathematical frameworks for combining sensors', url: '/resources/digital-devices/sensor-fusion-and-estimation/probabilistic-filters', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-multimodal-fusion', name: 'Multimodal Health Fusion', type: 'resource', layer: 4, description: 'Combining different types of sensors', url: '/resources/digital-devices/sensor-fusion-and-estimation/multimodal-health-fusion', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-time-sync', name: 'Time Sync & Clock Drift', type: 'resource', layer: 4, description: 'Keeping sensors synchronized', url: '/resources/digital-devices/sensor-fusion-and-estimation/time-sync-and-clock-drift', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Real-Time Health AI Runtimes
    { id: 'resource-holoscan-surgical', name: 'Holoscan Surgical Pipelines', type: 'resource', layer: 4, description: 'Real-time AI platforms for surgery', url: '/resources/digital-devices/real-time-health-ai-runtimes/holoscan-surgical-pipelines', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-triton', name: 'Triton & Ensemble Serving', type: 'resource', layer: 4, description: 'High-performance AI model serving', url: '/resources/digital-devices/real-time-health-ai-runtimes/triton-and-ensemble-serving', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-streaming-qos', name: 'Streaming & QoS', type: 'resource', layer: 4, description: 'Managing real-time data streams', url: '/resources/digital-devices/real-time-health-ai-runtimes/streaming-and-qos', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Device Validation & Clinical Studies
    { id: 'resource-feasibility', name: 'Feasibility & Repeatability (Apple-style)', type: 'resource', layer: 4, description: 'Testing if devices work consistently', url: '/resources/digital-devices/device-validation-and-clinical-studies/feasibility-and-repeatability-apple-style', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-ground-truth', name: 'Clinical Ground Truth & Protocols', type: 'resource', layer: 4, description: 'Establishing what the right answer is', url: '/resources/digital-devices/device-validation-and-clinical-studies/clinical-ground-truth-and-protocols', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-performance-reporting', name: 'Performance Reporting', type: 'resource', layer: 4, description: 'Showing how accurate devices are', url: '/resources/digital-devices/device-validation-and-clinical-studies/performance-reporting', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Regulated Medical Device Engineering
    { id: 'resource-standards-quality', name: 'Standards & Quality Systems', type: 'resource', layer: 4, description: 'Following the rules for medical devices', url: '/resources/digital-devices/regulated-medical-device-engineering/standards-and-quality-systems', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-samd-lifecycle', name: 'SaMD & AI Lifecycle', type: 'resource', layer: 4, description: 'Managing software as a medical device', url: '/resources/digital-devices/regulated-medical-device-engineering/samd-and-ai-lifecycle', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-cybersecurity-privacy', name: 'Cybersecurity & Privacy', type: 'resource', layer: 4, description: 'Keeping medical devices secure', url: '/resources/digital-devices/regulated-medical-device-engineering/cybersecurity-and-privacy', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Neurotechnology & Implants
    { id: 'resource-bcis', name: 'Brain–Computer Interfaces', type: 'resource', layer: 4, description: 'Reading brain signals to control devices', url: '/resources/digital-devices/neurotechnology-and-implants/brain-computer-interfaces', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-neuromodulation', name: 'Neuromodulation Devices', type: 'resource', layer: 4, description: 'Electrically stimulating the nervous system', url: '/resources/digital-devices/neurotechnology-and-implants/neuromodulation-devices', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-implantable-systems', name: 'Implantable Systems', type: 'resource', layer: 4, description: 'Devices that live inside the body long-term', url: '/resources/digital-devices/neurotechnology-and-implants/implantable-systems', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Connectivity, Security & Fleet Ops
    { id: 'resource-iot-connectivity', name: 'IoT Connectivity', type: 'resource', layer: 4, description: 'Wireless technologies for health devices', url: '/resources/digital-devices/connectivity-security-and-fleet-ops/iot-connectivity', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-fleet-mgmt', name: 'Fleet Management & Telemetry', type: 'resource', layer: 4, description: 'Managing thousands of deployed devices', url: '/resources/digital-devices/connectivity-security-and-fleet-ops/fleet-management-and-telemetry', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-interoperability', name: 'Interoperability', type: 'resource', layer: 4, description: 'Connecting devices to health IT systems', url: '/resources/digital-devices/connectivity-security-and-fleet-ops/interoperability', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    
    // Accelerated Healthcare Compute
    { id: 'resource-monai', name: 'MONAI for Imaging AI', type: 'resource', layer: 4, description: 'NVIDIA framework for medical imaging AI', url: '/resources/digital-devices/accelerated-healthcare-compute/monai-for-imaging-ai', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-holoscan-edge', name: 'Holoscan on Edge Platforms', type: 'resource', layer: 4, description: 'High-performance AI edge platforms', url: '/resources/digital-devices/accelerated-healthcare-compute/holoscan-on-edge-platforms', color: nodeColors.resource, size: getNodeSize(4, 'resource') },
    { id: 'resource-cuda-tensorrt', name: 'CUDA & TensorRT Optimization', type: 'resource', layer: 4, description: 'Low-level GPU optimization for medical AI', url: '/resources/digital-devices/accelerated-healthcare-compute/cuda-and-tensorrt-optimization', color: nodeColors.resource, size: getNodeSize(4, 'resource') },

    // ================= L4 — COMPANIES / PLATFORMS =================
    // Consumer wearables
    // { id: 'apple', name: 'Apple (Health)', type: 'company', layer: 4, description: 'Apple Watch & health APIs.', url: 'https://apple.com/health', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'fitbit', name: 'Google Fitbit', type: 'company', layer: 4, description: 'Consumer health trackers.', url: 'https://fitbit.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'oura', name: 'Oura', type: 'company', layer: 4, description: 'Smart ring & sleep.', url: 'https://ouraring.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'whoop', name: 'WHOOP', type: 'company', layer: 4, description: 'Recovery & strain analytics.', url: 'https://www.whoop.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'withings', name: 'Withings', type: 'company', layer: 4, description: 'Connected scales & BP cuffs.', url: 'https://www.withings.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'garmin', name: 'Garmin', type: 'company', layer: 4, description: 'Sports wearables & sensors.', url: 'https://www.garmin.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'polar', name: 'Polar', type: 'company', layer: 4, description: 'Training sensors & HRV.', url: 'https://www.polar.com', color: nodeColors.company, size: getNodeSize(4, 'company') },

    // Regulated sensing (CGM/pulse ox/etc.)
    // { id: 'dexcom', name: 'Dexcom', type: 'company', layer: 4, description: 'Continuous glucose monitoring.', url: 'https://www.dexcom.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'abbott', name: 'Abbott (Libre)', type: 'company', layer: 4, description: 'FreeStyle Libre CGM.', url: 'https://www.freestyle.abbott', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'masimo', name: 'Masimo', type: 'company', layer: 4, description: 'Pulse oximetry & monitors.', url: 'https://www.masimo.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'medtronic', name: 'Medtronic', type: 'company', layer: 4, description: 'Implants & neuromodulation.', url: 'https://www.medtronic.com', color: nodeColors.company, size: getNodeSize(4, 'company') },

    // Imaging OEMs
    // { id: 'philips', name: 'Philips Healthcare', type: 'company', layer: 4, description: 'Imaging systems & monitors.', url: 'https://www.usa.philips.com/healthcare', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'ge-healthcare', name: 'GE HealthCare', type: 'company', layer: 4, description: 'CT/MRI/US platforms.', url: 'https://www.gehealthcare.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'siemens', name: 'Siemens Healthineers', type: 'company', layer: 4, description: 'Imaging & therapy systems.', url: 'https://www.siemens-healthineers.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'canon-medical', name: 'Canon Medical', type: 'company', layer: 4, description: 'CT/MRI/US systems.', url: 'https://global.medical.canon', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'hyperfine', name: 'Hyperfine', type: 'company', layer: 4, description: 'Portable MRI.', url: 'https://hyperfine.io', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'butterfly', name: 'Butterfly Network', type: 'company', layer: 4, description: 'Handheld ultrasound.', url: 'https://www.butterflynetwork.com', color: nodeColors.company, size: getNodeSize(4, 'company') },

    // Neurotech
    // { id: 'neuralink', name: 'Neuralink', type: 'company', layer: 4, description: 'Invasive BCI implants.', url: 'https://neuralink.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'synchron', name: 'Synchron', type: 'company', layer: 4, description: 'Endovascular BCI.', url: 'https://synchron.com', color: nodeColors.company, size: getNodeSize(4, 'company') },

    // Edge/compute/IoT silicon & stacks
    // { id: 'nvidia-holoscan', name: 'NVIDIA Holoscan', type: 'company', layer: 4, description: 'Real-time medical AI runtime.', url: 'https://developer.nvidia.com/holoscan-sdk', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'nvidia-monai', name: 'NVIDIA MONAI', type: 'company', layer: 4, description: 'Imaging AI framework.', url: 'https://monai.io', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'qualcomm', name: 'Qualcomm (Snapdragon)', type: 'company', layer: 4, description: 'Mobile SoCs & AI engines.', url: 'https://www.qualcomm.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'arm', name: 'ARM', type: 'company', layer: 4, description: 'Ethos NPUs & CPU IP.', url: 'https://www.arm.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'ti', name: 'Texas Instruments', type: 'company', layer: 4, description: 'Analog front-ends/ADCs.', url: 'https://www.ti.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'st', name: 'STMicroelectronics', type: 'company', layer: 4, description: 'MCUs & MEMS sensors.', url: 'https://www.st.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'adi', name: 'Analog Devices', type: 'company', layer: 4, description: 'AFE & precision sensors.', url: 'https://www.analog.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'sifive', name: 'SiFive (RISC-V)', type: 'company', layer: 4, description: 'RISC-V cores for edge.', url: 'https://www.sifive.com', color: nodeColors.company, size: getNodeSize(4, 'company') },

    // Connectivity / IoT platforms
    // { id: 'nordic', name: 'Nordic Semiconductor', type: 'company', layer: 4, description: 'BLE SoCs & SDKs.', url: 'https://www.nordicsemi.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'particle', name: 'Particle', type: 'company', layer: 4, description: 'IoT cloud & cellular modules.', url: 'https://www.particle.io', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'blues', name: 'Blues Wireless', type: 'company', layer: 4, description: 'Cellular IoT data pipes.', url: 'https://blues.io', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'murata', name: 'Murata', type: 'company', layer: 4, description: 'Wireless modules & sensors.', url: 'https://www.murata.com', color: nodeColors.company, size: getNodeSize(4, 'company') },

    // Imaging AI vendors (clinical)
    // { id: 'aidoc', name: 'Aidoc', type: 'company', layer: 4, description: 'Acute imaging triage AI.', url: 'https://www.aidoc.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'vizai', name: 'Viz.ai', type: 'company', layer: 4, description: 'Stroke triage AI.', url: 'https://www.viz.ai', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'subtle', name: 'Subtle Medical', type: 'company', layer: 4, description: 'Low-dose/fast MRI enhancement.', url: 'https://subtlemedical.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
    // { id: 'enlitic', name: 'Enlitic', type: 'company', layer: 4, description: 'Imaging workflow AI & DICOM.', url: 'https://www.enlitic.com', color: nodeColors.company, size: getNodeSize(4, 'company') },
  ],

  links: [
    // L0 → L1
    { source: 'digital-devices', target: 'physio-sensors-biosignals', strength: 1 },
    { source: 'digital-devices', target: 'wearables-health-sensing', strength: 1 },
    { source: 'digital-devices', target: 'biomechanics-motion-ai', strength: 1 },
    { source: 'digital-devices', target: 'medical-imaging-systems', strength: 1 },
    { source: 'digital-devices', target: 'edge-ai-embedded', strength: 1 },
    { source: 'digital-devices', target: 'sensor-fusion-estimation', strength: 1 },
    { source: 'digital-devices', target: 'realtime-health-ai-runtimes', strength: 1 },
    { source: 'digital-devices', target: 'device-validation-clinical-studies', strength: 1 },
    { source: 'digital-devices', target: 'regulated-medical-device-eng', strength: 1 },
    { source: 'digital-devices', target: 'neurotechnology-implants', strength: 1 },
    { source: 'digital-devices', target: 'connectivity-security-fleet-ops', strength: 1 },
    { source: 'digital-devices', target: 'accelerated-healthcare-compute', strength: 1 },

    // L1 → L2 (mirror list)

    // (1) Physio Sensors & Biosignals
    { source: 'physio-sensors-biosignals', target: 'core-biosignals', strength: 1 },
    { source: 'physio-sensors-biosignals', target: 'vital-sign-estimation', strength: 1 },
    { source: 'physio-sensors-biosignals', target: 'artifact-rejection-denoising', strength: 1 },

    // (2) Wearables
    { source: 'wearables-health-sensing', target: 'device-modalities', strength: 1 },
    { source: 'wearables-health-sensing', target: 'digital-biomarkers', strength: 1 },
    { source: 'wearables-health-sensing', target: 'power-battery-life', strength: 1 },

    // (3) Biomechanics
    { source: 'biomechanics-motion-ai', target: 'imu-kinematics-gait', strength: 1 },
    { source: 'biomechanics-motion-ai', target: 'pose-performance', strength: 1 },
    { source: 'biomechanics-motion-ai', target: 'musculoskeletal-modeling', strength: 1 },

    // (4) Imaging
    { source: 'medical-imaging-systems', target: 'acquisition-physics', strength: 1 },
    { source: 'medical-imaging-systems', target: 'recon-enhancement', strength: 1 },
    { source: 'medical-imaging-systems', target: 'enterprise-imaging', strength: 1 },

    // (5) Edge AI
    { source: 'edge-ai-embedded', target: 'npus-ondevice', strength: 1 },
    { source: 'edge-ai-embedded', target: 'model-optimization', strength: 1 },
    { source: 'edge-ai-embedded', target: 'firmware-rtos', strength: 1 },

    // (6) Fusion
    { source: 'sensor-fusion-estimation', target: 'probabilistic-filters', strength: 1 },
    { source: 'sensor-fusion-estimation', target: 'multimodal-fusion', strength: 1 },
    { source: 'sensor-fusion-estimation', target: 'time-sync-clock-drift', strength: 1 },

    // (7) Runtimes
    { source: 'realtime-health-ai-runtimes', target: 'holoscan-surgical', strength: 1 },
    { source: 'realtime-health-ai-runtimes', target: 'triton-ensemble-serving', strength: 1 },
    { source: 'realtime-health-ai-runtimes', target: 'streaming-qos', strength: 1 },

    // (8) Validation
    { source: 'device-validation-clinical-studies', target: 'feasibility-repeatability', strength: 1 },
    { source: 'device-validation-clinical-studies', target: 'clinical-ground-truth', strength: 1 },
    { source: 'device-validation-clinical-studies', target: 'performance-reporting', strength: 1 },

    // (9) Regulated
    { source: 'regulated-medical-device-eng', target: 'standards-quality', strength: 1 },
    { source: 'regulated-medical-device-eng', target: 'samd-ai-lifecycle', strength: 1 },
    { source: 'regulated-medical-device-eng', target: 'cybersecurity-privacy', strength: 1 },

    // (10) Neurotech
    { source: 'neurotechnology-implants', target: 'brain-computer-interfaces', strength: 1 },
    { source: 'neurotechnology-implants', target: 'neuromodulation-devices', strength: 1 },
    { source: 'neurotechnology-implants', target: 'implantable-systems', strength: 1 },

    // (11) Connectivity / Fleet / Interop
    { source: 'connectivity-security-fleet-ops', target: 'iot-connectivity', strength: 1 },
    { source: 'connectivity-security-fleet-ops', target: 'fleet-management-telemetry', strength: 1 },
    { source: 'connectivity-security-fleet-ops', target: 'interoperability', strength: 1 },

    // (12) Accelerated Compute
    { source: 'accelerated-healthcare-compute', target: 'monai-imaging-ai', strength: 1 },
    { source: 'accelerated-healthcare-compute', target: 'holoscan-edge-platforms', strength: 1 },
    { source: 'accelerated-healthcare-compute', target: 'cuda-tensorrt', strength: 1 },

    // L2 → L3 (concept anchoring — representative)
    { source: 'core-biosignals', target: 'ecg', strength: 0.7 },
    { source: 'core-biosignals', target: 'ppg', strength: 0.7 },
    { source: 'core-biosignals', target: 'eeg', strength: 0.7 },
    { source: 'core-biosignals', target: 'emg', strength: 0.7 },
    { source: 'core-biosignals', target: 'eda', strength: 0.7 },
    { source: 'core-biosignals', target: 'bcg', strength: 0.7 },
    { source: 'vital-sign-estimation', target: 'hrv', strength: 0.7 },
    { source: 'vital-sign-estimation', target: 'bp-proxies', strength: 0.7 },

    { source: 'device-modalities', target: 'wrist', strength: 0.7 },
    { source: 'device-modalities', target: 'ring', strength: 0.7 },
    { source: 'device-modalities', target: 'patch', strength: 0.7 },
    { source: 'digital-biomarkers', target: 'sleep-biomarkers', strength: 0.7 },
    { source: 'digital-biomarkers', target: 'activity-biomarkers', strength: 0.7 },
    { source: 'power-battery-life', target: 'duty-cycling', strength: 0.7 },
    { source: 'power-battery-life', target: 'energy-harvesting', strength: 0.7 },

    { source: 'imu-kinematics-gait', target: 'orientation', strength: 0.7 },
    { source: 'imu-kinematics-gait', target: 'gait-metrics', strength: 0.7 },
    { source: 'pose-performance', target: 'pose-2d-3d', strength: 0.7 },
    { source: 'musculoskeletal-modeling', target: 'inverse-dynamics', strength: 0.7 },

    { source: 'acquisition-physics', target: 'ct-mri', strength: 0.7 },
    { source: 'acquisition-physics', target: 'ultrasound', strength: 0.7 },
    { source: 'recon-enhancement', target: 'compressed-sensing', strength: 0.7 },
    { source: 'recon-enhancement', target: 'super-res', strength: 0.7 },
    { source: 'enterprise-imaging', target: 'dicom', strength: 0.7 },
    { source: 'enterprise-imaging', target: 'pacs-vna', strength: 0.7 },

    { source: 'npus-ondevice', target: 'arm-ethos', strength: 0.7 },
    { source: 'npus-ondevice', target: 'tensor-cores', strength: 0.7 },
    { source: 'model-optimization', target: 'quantization', strength: 0.7 },
    { source: 'model-optimization', target: 'pruning', strength: 0.7 },
    { source: 'firmware-rtos', target: 'rtos', strength: 0.7 },
    { source: 'firmware-rtos', target: 'ota', strength: 0.7 },

    { source: 'probabilistic-filters', target: 'kf', strength: 0.7 },
    { source: 'probabilistic-filters', target: 'pf', strength: 0.7 },
    { source: 'multimodal-fusion', target: 'early-late', strength: 0.7 },
    { source: 'multimodal-fusion', target: 'learned-fusion', strength: 0.7 },

    { source: 'holoscan-surgical', target: 'holoscan-ops', strength: 0.7 },
    { source: 'triton-ensemble-serving', target: 'triton-ensembles', strength: 0.7 },
    { source: 'streaming-qos', target: 'qos', strength: 0.7 },

    { source: 'performance-reporting', target: 'bland-altman', strength: 0.7 },
    { source: 'performance-reporting', target: 'calibration', strength: 0.7 },

    { source: 'standards-quality', target: 'iec-62304', strength: 0.7 },
    { source: 'standards-quality', target: 'iso-13485', strength: 0.7 },
    { source: 'standards-quality', target: 'iso-14971', strength: 0.7 },
    { source: 'standards-quality', target: 'iec-60601', strength: 0.7 },
    { source: 'samd-ai-lifecycle', target: 'fda-samd', strength: 0.7 },
    { source: 'cybersecurity-privacy', target: 'hsm-tpm', strength: 0.7 },
    { source: 'cybersecurity-privacy', target: 'encryption', strength: 0.7 },

    { source: 'brain-computer-interfaces', target: 'noninvasive-bci', strength: 0.7 },
    { source: 'brain-computer-interfaces', target: 'invasive-arrays', strength: 0.7 },
    { source: 'neuromodulation-devices', target: 'closed-loop', strength: 0.7 },

    { source: 'iot-connectivity', target: 'ble', strength: 0.7 },
    { source: 'iot-connectivity', target: 'wifi', strength: 0.7 },
    { source: 'iot-connectivity', target: 'lte-5g', strength: 0.7 },
    { source: 'iot-connectivity', target: 'lora', strength: 0.7 },
    { source: 'interoperability', target: 'fhir-gateway', strength: 0.7 },

    { source: 'monai-imaging-ai', target: 'monai', strength: 0.7 },
    { source: 'holoscan-edge-platforms', target: 'holoscan', strength: 0.7 },
    { source: 'cuda-tensorrt', target: 'tensorrt', strength: 0.7 },

    // ============= L2 → L4 (RED Resource Nodes) =============
    // Physiological Sensors & Biosignals
    { source: 'core-biosignals', target: 'resource-core-biosignals', strength: 0.8 },
    { source: 'vital-sign-estimation', target: 'resource-vital-sign', strength: 0.8 },
    { source: 'artifact-rejection-denoising', target: 'resource-artifact-rejection', strength: 0.8 },
    
    // Wearables & Health Sensing
    { source: 'device-modalities', target: 'resource-device-modalities', strength: 0.8 },
    { source: 'digital-biomarkers', target: 'resource-digital-biomarkers', strength: 0.8 },
    { source: 'power-battery-life', target: 'resource-power-battery', strength: 0.8 },
    
    // Biomechanics & Motion AI
    { source: 'imu-kinematics-gait', target: 'resource-imu-gait', strength: 0.8 },
    { source: 'pose-performance', target: 'resource-pose-estimation', strength: 0.8 },
    { source: 'musculoskeletal-modeling', target: 'resource-musculoskeletal', strength: 0.8 },
    
    // Medical Imaging Devices & Systems
    { source: 'acquisition-physics', target: 'resource-acquisition-physics', strength: 0.8 },
    { source: 'recon-enhancement', target: 'resource-reconstruction', strength: 0.8 },
    { source: 'enterprise-imaging', target: 'resource-enterprise-imaging', strength: 0.8 },
    
    // Edge AI & Embedded Health Systems
    { source: 'npus-ondevice', target: 'resource-npus', strength: 0.8 },
    { source: 'model-optimization', target: 'resource-model-opt', strength: 0.8 },
    { source: 'firmware-rtos', target: 'resource-firmware-rtos', strength: 0.8 },
    
    // Sensor Fusion & Estimation
    { source: 'probabilistic-filters', target: 'resource-prob-filters', strength: 0.8 },
    { source: 'multimodal-fusion', target: 'resource-multimodal-fusion', strength: 0.8 },
    { source: 'time-sync-clock-drift', target: 'resource-time-sync', strength: 0.8 },
    
    // Real-Time Health AI Runtimes
    { source: 'holoscan-surgical', target: 'resource-holoscan-surgical', strength: 0.8 },
    { source: 'triton-ensemble-serving', target: 'resource-triton', strength: 0.8 },
    { source: 'streaming-qos', target: 'resource-streaming-qos', strength: 0.8 },
    
    // Device Validation & Clinical Studies
    { source: 'feasibility-repeatability', target: 'resource-feasibility', strength: 0.8 },
    { source: 'clinical-ground-truth', target: 'resource-ground-truth', strength: 0.8 },
    { source: 'performance-reporting', target: 'resource-performance-reporting', strength: 0.8 },
    
    // Regulated Medical Device Engineering
    { source: 'standards-quality', target: 'resource-standards-quality', strength: 0.8 },
    { source: 'samd-ai-lifecycle', target: 'resource-samd-lifecycle', strength: 0.8 },
    { source: 'cybersecurity-privacy', target: 'resource-cybersecurity-privacy', strength: 0.8 },
    
    // Neurotechnology & Implants
    { source: 'brain-computer-interfaces', target: 'resource-bcis', strength: 0.8 },
    { source: 'neuromodulation-devices', target: 'resource-neuromodulation', strength: 0.8 },
    { source: 'implantable-systems', target: 'resource-implantable-systems', strength: 0.8 },
    
    // Connectivity, Security & Fleet Ops
    { source: 'iot-connectivity', target: 'resource-iot-connectivity', strength: 0.8 },
    { source: 'fleet-management-telemetry', target: 'resource-fleet-mgmt', strength: 0.8 },
    { source: 'interoperability', target: 'resource-interoperability', strength: 0.8 },
    
    // Accelerated Healthcare Compute
    { source: 'monai-imaging-ai', target: 'resource-monai', strength: 0.8 },
    { source: 'holoscan-edge-platforms', target: 'resource-holoscan-edge', strength: 0.8 },
    { source: 'cuda-tensorrt', target: 'resource-cuda-tensorrt', strength: 0.8 },

    // L2/L1 → L4 (Companies to relevant categories)
    // Wearables
    // { source: 'device-modalities', target: 'apple', strength: 0.5 },
    // { source: 'device-modalities', target: 'fitbit', strength: 0.5 },
    // { source: 'device-modalities', target: 'oura', strength: 0.5 },
    // { source: 'device-modalities', target: 'whoop', strength: 0.5 },
    // { source: 'device-modalities', target: 'withings', strength: 0.5 },
    // { source: 'device-modalities', target: 'garmin', strength: 0.5 },
    // { source: 'device-modalities', target: 'polar', strength: 0.5 },

    // CGM / hospital monitors
    // { source: 'vital-sign-estimation', target: 'masimo', strength: 0.5 },
    // { source: 'vital-sign-estimation', target: 'dexcom', strength: 0.5 },
    // { source: 'vital-sign-estimation', target: 'abbott', strength: 0.5 },

    // Imaging OEMs
    // { source: 'medical-imaging-systems', target: 'philips', strength: 0.5 },
    // { source: 'medical-imaging-systems', target: 'ge-healthcare', strength: 0.5 },
    // { source: 'medical-imaging-systems', target: 'siemens', strength: 0.5 },
    // { source: 'medical-imaging-systems', target: 'canon-medical', strength: 0.5 },
    // { source: 'acquisition-physics', target: 'hyperfine', strength: 0.5 },
    // { source: 'acquisition-physics', target: 'butterfly', strength: 0.5 },

    // Neurotech
    // { source: 'neurotechnology-implants', target: 'neuralink', strength: 0.5 },
    // { source: 'neurotechnology-implants', target: 'synchron', strength: 0.5 },
    // { source: 'implantable-systems', target: 'medtronic', strength: 0.5 },

    // Edge/compute stacks
    // { source: 'realtime-health-ai-runtimes', target: 'nvidia-holoscan', strength: 0.6 },
    // { source: 'accelerated-healthcare-compute', target: 'nvidia-holoscan', strength: 0.6 },
    // { source: 'accelerated-healthcare-compute', target: 'nvidia-monai', strength: 0.6 },
    // { source: 'edge-ai-embedded', target: 'qualcomm', strength: 0.5 },
    // { source: 'edge-ai-embedded', target: 'arm', strength: 0.5 },
    // { source: 'edge-ai-embedded', target: 'ti', strength: 0.5 },
    // { source: 'edge-ai-embedded', target: 'st', strength: 0.5 },
    // { source: 'edge-ai-embedded', target: 'adi', strength: 0.5 },
    // { source: 'edge-ai-embedded', target: 'sifive', strength: 0.5 },

    // Connectivity platforms
    // { source: 'iot-connectivity', target: 'nordic', strength: 0.5 },
    // { source: 'iot-connectivity', target: 'particle', strength: 0.5 },
    // { source: 'iot-connectivity', target: 'blues', strength: 0.5 },
    // { source: 'iot-connectivity', target: 'murata', strength: 0.5 },

    // Imaging AI vendors
    // { source: 'recon-enhancement', target: 'subtle', strength: 0.5 },
    // { source: 'enterprise-imaging', target: 'enlitic', strength: 0.5 },
    // { source: 'medical-imaging-systems', target: 'aidoc', strength: 0.5 },
    // { source: 'medical-imaging-systems', target: 'vizai', strength: 0.5 },
  ],
};
