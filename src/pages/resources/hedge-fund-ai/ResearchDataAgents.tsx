import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const ResearchDataAgents = () => {
  const content = `
## Overview

**In this section:**
- [Overview](#overview)
- [From Manual Research to Autonomous Discovery](#from-manual-research-to-autonomous-discovery)
- [Text to SQL Understanding](#text-to-sql-understanding)
- [Retrieval Augmented Generation](#retrieval-augmented-generation)
- [Multi Step Reasoning](#multi-step-reasoning)
- [Automated Report Generation](#automated-report-generation)
- [How Agents Traverse the Graph](#how-agents-traverse-the-graph)
- [How Agents Update Graphs in Practice](#how-agents-update-graphs-in-practice)
- [Agent Orchestration](#agent-orchestration)

## Overview

In traditional hedge fund research, analysts spend enormous time gathering data, cleaning it, and running exploratory analysis before they can even begin testing hypotheses. Research and data agents automate this front-end work, turning hours of manual querying into minutes of reasoning.

## From Manual Research to Autonomous Discovery

**Traditional workflow:**

An analyst needs to answer: "Which semiconductor companies have improving margins and strong pricing power?"

**Manual process:**
1. Open database tool
2. Write SQL query to pull revenue and cost data
3. Export to spreadsheet
4. Calculate margin trends manually
5. Search for earnings transcripts
6. Read through transcripts for pricing commentary
7. Cross reference with competitor data
8. Synthesize findings into notes

**Time**: 4-6 hours

**Agentic workflow:**

Analyst asks the same question in natural language.

Agent autonomously:

1. Translates question to SQL queries
2. Executes across multiple databases
3. Calculates margin trends and statistical significance
4. Retrieves relevant earnings call excerpts via RAG
5. Compares to competitors
6. Generates structured summary with charts

**Time**: 5-10 minutes

**The fundamental difference:**

Traditional tools wait for instructions. Agents reason about what information is needed and how to get it.

## Text to SQL Understanding

The most immediate capability is converting natural language questions into database queries. This democratizes data access across the entire research team.

**How it works:**

**Input**: "What were the top 10 stocks by revenue growth in technology last quarter?"

**Agent reasoning:**


\`\`\`

Thought: I need revenue data for tech companies
Action: Identify relevant tables (companies, financials)
Thought: Need to calculate growth rate
Action: Join tables, compute growth, filter by sector
Thought: Return top 10 results
Action: Generate and execute SQL
\`\`\`

**Generated query:**

\`\`\`

SELECT 
  c.company_name,
  (f.revenue_q4 - f.revenue_q3) / f.revenue_q3 AS growth_rate
FROM companies c
JOIN financials f ON c.company_id = f.company_id
WHERE c.sector = 'Technology'
ORDER BY growth_rate DESC
LIMIT 10;
\`\`\`

**Key capabilities:**

- **Schema awareness**: Agent understands database structure without being explicitly told
- **Error recovery**: If query fails, agent debugs and fixes it
- **Iterative refinement**: Can handle followup questions ("Now show me their P/E ratios")
- **Explanation**: Describes what the query does in plain English

**Example conversation:**

\`\`\`
Analyst: "Show me semiconductor companies"
Agent: [Returns list of 45 companies]

Analyst: "Filter to those with revenue over $1B"
Agent: [Returns 12 companies]

Analyst: "How have their margins changed year over year?"
Agent: [Generates analysis with trend chart]
\`\`\`

The agent maintains context across the conversation, building on previous queries rather than starting fresh each time.

### Implementation Architecture

**Model Selection**

Modern text-to-SQL systems use one of several approaches:

**1. Fine-tuned Large Language Models:**

- **Base models**: Llama, GPT-5, Claude, or Gemini fine-tuned on SQL generation tasks
- **Training datasets**: Spider (10,000 questions, 200 databases), WikiSQL, BIRD (cross-domain), and proprietary financial query datasets
- **Benefits**: High accuracy on complex queries, strong generalization
- **Drawbacks**: Higher latency (200-500ms), expensive inference

**2. Specialized Small Language Models (SLMs):**

- **Models**: T5-base or BART fine-tuned specifically for SQL (60M-200M parameters)
- **Training approach**: Supervised fine-tuning on domain-specific financial queries
- **Benefits**: Fast inference (<50ms), cost-effective, can run locally
- **Drawbacks**: Struggles with complex multi-join queries and edge cases

**3. Hybrid approach (recommended for production):**

- SLM handles simple queries (70% of cases)
- Route complex queries to larger model
- Classification model decides routing based on query complexity

**Schema Awareness via RAG**

The critical challenge in text-to-SQL is making models understand your specific database schema. This requires a RAG-based approach:

**1. Schema vectorization:**

\`\`\`

# Create rich schema representations
schema_documents = []
for table in database.tables:
    doc = f"""
    Table: {table.name}
    Description: {table.description}
    Columns: {', '.join([f"{col.name} ({col.type}): {col.description}" 
                          for col in table.columns])}
    Sample values: {table.get_sample_values()}
    Common queries: {table.common_query_patterns}
    """
    schema_documents.append(doc)

# Generate embeddings
embeddings = embed_model.encode(schema_documents)
store_in_vector_db(embeddings, metadata=schema_documents)
\`\`\`

**2. Query-time schema retrieval:**

When user asks a question:
1. Embed the natural language question
2. Retrieve top-k most relevant tables (typically k=3-5)
3. Include full schema of retrieved tables in prompt
4. Add foreign key relationships and constraints

**Example:**

\`\`\`

User query: "Show me companies with growing revenue"

Retrieved schema:
- companies (company_id, name, sector, market_cap)
- financials (company_id, year, quarter, revenue, expenses)
- Relationship: financials.company_id → companies.company_id
\`\`\`

**3. Few-shot examples:**

Include 3-5 similar examples from an example bank:

\`\`\`

Example 1:
Question: "Find tech companies with revenue over $1B"
SQL: SELECT c.name FROM companies c 
     JOIN financials f ON c.company_id = f.company_id
     WHERE c.sector = 'Technology' AND f.revenue > 1000000000

Example 2: [Most similar to user's query]
Example 3: [Covers similar join pattern]
\`\`\`

**Handling Complex Multi-Join Queries**

Complex queries require special handling:

**1. Query decomposition:**

\`\`\`

User: "Compare margin trends for semiconductor companies vs their suppliers"

Agent breaks down:
Step 1: Identify semiconductor companies
Step 2: Identify their suppliers (requires supply_chain table)
Step 3: Calculate margins for both groups
Step 4: Compare trends over time
\`\`\`

**2. Intermediate table strategy:**

For queries requiring >3 joins:

\`\`\`

-- Create temp table for semiconductors
WITH semiconductors AS (
  SELECT company_id, name 
  FROM companies 
  WHERE subsector = 'Semiconductors'
),
-- Get their financials
sem_financials AS (
  SELECT s.name, f.year, f.revenue, f.costs
  FROM semiconductors s
  JOIN financials f ON s.company_id = f.company_id
),
-- Identify suppliers
suppliers AS (
  SELECT DISTINCT c.company_id, c.name
  FROM companies c
  JOIN supply_chain sc ON c.company_id = sc.supplier_id
  WHERE sc.customer_id IN (SELECT company_id FROM semiconductors)
)
-- Final comparison
SELECT ...
\`\`\`

The agent learns to generate CTEs (Common Table Expressions) for readability and correctness.

**3. Self-correction loop:**

\`\`\`

max_attempts = 3
for attempt in range(max_attempts):
    sql_query = generate_sql(user_question, schema, examples)
    
    # Validate syntax
    if not validate_syntax(sql_query):
        error_feedback = get_syntax_error(sql_query)
        continue
    
    # Execute
    result = execute_query(sql_query)
    
    if result.is_error:
        # Feed error back to model
        sql_query = fix_query(sql_query, error=result.error_message, schema=schema)
    else:
        # Validate semantic correctness
        if validate_result_makes_sense(result, user_question):
            return result
\`\`\`

**4. Join path planning:**

For databases with many relationships, the agent uses a graph-based approach:

\`\`\`

Query: "Show companies with patents in AI that also invest in quantum computing"

Graph:
companies ← patents → patent_categories
companies ← investments → investment_areas

Agent finds shortest path:
companies → patents → patent_categories (filter: "AI")
companies → investments → investment_areas (filter: "Quantum")
Then INTERSECT the two company sets
\`\`\`

**Advanced Techniques**

**Column value disambiguation:**

Use value embeddings to understand semantics. When users ask questions using natural language terms, those terms often don't match the exact values stored in the database. For example, a user might say "tech companies" but the database stores "Information Technology" or "Software & Services".

The agent embeds both the user's query term and the actual column values into a semantic vector space, then uses cosine similarity to find the closest match. This allows fuzzy matching based on meaning rather than exact string matching.

The process:

1. Extract the user's filter term (e.g., "tech companies")
2. Embed it using the same model that understands domain terminology
3. For candidate columns (sector, industry, category), embed their distinct values
4. Compute cosine similarity between query embedding and each value embedding
5. Select the value with highest similarity score above a threshold (typically 0.7+)
6. Use that value in the WHERE clause

This handles synonyms ("biotech" → "Biotechnology"), abbreviations ("auto" → "Automotive"), and conceptual matches ("clean energy" → "Renewable Energy").

\`\`\`

# User asks about "tech companies" but database has:
# - sector column with value "Information Technology"
# - industry column with value "Software"

# Embed user term
query_embedding = embed("tech companies")

# Find closest column values
sector_similarity = cosine_sim(query_embedding, embed("Information Technology"))
industry_similarity = cosine_sim(query_embedding, embed("Software"))

# Use most similar in WHERE clause
\`\`\`

**Aggregation inference:**

Model learns implicit aggregations:

\`\`\`

"Average revenue" → needs GROUP BY for meaningful results
"Total market cap" → SUM(market_cap)
"Top 10" → ORDER BY + LIMIT 10
"Growing revenue" → requires multi-period query with LEAD/LAG
\`\`\`

**Date handling:**

Financial queries heavily use time periods:

\`\`\`

"Last quarter" → WHERE quarter = (SELECT MAX(quarter) FROM financials)
"Year over year" → Self-join with year offset
"Trailing twelve months" → SUM with date window
\`\`\`

The model is trained with extensive date expression examples to handle "Q3 2024", "past 6 months", "fiscal year 2023", etc.

**Production Considerations**

1. **Query caching**: 30-40% of analyst queries are variations of common patterns
2. **Explain plans**: Always run EXPLAIN to catch expensive queries before execution
3. **Result validation**: Check for empty results, unexpected row counts, or NULL-heavy columns
4. **Human-in-the-loop**: Flag ambiguous queries for clarification rather than guessing
5. **Audit logging**: Store question → SQL → results for debugging and model improvement

## Retrieval Augmented Generation

Valuable investment knowledge often lives in unstructured documents: research reports, earnings transcripts, SEC filings, internal memos. RAG lets agents search through this corpus and synthesize answers grounded in actual text.

**The RAG architecture:**

**1. Document preparation:**

- Ingest all company documents (PDFs, transcripts, reports)
- Break into chunks (typically 500-1000 tokens)
- Generate semantic embeddings for each chunk
- Store in vector database

**2. Query processing:**

Analyst asks: "What did management say about margin pressure in the last earnings call?"

- Generate embedding for question
- Search vector database for semantically similar passages
- Retrieve top 5-10 most relevant chunks

**3. Grounded generation:**

- Feed retrieved passages to language model
- Generate answer using only provided context
- Include source citations

**Example output:**

"Management acknowledged margin compression in Q2 2024 due to increased component costs, but characterized it as temporary and expects normalization by Q3. CFO noted that while raw material inflation created a 200 basis point headwind, improved operational efficiency offset approximately half of this impact. [Source: Q2 2024 Earnings Call Transcript, p.3]"

**What makes RAG powerful:**

- **Accuracy**: Answers are grounded in actual documents, not model hallucination
- **Citations**: Every claim can be traced back to source
- **Recency**: Works with documents added yesterday
- **Privacy**: Operates entirely on internal data

**Multi-source synthesis:**

Agents can combine structured data with unstructured text:

\`\`\`

Question: "Is Nike's revenue weakness macro or company-specific?"

Agent process:
1. Pull Nike revenue by geography (SQL)
2. Pull competitor revenue trends (SQL)
3. Retrieve macro consumer spending data (SQL)
4. Search earnings transcripts for management commentary (RAG)
5. Search analyst reports for consensus view (RAG)
6. Synthesize all sources into coherent answer
\`\`\`

**Output:**

"Nike's 8% revenue decline appears driven by both macro and company-specific factors. Consumer discretionary spending is down 3% YoY (macro), and competitors Adidas and Lululemon also show weakness. However, Nike's decline exceeds category average, with management citing inventory challenges and underperforming product launches (company-specific). [Sources: Internal database, Nike Q3 transcript, Goldman consumer sector report]"


**RAG implementation resources:**

For deeper technical understanding of RAG architectures, [Aman's AI Primers](https://aman.ai/primers/ai/RAG/) provides an excellent comprehensive guide covering embedding models, vector databases, and retrieval strategies.

Analytics Vidhya also has great visual explanations of RAG techniques on their [LinkedIn](https://www.linkedin.com/company/analytics-vidhya/) and [website](https://www.analyticsvidhya.com/), particularly helpful for understanding chunking strategies and hybrid search approaches.



## Multi Step Reasoning

Complex questions require agents to break down problems, gather information iteratively, and synthesize across multiple steps.

**Example complex query:**

"Which consumer discretionary companies have improved ROE while reducing debt over three years, and are these improvements sustainable based on competitive positioning?"

**Agent reasoning chain:**

**Step 1: Decompose question**

Need:

- ROE and debt metrics (quantitative)
- 3 years historical data
- Competitive assessment (qualitative)

**Step 2: Gather financial data**

\`\`\`

SELECT company_name, year, roe, debt_to_equity
FROM financials
WHERE sector = 'Consumer Discretionary'
  AND year >= 2022
\`\`\`

**Step 3: Calculate changes**

For each company:

- \\(\\Delta \\text{ROE} = \\text{ROE}_{2024} - \\text{ROE}_{2022}\\)
- \\(\\Delta \\text{Debt} = \\text{Debt}_{2024} - \\text{Debt}_{2022}\\)

Filter: Companies where ROE increased AND debt decreased

**Step 4: Qualitative analysis**

For filtered companies, use RAG to find:

- Recent analyst competitive assessments
- Management commentary on strategy
- Industry positioning reports

**Step 5: Synthesize**

Generate report:

- List of qualifying companies with metrics
- Competitive moat assessment for each
- Sustainability evaluation
- Investment implications

**Reasoning frameworks:**

**ReAct (Reasoning + Acting)**:

Agent alternates between thinking and doing:

\`\`\`

Thought: Need to identify consumer discretionary companies first
Action: Query database for company list
Observation: Found 45 companies
Thought: Now filter by improving financial metrics
Action: Calculate ROE and debt changes
Observation: 8 companies meet criteria
Thought: Need qualitative competitive assessment
Action: Search analyst reports via RAG
\`\`\`

**Chain of Thought (CoT)**:

Chain of Thought prompting forces the model to show its reasoning steps explicitly before generating an answer or action. This dramatically improves accuracy on complex reasoning tasks.

**How it works:**

Traditional prompting:

\`\`\`

Question: "Which companies have sustainable competitive advantages?"
Answer: [Model jumps directly to answer, may miss key reasoning]
\`\`\`

Chain of Thought prompting:

\`\`\`

Question: "Which companies have sustainable competitive advantages?"

Let me think through this step by step:
1. First, I need to define what makes a competitive advantage sustainable
   - High switching costs, network effects, brand moat, regulatory barriers
2. Then I need financial metrics that indicate advantage
   - Consistent high margins, pricing power, market share stability
3. Need to check multiple years to verify sustainability
   - Look at 5-year trends, not just current snapshot
4. Should also verify with qualitative factors
   - Management commentary, analyst assessments

Now I'll execute this plan:
[Takes actions based on reasoning chain]
\`\`\`

**The feedback loop:**

Each action generates an observation that gets fed back into the agent's context for the next reasoning step:

\`\`\`

[Turn 1]
Thought: I need to identify consumer companies first
Action: SELECT * FROM companies WHERE sector = 'Consumer Discretionary'
Observation: Found 45 companies

[Turn 2] 
Thought: Based on the 45 companies found, now I need their ROE data
         I should focus on the last 3 years for trend analysis
Action: SELECT company_id, year, roe FROM financials 
        WHERE company_id IN [45 companies] AND year >= 2022
Observation: Retrieved 135 records (45 companies × 3 years)

[Turn 3]
Thought: Looking at the ROE data, I can see variability across companies
         I need to calculate which ones show consistent improvement
         8 companies have ROE improvement each year
Action: Calculate compound annual growth rate of ROE
Observation: Top improver is Company X with 15% CAGR in ROE

\`\`\`

Each observation directly informs the next thought. The agent maintains a **reasoning trace** that accumulates evidence and narrows focus with each iteration.

**Why feedback matters:**

Without feeding observations back:

- Agent might repeat failed queries
- Can't adapt to unexpected data structure
- Unable to handle "no results found" scenarios

With feedback:

- Agent sees query returned 0 rows and tries different approach
- Notices data quality issues and adjusts
- Recognizes when it has sufficient information to answer

**Self-reflection:**

Advanced agents add a reflection step:

\`\`\`

Thought: I should query for companies with margin expansion
Action: [executes query]
Observation: Found 12 companies
Reflection: Wait, this seems low. Let me check if I'm filtering correctly.
          Looking at the data, I filtered for >10% margin expansion.
          That's too aggressive for this sector. Let me retry with >5%.
Action: [executes revised query]
Observation: Found 34 companies - this makes more sense
\`\`\`

### Planning and Task Maintenance

Modern agents maintain an explicit task list, similar to how code editors track TODOs. This provides structure to complex multi-step workflows.

**Task decomposition:**

When given a complex query, the agent first creates a task plan:

\`\`\`

User request: "Analyze Tesla's competitive position in EVs"

Agent generates task list:
[ ] 1. Gather Tesla financial metrics (revenue, margins, market cap)
[ ] 2. Gather competitor data (Rivian, Lucid, BYD, Ford, GM)
[ ] 3. Calculate market share trends
[ ] 4. Compare unit economics (gross margin per vehicle)
[ ] 5. Retrieve qualitative assessments from analyst reports
[ ] 6. Synthesize findings into competitive positioning analysis

Now executing tasks...
\`\`\`

**Task state tracking:**

As the agent works, it updates task status:

\`\`\`

[✓] 1. Gather Tesla financial metrics
    → Retrieved: Revenue $96.8B, Auto margin 18.2%, Market cap $789B
    
[→] 2. Gather competitor data
    → In progress: Retrieved Rivian and Lucid data
    → Pending: BYD, Ford, GM
    
[ ] 3. Calculate market share trends
[ ] 4. Compare unit economics
[ ] 5. Retrieve qualitative assessments
[ ] 6. Synthesize findings
\`\`\`

**Dynamic replanning:**

If a task fails or reveals new information, the agent adjusts the plan:

\`\`\`

[✓] 1. Gather Tesla data
[✗] 2. Gather competitor data
    → Error: BYD data not in our database
    
Agent adds new subtask:
[ ] 2a. Search external data source for BYD financials
[ ] 2b. If unavailable, note limitation in final analysis

Updated plan continues with 2a...
\`\`\`

**Hierarchical planning:**

Complex tasks create nested sub-plans:

\`\`\`

[ ] Task 1: Analyze semiconductor supply chain resilience
    [ ] 1.1: Identify critical nodes (foundries, equipment, materials)
    [ ] 1.2: Assess geographic concentration
        [ ] 1.2.1: Map fab locations
        [ ] 1.2.2: Identify geopolitical risks
    [ ] 1.3: Evaluate alternative sourcing options
\`\`\`

This structure is exactly like nested bullet points in code editors - each level can be expanded or collapsed, and sub-tasks inherit context from parent tasks.

**Benefits of explicit task tracking:**

1. **Progress visibility**: User can see what's being worked on
2. **Interruptibility**: Can pause and resume complex workflows
3. **Debugging**: Easy to see where reasoning went wrong
4. **Efficiency**: Avoid redundant work by checking completed tasks
5. **Parallelization**: Independent tasks can run concurrently

**Implementation in practice:**

\`\`\`

class AgentTaskManager:
    def __init__(self):
        self.tasks = []
        self.completed = []
        self.failed = []
    
    def decompose_query(self, user_query):
        # Use LLM to break down complex query
        task_plan = llm.generate_task_plan(user_query)
        self.tasks = task_plan
        
    def execute_next_task(self):
        if not self.tasks:
            return self.synthesize_results()
        
        current_task = self.tasks[0]
        result = self.execute_with_retry(current_task)
        
        if result.success:
            self.completed.append((current_task, result))
            self.tasks.pop(0)
        else:
            # Attempt to replan or mark as failed
            alternative = self.generate_alternative(current_task, result.error)
            if alternative:
                self.tasks.insert(1, alternative)
            else:
                self.failed.append(current_task)
                self.tasks.pop(0)
        
        return self.execute_next_task()
\`\`\`

**The LLM prompt for task decomposition:**

The task manager relies on carefully crafted prompts to break down complex queries into actionable subtasks. Here's what that prompt looks like:

\`\`\`
You are a task planning assistant for financial research. Given a user query, decompose it into a hierarchical list of concrete, executable subtasks.

User Query: "{user_query}"

Requirements:
1. Break the query into 3-7 main tasks
2. Each main task can have 2-5 subtasks
3. Tasks should be specific and actionable (e.g., "Fetch P/E ratio for AAPL" not "Analyze Apple")
4. Order tasks by dependency (data gathering before analysis)
5. Mark tasks as [data], [analysis], or [synthesis]
6. Include success criteria for each task

Output format:
[ ] Main Task 1 [type]
    [ ] Subtask 1.1
    [ ] Subtask 1.2
[ ] Main Task 2 [type]
    [ ] Subtask 2.1

Example:
Query: "Should I invest in semiconductor stocks?"

[ ] 1: Gather semiconductor sector data [data]
    [ ] 1.1: Fetch current valuations for top 10 semiconductor companies
    [ ] 1.2: Get revenue growth rates for past 3 years
    [ ] 1.3: Retrieve analyst consensus ratings
[ ] 2: Analyze industry trends [analysis]
    [ ] 2.1: Identify cyclical patterns in chip demand
    [ ] 2.2: Assess geopolitical risks (China/Taiwan)
[ ] 3: Compare to alternatives [analysis]
    [ ] 3.1: Calculate risk-adjusted returns vs tech sector
    [ ] 3.2: Evaluate correlation with portfolio holdings
[ ] 4: Generate recommendation [synthesis]
    [ ] 4.1: Synthesize findings into investment thesis
    [ ] 4.2: Provide position sizing guidance

Now decompose the user's query:
\`\`\`

This prompt engineering approach ensures the LLM produces structured, executable task plans that the \`AgentTaskManager\` can process systematically. The explicit formatting and examples guide the model to generate consistent, actionable decompositions.


### How Reasoning Models Are Created

The breakthrough in reasoning agents comes from specialized training techniques that teach models to think step-by-step rather than jumping to conclusions.

**Training Data Collection**

**1. Human-annotated reasoning chains:**

Collect examples where humans show their work:

\`\`\`

Question: "Is Amazon overvalued?"

Expert reasoning trace:
- First, let me establish valuation framework
  - Will use P/E ratio and DCF analysis
- Get current metrics:
  - Amazon P/E: 47x vs sector median 22x
  - This suggests premium valuation
- But need to account for growth:
  - Revenue CAGR: 22% vs sector 8%
  - Higher growth justifies higher multiple
- Calculate justified P/E using PEG ratio:
  - PEG = P/E / Growth = 47/22 = 2.1
  - PEG > 2 suggests overvaluation
- Cross-check with DCF:
  - [Detailed DCF calculation steps]
  - Fair value: $145 vs current $165
- Conclusion: Moderately overvalued by 12-15%

Answer: Based on analysis, Amazon appears moderately overvalued...
\`\`\`

Annotators are domain experts (financial analysts) who document their thinking process. Thousands of these examples across different query types form the training corpus.

**2. Synthetic data generation:**

Use strong models (GPT-5, Claude) to generate reasoning chains:

\`\`\`

# Generate reasoning examples programmatically
questions = [
    "Which tech companies have pricing power?",
    "Is inflation transitory or persistent?",
    "Should I overweight energy stocks?"
]

for question in questions:
    # Prompt strong model to show detailed reasoning
    reasoning_chain = strong_model.generate(
        f"Think through this step-by-step: {question}"
    )
    
    # Verify the reasoning leads to correct answer
    if validate_reasoning(reasoning_chain):
        training_examples.append({
            "question": question,
            "reasoning": reasoning_chain,
            "answer": extract_answer(reasoning_chain)
        })
\`\`\`

**3. Trace distillation:**

Record actual agent interactions and extract successful reasoning patterns:

\`\`\`

# Collect thousands of agent sessions
sessions = database.get_successful_agent_traces()

for session in sessions:
    # Extract: question → reasoning steps → actions → final answer
    training_data.append({
        "input": session.user_query,
        "reasoning_trace": session.thoughts,
        "actions": session.actions,
        "observations": session.observations,
        "output": session.final_answer
    })
\`\`\`

**Training Scheme**

**Phase 1: Supervised Fine-Tuning (SFT)**

Train on explicit reasoning chains:

\`\`\`

Training examples formatted as:
<question>{user_query}</question>
<reasoning>
Step 1: {first_thought}
Step 2: {second_thought}
...
</reasoning>
<answer>{final_answer}</answer>

Loss function penalizes:
- Skipping reasoning steps
- Incorrect reasoning logic
- Answers not grounded in reasoning

\`\`\`

**Phase 2a: Direct Preference Optimization (DPO)**

Alternative to RLHF that directly optimizes for preferred reasoning patterns:

\`\`\`

# Create preference pairs from agent traces
for query in queries:
    # Generate two reasoning traces
    trace_a = agent.generate(query, temperature=0.7)
    trace_b = agent.generate(query, temperature=0.7)
    
    # Human evaluator picks better trace
    preferred, rejected = human_evaluate(trace_a, trace_b)
    
    preference_pairs.append({
        "query": query,
        "chosen": preferred,
        "rejected": rejected
    })

# DPO loss directly optimizes policy
# No separate reward model needed
\`\`\`

Benefits over RLHF:

- Simpler: no reward model training
- More stable: direct optimization
- Faster: fewer training stages


**Phase 2b: Reinforcement Learning from Human Feedback (RLHF)**

Reward models that:

- Show detailed reasoning
- Take appropriate actions
- Recover from errors
- Arrive at correct conclusions

\`\`\`

For each reasoning trace:
- Human evaluators score quality (1-5)
- High scores for: clear logic, appropriate tool use, correct answers
- Low scores for: logical leaps, hallucination, wrong tools

Train reward model on these preferences
Use PPO to optimize agent policy against reward model
\`\`\`

**Phase 3: Process Supervision**

Instead of only rewarding final answers, reward each reasoning step:

\`\`\`

Question: Calculate enterprise value

Step 1: "I need market cap, debt, and cash" ✓ Correct
Step 2: "Query database for these metrics" ✓ Correct  
Step 3: "EV = Market Cap + Debt - Cash" ✓ Correct
Step 4: "EV = $500B + $100B - $50B = $550B" ✓ Correct

vs.

Step 1: "I need market cap" ✗ Incomplete
Step 2: "EV = Market Cap" ✗ Wrong formula
\`\`\`

This teaches the model not just *what* to conclude, but *how* to think.

**Phase 4: Self-Play and Constitutional AI**

Agent generates reasoning traces, critiques itself, and learns from corrections:

\`\`\`

Agent generates:
"Company X has competitive advantage because revenue grew 20%"

Self-critique:
"Wait, revenue growth alone doesn't indicate competitive advantage.
 I should check if growth exceeds competitors and if margins are high.
 Let me revise my reasoning..."

Revised reasoning:
"Company X revenue grew 20% vs sector average 8%, AND maintained 
 40% gross margins vs sector 25%. This combination suggests 
 competitive advantage, not just market tailwinds."
\`\`\`

**Training infrastructure:**

- **Dataset size**: 100K-500K reasoning chains for financial domain
- **Model size**: 7B-70B parameters (Llama, Mistral architectures)
- **Training time**: 1-2 weeks on 64-256 GPUs
- **Validation**: Hold-out test set of novel financial questions
- **Continuous learning**: Retrain monthly with new human feedback

**Key innovations:**

1. **Outcome-supervised learning** → **Process-supervised learning**
2. **Single-turn responses** → **Multi-turn reasoning loops**
3. **Text-only training** → **Tool use in training** (SQL, Python, APIs)
4. **Generic knowledge** → **Domain-specific financial reasoning**

The result: Models that don't just know finance, but know how to *reason about* finance the way expert analysts do.

## Automated Report Generation

Once information is gathered, agents can generate comprehensive research reports in standard formats.

**Example workflow:**

**Input**: "Generate quarterly sector review for semiconductors"

**Agent actions:**

1. **Gather data**: Financial metrics for all semiconductor companies
2. **Performance analysis**: Rank by revenue growth, margin trends, valuation
3. **Retrieve context**: Search for relevant news, earnings commentary
4. **Competitive dynamics**: Analyze market share shifts
5. **Generate narrative**: Write coherent story connecting the data
6. **Create visualizations**: Charts for key trends
7. **Format report**: Apply firm's standard template

**Report structure:**

\`\`\`

Semiconductor Sector Review - Q3 2024

Executive Summary

• Sector returned +12% vs S&P 500 +6%
• AI demand remains primary driver
• Memory pricing stabilizing after 18-month decline

Financial Highlights

[Table of key metrics by company]

Top Performers

• NVDA: +45% on datacenter strength
• AVGO: +18% on networking demand

Market Dynamics
[Analysis of supply/demand, capacity, pricing]

Outlook
[Forward looking assessment with risks]
\`\`\`

**Customization:**

Agents adapt reports to:

- Audience (portfolio managers vs clients vs compliance)
- Depth (executive summary vs deep dive)
- Focus (thematic vs company-specific)
- Format (PDF vs presentation vs email)

## Knowledge Graph Integration

In large funds, multiple research agents can work in parallel, each focused on different alpha hypotheses, macro themes, or data domains. Their findings feed into a shared knowledge graph that grows richer over time.

### Building the Ontology

A knowledge graph starts with an **ontology** - the formal schema that defines what types of entities and relationships can exist. Building this ontology is a deliberate, iterative process.

**Phase 1: Define core entity types**

Start with the fundamental objects in your investment universe:

\`\`\`

Core entity types:
- Company (ticker, name, market_cap, sector)
- Person (executives, board members, analysts)
- Financial_Metric (revenue, EBITDA, free_cash_flow)
- Event (earnings_call, merger, regulatory_filing)
- Economic_Indicator (GDP, inflation, interest_rates)
- Investment_Theme (AI_adoption, energy_transition, deglobalization)
- Geographic_Region (country, continent)
- Asset (equity, bond, derivative)
\`\`\`

Each entity type has **properties** (attributes) and **constraints**:

\`\`\`

Company {
  ticker: string (unique, required)
  name: string (required)
  market_cap: float (positive, in USD)
  sector: enum [Technology, Healthcare, Finance, ...]
  founded_date: date
  is_public: boolean
}
\`\`\`

**Phase 2: Define relationship types**

Relationships are directed edges with semantic meaning:

\`\`\`

Structural relationships:
- Company -[BELONGS_TO]-> Sector
- Company -[HEADQUARTERED_IN]-> Geographic_Region
- Person -[EMPLOYED_BY]-> Company
- Person -[HOLDS_ROLE {title, start_date}]-> Company

Causal relationships:
- Event -[CAUSED {confidence: 0.85}]-> Price_Movement
- Economic_Indicator -[IMPACTS {correlation: 0.72}]-> Sector

Analytical relationships:
- Company -[COMPETES_WITH {intensity: "high"}]-> Company
- Company -[SUPPLIES_TO {volume_pct: 0.15}]-> Company
- Investment_Theme -[EXPOSED_TO {degree: 0.8}]-> Company

Temporal relationships:
- Financial_Metric -[MEASURED_AT {date}]-> Company
- Event -[OCCURRED_ON {timestamp}]-> Company
\`\`\`

Each relationship type has:
- **Directionality**: Source and target entity types
- **Properties**: Metadata on the edge (confidence, weight, timestamp)
- **Cardinality**: One-to-one, one-to-many, many-to-many

**Phase 3: Establish inference rules**

Define logical rules that create implicit relationships:

\`\`\`

Rule 1: Transitive supply chain
IF Company A -[SUPPLIES_TO]-> Company B
AND Company B -[SUPPLIES_TO]-> Company C
THEN Company A -[INDIRECT_SUPPLIER_TO {hops: 2}]-> Company C

Rule 2: Correlated exposure
IF Company A -[EXPOSED_TO]-> Theme T
AND Company B -[EXPOSED_TO]-> Theme T
THEN Company A -[SIMILAR_EXPOSURE]-> Company B

Rule 3: Executive network
IF Person P -[EMPLOYED_BY]-> Company A
AND Person P -[PREVIOUSLY_EMPLOYED_BY]-> Company B
THEN Company A -[TALENT_FLOW_FROM]-> Company B
\`\`\`

These rules let the graph automatically discover connections that aren't explicitly stated.

### Intelligent Creation: How Agents Add to the Graph

When an agent makes a discovery, it doesn't just dump raw text into the graph. It performs **entity extraction** and **relationship identification** to create structured knowledge.

**Step-by-step process:**

\`\`\`

Agent discovers from earnings call:
"Tesla's battery costs declined 15% due to new supplier agreements with 
 Chinese lithium producers, improving gross margins by 200 basis points."

Step 1: Entity extraction
Entities found:
- Company: "Tesla" (maps to existing node: Tesla, ticker=TSLA)
- Concept: "battery costs" (create new node: Cost_Component)
- Concept: "supplier agreements" (create new node: Business_Event)
- Region: "Chinese" (maps to: China)
- Material: "lithium" (create new node: Commodity)
- Metric: "gross margins" (maps to existing: Gross_Margin)

Step 2: Relationship extraction
Relationships identified:
- Tesla -[HAS_COST_COMPONENT]-> Battery_Costs
- Battery_Costs -[CHANGED_BY {pct: -0.15, period: Q1_2024}]-> Supplier_Agreements
- Supplier_Agreements -[INVOLVES_REGION]-> China
- Supplier_Agreements -[INVOLVES_COMMODITY]-> Lithium
- Battery_Costs -[IMPACTS {magnitude: 0.02}]-> Gross_Margin
- Gross_Margin -[BELONGS_TO]-> Tesla

Step 3: Validate against ontology
Check:
✓ All entity types are defined in ontology
✓ All relationships are valid for source/target types
✓ Property values match expected data types
✓ No constraint violations

Step 4: Merge or create
For each entity:
- If similar entity exists (fuzzy match on name/properties), merge
- Otherwise, create new node

For each relationship:
- If relationship exists with different properties, update with newer data
- Otherwise, create new edge

Step 5: Add provenance
Metadata attached to all new entities/relationships:
- source: "TSLA Q1 2024 Earnings Call Transcript"
- created_by: "Agent_23"
- timestamp: "2024-03-15T10:23:45Z"
- confidence: 0.92 (based on extraction model certainty)
\`\`\`

**Handling ambiguity:**

\`\`\`

Ambiguous statement:
"Apple's revenue exposure to China creates risk"

Entity resolution challenge:
- "Apple" could be: Apple Inc. (AAPL) or Apple Hospitality REIT (APLE)
- "China" could be: Geographic region or political entity

Agent's disambiguation process:
1. Check context (document is about consumer electronics) → likely AAPL
2. Check for co-mentions with disambiguating terms ("iPhone") → confirms AAPL
3. Assign confidence score based on disambiguation certainty
4. Create relationship with confidence metadata:
   Apple_Inc -[HAS_REVENUE_EXPOSURE {region: China, risk_level: "high", confidence: 0.88}]-> China
\`\`\`

### Refactoring as Graphs Grow

As knowledge accumulates, the graph structure needs continuous refinement to maintain coherence and queryability.

**Challenge 1: Entity proliferation**

Initial state:

\`\`\`

Separate nodes created by different agents:
- "Battery Costs"
- "Battery Cost Structure"
- "EV Battery Pricing"
- "Cell Manufacturing Costs"
\`\`\`

These all refer to overlapping concepts, creating fragmentation.

**Refactoring solution: Entity consolidation**

\`\`\`

Process:
1. Periodically run entity similarity detection
   - Semantic embeddings of entity names and properties
   - Cosine similarity threshold (e.g., > 0.85)

2. Identify mergeable entities
   - "Battery Costs" and "Battery Cost Structure" are 0.91 similar
   - Check if relationships are compatible

3. Propose merge to supervision system
   - Human reviewer or advanced model approves/rejects

4. Execute merge
   - Combine nodes into single entity: "Battery_Cost_Structure"
   - Merge all incoming/outgoing relationships
   - Preserve provenance of both original entities
   - Update all references across the graph

Result:
All relationships now point to unified "Battery_Cost_Structure" node
\`\`\`

**Challenge 2: Relationship redundancy**

As graph grows:

\`\`\`

Tesla -[COMPETES_WITH]-> BYD
Tesla -[COMPETITOR_OF]-> BYD
Tesla -[COMPETES_IN_MARKET {market: "EVs"}]-> BYD
\`\`\`

Multiple relationship types express the same underlying fact.

**Refactoring solution: Relationship normalization**

\`\`\`

1. Define canonical relationship types
   Standard: COMPETES_WITH {market, intensity, geographic_overlap}

2. Map variants to canonical form
   COMPETITOR_OF → COMPETES_WITH
   COMPETES_IN_MARKET → COMPETES_WITH {market: "EVs"}

3. Merge relationships
   Combine all three into single relationship:
   Tesla -[COMPETES_WITH {market: "EVs", intensity: "high"}]-> BYD
   
4. Preserve information from variants as properties
\`\`\`

**Challenge 3: Evolving ontology**

New investment themes emerge that weren't in original ontology:

\`\`\`

Agents start discovering relationships about "GLP-1 drug adoption"
But ontology has no entity type for pharmaceutical drug classes
\`\`\`

**Refactoring solution: Schema evolution**

\`\`\`

1. Detect pattern of unstructured relationships
   - Multiple agents creating notes about "GLP-1 drugs"
   - Relationships using free-text rather than defined types

2. Propose new entity type
   Drug_Class {
     name: string
     category: enum [weight_loss, diabetes, cardiovascular, ...]
     mechanism: string
     market_size: float
   }

3. Update ontology
   - Add Drug_Class to schema
   - Define new relationship: Company -[DEVELOPS]-> Drug_Class

4. Backfill historical data
   - Parse existing notes and unstructured references
   - Create Drug_Class entities retroactively
   - Convert free-text relationships to structured ones
   
5. Notify agents of new schema
   - Future discoveries can use proper Drug_Class entities
\`\`\`

**Challenge 4: Temporal staleness**

Facts become outdated:

\`\`\`

Graph contains:
Tesla -[HAS_CEO]-> Elon_Musk (as of 2020)

But leadership changes occur.
\`\`\`

**Refactoring solution: Temporal versioning**

\`\`\`

Convert static relationships to time-aware:

Tesla -[HAS_CEO {start_date: "2008-10-01", end_date: null}]-> Elon_Musk

When leadership changes:
1. Update end_date on existing relationship
2. Create new relationship with new start_date
3. Queries specify temporal scope:
   "Who is CEO of Tesla as of 2024-11-01?" → Uses current relationship
   "Who was CEO in 2015?" → Uses historical relationship
\`\`\`

  ### How Agents Traverse Graphs in Practice

Once the graph is built, agents need to intelligently query it to discover insights. The agent uses an **LLM to make traversal decisions** - deciding which paths to explore, which relationships matter, and how to interpret the results.

**LLM-driven traversal workflow:**

\`\`\`

User asks: "How is NVIDIA exposed to semiconductor equipment suppliers?"

Step 1: LLM decomposes query into graph traversal plan
Thought: Need to find path from NVIDIA to semiconductor equipment suppliers
Plan: 
- Start at NVIDIA entity
- Follow manufacturing/product relationships
- Look for supply chain dependencies
- End at equipment supplier entities

Step 2: Execute traversal via tool calls
Agent calls: graph_traverse(
  start_entity="NVIDIA",
  target_entity_type="Semiconductor_Equipment_Supplier",
  max_hops=5,
  relationship_types=["MANUFACTURES", "REQUIRES", "FABRICATED_BY", "PURCHASES_FROM"]
)

Step 3: Graph returns paths
Path found: NVIDIA → GPUs → Advanced_Chips → TSMC → ASML

Step 4: LLM interprets results
The agent receives the path and synthesizes:
"NVIDIA has indirect exposure through TSMC's dependency on ASML for 
 EUV lithography equipment. Since NVIDIA's GPUs require advanced chips 
 fabricated by TSMC, any disruption to ASML's equipment supply would 
 impact NVIDIA's production capacity."
\`\`\`

**Graph traversal as a tool call:**

The knowledge graph is exposed to agents as a callable tool, similar to SQL execution or RAG retrieval:

\`\`\`

# Tool definition
tools = [
    {
        "name": "graph_traverse",
        "description": "Traverse the knowledge graph to find relationships between entities",
        "parameters": {
            "start_entity": "Entity to start traversal from",
            "target_entity": "Specific entity to find, or null for exploration",
            "target_entity_type": "Type of entities to find (Company, Theme, etc.)",
            "relationship_types": "List of relationship types to follow",
            "max_hops": "Maximum number of hops (default 3)",
            "traversal_strategy": "path_finding | multi_hop | spreading_activation"
        }
    },
    {
        "name": "graph_query",
        "description": "Execute structured query on knowledge graph",
        "parameters": {
            "query_type": "cypher | constraint_based | similarity_search",
            "query": "The query string or constraints",
            "return_properties": "Which entity/relationship properties to return"
        }
    }
]

# Agent decides when and how to use graph tools
agent_response = llm.generate(
    messages=[{"role": "user", "content": "Find companies exposed to lithium prices"}],
    tools=tools
)

# Agent makes tool call
tool_call = {
    "name": "graph_traverse",
    "arguments": {
        "start_entity": "Lithium_Price",
        "target_entity_type": "Company",
        "relationship_types": ["IMPACTS", "SUPPLIES_TO", "MANUFACTURES"],
        "max_hops": 3,
        "traversal_strategy": "multi_hop"
    }
}
\`\`\`

**RAG-based graph retrieval:**

In addition to programmatic traversal, agents can use **RAG to retrieve relevant graph sections** based on semantic similarity:

\`\`\`

Query: "What affects Tesla's margins?"

Traditional graph traversal: Follow explicit edges from Tesla node
- Can only find explicitly modeled relationships
- Limited to predefined relationship types

RAG-enhanced graph retrieval:
1. Embed the query: "factors affecting Tesla's margins"
2. Embed all graph entities and relationships near Tesla:
   - "Tesla -[HAS_COST_COMPONENT]-> Battery_Costs" 
   - "Tesla -[IMPACTED_BY]-> Lithium_Prices"
   - "Tesla -[COMPETES_WITH]-> BYD"
   - "Tesla -[BENEFITS_FROM]-> EV_Tax_Credits"
3. Return top-k most semantically relevant subgraphs
4. LLM synthesizes from retrieved graph context

Benefits of RAG for graphs:
- Finds conceptually related entities without requiring explicit paths
- Surfaces relevant context even with incomplete relationship modeling
- Handles fuzzy queries that don't map to precise graph patterns
\`\`\`

**Hybrid approach - combining traversal strategies:**

\`\`\`

def intelligent_graph_query(question):
    # LLM decides which strategy to use
    strategy = llm.classify_query_type(question)
    
    if strategy == "specific_path":
        # Use deterministic traversal for clear path-finding
        result = graph_traverse(
            start=extract_entity(question),
            target=extract_target(question),
            algorithm="shortest_path"
        )
    
    elif strategy == "exploratory":
        # Use spreading activation for open-ended exploration
        result = graph_traverse(
            start=extract_entity(question),
            algorithm="spreading_activation",
            depth=3
        )
    
    elif strategy == "complex_constraints":
        # Use Cypher-like query for multi-constraint searches
        result = graph_query(
            query=llm.generate_cypher(question),
            query_type="cypher"
        )
    
    elif strategy == "conceptual":
        # Use RAG when query is about concepts not explicit in schema
        result = rag_retrieve_graph_context(
            query=question,
            top_k=10
        )
    
    # LLM interprets results and generates answer
    return llm.synthesize(question, result)
\`\`\`

**Traversal strategies in detail:**

**1. Path-based queries (deterministic):**

\`\`\`

Question: "How is NVIDIA exposed to semiconductor equipment suppliers?"

LLM generates traversal plan → Graph executes → LLM interprets

Path found: NVIDIA → GPUs → Advanced_Chips → TSMC → ASML

Result: "NVIDIA has indirect exposure through TSMC's dependency on ASML 
for EUV lithography equipment"
\`\`\`

**2. Multi-hop reasoning (weighted traversal):**

\`\`\`

Question: "Which companies benefit from falling lithium prices?"

LLM determines: This requires following impact chains

Traversal algorithm:
1. Start at Lithium_Price node
2. Find all -[IMPACTS {sign: negative}]-> relationships
   → Battery_Costs
3. From Battery_Costs, find -[IMPACTS {sign: negative}]-> relationships
   → EV_Manufacturers
4. Return all companies in EV_Manufacturers category
   → Tesla, Rivian, BYD, Ford, GM

Weight paths by relationship strengths:
- Direct exposure (1 hop): weight = 1.0
- Indirect exposure (2 hops): weight = 0.7
- Distant exposure (3+ hops): weight = 0.4

LLM ranks and explains:
1. Tesla (direct battery manufacturing, weight = 0.95)
2. BYD (direct battery manufacturing, weight = 0.93)
3. Panasonic (battery supplier, weight = 0.78)
4. Ford (EV manufacturer, weight = 0.65)
\`\`\`

**3. Constraint-based search (structured query):**

\`\`\`

Question: "Find companies with improving margins AND exposure to AI theme AND based in US"

LLM recognizes: Multiple constraints require structured query
LLM generates Cypher-like query:

MATCH (c:Company)-[e:EXPOSED_TO]->(t:Theme {name: "AI"})
WHERE c.headquarters IN ["US"]
  AND EXISTS {
    (c)<-[:BELONGS_TO]-(m:Margin)
    WHERE m.trend = "improving"
  }
RETURN c, e.degree, m.change_pct
ORDER BY e.degree DESC, m.change_pct DESC

Graph executes → Returns matching companies → LLM formats results
\`\`\`

**4. Spreading activation (exploratory):**

\`\`\`

Question: "What's related to Tesla's profitability?"

LLM recognizes: Open-ended exploration, use diffusion

Activation spreading:
1. Start at Tesla node with activation = 1.0
2. Spread activation to neighbors, decayed by edge weight:
   - Gross_Margin (activation = 0.9, strong direct relationship)
   - Battery_Costs (activation = 0.85)
   - EV_Market (activation = 0.8)
3. Continue spreading from activated nodes:
   - Lithium_Prices (activation = 0.6, reached via Battery_Costs)
   - Charging_Infrastructure (activation = 0.5, via EV_Market)
4. After 3 hops, rank all activated nodes
5. Return top-k most activated entities

LLM synthesizes from activated entities:
"Tesla's profitability is influenced by:
- Direct factors: Gross margins, battery costs, EV market dynamics
- Indirect factors: Lithium prices (via battery costs), charging infrastructure
- Unexpected connections: Regulatory credits (17% of profit in 2023)"
\`\`\`

**5. RAG-based retrieval (semantic):**

\`\`\`

Question: "What competitive pressures face Tesla?"

LLM recognizes: "Competitive pressures" is conceptual, use RAG

RAG process:
1. Embed query: "competitive pressures facing Tesla"
2. Retrieve semantically similar graph neighborhoods:
   - Tesla -[COMPETES_WITH]-> {BYD, Ford, Rivian, Lucid}
   - BYD -[HAS_ADVANTAGE {type: "cost"}]-> Battery_Manufacturing
   - Ford -[HAS_ADVANTAGE {type: "scale"}]-> Distribution_Network
   - Price_War -[AFFECTS]-> EV_Sector
   - China_Market -[SHOWS]-> Increased_Competition
3. Return entire subgraphs containing these relationships
4. LLM synthesizes from retrieved context:
   "Tesla faces competitive pressure from multiple angles:
   - Cost competition from BYD's vertically integrated battery production
   - Distribution advantages of legacy OEMs like Ford
   - Price wars in the EV sector, especially in China
   - Rising competition in China market specifically"
\`\`\`

**Key insight:** The LLM acts as the intelligent orchestrator, deciding which traversal strategy to use, how to interpret paths, and when to use RAG vs. structured queries. The graph itself is just a tool the agent calls upon.

### How Agents Update Graphs in Practice

When new information arrives, agents must intelligently integrate it into the existing graph while maintaining consistency. This is a separate process from traversal - updates modify the graph structure while traversal queries it.

**Real-time update workflow:**

\`\`\`

class KnowledgeGraphAgent:
    def process_new_information(self, text, source):
        # 1. Extract structured information
        entities = self.entity_extractor.extract(text)
        relationships = self.relation_extractor.extract(text, entities)
        
        # 2. Validate against ontology
        validated_entities = []
        for entity in entities:
            if self.ontology.is_valid_entity_type(entity.type):
                validated_entities.append(entity)
            else:
                self.log_ontology_gap(entity)
        
        # 3. Entity resolution (link to existing or create new)
        resolved_entities = []
        for entity in validated_entities:
            existing = self.graph.find_similar_entity(
                entity, 
                similarity_threshold=0.85
            )
            if existing:
                # Merge new information into existing entity
                merged = self.merge_entity(existing, entity)
                resolved_entities.append(merged)
            else:
                # Create new entity
                new_entity = self.graph.create_entity(entity)
                resolved_entities.append(new_entity)
        
        # 4. Add relationships
        for rel in relationships:
            source_entity = self.resolve_entity(rel.source)
            target_entity = self.resolve_entity(rel.target)
            
            # Check if relationship already exists
            existing_rel = self.graph.find_relationship(
                source_entity, 
                rel.type, 
                target_entity
            )
            
            if existing_rel:
                # Update with newer/stronger evidence
                if rel.confidence > existing_rel.confidence:
                    self.graph.update_relationship(existing_rel, rel)
            else:
                # Create new relationship
                self.graph.create_relationship(
                    source=source_entity,
                    relation=rel.type,
                    target=target_entity,
                    properties=rel.properties,
                    provenance={
                        "source": source,
                        "timestamp": datetime.now(),
                        "confidence": rel.confidence
                    }
                )
        
        # 5. Trigger inference rules
        new_inferred_relations = self.apply_inference_rules(
            resolved_entities, 
            relationships
        )
        
        # 6. Log for periodic refactoring
        self.log_update_for_review({
            "entities_created": len([e for e in resolved_entities if e.is_new]),
            "entities_merged": len([e for e in resolved_entities if e.is_merged]),
            "relationships_created": len(relationships),
            "inferences_made": len(new_inferred_relations)
        })
        
        return resolved_entities, relationships
\`\`\`

**Conflict resolution:**

\`\`\`

Scenario: Two agents report conflicting information

Agent A (from news article): "Apple revenue declined 5% in China"
Agent B (from earnings): "Apple Greater China revenue grew 2%"

Graph receives conflicting updates:
Apple -[HAS_REVENUE_CHANGE {region: "China", pct: -0.05}]-> Q3_2024
Apple -[HAS_REVENUE_CHANGE {region: "China", pct: +0.02}]-> Q3_2024

Conflict resolution strategy:
1. Detect conflict (same relationship type, same entities, contradictory properties)
2. Check source authority:
   - Earnings report (primary source) > news article (secondary source)
3. Check temporal granularity:
   - Agent B specifies "Greater China" (includes HK, Taiwan)
   - Agent A specifies "China" (mainland only)
   - These are actually different entities - no conflict!
4. If true conflict, use source priority to keep high-confidence fact
5. Add note of conflicting report for human review
\`\`\`

**Batch refactoring process:**

\`\`\`

Runs nightly or weekly:

1. Entity deduplication
   - Find entities with >0.85 similarity
   - Merge duplicates, preserve all provenance
   
2. Relationship cleanup
   - Remove outdated relationships (temporal cutoff)
   - Consolidate redundant relationships
   
3. Schema evolution check
   - Analyze unstructured notes and tags
   - Propose new entity types if patterns emerge
   
4. Inference propagation
   - Re-run all inference rules on recently updated subgraphs
   - Add newly inferred relationships
   
5. Quality metrics
   - Graph density (edges per node)
   - Orphaned nodes (no connections)
   - Missing critical relationships
   - Schema coverage
\`\`\`

**Benefits:**

- **Collective intelligence**: Each agent's work builds on others
- **Discovery**: Find non-obvious connections through intelligent traversal
- **Consistency**: Avoid contradictory conclusions through conflict resolution
- **Auditability**: Trace reasoning back to sources with full provenance
- **Adaptability**: Ontology evolves as market dynamics shift

## Agent Orchestration

Production research systems coordinate multiple agents with different specializations.

**Agent roles:**

- **Query Agent**: Translates questions to SQL
- **Retrieval Agent**: Finds relevant documents
- **Analysis Agent**: Performs calculations and statistics
- **Synthesis Agent**: Combines findings into reports
- **Validation Agent**: Checks facts and calculations

**Example multi-agent workflow:**

\`\`\`

Analyst question: "Analyze Tesla's competitive position in EVs"

Orchestrator/Planning agent delegates:

Query Agent:

- Pull Tesla financial data
- Pull competitor data (Rivian, Lucid, BYD)

Retrieval Agent:

- Find recent Tesla earnings transcripts
- Find analyst reports on EV market
- Find news on production and deliveries

Analysis Agent:

- Calculate market share trends
- Compute relative valuation metrics
- Assess margin trajectories

Synthesis Agent:

- Combine all findings
- Generate structured report
- Create comparison tables

Validation Agent:

- Check calculations for errors
- Verify sources are current
- Flag any contradictions

Result: Comprehensive competitive analysis delivered in minutes

\`\`\`

**Coordination mechanisms:**

- **Message passing**: Agents communicate via structured messages, e.g. JSON  
- **Shared memory**: Common workspace for intermediate results
- **Supervisor agent**: Coordinates workflow and handles errors

**Takeaway:**

Research agents don't replace analysts. They extend them.

Analysts spend less time pulling data and more time on creative thinking: formulating hypotheses, challenging assumptions, and making judgment calls that require experience and intuition.

The result is a research team that operates at higher velocity, covering more ideas more thoroughly, with every finding traceable back to source data.

In the best organizations, human analysts and AI agents form a collaborative intelligence loop: humans ask better questions because agents surface more context, and agents get better at reasoning because humans provide feedback on what matters.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Agentic AI"
      subtitle="Research & Data Agents"
      description="Autonomous agents that query databases, synthesize information, and generate reports using text-to-SQL, retrieval-augmented generation, and multi-step reasoning to accelerate research workflows."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default ResearchDataAgents;
