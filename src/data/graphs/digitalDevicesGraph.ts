import { GraphData, nodeColors, getNodeSize } from '@/types/graphData';

export const digitalDevicesGraphData: GraphData = {
  nodes: [
    // Layer 0 - Root Category
    { 
      id: 'digital-devices', 
      name: 'Digital Devices', 
      type: 'category', 
      layer: 0,
      description: 'Health sensing and medical device systems',
      color: nodeColors.category,
      size: getNodeSize(0, 'category')
    },

    // ============ Layer 1 - Major Domains ============
    { 
      id: 'biosignals', 
      name: 'Biosignals', 
      type: 'topic', 
      layer: 1,
      description: 'Physiological sensing',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'wearables', 
      name: 'Wearables', 
      type: 'topic', 
      layer: 1,
      description: 'Consumer health devices',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'biomechanics', 
      name: 'Biomechanics', 
      type: 'topic', 
      layer: 1,
      description: 'Motion and gait analysis',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'medical-imaging', 
      name: 'Medical Imaging', 
      type: 'topic', 
      layer: 1,
      description: 'Clinical imaging systems',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'edge-ai', 
      name: 'Edge AI', 
      type: 'topic', 
      layer: 1,
      description: 'On-device intelligence',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'sensor-fusion', 
      name: 'Sensor Fusion', 
      type: 'topic', 
      layer: 1,
      description: 'Multimodal integration',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'device-validation', 
      name: 'Device Validation', 
      type: 'topic', 
      layer: 1,
      description: 'Clinical studies',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },
    { 
      id: 'regulated-devices', 
      name: 'Regulated Devices', 
      type: 'topic', 
      layer: 1,
      description: 'Medical device engineering',
      color: nodeColors.category,
      size: getNodeSize(1, 'topic')
    },

    // ============ Layer 2 - Sub-Domains ============
    
    // Biosignals Sub-domains
    { 
      id: 'cardiac-signals', 
      name: 'Cardiac Signals', 
      type: 'topic', 
      layer: 2,
      description: 'ECG and PPG',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'neural-signals', 
      name: 'Neural Signals', 
      type: 'topic', 
      layer: 2,
      description: 'EEG and EMG',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'vital-signs', 
      name: 'Vital Signs', 
      type: 'topic', 
      layer: 2,
      description: 'HR, HRV, SpO₂',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Wearables Sub-domains
    { 
      id: 'device-modalities', 
      name: 'Device Modalities', 
      type: 'topic', 
      layer: 2,
      description: 'Form factors',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'digital-biomarkers', 
      name: 'Digital Biomarkers', 
      type: 'topic', 
      layer: 2,
      description: 'Clinical features',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'power-management', 
      name: 'Power Management', 
      type: 'topic', 
      layer: 2,
      description: 'Battery optimization',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Biomechanics Sub-domains
    { 
      id: 'imu-kinematics', 
      name: 'IMU Kinematics', 
      type: 'topic', 
      layer: 2,
      description: 'Motion tracking',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'pose-estimation', 
      name: 'Pose Estimation', 
      type: 'topic', 
      layer: 2,
      description: 'Human performance',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'musculoskeletal', 
      name: 'Musculoskeletal', 
      type: 'topic', 
      layer: 2,
      description: 'Joint loading',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Medical Imaging Sub-domains
    { 
      id: 'acquisition-physics', 
      name: 'Acquisition Physics', 
      type: 'topic', 
      layer: 2,
      description: 'CT, MRI, ultrasound',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'reconstruction', 
      name: 'Reconstruction', 
      type: 'topic', 
      layer: 2,
      description: 'Image enhancement',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'dicom-pacs', 
      name: 'DICOM/PACS', 
      type: 'topic', 
      layer: 2,
      description: 'Enterprise integration',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Edge AI Sub-domains
    { 
      id: 'npus', 
      name: 'NPUs', 
      type: 'topic', 
      layer: 2,
      description: 'Neural accelerators',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'model-optimization-edge', 
      name: 'Model Optimization', 
      type: 'topic', 
      layer: 2,
      description: 'Quantization and pruning',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'firmware', 
      name: 'Firmware', 
      type: 'topic', 
      layer: 2,
      description: 'RTOS and drivers',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Sensor Fusion Sub-domains
    { 
      id: 'probabilistic-filters', 
      name: 'Probabilistic Filters', 
      type: 'topic', 
      layer: 2,
      description: 'Kalman filters',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'multimodal-fusion', 
      name: 'Multimodal Fusion', 
      type: 'topic', 
      layer: 2,
      description: 'Cross-sensor integration',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Device Validation Sub-domains
    { 
      id: 'feasibility-studies', 
      name: 'Feasibility Studies', 
      type: 'topic', 
      layer: 2,
      description: 'Study design',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'clinical-protocols', 
      name: 'Clinical Protocols', 
      type: 'topic', 
      layer: 2,
      description: 'Ground truth',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // Regulated Devices Sub-domains
    { 
      id: 'standards', 
      name: 'Standards', 
      type: 'topic', 
      layer: 2,
      description: 'IEC/ISO compliance',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'samd', 
      name: 'SaMD', 
      type: 'topic', 
      layer: 2,
      description: 'Software as medical device',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },
    { 
      id: 'cybersecurity', 
      name: 'Cybersecurity', 
      type: 'topic', 
      layer: 2,
      description: 'Device security',
      color: nodeColors.category,
      size: getNodeSize(2, 'topic')
    },

    // ============ Layer 3 - Concepts (Colored) ============
    
    // Cardiac Signals
    { 
      id: 'ecg', 
      name: 'ECG', 
      type: 'concept', 
      layer: 3,
      description: 'Electrocardiography',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'ppg', 
      name: 'PPG', 
      type: 'concept', 
      layer: 3,
      description: 'Photoplethysmography',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'bcg-scg', 
      name: 'BCG/SCG', 
      type: 'concept', 
      layer: 3,
      description: 'Ballistocardiography',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Neural Signals
    { 
      id: 'eeg', 
      name: 'EEG', 
      type: 'concept', 
      layer: 3,
      description: 'Electroencephalography',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'emg', 
      name: 'EMG', 
      type: 'concept', 
      layer: 3,
      description: 'Electromyography',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Vital Signs
    { 
      id: 'hrv', 
      name: 'HRV Analysis', 
      type: 'concept', 
      layer: 3,
      description: 'Heart rate variability',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'spo2', 
      name: 'SpO₂', 
      type: 'concept', 
      layer: 3,
      description: 'Oxygen saturation',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'bp-proxy', 
      name: 'BP Proxies', 
      type: 'concept', 
      layer: 3,
      description: 'Blood pressure estimation',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Device Modalities
    { 
      id: 'wrist-wearables', 
      name: 'Wrist Wearables', 
      type: 'concept', 
      layer: 3,
      description: 'Smartwatches',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'ring-wearables', 
      name: 'Ring Wearables', 
      type: 'concept', 
      layer: 3,
      description: 'Smart rings',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'patch-wearables', 
      name: 'Patch Wearables', 
      type: 'concept', 
      layer: 3,
      description: 'Adhesive sensors',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Digital Biomarkers
    { 
      id: 'sleep-biomarkers', 
      name: 'Sleep Biomarkers', 
      type: 'concept', 
      layer: 3,
      description: 'Sleep staging',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'activity-biomarkers', 
      name: 'Activity Biomarkers', 
      type: 'concept', 
      layer: 3,
      description: 'Physical activity metrics',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Power Management
    { 
      id: 'duty-cycling', 
      name: 'Duty Cycling', 
      type: 'concept', 
      layer: 3,
      description: 'Power scheduling',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'energy-harvesting', 
      name: 'Energy Harvesting', 
      type: 'concept', 
      layer: 3,
      description: 'Self-powered devices',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // IMU Kinematics
    { 
      id: 'orientation-estimation', 
      name: 'Orientation Estimation', 
      type: 'concept', 
      layer: 3,
      description: 'Quaternion tracking',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'gait-analysis', 
      name: 'Gait Analysis', 
      type: 'concept', 
      layer: 3,
      description: 'Step detection',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Pose Estimation
    { 
      id: '2d-3d-pose', 
      name: '2D/3D Pose', 
      type: 'concept', 
      layer: 3,
      description: 'Joint tracking',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'rehabilitation-metrics', 
      name: 'Rehab Metrics', 
      type: 'concept', 
      layer: 3,
      description: 'Recovery assessment',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Musculoskeletal
    { 
      id: 'inverse-dynamics', 
      name: 'Inverse Dynamics', 
      type: 'concept', 
      layer: 3,
      description: 'Force estimation',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'opensim', 
      name: 'OpenSim', 
      type: 'concept', 
      layer: 3,
      description: 'Musculoskeletal modeling',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Acquisition Physics
    { 
      id: 'ct-mri', 
      name: 'CT/MRI', 
      type: 'concept', 
      layer: 3,
      description: 'Tomographic imaging',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'ultrasound', 
      name: 'Ultrasound', 
      type: 'concept', 
      layer: 3,
      description: 'Acoustic imaging',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Reconstruction
    { 
      id: 'compressed-sensing', 
      name: 'Compressed Sensing', 
      type: 'concept', 
      layer: 3,
      description: 'Fast reconstruction',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'super-resolution', 
      name: 'Super-Resolution', 
      type: 'concept', 
      layer: 3,
      description: 'Image enhancement',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // DICOM/PACS
    { 
      id: 'dicom', 
      name: 'DICOM', 
      type: 'concept', 
      layer: 3,
      description: 'Medical imaging standard',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'pacs-vna', 
      name: 'PACS/VNA', 
      type: 'concept', 
      layer: 3,
      description: 'Archive systems',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // NPUs
    { 
      id: 'arm-npu', 
      name: 'ARM NPUs', 
      type: 'concept', 
      layer: 3,
      description: 'Mobile accelerators',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'tensor-cores', 
      name: 'Tensor Cores', 
      type: 'concept', 
      layer: 3,
      description: 'Matrix acceleration',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Model Optimization
    { 
      id: 'quantization', 
      name: 'Quantization', 
      type: 'concept', 
      layer: 3,
      description: 'INT8/FP16',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'pruning', 
      name: 'Pruning', 
      type: 'concept', 
      layer: 3,
      description: 'Model compression',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Firmware
    { 
      id: 'rtos', 
      name: 'RTOS', 
      type: 'concept', 
      layer: 3,
      description: 'Real-time OS',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'ota-updates', 
      name: 'OTA Updates', 
      type: 'concept', 
      layer: 3,
      description: 'Over-the-air firmware',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Probabilistic Filters
    { 
      id: 'kalman-filter', 
      name: 'Kalman Filter', 
      type: 'concept', 
      layer: 3,
      description: 'State estimation',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'particle-filter', 
      name: 'Particle Filter', 
      type: 'concept', 
      layer: 3,
      description: 'Nonlinear filtering',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Multimodal Fusion
    { 
      id: 'early-late-fusion', 
      name: 'Early/Late Fusion', 
      type: 'concept', 
      layer: 3,
      description: 'Fusion strategies',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'learned-filters', 
      name: 'Learned Filters', 
      type: 'concept', 
      layer: 3,
      description: 'Neural fusion',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Standards
    { 
      id: 'iec-62304', 
      name: 'IEC 62304', 
      type: 'concept', 
      layer: 3,
      description: 'Software lifecycle',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'iso-13485', 
      name: 'ISO 13485', 
      type: 'concept', 
      layer: 3,
      description: 'Quality management',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // SaMD
    { 
      id: 'fda-samd', 
      name: 'FDA SaMD', 
      type: 'concept', 
      layer: 3,
      description: 'Regulatory pathway',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'post-market', 
      name: 'Post-Market Surveillance', 
      type: 'concept', 
      layer: 3,
      description: 'Monitoring',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Cybersecurity
    { 
      id: 'hsm-tpm', 
      name: 'HSM/TPM', 
      type: 'concept', 
      layer: 3,
      description: 'Hardware security',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },
    { 
      id: 'encryption', 
      name: 'Encryption', 
      type: 'concept', 
      layer: 3,
      description: 'Data protection',
      color: nodeColors.concept,
      size: getNodeSize(3, 'concept')
    },

    // Companies
    { 
      id: 'apple-health', 
      name: 'Apple (Health)', 
      type: 'company', 
      layer: 4,
      description: 'Apple Watch and health',
      url: 'https://apple.com/health',
      color: nodeColors.company,
      size: getNodeSize(4, 'company')
    },
    { 
      id: 'oura', 
      name: 'Oura', 
      type: 'company', 
      layer: 4,
      description: 'Smart ring',
      url: 'https://ouraring.com',
      color: nodeColors.company,
      size: getNodeSize(4, 'company')
    },
    { 
      id: 'nvidia-holoscan', 
      name: 'NVIDIA (Holoscan)', 
      type: 'company', 
      layer: 4,
      description: 'Medical AI runtime',
      url: 'https://developer.nvidia.com/holoscan-sdk',
      color: nodeColors.company,
      size: getNodeSize(4, 'company')
    },
    { 
      id: 'nvidia-monai', 
      name: 'NVIDIA (MONAI)', 
      type: 'company', 
      layer: 4,
      description: 'Medical imaging AI',
      url: 'https://monai.io',
      color: nodeColors.company,
      size: getNodeSize(4, 'company')
    },
  ],

  links: [
    // ============ Layer 0 to Layer 1 ============
    { source: 'digital-devices', target: 'biosignals', strength: 1 },
    { source: 'digital-devices', target: 'wearables', strength: 1 },
    { source: 'digital-devices', target: 'biomechanics', strength: 1 },
    { source: 'digital-devices', target: 'medical-imaging', strength: 1 },
    { source: 'digital-devices', target: 'edge-ai', strength: 1 },
    { source: 'digital-devices', target: 'sensor-fusion', strength: 1 },
    { source: 'digital-devices', target: 'device-validation', strength: 1 },
    { source: 'digital-devices', target: 'regulated-devices', strength: 1 },

    // ============ Layer 1 to Layer 2 ============
    
    // Biosignals
    { source: 'biosignals', target: 'cardiac-signals', strength: 1 },
    { source: 'biosignals', target: 'neural-signals', strength: 1 },
    { source: 'biosignals', target: 'vital-signs', strength: 1 },

    // Wearables
    { source: 'wearables', target: 'device-modalities', strength: 1 },
    { source: 'wearables', target: 'digital-biomarkers', strength: 1 },
    { source: 'wearables', target: 'power-management', strength: 1 },

    // Biomechanics
    { source: 'biomechanics', target: 'imu-kinematics', strength: 1 },
    { source: 'biomechanics', target: 'pose-estimation', strength: 1 },
    { source: 'biomechanics', target: 'musculoskeletal', strength: 1 },

    // Medical Imaging
    { source: 'medical-imaging', target: 'acquisition-physics', strength: 1 },
    { source: 'medical-imaging', target: 'reconstruction', strength: 1 },
    { source: 'medical-imaging', target: 'dicom-pacs', strength: 1 },

    // Edge AI
    { source: 'edge-ai', target: 'npus', strength: 1 },
    { source: 'edge-ai', target: 'model-optimization-edge', strength: 1 },
    { source: 'edge-ai', target: 'firmware', strength: 1 },

    // Sensor Fusion
    { source: 'sensor-fusion', target: 'probabilistic-filters', strength: 1 },
    { source: 'sensor-fusion', target: 'multimodal-fusion', strength: 1 },

    // Device Validation
    { source: 'device-validation', target: 'feasibility-studies', strength: 1 },
    { source: 'device-validation', target: 'clinical-protocols', strength: 1 },

    // Regulated Devices
    { source: 'regulated-devices', target: 'standards', strength: 1 },
    { source: 'regulated-devices', target: 'samd', strength: 1 },
    { source: 'regulated-devices', target: 'cybersecurity', strength: 1 },

    // ============ Layer 2 to Layer 3 (Colored Concepts) ============
    
    // Cardiac Signals
    { source: 'cardiac-signals', target: 'ecg', strength: 0.7 },
    { source: 'cardiac-signals', target: 'ppg', strength: 0.7 },
    { source: 'cardiac-signals', target: 'bcg-scg', strength: 0.7 },

    // Neural Signals
    { source: 'neural-signals', target: 'eeg', strength: 0.7 },
    { source: 'neural-signals', target: 'emg', strength: 0.7 },

    // Vital Signs
    { source: 'vital-signs', target: 'hrv', strength: 0.7 },
    { source: 'vital-signs', target: 'spo2', strength: 0.7 },
    { source: 'vital-signs', target: 'bp-proxy', strength: 0.7 },

    // Device Modalities
    { source: 'device-modalities', target: 'wrist-wearables', strength: 0.7 },
    { source: 'device-modalities', target: 'ring-wearables', strength: 0.7 },
    { source: 'device-modalities', target: 'patch-wearables', strength: 0.7 },

    // Digital Biomarkers
    { source: 'digital-biomarkers', target: 'sleep-biomarkers', strength: 0.7 },
    { source: 'digital-biomarkers', target: 'activity-biomarkers', strength: 0.7 },

    // Power Management
    { source: 'power-management', target: 'duty-cycling', strength: 0.7 },
    { source: 'power-management', target: 'energy-harvesting', strength: 0.7 },

    // IMU Kinematics
    { source: 'imu-kinematics', target: 'orientation-estimation', strength: 0.7 },
    { source: 'imu-kinematics', target: 'gait-analysis', strength: 0.7 },

    // Pose Estimation
    { source: 'pose-estimation', target: '2d-3d-pose', strength: 0.7 },
    { source: 'pose-estimation', target: 'rehabilitation-metrics', strength: 0.7 },

    // Musculoskeletal
    { source: 'musculoskeletal', target: 'inverse-dynamics', strength: 0.7 },
    { source: 'musculoskeletal', target: 'opensim', strength: 0.7 },

    // Acquisition Physics
    { source: 'acquisition-physics', target: 'ct-mri', strength: 0.7 },
    { source: 'acquisition-physics', target: 'ultrasound', strength: 0.7 },

    // Reconstruction
    { source: 'reconstruction', target: 'compressed-sensing', strength: 0.7 },
    { source: 'reconstruction', target: 'super-resolution', strength: 0.7 },

    // DICOM/PACS
    { source: 'dicom-pacs', target: 'dicom', strength: 0.7 },
    { source: 'dicom-pacs', target: 'pacs-vna', strength: 0.7 },

    // NPUs
    { source: 'npus', target: 'arm-npu', strength: 0.7 },
    { source: 'npus', target: 'tensor-cores', strength: 0.7 },

    // Model Optimization
    { source: 'model-optimization-edge', target: 'quantization', strength: 0.7 },
    { source: 'model-optimization-edge', target: 'pruning', strength: 0.7 },

    // Firmware
    { source: 'firmware', target: 'rtos', strength: 0.7 },
    { source: 'firmware', target: 'ota-updates', strength: 0.7 },

    // Probabilistic Filters
    { source: 'probabilistic-filters', target: 'kalman-filter', strength: 0.7 },
    { source: 'probabilistic-filters', target: 'particle-filter', strength: 0.7 },

    // Multimodal Fusion
    { source: 'multimodal-fusion', target: 'early-late-fusion', strength: 0.7 },
    { source: 'multimodal-fusion', target: 'learned-filters', strength: 0.7 },

    // Standards
    { source: 'standards', target: 'iec-62304', strength: 0.7 },
    { source: 'standards', target: 'iso-13485', strength: 0.7 },

    // SaMD
    { source: 'samd', target: 'fda-samd', strength: 0.7 },
    { source: 'samd', target: 'post-market', strength: 0.7 },

    // Cybersecurity
    { source: 'cybersecurity', target: 'hsm-tpm', strength: 0.7 },
    { source: 'cybersecurity', target: 'encryption', strength: 0.7 },

    // ============ Companies to Topics ============
    { source: 'device-modalities', target: 'apple-health', strength: 0.5 },
    { source: 'device-modalities', target: 'oura', strength: 0.5 },
    { source: 'medical-imaging', target: 'nvidia-holoscan', strength: 0.5 },
    { source: 'reconstruction', target: 'nvidia-monai', strength: 0.5 },
  ]
};

