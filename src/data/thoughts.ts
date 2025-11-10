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
    "id": "pe-medical-practice-transformation",
    "title": "How I'd Transform a Medical Practice Using AI",
    "date": "November 2025",
    "readTime": "18 min",
    "excerpt": "A private equity case study showcasing how I would approach acquiring, transforming, and exiting a medical practice—combining traditional PE fundamentals with AI implementation and operational improvements.",
    "content": `This is a thought from my perspective of what technology exists and could make a small medical practices not only more profitable but a better experience for patients. It combines everything I know about standard PE modeling, operational improvement, and AI implementation into one cohesive investment thesis.

## Introduction: Why Healthcare Services PE?

Private equity firms have poured billions into healthcare services over the past decade. The healthcare industry is massive—representing nearly 18% of US GDP—yet remains extraordinarily fragmented. While most industries consolidated decades ago, healthcare still consists of thousands of independent practices run more like mom-and-pop businesses than sophisticated enterprises. This creates a unique opportunity: you can acquire these practices at reasonable valuations, professionalize their operations using proven playbooks, implement technology that physicians would not typically adopt on their own, and consolidate them into platforms that command premium exits.

The specific opportunity I want to explore is orthopedic practices. Orthopedics is attractive for several reasons. First, it's primarily elective procedures with high margins—joint replacements, sports medicine, spine surgery. Second, reimbursement is relatively stable because procedures have clear medical necessity criteria (ie: knee replacement for pain). Third, the physician-owners are nearing retirement age, creating a wave of succession opportunities. And fourth, these practices are notoriously operationally inefficient because surgeons are trained to operate, not to run businesses.

Let me walk you through how I'd think about acquiring and transforming a specific target: Advanced Orthopedics Group (AOG), a 6-physician practice generating $12 million in revenue with $2.4 million in EBITDA, representing a 20% margin. To understand why this is compelling, we first need to understand how medical practices actually make money and where the inefficiencies hide.

## Understanding Medical Practice Economics

Medical practices are fundamentally different businesses than most. Unlike typical service businesses where revenue is relatively straightforward, medical practices navigate a complex ecosystem of insurance contracts, government reimbursement schedules, and fee-for-service models that create unique financial dynamics.

AOG (Advanced Orthopedics Group) generates revenue through three primary channels. The largest is professional fees, accounting for about 70% of total revenue. These are the charges for physician services—office visits, consultations, minor procedures performed in the clinic, physical therapy, and injections. When you visit an orthopedic surgeon for a consultation, the practice bills your insurance company (or Medicare) a specific CPT code that corresponds to the complexity and duration of that visit. A new patient consultation might reimburse $185, while a follow-up visit might be $125. The practice sees about 32,000 patient visits annually across these categories, generating roughly $4.8 million in professional fee revenue.

The second major revenue source is surgical procedures, representing about 25% of revenue or approximately $3.5 million annually. This is where orthopedics gets interesting from a business perspective. When a surgeon performs a joint replacement or arthroscopic surgery at a hospital or ambulatory surgery center, they bill separately for their professional services. For a total knee replacement, the surgeon might receive $2,500 for their work, while the facility receives $15,000-20,000 for the operating room, anesthesia, nursing, and implants. AOG performs about 630 surgeries per year—mostly joint replacements, arthroscopies, fracture repairs, and sports medicine procedures. Each surgery type has vastly different revenue and margin profiles, which creates interesting strategic decisions about case mix.

The final bucket is ancillary services—about 5% of revenue. This includes durable medical equipment like knee braces and walking boots, in-house MRI imaging if they have the capital equipment, and medication dispensing for injections. Many practices view ancillary revenue as found money, but it's actually strategically important because margins are high and it's one of the few areas where practices capture revenue that might otherwise go to external vendors.

Now here's where it gets complicated: the revenue I just described is billed revenue, not collected revenue. In healthcare, there's a massive gap between what you bill and what you actually collect. AOG bills approximately $13.6 million annually but only collects $12 million—an 88% collection rate. Why the gap? Several reasons. First, insurance companies routinely deny claims for various reasons—incorrect coding, lack of prior authorization, services deemed not medically necessary, timely filing limits missed. AOG has a 12% denial rate, meaning 12% of their claims get rejected on first submission. Some of these can be appealed and recovered, but it takes time and effort, and many practices simply write off denied claims rather than fight them. Second, even accepted claims don't always pay the billed amount—insurance companies have negotiated rates that are often 40-60% of billed charges. Third, patient responsibility (deductibles and co-pays) has grown dramatically, and collecting from patients is much harder than collecting from insurance companies.

This brings us to the cost structure, which is equally unique. The largest single cost is physician compensation, consuming about 30% of revenue or $3.6 million annually. Physicians in this practice are partners who own the business, so technically their compensation is a draw on profits, but for analytical purposes, we treat it as a cost. The market rate for orthopedic surgeons is roughly $600,000 annually in total compensation, so six physicians at market rate equals $3.6 million. This is table stakes—you can't attract and retain quality surgeons for less, and they could easily leave to join a hospital system or competing practice.

Clinical staff—nurses, medical assistants, physical therapists—represent another 9% of revenue ($1.08 million). These are the people who room patients, take vitals, assist with procedures, run the physical therapy mill, and handle clinical coordination. Administrative overhead is surprisingly high at 35% of revenue ($4.2 million). This includes front desk staff, medical billers and coders, IT systems, rent for three clinic locations, medical malpractice insurance (which is substantial for orthopedics), office supplies, marketing, legal and compliance costs, and general administrative expenses. Medical supplies and implants used in surgery consume about 6% of revenue ($720,000).

After all these costs, AOG generates $2.4 million in EBITDA—a 20% margin. This might sound healthy, but it's actually mediocre by industry standards. Best-in-class orthopedic practices run at 30-35% EBITDA margins. That 12-point margin gap represents the opportunity. If we can take AOG from 20% to 32% margins while growing revenue, we've created substantial value.

## How Private Equity Works in Healthcare

Now that we understand the business, let's talk about how private equity firms think about acquiring and transforming medical practices. The fundamental PE playbook is straightforward: use a combination of equity and debt to acquire a business, implement operational improvements to increase profitability, and sell it 3-7 years later at a higher valuation multiple. The returns come from three sources—EBITDA growth, multiple expansion, and debt paydown. The art is in identifying which businesses have genuine improvement potential versus those that are already optimized.

Healthcare services are particularly attractive for PE because of several structural characteristics. First, the revenue is recurring and relatively predictable—patients with chronic conditions need ongoing care, surgical patients require follow-ups, and demographics favor increased utilization as the population ages. Second, healthcare is relatively recession-resistant compared to discretionary consumer spending. Third, the industry remains highly fragmented, creating opportunities for consolidation plays. Fourth, most physician-owned practices lack sophisticated management, creating obvious operational upside. And fifth, regulatory barriers and licensing requirements create some competitive moats that prevent easy replication.

The typical healthcare services PE deal follows a pattern. You acquire a flagship practice—something well-established with good physician talent and reasonable financial performance. You invest heavily in professionalizing operations: hire a CEO, implement proper financial systems and KPIs, optimize revenue cycle management, rationalize procurement and supply chain, improve marketing and patient acquisition, and add technology that physicians would never invest in themselves. Once you've proven the model works and margins have expanded, you begin a roll-up strategy—acquiring 5-15 similar practices and integrating them into a platform. The platform generates synergies through centralized back-office functions, consolidated purchasing power, cross-referrals between locations, and standardized clinical protocols. Eventually, you sell to either a larger healthcare system, a publicly-traded consolidator, or another private equity firm looking to continue the roll-up.

For AOG specifically, here's how I'd structure the acquisition. The practice generates $2.4 million in EBITDA. Single-site orthopedic practices typically trade at 6-8x EBITDA multiples, depending on physician contracts, payer mix, facility relationships, and growth trajectory. Let's assume we can acquire AOG for 7.0x EBITDA, which equals a $16.8 million purchase price. This is the enterprise value—the total value of the business before considering how we'll finance it.

Private equity firms don't pay cash for the entire purchase price. Instead, they use leverage—debt—to amplify their returns. A typical healthcare services LBO might use 50% equity and 50% debt. So we'd put up $8.4 million of our fund's capital as equity, and borrow the other $8.4 million through a combination of senior debt and seller financing. The senior debt ($6.7 million) comes from a bank or debt fund at maybe 8% interest, secured by the practice's assets and cash flows. The seller note ($1.7 million) at 6% interest represents a portion of the purchase price that we pay to the selling physicians over time, typically 3-5 years. Seller notes serve two purposes: they reduce the upfront cash required, and they keep the selling physicians aligned during the transition period because they still have money at risk.

This capital structure is critical to understanding PE returns. Let's say over five years we grow EBITDA from $2.4 million to $6.7 million through the operational improvements and acquisitions I'll describe. If we can sell at an 8.0x EBITDA exit multiple (higher than our 7.0x entry multiple because we've built a scaled platform), the enterprise value becomes $53.6 million. After paying off the remaining debt ($3.2 million, because we've used cash flow to pay down the original $8.4 million of debt over five years), we have $50.4 million in equity value. We invested $8.4 million and got back $50.4 million—that's a 6.0x multiple on invested capital and a 43.1% annualized return. Those returns might sound aggressive, but they're actually achievable with execution risk properly managed.

The key insight is that most of the value creation—about 77%—comes from EBITDA growth, not from financial engineering or multiple expansion. We're going from $2.4 million to $6.7 million in EBITDA, which is a 179% increase. That's the real value creation. The multiple expansion from 7.0x to 8.0x contributes some additional value because we've transformed a single practice into a multi-site platform with better systems, but it's not the main driver. And the debt paydown is just mechanical—we use the practice's cash flow to reduce leverage, which increases the equity value. This is fundamentally an operational value creation story, which is what makes it interesting.

## What I Would Do: Operational Due Diligence and Value Creation

So we've agreed to acquire AOG for $16.8 million. Before the deal closes, we conduct detailed operational due diligence to identify exactly where the inefficiencies are and quantify the improvement opportunities. This is where most PE firms differentiate themselves—not in finding deals, but in accurately sizing the value creation potential and having conviction in their ability to execute.

The first area I'd dig into is revenue cycle management, which is healthcare-speak for "how do you turn services rendered into cash collected." This is where most physician-owned practices leave massive amounts of money on the table. AOG has a 12% claim denial rate, meaning 12% of all claims submitted to insurance companies get rejected. The industry benchmark for well-run practices is 4-6%. Why is AOG so much worse? Through due diligence, I'd discover several root causes.

First, they're using outdated practice management software that hasn't been upgraded in twelve years. The medical coding—translating clinical documentation into standardized ICD-10 diagnosis codes and CPT procedure codes—is done manually by staff who were hired as general medical billers, not specialists in orthopedic coding. Orthopedics is actually quite complex from a coding perspective because procedures have multiple components, modifiers matter for reimbursement, and the distinction between similar codes can mean a $500 difference in payment. An arthroscopic meniscectomy has different codes depending on whether it's partial or total, medial or lateral, with or without chondroplasty. Get any of those details wrong, and the claim gets denied.

Second, AOG doesn't have a systematic denial management process. When claims get denied, they land in a queue that one person checks sporadically. About 40% of denied claims never get appealed because by the time someone looks at them, the appeal window has closed or the staff doesn't have the expertise to write effective appeals. Here's the thing about denials: many are recoverable if you act quickly and provide the right documentation. But it requires dedicated staff who understand payer-specific denial reasons and know how to navigate the appeals process. AOG is literally leaving $380,000 per year on the table in winnable appeals they're not pursuing.

Third, they only verify insurance eligibility when patients check in at the front desk. If a patient's insurance has lapsed or they've hit their benefit cap, the practice doesn't discover this until after they've provided the service and tried to bill. By then, you're stuck trying to collect from the patient, which has a much lower success rate than insurance collections. About 15% of patients have eligibility issues that create eventual bad debt write-offs totaling $240,000 annually.

The days in accounts receivable—how long it takes from seeing a patient to collecting payment—is 58 days. Best-in-class practices run at 35-40 days. The longer money sits in A/R, the less likely you are to ever collect it. AOG's problem is primarily slow payment posting and follow-up. When checks arrive from insurance companies, it takes 4-6 days to post them manually to patient accounts. During that time, underpayments go undetected and no one's following up on aging claims.

Here's what I'd implement: First, upgrade to modern practice management software with integrated revenue cycle management. Second, implement AI-powered medical coding that automatically suggests appropriate codes based on clinical documentation. Companies like Charta, Nuance (owned by Microsoft), and several other startups already offer transformer-based NLP models fine-tuned on medical notes. These models can be trained on historical coding patterns to predict diagnosis and procedure codes with 92-95% accuracy. The remaining cases get flagged for human review when the model confidence is low. This dramatically reduces coding errors and speeds up the coding process.

Third, build a predictive denial model using gradient boosting (something like XGBoost) trained on three years of claims history. The features would include things like: historical denial rate for this specific payer, this specific procedure code, whether prior authorization was obtained, documentation completeness scores, patient eligibility verification status, and dozens of other variables. The model predicts denial probability before submission. High-risk claims get extra review, missing documentation gets obtained, and errors get corrected before submission rather than after denial. This prevents denials rather than just managing them after the fact.

Fourth, implement automated eligibility verification at scheduling time, not check-in. When a patient calls to book an appointment, the system pings their insurance in real-time to verify active coverage. If there's an issue, you know before they arrive, and you can either resolve it or have the patient pay cash up front.

The cumulative impact of these revenue cycle improvements: reduce coding errors from 8% to 1.5%, drop the denial rate from 12% to 4%, reduce days in A/R from 58 to 38 days, and improve overall collection rate from 88% to 93%. The financial impact is roughly $1.42 million annually—$800,000 from recovered previously-denied claims and faster appeals, and $620,000 from accelerated cash collection that reduces working capital needs and avoids write-offs on aging A/R. This alone would increase EBITDA from $2.4 million to $3.8 million, a 58% improvement.

## Capacity Optimization Through Intelligent Scheduling

The second major opportunity is scheduling and capacity utilization. Here's a surprising fact about medical practices: physicians spend enormous amounts of time sitting idle because their schedules are inefficiently managed. AOG's physicians see an average of 14 patients per day, but the benchmark for orthopedics is 18-20 patients per day for a full-time physician. That's 4-6 additional patient slots per day per physician going unfilled. With six physicians, that's 24-36 missed patient encounters daily, which at an average of $275 per visit equals $110,000-160,000 in lost weekly revenue.

Why is the schedule so poorly utilized? Several reasons. First, AOG uses rigid time-slot templates that don't reflect actual duration variability. Every new patient consultation gets a 30-minute slot, but in reality, some take 15 minutes (simple problem, clear diagnosis) while others take 45 minutes (complex multi-joint issues, extensive imaging review, long discussion of surgical options). When you assume everything takes exactly 30 minutes, you create systematic mismatches. Quick patients end early, leaving physicians idle until the next scheduled slot. Complex patients run over, creating cascading delays that back up the afternoon schedule.

Second, AOG has an 18% no-show rate—almost double the industry benchmark of 10-12%. When a patient doesn't show up and you haven't overbooked, you have a physician sitting idle for 30 minutes earning zero revenue. Over a year, 18% no-shows on 32,000 scheduled visits means 5,760 wasted slots. Even if you could only recover half of those through better overbooking strategies, that's 2,880 additional visits worth $792,000 in revenue.

Third, the practice has no systematic way to predict which patients are likely to no-show, so they can't intelligently overbook. They know anecdotally that Friday afternoon appointments and Medicaid patients have higher no-show rates, but they don't use this information systematically. And they don't have a waitlist management system—when someone cancels or no-shows, the slot just goes empty even though there might be patients willing to come in same-day.

Fourth, exam room utilization is poor. They have 12 exam rooms across three locations, but because of scheduling inefficiencies, rooms sit empty about 25% of the time during business hours. It's not that there aren't enough patients—new patient wait times are 21 days, suggesting excess demand. The problem is matching patient availability to physician availability to room availability in real-time. Alternatively, startups liek Assort Health are providing scheduling agents and voice AI in bound call management. 

Here's what I would experiment with in house: Build an AI-powered scheduling system using reinforcement learning. We'd model the scheduling problem as a Markov Decision Process where the state includes the current schedule, available resources (physicians, rooms, equipment), and the patient queue. Actions are decisions about which patient to schedule in which slot with which provider. The reward function balances multiple objectives: maximize revenue (fill slots), minimize wait times (patient satisfaction), avoid overtime (physician burnout), and maintain continuity of care (patients seeing their primary surgeon when possible).

We'd train the policy using Proximal Policy Optimization (PPO) on two years of historical scheduling data—every appointment, every no-show, every cancellation, every room delay. The model learns patterns like: "30% of Monday 8am appointments with this patient demographic characteristic no-show, so we should overbook by 1.3x for those slots specifically" and "This surgeon typically runs 15 minutes behind after lunch, so add buffer time to afternoon schedules" and "Sports medicine procedures take 22 minutes on average, not 30, so we can fit more in."

The no-show prediction model is a separate component. We'd train a gradient boosting classifier on features like: patient's personal no-show history (past behavior is the best predictor), appointment lead time (appointments made 2+ weeks out have higher no-show rates), time of day, day of week, weather forecast, distance from clinic to patient home, insurance type (Medicaid and self-pay have higher no-show rates), appointment type (follow-ups have lower no-show rates than new patients), patient age, and whether the patient confirmed the appointment via automated reminders.

For patients with predicted no-show probability above 30%, we implement smart overbooking. For example, if we predict a Friday 3pm slot has 40% no-show probability, we book 1.4 patients into that slot—the primary appointment plus a "waitlist preferred" patient who gets called that morning and asked if they can come in on short notice. We build a panel of patients who want earlier appointments and are willing to come in same-day if called.

The financial impact: Reduce no-show rate from 18% to 9% through better reminders and overbooking. Increase physician utilization from 14 to 18 patients per day through better duration modeling and schedule optimization. Improve same-day fill rate from 42% to 75% through intelligent waitlist management. The cumulative revenue impact is approximately $1.24 million annually—this is nearly pure margin because you're using existing physician capacity more efficiently rather than hiring additional physicians.

## Reducing Physician Administrative Burden

The third major opportunity is reducing the massive administrative burden that physicians carry. AOG's physicians spend about 95 minutes per day on non-clinical tasks: 45 minutes documenting patient encounters in the EHR, 30 minutes completing prior authorizations for procedures and medications, and 20 minutes coordinating referrals and care transitions. That's nearly two hours of every physician's day spent on paperwork instead of seeing patients. If we could cut this administrative time in half, each physician could see 2-3 additional patients per day, which translates to significant revenue opportunity.

The documentation burden is particularly problematic. After every patient encounter, physicians must write detailed SOAP notes (Subjective, Objective, Assessment, Plan) in the electronic health record. These notes need to be comprehensive enough to justify billing codes, meet regulatory requirements, and provide continuity of care for other providers. But typing these notes is slow and takes physicians away from patient care. Many physicians stay late after hours to finish their charting, leading to burnout.

Here's what I would implement: Deploy an ambient AI medical scribe system that uses speech-to-text technology like OpenAI's Whisper combined with a large language model like GPT-4. The system listens to the patient encounter in real-time, transcribes the conversation, and automatically generates a structured SOAP note. The physician reviews and approves the note in about 2 minutes versus spending 15 minutes writing it from scratch. This cuts documentation time by 70% and lets physicians leave on time instead of staying late to finish charts.

For prior authorizations, I'd build an LLM-powered agent that automatically extracts clinical information from encounter notes, auto-fills the payer-specific prior authorization forms, submits them electronically via payer portals, and tracks approval status. This turns a 30-minute manual process into a 5-minute review-and-approve workflow. The cumulative impact is reducing physician administrative time from 95 minutes per day to about 30 minutes, freeing up roughly an hour per day per physician. That hour enables 2 additional patient appointments per day, generating approximately $890,000 in additional annual revenue across six physicians.

## Supply Chain and Procurement Optimization

The fourth opportunity is supply chain optimization, which is classic PE operational improvement. AOG currently purchases surgical implants and supplies through a Group Purchasing Organization (GPO), but they're not leveraging their volume effectively. About 80% of their implants come from a single vendor, which gives them limited negotiating power. They track inventory manually, leading to frequent stock-outs that require emergency orders at premium pricing. They also write off about $45,000 annually in expired supplies that sat on shelves too long.

The traditional PE playbook here is straightforward but highly effective. Once we've acquired 3-4 additional practices in years 3-5 (the roll-up strategy), we aggregate purchasing volume across all 7 locations. We then run a competitive RFP process with the three major orthopedic implant manufacturers—Stryker, Zimmer Biomet, and DePuy Synthes. With combined annual implant spending of roughly $2 million across the platform, we have real negotiating leverage. We can credibly negotiate a 22% price reduction by playing vendors against each other and committing to volume guarantees.

We'd also implement automated inventory management software that tracks usage patterns, predicts demand, sets reorder points, and monitors expiration dates. This eliminates stock-outs and reduces waste. The financial impact is substantial: reducing implant cost per joint replacement from $4,200 to $3,100 saves about $1,100 per case. With 180 joint replacements annually, that's $198,000. Similar savings on arthroscopy supplies and other surgical consumables brings total supply chain savings to approximately $450,000 annually. This is pure margin improvement—same revenue, lower costs.

## The Platform Roll-Up Strategy

Once we've successfully transformed AOG over the first 18-24 months—proven the operational improvements work, implemented the technology stack, and expanded margins from 20% to 28%—we'd begin the roll-up strategy in years 3-5. This is where we acquire 3-4 additional orthopedic practices and integrate them into the platform. We'd target practices with similar profiles: established patient bases, good physician talent, reasonable financial performance, but operationally inefficient. Each acquisition would be structured similarly to the original AOG deal, paying roughly 7.0x EBITDA.

The three target practices might look like this: Practice A generates $8 million in revenue with $1.2 million EBITDA (15% margin), which we'd acquire for $8.4 million. Practice B generates $6 million in revenue with $900,000 EBITDA (also 15% margin), purchased for $6.3 million. Practice C generates $5 million in revenue with $750,000 EBITDA (15% margin), purchased for $5.3 million. Combined with AOG, we now have a $31 million revenue platform with 14 physicians across 7 locations.

The integration synergies come from several sources. First, we centralize all billing and revenue cycle management into a single shared services center, eliminating duplicate billing staff and applying our proven revenue cycle improvements to the newly acquired practices. This generates approximately $400,000 in annual savings per acquired practice. Second, we unify the IT infrastructure—everyone gets on the same practice management system, EHR, scheduling system, and AI tools. This enables data sharing, standardization, and economies of scale. Third, we consolidate purchasing through the aggregated supply chain strategy I described earlier, giving us real negotiating leverage with vendors.

Fourth, we implement shared marketing and patient acquisition strategies across all locations. A unified digital presence, consolidated Google Ads spend, and systematic referral relationship management improves efficiency. Fifth, we create consolidated compliance, HR, and administrative functions—one CFO, one head of HR, one compliance officer serving the entire platform rather than each practice having its own. And sixth, we enable clinical synergies through cross-referrals between locations, shared subspecialty expertise (maybe one surgeon specializes in shoulders, another in knees, another in sports medicine), and standardized clinical protocols that spread best practices.

The platform benefits extend beyond just cost savings. We can negotiate better contracts with commercial insurance payers because we represent a larger patient base and broader geographic coverage. We have stronger relationships with hospitals and surgery centers because we're channeling more volume. We can recruit better physician talent because we offer a more sophisticated practice environment with better technology and support. And we build organizational resilience—we're not dependent on any single location or physician for our success.

## Exit Strategy and Value Creation

By year 5, we've transformed the original $12 million single-site practice into a $24.1 million multi-site platform. AOG has grown organically through improved capacity utilization and patient acquisition, and we've successfully integrated three add-on acquisitions. More importantly, we've expanded EBITDA from the original $2.4 million at 20% margin to $6.7 million at 28% margin. We now have 7 locations across the metro region, 14 physicians (double the original six), proprietary AI systems that create competitive advantages, and a professional management team that can operate the business without requiring PE firm involvement daily.

When it comes time to exit, we'd likely pursue one of three paths: sale to a larger healthcare system that wants to acquire a turnkey orthopedic service line, sale to a publicly-traded physician practice management company like USPI or Surgery Partners, or sale to another private equity firm looking to continue the roll-up strategy into an even larger platform. The buyer we'd target depends on market conditions and strategic fit, but all three buyer types would value what we've built.

The exit valuation would be 8.0x EBITDA versus our 7.0x entry multiple. Why the multiple expansion? Several reasons. First, we've built a scaled platform rather than a single-site practice—scale reduces risk and increases strategic value. Second, we've demonstrated a proven integration playbook with three successful add-on acquisitions, making it clear this platform can continue growing. Third, the proprietary AI systems and superior operational metrics create a competitive moat that's hard to replicate. Fourth, our 28% EBITDA margins are substantially better than the industry average, demonstrating operational excellence. Fifth, we have a strong professional management team in place, so the business isn't dependent on the owner (us) or any single physician. And sixth, there's a clear growth pipeline—we can show the buyer exactly which practices to acquire next to continue the consolidation strategy.

At 8.0x EBITDA on $6.7 million, the enterprise value is $53.6 million. We pay off the remaining debt of $3.2 million (down from the original $8.4 million through steady paydown using operating cash flow over five years), leaving $50.4 million in equity value. We originally invested $8.4 million of equity, so that's a 6.0x multiple on invested capital—we got back 6 times what we put in. The annualized internal rate of return is 43.1% over the five-year holding period.

Breaking down the value creation sources makes the story even clearer. EBITDA growth from $2.4 million to $6.7 million contributes $32.3 million of value, which is 76.9% of total value creation. This is the real operational improvement—fixing revenue cycle, optimizing scheduling, reducing physician admin burden, consolidating supply chain, and integrating add-on acquisitions. Multiple expansion from 7.0x to 8.0x contributes $6.7 million or 15.9% of value—this is the benefit of building a better business that commands a premium valuation. Debt paydown contributes $3.5 million or 8.3% of value—this is mechanical, using cash flow to reduce leverage. And working capital improvements contribute -$0.4 million or -1.0% of value from increased working capital needs as the business scales (this is normal for growing businesses).

The key insight is that 77% of value creation comes from genuine EBITDA improvement, not from financial engineering or multiple expansion. This is what makes it a compelling investment thesis—we're creating real operational value, not just playing financial games. The margins we've achieved (28%) are sustainable and defensible. The revenue growth is organic and acquisition-driven. The technology implementations create lasting competitive advantages. And the platform we've built has clear paths to continue growing post-exit.

## Managing Risks and Building Resilience

No investment is without risks, and it's important to think through what could go wrong and how to mitigate those risks. The first major risk is physician retention. If key physicians leave and take their patient panels with them, the business could deteriorate quickly. We'd mitigate this through long-term employment agreements with meaningful economic incentives, opportunities for physicians to earn equity ownership in the platform, compelling career development paths including leadership roles and subspecialty development, and competitive compensation packages. The goal is to make AOG a more attractive place to practice than competing options.

The second risk is reimbursement cuts from Medicare or commercial insurers. If reimbursement rates drop 5-10%, margins compress immediately. We'd mitigate this by diversifying the payer mix toward higher-paying commercial insurance and away from lower-paying Medicare and Medicaid. We'd also expand high-margin ancillary services that aren't as subject to reimbursement pressure. And we'd focus on outpatient procedures performed at ambulatory surgery centers, which have more favorable economics than hospital-based care and are less vulnerable to Medicare payment cuts.

The third risk is technology implementation delays or underperformance. What if the AI systems don't work as well in practice as we projected? We'd mitigate this through staged rollouts with extensive pilot testing before full deployment, iron-clad vendor support agreements with service level commitments and financial penalties for non-performance, and maintaining manual backup processes so the practice can continue operating if technology fails. We'd also build conservative assumptions into our financial projections—if AI coding reduces denial rates from 12% to 6% instead of 4%, we're still creating meaningful value.

The fourth risk is acquisition integration challenges. Add-on acquisitions might not deliver the expected synergies due to cultural resistance, system incompatibilities, or hidden operational problems. We'd mitigate this through extremely detailed due diligence that uncovers issues before we commit capital, a proven integration playbook developed from the AOG transformation that we can systematically apply to subsequent deals, conservative synergy assumptions in our models (we only count 70% of theoretical synergies), and dedicated integration resources and project management to execute smoothly.

The fifth risk is regulatory changes. New regulations could limit private equity ownership of medical practices, change billing rules, or impose additional compliance burdens. We'd mitigate this by maintaining a physician-friendly governance structure where doctors have meaningful input into clinical decisions, building a strong compliance culture with robust policies and regular training, staying actively involved in healthcare policy discussions through industry associations, and monitoring legislative developments so we can adapt proactively rather than reactively.

## Why This Approach Works

This framework demonstrates several capabilities that are valuable in private equity and growth equity roles. First, it shows financial modeling skills—I can build a complete LBO model with realistic assumptions, calculate returns across multiple scenarios, and understand how leverage amplifies equity returns. I know how to value businesses using EBITDA multiples, structure capital stacks with appropriate debt and equity layers, and model debt paydown schedules.

Second, it demonstrates operational expertise. I understand how medical practices actually work, from revenue cycle management to clinical operations to supply chain procurement. I can identify specific inefficiencies, quantify their financial impact, and design concrete solutions. I know industry benchmark metrics and can compare a target's performance against best-in-class standards. This isn't just theoretical knowledge—it's the kind of detailed operational understanding that comes from studying how businesses actually function.

Third, it shows technology vision with practical application. I'm not just saying "AI will fix everything"—I'm specifying exactly which AI techniques would be applied to which problems, how they would be implemented, what the realistic success metrics are, and what the quantified ROI would be. Whether it's transformer-based NLP for medical coding, gradient boosting for denial prediction, or reinforcement learning for scheduling optimization, I understand both the technology and the business application well enough to make credible implementation plans.

Fourth, it demonstrates strategic thinking beyond a single deal. I can see how to build a platform through acquisitions, identify integration synergies, design consolidation strategies, and position a business for an optimal exit. I understand how to create sustainable competitive advantages through technology, operational excellence, and scale. And I can articulate why a buyer would pay a premium multiple for what we've built.

Most importantly, it shows I can think like an investor while executing like a consultant. I have the returns-focused mindset that prioritizes value creation and understands what drives PE returns. But I also have the detailed action orientation that can break down high-level strategies into specific implementation plans with timelines, owners, and success metrics. I can model the deal, identify the operational improvements, design and implement the technology stack, create aligned incentive structures, and execute the integration playbook. That's the complete package that PE firms look for—someone who can underwrite deals thoughtfully, and then roll up their sleeves and actually create the value.

## Final Thoughts and Caveats

This is obviously simplified compared to what a real due diligence and value creation plan would entail. In reality, you'd uncover dozens of additional issues and opportunities that aren't captured here. Several key assumptions could be wrong and would need to be validated: historical correlations between operational improvements and financial outcomes might not hold in AOG's specific situation, AI systems often underperform in real deployment compared to pilot studies, physicians frequently resist change more than anticipated, the payer environment could deteriorate faster than our models assume, and competitive dynamics might shift if other PE firms start targeting the same practices.

But the fundamental framework is sound: find operationally inefficient businesses in fragmented markets, professionalize operations using proven best practices, implement technology that creates genuine competitive advantages, build a platform through systematic consolidation, and exit to a strategic buyer at a premium valuation multiple. That's the PE playbook, and it works across many industries beyond just healthcare.

The AI components are force multipliers that create genuine competitive advantages rather than just commodity roll-ups. Many PE firms can consolidate practices and negotiate better supply chain pricing—that's table stakes. But building proprietary AI systems that demonstrably improve clinical and financial outcomes creates something that's harder for competitors to replicate. That's the difference between a good investment and a great one.`
  },
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
