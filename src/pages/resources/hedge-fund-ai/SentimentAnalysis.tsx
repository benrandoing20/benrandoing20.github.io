import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const SentimentAnalysis = () => {
  const content = `
## Overview

**In this section:**
- [Why Sentiment Matters](#why-sentiment-matters)
- [Data Sources](#data-sources)
- [NLP Techniques](#nlp-techniques)
- [Large Language Models](#large-language-models)
- [Entity Level Sentiment](#entity-level-sentiment)
- [Event Detection](#event-detection)
- [Validation and Testing](#validation-and-testing)
- [Integration with Other Signals](#integration-with-other-signals)

Markets are driven as much by emotion and narrative as by numbers. Sentiment analysis tries to measure that, to turn the language of news, earnings calls, and social media into quantitative signals.

## Why Sentiment Matters

Price movements often precede fundamental changes because markets are forward looking. Sentiment captures the shift in narrative before it shows up in earnings or analyst reports.

**What sentiment reveals:**

**Confidence shifts**: When management language becomes more cautious

**Risk perception**: How investors interpret uncertainty or threats

**Narrative changes**: When the market story about a stock or sector evolves

**Crowd behavior**: Momentum, fear, greed, panic

**Early warning signs**: Problems detected in language before they appear in numbers

**Example:**

A company's earnings beat expectations by 5%, but the stock falls. Why?

Reading the earnings call transcript reveals management repeatedly used cautious language about "headwinds," "uncertainty," and "challenging conditions." The sentiment was negative despite positive numbers.

A sentiment model would capture this disconnect immediately, while traditional fundamental analysis would miss it.

## Data Sources

In practice, hedge funds process vast streams of text data. This includes:

**News headlines and full articles:**

**Speed**: News moves markets within seconds of release
**Sources**: Bloomberg, Reuters, Dow Jones, Financial Times
**Volume**: Thousands of articles per day
**Challenge**: Distinguishing signal (real news) from noise (speculation)

**Earnings call transcripts:**

**Insight**: Management tone, word choice, and hesitation reveal confidence
**Format**: Prepared remarks + Q&A session
**Analysis**: Compare language quarter over quarter
**Red flags**: Increased hedging language, vague answers, defensive tone

**SEC filings:**

**Types**: 10-K, 10-Q, 8-K, proxy statements
**Signals**: Changes in risk factors, legal language, MD&A (management discussion)
**Method**: Diff successive filings to detect what changed
**Example**: Sudden addition of new risk factors or increased legal reserves

**Social media:**

**Platforms**: X (Twitter), Reddit (especially r/WallStreetBets), StockTwits
**Advantage**: Real-time crowd mood, retail sentiment
**Disadvantage**: Noisy, prone to manipulation, bots
**Use case**: Contrarian signals (extreme sentiment often reverses)

**Analyst reports:**

**Content**: Ratings, price targets, thesis changes
**Timing**: Often lag price moves but influence flows
**Analysis**: Track sentiment drift across analyst community

**Company reviews and forums:**

**Employee reviews** (Glassdoor): Internal morale and culture
**Customer reviews**: Product satisfaction and brand health
**Industry forums**: Technical discussions, insider perspectives

## NLP Techniques

The process begins with natural language processing (NLP). Traditional NLP models, like bag of words or TF-IDF, quantify how positive or negative text is.

**Traditional techniques:**

**Bag of words:**

Count word frequencies, ignore grammar and order.

\\[\\text{Sentiment Score} = \\sum_{i} w_i \\times \\text{count}(\\text{word}_i)\\]

Where \\(w_i\\) is a sentiment weight (positive or negative).

**Limitations**: Misses context ("not good" is treated same as "good").

**Lexicon based methods:**

Use predefined dictionaries of positive and negative words.

**Financial lexicons:**
- Loughran-McDonald financial sentiment dictionary
- Harvard IV-4 Psychosocial Dictionary

**Scoring:**

\\[\\text{Sentiment} = \\frac{\\text{Positive Words} - \\text{Negative Words}}{\\text{Total Words}}\\]

**Advantage**: Simple, interpretable, fast

**Disadvantage**: Misses sarcasm, context, domain specificity

**TF-IDF (Term Frequency Inverse Document Frequency):**

Weights words by how unique they are to a document.

\\[\\text{TF-IDF}(w, d) = \\text{TF}(w, d) \\times \\log\\left(\\frac{N}{\\text{DF}(w)}\\right)\\]

Where:
- \\(\\text{TF}(w, d)\\) = frequency of word \\(w\\) in document \\(d\\)
- \\(N\\) = total number of documents
- \\(\\text{DF}(w)\\) = number of documents containing word \\(w\\)

**Use case**: Finding distinctive language in earnings calls compared to typical calls.

**Machine learning approaches:**

**Naive Bayes**: Probabilistic classifier
**Logistic Regression**: Linear model for binary sentiment
**Support Vector Machines**: Find optimal separation boundary
**Random Forests**: Ensemble of decision trees

These methods require labeled training data (text marked as positive or negative).

## Large Language Models

But modern funds increasingly use large language models (LLMs) such as GPT style transformers that understand context and nuance, distinguishing between "earnings beat expectations" and "earnings beat low expectations."

**Transformer architecture:**

**Self attention mechanism:**

Allows model to focus on relevant words regardless of position.

\\[\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V\\]

This lets the model understand that "not" before "good" changes meaning.

**Pretrained models:**

**BERT** (Bidirectional Encoder Representations from Transformers):
- Understands context from both directions
- Fine-tuned on financial text for FinBERT

**GPT models** (Generative Pretrained Transformer):
- Autoregressive, good for generation and completion
- Can be prompted to extract sentiment without retraining

**RoBERTa**: Optimized BERT training
**DistilBERT**: Smaller, faster BERT variant

**Fine tuning for finance:**

Take pretrained model and train on financial text:

1. Start with general language model (e.g., BERT)
2. Continue training on financial corpus (10-Ks, earnings calls, news)
3. Fine-tune on labeled sentiment examples
4. Deploy for inference

**Example:**

Input: "Despite strong revenue growth, margin compression remains a concern."

BERT output: Mixed sentiment (65% negative due to "concern" and "compression")

Traditional lexicon: Might miss nuance of "despite" and "remains"

**Advantages of LLMs:**

**Context awareness**: Understands negations, qualifiers, conditionals

**Nuance**: Distinguishes "great quarter" from "great quarter, but"

**Entity understanding**: Knows which sentiment applies to which company

**Multitask**: Can simultaneously extract sentiment, topics, and entities

## Entity Level Sentiment

These models can also detect topic shifts, event mentions, and entity level sentiment, enabling funds to track not just overall mood but sentiment toward specific companies, sectors, or regions.

**Why entity level matters:**

A news article might mention 10 companies with different sentiment for each:

"Apple reported strong iPhone sales [positive for Apple], putting pressure on Samsung [negative for Samsung], while suppliers like Qualcomm benefited [positive for Qualcomm]."

**Extraction pipeline:**

1. **Named Entity Recognition (NER)**: Identify companies, people, products
2. **Coreference resolution**: Link pronouns to entities ("it" refers to "Apple")
3. **Sentiment assignment**: Determine sentiment for each entity mention
4. **Aggregation**: Combine across mentions and documents

**Example:**

Document: "Tesla's delivery numbers disappointed investors [negative for Tesla], but analysts noted strong performance at competitors like Rivian [positive for Rivian]."

**Output:**
- Tesla: Sentiment = -0.4 (negative)
- Rivian: Sentiment = +0.6 (positive)

**Sector and regional sentiment:**

Track sentiment at different aggregation levels:
- Company: Apple
- Sector: Technology
- Industry: Semiconductors
- Region: Asian markets
- Theme: AI adoption

This allows portfolio managers to understand if negative sentiment is idiosyncratic (specific to one stock) or systematic (affecting whole sector).

## Event Detection

**Event types:**

**Earnings surprises**: Beat, miss, in line

**Management changes**: CEO departure, new CFO

**M&A activity**: Acquisition rumors, deal announcements

**Product launches**: New releases, recalls

**Regulatory events**: Investigations, approvals

**Macro shocks**: Fed announcements, geopolitical events

**Detection methods:**

**Keyword matching**: Look for specific phrases
- "beat expectations," "missed estimates," "announced acquisition"

**Topic modeling**: Unsupervised discovery of themes
- Latent Dirichlet Allocation (LDA)
- Non-negative Matrix Factorization (NMF)

**Anomaly detection**: Identify unusual spikes in mention volume
- Z-score of daily mentions
- Change point detection

**LLM extraction**: Prompt model to identify events
- "List all major events mentioned in this article."
- "Classify this text as: earnings, M&A, regulatory, or other."

## Validation and Testing

The challenge is validation: sentiment often moves faster than fundamentals and can be noisy. That's why hedge funds backtest sentiment features over multiple time horizons and combine them with other signals.

**Testing framework:**

1. **Extract sentiment** from historical corpus (5 years of news)

2. **Align with prices** at different lags:
   - \\(t\\): Sentiment score
   - \\(t+1\\) hour: Immediate price impact
   - \\(t+1\\) day: Next day return
   - \\(t+1\\) week: Medium term drift

3. **Measure predictive power**:

   \\[\\text{IC (Information Coefficient)} = \\text{Corr}(\\text{Sentiment}_t, \\text{Return}_{t+1})\\]

4. **Statistical significance**:
   - T-statistic > 2.0 (p-value < 0.05)
   - Consistent across subperiods

**Common findings:**

**News sentiment**: Predictive for 1 hour to 1 day, then reverses

**Earnings call tone**: Predictive for 1-3 months

**Social media**: Often contrarian (extreme optimism = reversal)

**SEC filing changes**: Slow to be priced, predictive for weeks

**Signal decay:**

Sentiment predictiveness decays as information gets priced in.

Half-life (time for signal to lose 50% of predictive power):
- News: 2-6 hours
- Earnings calls: 2-4 weeks
- Filings: 1-2 months

## Integration with Other Signals

Sentiment is most powerful when combined with other features to filter out false positives.

**Combined signal examples:**

**Sentiment + Momentum:**

Positive sentiment + positive momentum = Strong buy signal

Positive sentiment + negative momentum = Potential reversal

**Sentiment + Options Activity:**

Positive sentiment + rising put volume = Mixed signal (hedging or skepticism)

Negative sentiment + rising call volume = Contrarian opportunity

**Sentiment + Fundamentals:**

Negative sentiment + strong fundamentals = Overreaction, mean reversion opportunity

Positive sentiment + weak fundamentals = Momentum chase, potential bubble

**Multi horizon sentiment:**

Track sentiment across timeframes:
- Real-time: Social media
- Daily: News
- Quarterly: Earnings calls
- Annual: 10-K tone

When all align → high conviction signal

When they diverge → caution, potential regime change

**Portfolio construction:**

Use sentiment as:
- **Alpha signal**: Trade on sentiment changes
- **Risk signal**: Reduce exposure when negative sentiment rises
- **Timing signal**: When to enter or exit positions

In short, sentiment analysis turns words into numbers and narratives into alpha, but only if it's treated as data, not intuition.

**Final principle:**

Sentiment is not truth; it's perception. But markets trade on perception, which means sentiment matters as much as fundamentals for capturing short to medium term price movements.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Alternative Data & Signals"
      subtitle="Sentiment Analysis"
      description="Extracting trading signals from text by analyzing news, earnings calls, SEC filings, and social media using NLP and LLMs to measure sentiment, detect events, and gauge market narratives before they're priced in."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default SentimentAnalysis;

