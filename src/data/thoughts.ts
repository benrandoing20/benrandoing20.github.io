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
    "content": `**Disclaimer**: This essay is a conceptual exploration, not a research claim or product announcement. It reflects my synthesis of current trends in wearable sensing, foundation models, and reinforcement learning, drawn from published research, prior industry experience, and informed speculation about where the field might head. All examples are illustrative, not deployed systems. Terms like "agent" refer to structured decision frameworks rather than autonomous personalities. While the piece references real methods (e.g., foundation models, contextual bandits, policy gradients), it does not assert empirical validation or regulatory readiness. Implementation would require careful evaluation of data availability, on-device compute, privacy, and safety constraints. In short: this is a directional thought experiment on the future of adaptive wearables, written to inspire rigorous discussion, not to overclaim what exists today.

## Where Wearables Are Today

My journey into wearables began with sports applications. Companies like Athos, Nextiles, Whoop, Stride, and Plantiga caught my attention early. Having worked in biomechanics labs, I used technologies such as 3D motion capture, EMG, PPG, and accelerometry to help gather clinical insights that informed surgical standards at Scottish Rite for Children. These same technologies power most modern wearables today. They're excellent at sensing, performing lightweight processing, and reporting numbers back to the user.

At Apple, teams in Applied Sensing, SSP, and Health Technologies pushed this field forward in ways that shaped products millions use daily. Their shipped features represent some of the strongest sensor-driven applications in the world. But one insight became clear to me: wearables are still largely reporters, not collaborators. They display data, but rarely help shape behavior in adaptive, personalized, or intelligent ways.

## The Next Shift: From Sensors to Agents

With AR glasses and new sensing modalities on the horizon, we're entering a new chapter: wearables as agents. Not just sensors or dashboards, but companions that can interpret, act, and adapt.

Research like Google's SensorLM (https://arxiv.org/abs/2506.09108) and Apple's foundation models for accelerometer (https://machinelearning.apple.com/research/wearable-accelerometer-foundation-models), PPG/ECG (https://machinelearning.apple.com/research/large-scale-training), and motion with RelCon (https://arxiv.org/abs/2411.18822) signals shows this evolution in real time. These models treat biosignals as languages, learning to represent activity, stress, and physiology in ways that transfer across tasks.

But embeddings alone aren't enough. Having worked on NVIDIA's digital human platform, Tokkio, I've seen firsthand that real-world systems must also manage timing, context, and interaction, not just inference accuracy. To make wearables truly personal, we need an agent layer: a reasoning system that can combine model-derived metrics with memory, constraints, and adaptive learning.

## How Foundation Model Outputs Feed the Agent

A foundation model transforms raw signals (e.g., accelerometer or PPG) into structured embeddings: compact vectors that encode patterns like heart rate variability or motion states.

However, these embeddings are not directly fed into the agent. Instead, they're used to compute interpretable metrics (sleep efficiency, HRV, strain, etc.) that the agent consumes. This separation ensures stability, interpretability, and safety.

- Raw sensor streams are tokenized into patches and passed to a transformer-based encoder
- Self-supervised objectives learn invariance to noise, device placement, rotation
- Output embeddings are converted into interpretable metrics
- Agent consumes metrics, makes decisions, and learns from outcomes

This hierarchy (foundation model → metrics → agent) mirrors how the brain processes sensory input into meaning and then into decisions.

## Personalization Through Reinforcement-Style Learning

Most current wearables rely on static heuristics: they map a number (say, "recovery = 70%") to a canned message ("Take it easy today"). The next generation should learn you, continuously refining its policy based on your physiological responses.

## Why Contextual Bandits?

Contextual bandits are a perfect starting point because they're sample-efficient and safe. They learn one decision at a time, ideal for daily recommendations where outcomes (like recovery or HRV) can be observed the next day.

At each step:

- **Context**: current physiological metrics, goals, environment
- **Action**: one of several recommendations (e.g., increase volume, rest)
- **Reward**: outcome observed the next day (e.g., improvement in HRV, sleep)
- **Update**: the agent refines its belief about which action works best in that context

This loop allows learning in real-time with minimal data. Unlike traditional reinforcement learning (which requires long sequences of experience), bandits only need immediate feedback, making them efficient and low-risk.

## How Thompson Sampling Works

Thompson Sampling is a Bayesian method for choosing actions under uncertainty. Let's build it step by step.

**Setup**: Imagine you have \\(K\\) possible actions (e.g., rest, maintain, increase volume). Each action \\(a\\) has an unknown expected reward \\(\\theta_a\\). You want to learn which action gives the best reward.

**Bayesian Belief**: For each action \\(a\\), maintain a probability distribution over what you think \\(\\theta_a\\) might be. If you're uncertain, the distribution is wide. If you've tried it many times, it's narrow. We often use a Gaussian:

\\[\\theta_a \\sim N(\\mu_a, \\sigma^2_a)\\]

where \\(\\mu_a\\) is your current best estimate of the reward, and \\(\\sigma^2_a\\) captures your uncertainty.

**Decision Time**: At each step, instead of just picking the action with the highest \\(\\mu_a\\) (which would be pure exploitation), Thompson Sampling does something clever:

1. Sample a plausible reward \\(\\tilde{\\theta}_a\\) from each distribution \\(N(\\mu_a, \\sigma^2_a)\\)
2. Pick the action \\(a^* = \\arg\\max_a \\tilde{\\theta}_a\\) with the highest sampled value
3. Take that action and observe the actual reward \\(r\\)

**Why This Works**: If an action has high uncertainty (large \\(\\sigma^2_a\\)), you might sample a very high value for \\(\\tilde{\\theta}_a\\), causing you to try it (exploration). If an action has a high mean \\(\\mu_a\\) and low uncertainty, it will often win (exploitation). The balance emerges naturally from the sampling process.

**Updating Your Belief**: After observing reward \\(r\\), update the posterior for action \\(a^*\\) using Bayes' rule. For a linear bandit where \\(r = x_t^\\top \\theta_a + \\epsilon\\) (reward depends linearly on context \\(x_t\\)), the update is:

\\[\\mu_a \\leftarrow \\frac{\\sigma^2_a \\cdot r + \\sigma^2_r \\cdot \\mu_a}{\\sigma^2_a + \\sigma^2_r}\\]

\\[\\sigma^2_a \\leftarrow \\frac{\\sigma^2_a \\cdot \\sigma^2_r}{\\sigma^2_a + \\sigma^2_r}\\]

where \\(\\sigma^2_r\\) is the noise variance in the reward. Notice:
- If you're very uncertain (\\(\\sigma^2_a\\) large), the new observation \\(r\\) gets more weight
- If you're confident (\\(\\sigma^2_a\\) small), you stick closer to your prior belief \\(\\mu_a\\)
- Your uncertainty \\(\\sigma^2_a\\) always shrinks after an observation (the denominator is larger than the numerator)

**Upper Confidence Bound (UCB)**: Another approach skips sampling and directly balances exploration and exploitation:

\\[a^* = \\arg\\max_a \\left[\\mu_a + \\beta \\sqrt{\\sigma^2_a}\\right]\\]

This picks the action with the highest "optimistic estimate." The term \\(\\beta \\sqrt{\\sigma^2_a}\\) is the exploration bonus: if you're uncertain about an action, add a bonus to its mean reward. \\(\\beta\\) controls how optimistic you are (typically \\(\\beta \\approx 2\\)).

**Comparison to Q-Learning**: In traditional Q-learning:

- You learn a Q-function \\(Q(s, a)\\) that estimates long-term value
- Exploration is often \\(\\epsilon\\)-greedy: random action with probability \\(\\epsilon\\)
- Updates use bootstrapping: \\(Q(s, a) \\leftarrow r + \\gamma \\max_{a'} Q(s', a')\\)

In contextual bandits:

- No state transitions, so "Q-function" is just \\(Q(x, a) = \\mathbb{E}[r \\mid x, a]\\), the immediate expected reward
- Exploration is principled via uncertainty (Thompson Sampling or UCB)
- Updates are direct: observe \\(r\\), update belief about \\(\\theta_a\\)
- Much simpler and more sample-efficient for single-step decisions

## Building the Priors: Where Personalization Begins

Each action (e.g., rest, train, reduce load) starts with a prior belief about its reward. These priors determine how the agent behaves before it has data about you.

They can come from:

- **Population priors**: learned from historical wearable data (e.g., average response to load changes)
- **Cluster priors**: by grouping users by characteristics (age, training experience, chronotype)
- **Meta-learned priors**: trained to adapt quickly using meta-learning techniques. For example, Model-Agnostic Meta-Learning (MAML) trains a model on many users' data such that its initial parameters are positioned in a region of parameter space where a few gradient steps on a new user's data lead to rapid personalization. Instead of starting from scratch, the model starts from a "good initialization" that has learned how to learn from small amounts of data. After just 5-10 interactions with you, the agent can make personalized recommendations that would normally require weeks of data.
- **Safety-biased priors**: initialized to favor conservative behavior (e.g., avoid overtraining)

Over time, your agent's posterior belief diverges from the population, becoming uniquely yours. Within a week or two of use, it starts making better-than-generic decisions.

**A Concrete Example**: Imagine you have 3 actions: Rest, Maintain, Increase. You start with priors:

- Rest: \\(N(5.0, 2.0^2)\\) – mean reward 5, uncertainty 2.0
- Maintain: \\(N(6.0, 1.5^2)\\) – mean reward 6, uncertainty 1.5
- Increase: \\(N(7.0, 3.0^2)\\) – mean reward 7, high uncertainty 3.0

Day 1: Sample from each: Rest → 4.2, Maintain → 6.8, Increase → 9.1. Pick Increase. Observe reward \\(r = 8.0\\).

Update Increase's belief (assuming \\(\\sigma^2_r = 1.0\\)):

\\[\\mu_{\\text{new}} = \\frac{3.0^2 \\cdot 8.0 + 1.0 \\cdot 7.0}{3.0^2 + 1.0} = \\frac{72 + 7}{10} = 7.9\\]

\\[\\sigma^2_{\\text{new}} = \\frac{3.0^2 \\cdot 1.0}{3.0^2 + 1.0} = \\frac{9}{10} = 0.9, \\quad \\sigma_{\\text{new}} = 0.95\\]

Now Increase has \\(N(7.9, 0.95^2)\\) – higher mean and much lower uncertainty.

Day 2: Sample again: Rest → 6.1, Maintain → 5.9, Increase → 7.3. Pick Increase again.

Over time, the agent learns which action truly works best for you, refining both the mean (expected reward) and uncertainty (confidence in that estimate).

## When to Transition from Bandits to Full RL

Contextual bandits are perfect when:
- Outcomes are observable within 1-2 steps (e.g., next-day HRV)
- You have limited data (weeks, not months)
- Safety is paramount (single-step decisions are easier to constrain)

Full reinforcement learning becomes valuable when:
- Actions have delayed consequences (e.g., today's training affects you 3-7 days later)
- You need to plan sequences (e.g., build → maintain → rest cycles)
- You have months of data to learn temporal patterns

The transition is gradual: start with bandits, accumulate data, then add multi-step planning while keeping trust region constraints to ensure safety.

## Constrained Policy Gradients: Full RL with Safeguards

Once sufficient data exists, the system can move from short-horizon bandits to multi-day reinforcement learning, modeling how today's decisions affect tomorrow's physiology.

**The Markov Decision Process (MDP)**: We now model a sequence of decisions over time:

- **State** \\(s_t\\): a richer vector of rolling averages, slopes, and recent adherence (7–28 days)
- **Action** \\(a_t\\): continuous (e.g., % volume change) or discrete (e.g., rest, maintain, build)
- **Reward** \\(r_t\\): combines progress (ΔHRV, sleep stability, performance) minus penalties for overreach
- **Transition**: \\(s_{t+1} = f(s_t, a_t)\\), your physiology evolves based on your action
- **Policy** \\(\\pi_\\theta(a \\mid s)\\): a neural network that outputs a probability distribution over actions given state \\(s\\)

The goal is to find parameters \\(\\theta\\) that maximize the expected cumulative reward:

\\[J(\\theta) = \\mathbb{E}_{\\pi_\\theta}\\left[\\sum_{t=0}^T \\gamma^t r_t\\right]\\]

where \\(\\gamma \\in (0, 1)\\) is a discount factor (e.g., \\(\\gamma = 0.95\\)) that makes future rewards slightly less important than immediate ones. This encourages both long-term planning and responsiveness to current needs.

**Policy Gradient**: To improve the policy, we compute the gradient of \\(J(\\theta)\\) with respect to \\(\\theta\\). The policy gradient theorem says:

\\[\\nabla_\\theta J(\\theta) = \\mathbb{E}_{\\pi_\\theta}\\left[\\sum_{t=0}^T \\nabla_\\theta \\log \\pi_\\theta(a_t \\mid s_t) \\cdot Q^{\\pi_\\theta}(s_t, a_t)\\right]\\]

This means: for each action you took, push the parameters \\(\\theta\\) in the direction that makes that action more likely, weighted by how good it was (\\(Q^{\\pi_\\theta}(s_t, a_t)\\)). If the action led to high cumulative reward, strengthen it. If it led to poor outcomes, weaken it.

**The Trust Region Problem**: Naive gradient ascent can make huge updates that drastically change the policy, leading to catastrophic performance drops. To prevent this, we add a constraint:

\\[\\max_\\theta \\mathbb{E}\\left[\\sum_t \\gamma^t r_t\\right] \\text{ subject to } D_{KL}(\\pi_\\theta \\| \\pi_{\\theta_{\\text{old}}}) \\leq \\delta\\]

The KL divergence \\(D_{KL}(\\pi_\\theta \\| \\pi_{\\theta_{\\text{old}}})\\) measures how much the new policy differs from the old one. For Gaussian policies:

\\[D_{KL}(\\pi_\\theta \\| \\pi_{\\theta_{\\text{old}}}) = \\mathbb{E}_s\\left[\\frac{1}{2}\\left(\\frac{(\\mu_\\theta(s) - \\mu_{\\theta_{\\text{old}}}(s))^2}{\\sigma^2} + \\log\\frac{\\sigma_{\\theta_{\\text{old}}}^2}{\\sigma_\\theta^2} + \\frac{\\sigma_\\theta^2}{\\sigma_{\\theta_{\\text{old}}}^2} - 1\\right)\\right]\\]

By keeping \\(D_{KL} \\leq \\delta\\) (e.g., \\(\\delta = 0.01\\)), you ensure the policy changes gradually. This creates a "trust region" where you trust the gradient estimate to be accurate.

**Proximal Policy Optimization (PPO)**: A simpler, practical version uses a penalty instead of a hard constraint:

\\[\\max_\\theta \\mathbb{E}\\left[\\sum_t \\gamma^t r_t\\right] - \\lambda \\cdot D_{KL}(\\pi_\\theta \\| \\pi_{\\theta_{\\text{old}}})\\]

or clips the probability ratio to prevent large changes:

\\[L^{CLIP}(\\theta) = \\mathbb{E}\\left[\\min\\left(\\frac{\\pi_\\theta(a \\mid s)}{\\pi_{\\theta_{\\text{old}}}(a \\mid s)} A(s, a), \\text{clip}\\left(\\frac{\\pi_\\theta(a \\mid s)}{\\pi_{\\theta_{\\text{old}}}(a \\mid s)}, 1-\\epsilon, 1+\\epsilon\\right) A(s, a)\\right)\\right]\\]

where \\(A(s, a)\\) is the advantage function, and \\(\\epsilon \\approx 0.2\\).

**Understanding Advantage**: The advantage \\(A(s, a)\\) answers: "Was this action better or worse than what I typically do in this state?"

\\[A(s, a) = Q(s, a) - V(s)\\]

- \\(Q(s, a)\\) = cumulative reward you got by taking action \\(a\\) in state \\(s\\)
- \\(V(s)\\) = average cumulative reward you typically get in state \\(s\\)
- If \\(A(s, a) > 0\\), action \\(a\\) was better than average, so increase its probability
- If \\(A(s, a) < 0\\), action \\(a\\) was worse than average, so decrease its probability

This centers the learning signal around zero, making gradient updates more stable and efficient.

**Manual Safety Constraints**: On top of algorithmic safeguards, enforce hard limits:

- Never increase training volume >10% per week
- Pause training if HRV drops >1.5σ below baseline for 3 days
- Trigger clinician review on abnormal ECG/PPG readings

This layered approach (algorithmic trust regions + manual guardrails) creates a robust adaptive system that can evolve safely while respecting physiological limits.

## A Mini Example: Training for a Faster 5K

Goal: improve performance without overreaching.

**Inputs (7-day window)**: HRV z-score & slope, sleep efficiency mean/variance, strain z-score, soreness, and training goal. Each becomes a feature, so the agent sees trends, not just snapshots.

**State vector**: \\([\\text{HRV}_z, \\text{HRV}_{\\text{slope}}, \\text{sleep}_{\\text{eff\\_mean}}, \\text{sleep}_{\\text{eff\\_var}}, \\text{strain}_z, \\text{strain}_{\\text{slope}}, \\text{soreness}, \\text{goal\\_type}]\\)

**Actions**:
- Add 10% low-intensity volume
- Hold baseline
- Reduce 20% + mobility
- Rest & prioritize sleep

**Reward (next day)**:

\\[r = 0.4 \\cdot \\Delta\\text{HRV} + 0.3 \\cdot \\text{adherence} + 0.2 \\cdot \\text{sleep\\_eff} - 0.3 \\cdot \\text{overreach\\_penalty}\\]

**Algorithm**:
- Start with population priors (e.g., average athlete data)
- Sample reward models per action (Thompson Sampling)
- Pick the best sampled action
- Observe the next-day result
- Update belief for that action
- Smooth updates with KL regularization to avoid sudden shifts

After a few weeks, the system has learned your response curve: when you thrive on load and when to rest.

## What Actually Gets Tuned

- **Foundation encoder**: stays frozen for efficiency and generalization
- **Task heads**: fine-tuned occasionally (sleep detection, stress, etc.)
- **Policy parameters**: adapt frequently based on your data
- **Manual safety rules**: always active, acting as guardrails on all decisions

## Evaluating Success

Success isn't just physiological; it's behavioral and emotional.

**A/B Testing**: Randomly assign users to new vs. baseline systems. Compare HRV trends, adherence, or injury proxies. If group A improves meaningfully over B, the agent adds value.

**Off-Policy Evaluation (OPE)**: Use past logged data to estimate how a new policy would have performed. Techniques like importance sampling and doubly robust estimators reduce bias and variance, letting you test safely before deployment.

**Privacy-Preserving Analytics**: All analytics can occur on-device or via secure aggregation and differential privacy, ensuring personal data remains confidential.

**Success Metrics**:
- Short-term: higher engagement, adherence, and satisfaction
- Medium-term: stabilized HRV baselines, better sleep, fewer fatigue signals
- Long-term: trust, a wearable that truly understands and adapts to you

## Related and Emerging Work

- **Sensor language models**: Google's SensorLM (https://arxiv.org/abs/2506.09108)
- **Apple wearable foundation models**: accelerometer models (https://machinelearning.apple.com/research/wearable-accelerometer-foundation-models) and large-scale ECG/PPG models (https://machinelearning.apple.com/research/large-scale-training)
- **RelCon**: Apple's relative contrastive objective for motion (https://arxiv.org/abs/2411.18822)
- **Scaling wearable FMs**: study of sample efficiency and transfer (https://arxiv.org/abs/2410.13638)
- **JITAI frameworks**: actor-critic contextual bandits for mobile health (https://arxiv.org/abs/1706.09090) and HeartSteps (https://pmc.ncbi.nlm.nih.gov/articles/PMC8439432/)
- **Agent timing and UX**: NVIDIA Tokkio customization (https://docs.nvidia.com/ace/tokkio/5.0.0-beta/customization/customization-options.html) and Audio2Face blog (https://developer.nvidia.com/blog/build-lifelike-digital-humans-with-nvidia-ace-now-generally-available/)

## Moving Forward

I see four guiding steps for the next decade of wearable AI:

1. Robust, efficient foundation models distilled for on-device use
2. Adaptive, lightweight decision policies that begin with contextual bandits and evolve safely
3. Multi-horizon rewards that capture not just physiology but quality of life
4. Transparent agent UX capable of explaining its reasoning clearly and responsibly

If we build along this path, wearables will transform from passive trackers into adaptive partners that learn your body's language, helping you live better through action, not just measurement.`
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
