export interface Thought {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export const thoughts: Thought[] = [
  {
    "id": "wearables-ai-agents",
    "title": "The Future of Wearables and AI Agents",
    "date": "October 2025",
    "readTime": "14 min",
    "excerpt": "From IMUs and PPGs to foundation models, wearables are moving from passive trackers to active coaches that learn your physiology.",
    "content": `My journey into wearables began with fascination. Companies like Athos, Nextiles, Whoop, Stride, and Plantiga caught my attention early. Having worked in biomechanics labs, I saw firsthand how much of the early innovation came from inertial measurement units, gyroscopes, and photoplethysmography sensors. Signal processing was the foundation of everything. That era shaped how we measured steps, stress, and sleep, but it was also limited to reporting numbers back to the user.
  
  At Apple, teams in Applied Sensing and Health, SSP, and Health Technologiespushed this field forward in ways that shaped products millions of people use today. Their shipped features represent some of the strongest sensor-driven applications in the world. But as I studied them, one theme became clear: wearables were still mostly about reporting data, not shaping behavior in a seamless, adaptive way.
  
  With AR glasses and new sensing modalities on the horizon, I believe we are entering a new chapter: wearables as agents. Not just sensors, not just dashboards, but companions that can interpret, act, and adapt. Research like Google’s SensorLM (https://arxiv.org/abs/2506.09108) and Apple’s foundation models for accelerometer, PPG, and ECG data (https://machinelearning.apple.com/research/wearable-accelerometer-foundation-models and https://machinelearning.apple.com/research/large-scale-training) show the shift. These models treat biosignals as rich languages, building general-purpose representations that transfer across tasks such as activity recognition, stress detection, and health prediction. Apple’s Relative Contrastive (RelCon) method for motion (https://arxiv.org/abs/2411.18822) and scaling work on wearable FMs (https://arxiv.org/abs/2410.13638) underscore how rapidly this foundation is forming.
  
  ## Beyond Signals: Why Agents Matter
  
  Foundation models can turn messy sensor data into structured embeddings. But an embedding alone is not enough. Having worked on NVIDIA Tokkio, I learned that real-world systems need to manage timing, context, and interaction in addition to inference accuracy. An agent layer, which is essentiall a foundation model that may call tools and retain memory, is needed to personalize wearables over time. This is the gap between today’s models and tomorrow’s coaching companions.
  
  ## How Foundation Model Outputs Become Actions
  
  Think of a foundation model as a feature extractor. 
  
  - Raw signals like acceleration, heart rhythm, or temperature are tokenized into patches and passed into a transformer.  
  - Self-supervised objectives teach the model to recognize patterns that are invariant to noise, device placement, or rotation.  
  - The outputs are embeddings, compact vectors representing activity, recovery, or anomalies.  
  - On top of these embeddings, lightweight “heads” can be trained to predict specific things like VO2max, fatigue index, or AFib risk.  
  
  The agent consumes these speicifc outputs, not the raw signals. From there, it reasons: what is the user’s goal, what constraints matter, what action should be suggested? This makes recommendations explainable and grounded in both physiology and context.
  
  ## Personalization Through Reinforcement-Style Learning
  
  Most wearables today rely on static heuristics. They predict a score and then map that score to a canned recommendation. I see the future differently. Imagine a system that adapts to you over time, using your body’s own signals as feedback.
  
  Here is how this could work.
  
  - **State**: each morning, the agent gathers recent embeddings and metrics such as HRV, sleep efficiency, and training load. It also considers subjective effort, your calendar, and environmental factors like heat.  
  - **Action**: the agent chooses from options such as increase today’s volume slightly, hold baseline, reduce intensity and focus on recovery, or recommend rest.  
  - **Reward**: the next day, the system observes outcomes. Did HRV trend upward? Did sleep efficiency improve? Was adherence high? Were there injury or fatigue signals? This becomes the reward signal.  
  
  Two methods are especially promising:
  
  1. **Contextual bandits**: sample-efficient algorithms that pick one action per day and update based on short-term rewards. They are already studied in mobile health (see actor-critic contextual bandits for mHealth at https://arxiv.org/abs/1706.09090 and HeartSteps at https://pmc.ncbi.nlm.nih.gov/articles/PMC8439432/).  
  2. **Constrained policy gradients**: pretrain a general policy offline and then fine-tune for each user with safeguards like KL divergence penalties or value-at-risk constraints to ensure safety.  
  
  Bandits are a practical starting point because they are safe, interpretable, and adapt quickly. Full reinforcement learning can follow once data is richer and more stable.
  
  ## A Mini Example
  
  Suppose the agent’s goal is to help you train for a faster 5K without overreaching.  
  
  - **Inputs**: last seven days of embeddings are processed into sleep efficiency, HRV z-score, strain z-score, and soreness index.  
  - **State**: a vector containing those features plus your stated goal.  
  - **Actions**: one of four choices: add 10 percent low-intensity volume, hold baseline, reduce volume by 20 percent with mobility work, or rest with emphasis on sleep.  
  - **Reward**: the next day, compute a weighted combination of change in HRV baseline, adherence, sleep efficiency, and a penalty if acute training load spiked. For example, 0.4 times HRV baseline change plus 0.3 times adherence plus 0.2 times sleep efficiency minus 0.3 times overreach penalty.  
  - **Algorithm**: use Thompson sampling in a linear bandit. Start with population priors. Update with each new day. If outcomes become unstable, apply conservative KL regularization to dampen changes.  
  
  This transforms a wearable from a reporter into a learning system that gets better the longer it works with you.
  
  ## What Actually Gets Tuned
  
  - The foundation encoder remains frozen for efficiency and stability.  
  - Task-specific heads can be fine-tuned occasionally with new data.  
  - The policy parameters, the decision-making layer, adapt frequently, learning your unique response curve.  
  - Safety constraints stay enforced at all times, capping weekly ramp or flagging medical risks.  
  
  ## Evaluating Success
  
  Short term, success looks like higher adherence and user satisfaction.  
  Medium term, it means improved HRV baseline, better sleep consistency, fewer injury signals, and balanced training loads.  
  Evaluation can be done with A/B testing, off-policy estimators, and privacy-preserving analytics on device.  
  
  ## Related and Emerging Work
  
  - **Sensor language models**: Google’s SensorLM (https://arxiv.org/abs/2506.09108).  
  - **Apple wearable foundation models**: accelerometer models (https://machinelearning.apple.com/research/wearable-accelerometer-foundation-models) and large-scale ECG/PPG models (https://machinelearning.apple.com/research/large-scale-training).  
  - **RelCon**: Apple’s relative contrastive objective for motion (https://arxiv.org/abs/2411.18822).  
  - **Scaling wearable FMs**: study of sample efficiency and transfer (https://arxiv.org/abs/2410.13638).  
  - **JITAI frameworks**: actor-critic contextual bandits for mobile health (https://arxiv.org/abs/1706.09090) and HeartSteps (https://pmc.ncbi.nlm.nih.gov/articles/PMC8439432/).  
  - **Agent timing and UX**: NVIDIA Tokkio customization (https://docs.nvidia.com/ace/tokkio/5.0.0-beta/customization/customization-options.html) and Audio2Face blog (https://developer.nvidia.com/blog/build-lifelike-digital-humans-with-nvidia-ace-now-generally-available/).  
  
  ## Moving Forward
  
  I see the path as fourfold.  
  
  1. Make foundation models robust and efficient, distilled for on-device use.  
  2. Keep decision policies lightweight and adaptable, starting with safe bandit methods.  
  3. Define multi-horizon rewards that reflect both physiology and lived experience.  
  4. Deliver agent UX that is transparent, timely, and able to explain why it suggests what it does.  
  
  If we build along this path, wearables will move from being passive trackers to adaptive coaches and systems that learn your body’s language and help you live better through action, not just measurement.`
  },  
  {
    "id": "medical-school-to-silicon-valley",
    "title": "From Medical School to Silicon Valley",
    "date": "February 2024",
    "readTime": "14 min",
    "excerpt": "My path from music to medicine to tech has been intense, nonlinear, and shaped by a constant search for impact, freedom, and learning.",
    "content": `My journey to Silicon Valley was never straightforward. It’s been shaped by discipline, reflection, and a relentless pursuit of meaningful work.
  
  ## Early Years
  
  From a young age, I pursued work with intensity. As a percussionist, I studied at Juilliard and Tanglewood. I recognize the privilege of those opportunities, but I also treated them with absolute seriousness. That discipline carried into my academic and professional life.
  
  I chose biomedical engineering because I was fascinated by cochlear implants, hearing sciences, and biomechanics. I worked in sports and motion labs, and for a long time I envisioned becoming an orthopedic surgeon. I shadowed extensively: ACL reconstructions, osteochondritis dissecans procedures, rotator cuff repairs. I also observed dermatologists, oral/maxillofacial surgeons, and sports medicine doctors. I loved the science, but something felt off.
  
  ## Medicine Felt Siloed

  As I thought more about machine learning and the technology I was exposed to, medicine seemed siloed and rigid. Many of the physicians I met lived very successful lives, but by my definition of wealth, freedom, continual learning, broad impact, it didn’t fully align. The work struck me as repetitive. I’m not entirely closed off to medicine forever, but at this point in my life, it just didn’t feel right.

  Around this time, I became interested in technology companies working at the intersection of health and engineering. I remember visiting Nextiles in the Brooklyn Navy Yard and being fascinated by their technology. That experience, along with reading patents and exploring new ideas, broadened my perspective beyond the traditional path.
  
  ## Pivotal Decision
  
  I had acceptances to medical schools like UTSW, Texas A&M, and Baylor. But COVID hit, and that year forced me to reflect more deeply than most 20 year olds ever get the chance to. Ultimately, I deferred and decided to explore engineering more seriously. 
  
  This led me to Stanford, where I dove into AI and biomedical applications. It was tough, but it opened a new world. I kept thinking: in medicine I might help one patient at a time; in technology, I might help millions.
  
  ## Silicon Valley Breakthroughs
  
  I found Apple’s Health Tech work incredibly exciting and was fortunate to intern there. The team’s caliber was humbling, and I learned how different corporate tech really was from what I’d imagined. Working at a large company gave me a platform to learn and execute.
  
  Today, I work at NVIDIA. Getting here came through networking, focused learning, and simply doing. That’s been the consistent pattern: the more I build, share my work, and talk with people, the more opportunities arise. 
  
  ## Lessons Learned
  
  **Try before deciding.** It’s hard to know what something will feel like until you’re inside it. Medicine, tech, and different companies all looked different from the outside. You don’t need to be right every time; you just need to be right once.  
  **Doing beats waiting.** Most progress came from building, experimenting, and putting my work out into the world.  
  **Struggle clarifies.** I’ve faced plenty of self-imposed frustration, but that struggle shaped who I am and made me stronger.  
  
  ## Moving Forward
  
  Now I’m exploring applied AI across industries, finance, healthcare, drug discovery, wearables, digital humans, physical AI. My journey has been very real, sometimes messy, and deeply reflective. And while I can’t say the same playbook will work for someone starting today, I know this: doing the work, showing it, and building connections opens doors you can’t predict.`

  },
];
