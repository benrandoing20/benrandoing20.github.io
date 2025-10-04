import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const DigitalDevices = () => {
  const sections = [
    {
      title: "Edge AI & Embedded Systems",
      content: [
        {
          subtitle: "Neural Processing Units (NPUs)",
          description: "Specialized hardware for AI inference at the edge. Understanding TPUs, Neural Engines, and custom ASIC designs for efficient on-device computation."
        },
        {
          subtitle: "Model Optimization",
          description: "Quantization, pruning, and knowledge distillation techniques to deploy large models on resource-constrained devices."
        },
        {
          subtitle: "Real-time Inference",
          description: "Optimizing latency and power consumption for real-time AI applications. Hardware-software co-design for maximum efficiency."
        }
      ]
    },
    {
      title: "Sensor Fusion & Data Processing",
      content: [
        {
          subtitle: "Multi-modal Sensing",
          description: "Combining data from cameras, IMUs, GPS, microphones, and environmental sensors for comprehensive situational awareness."
        },
        {
          subtitle: "Signal Processing",
          description: "Digital signal processing techniques for noise reduction, feature extraction, and pattern recognition from sensor data streams."
        },
        {
          subtitle: "Kalman Filtering",
          description: "State estimation and sensor fusion using Kalman filters, particle filters, and other probabilistic approaches."
        }
      ]
    },
    {
      title: "Wearable Technology",
      content: [
        {
          subtitle: "Biosignal Monitoring",
          description: "Continuous monitoring of heart rate, blood oxygen, skin conductance, and other physiological parameters using wearable sensors."
        },
        {
          subtitle: "Activity Recognition",
          description: "Machine learning algorithms for recognizing human activities, gestures, and behaviors from accelerometer and gyroscope data."
        },
        {
          subtitle: "Power Management",
          description: "Ultra-low power design strategies, energy harvesting, and battery optimization for always-on wearable devices."
        }
      ]
    },
    {
      title: "Smart Device Architectures",
      content: [
        {
          subtitle: "IoT Connectivity",
          description: "Wireless communication protocols: WiFi, Bluetooth, Zigbee, LoRaWAN, and 5G for device interconnectivity."
        },
        {
          subtitle: "Device Management",
          description: "Over-the-air updates, remote configuration, and fleet management for large-scale IoT deployments."
        },
        {
          subtitle: "Security & Privacy",
          description: "Hardware security modules, secure boot, encryption, and privacy-preserving techniques for connected devices."
        }
      ]
    },
    {
      title: "Hardware-Software Co-design",
      content: [
        {
          subtitle: "System-on-Chip (SoC) Design",
          description: "Integrating processors, memory, and specialized accelerators on a single chip for optimal performance and efficiency."
        },
        {
          subtitle: "FPGA Development",
          description: "Field-programmable gate arrays for custom hardware acceleration and rapid prototyping of digital systems."
        },
        {
          subtitle: "Firmware Development",
          description: "Real-time operating systems, device drivers, and low-level software for embedded systems and smart devices."
        }
      ]
    },
    {
      title: "Applications & Use Cases",
      content: [
        {
          subtitle: "Smart Home Automation",
          description: "Intelligent lighting, climate control, security systems, and voice assistants powered by edge AI and sensor networks."
        },
        {
          subtitle: "Industrial IoT",
          description: "Predictive maintenance, quality control, and process optimization in manufacturing using smart sensors and edge computing."
        },
        {
          subtitle: "Autonomous Vehicles",
          description: "Sensor fusion, perception systems, and decision-making algorithms for self-driving cars and drones."
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
              Hardware and software systems powering the next generation of intelligent devices and IoT ecosystems.
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

export default DigitalDevices;
