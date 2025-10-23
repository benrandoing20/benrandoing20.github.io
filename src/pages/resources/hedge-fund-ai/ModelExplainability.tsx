import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const ModelExplainability = () => {
  const content = `
## Overview

**In this section:**
- [Why Explainability Matters](#why-explainability-matters)
- [SHAP Values](#shap-values)
- [LIME Local Interpretable Explanations](#lime-local-interpretable-explanations)
- [Attention Visualization](#attention-visualization)
- [Model Risk Tiers](#model-risk-tiers)
- [Documentation Standards](#documentation-standards)
- [Model Governance Committees](#model-governance-committees)
- [Investor Transparency](#investor-transparency)

As AI and machine learning have become central to hedge fund operations, regulators have demanded that models be interpretable, not just accurate. You must be able to explain why a model made a decision, not only that it did.

## Why Explainability Matters

**The black box problem:**

Traditional statistical models (linear regression, logistic regression) are naturally interpretable. You can point to coefficients and say "this feature increases the prediction by X."

Modern machine learning models (deep neural networks, gradient boosting with thousands of trees, ensemble methods) are different. They work, but their internal logic is opaque. This creates problems:

**Regulatory scrutiny**: Regulators want to understand decision processes

**Investor confidence**: Allocators need to trust that returns are skill based, not luck

**Risk management**: You cannot manage risks you don't understand

**Debugging**: When models fail, you need to know why

**Bias detection**: Hidden biases can lead to unfair or illegal decisions

**Real world example:**

A model predicts a stock will outperform, and the fund goes long. The stock crashes. Without explainability:
- Was it bad luck or bad model?
- Which feature was most responsible?
- Should you retrain, or was this an outlier?

With explainability, you can analyze which features drove the prediction and whether they still make sense.

## SHAP Values

This is where model explainability frameworks come in.

**SHAP (SHapley Additive exPlanations):** Assigns contribution values to each input feature, showing how much it increased or decreased a prediction.

**The Shapley value concept:**

Borrowed from game theory, the Shapley value answers: "What is the fair contribution of each player (feature) to the total outcome (prediction)?"

**Mathematical definition:**

For a model \\(f\\) and prediction \\(f(x)\\), the SHAP value for feature \\(i\\) is:

\\[\\phi_i = \\sum_{S \\subseteq N \\setminus \\{i\\}} \\frac{|S|! (|N| - |S| - 1)!}{|N|!} [f(S \\cup \\{i\\}) - f(S)]\\]

Where:
- \\(N\\) = set of all features
- \\(S\\) = subset of features
- \\(f(S)\\) = model prediction using only features in \\(S\\)

**Intuition:**

The SHAP value measures the average marginal contribution of a feature across all possible combinations of other features.

**Properties:**

**Additivity**: Sum of SHAP values equals prediction minus baseline:

\\[f(x) - E[f(X)] = \\sum_{i=1}^{n} \\phi_i\\]

**Consistency**: If a feature's contribution increases, its SHAP value increases

**Local accuracy**: Explains individual predictions accurately

**Practical example:**

**Model**: Predict next day stock return

**Features**: Momentum, value, volatility, volume, earnings surprise

**Prediction**: +2.5% return for Stock A

**Baseline** (average prediction): +0.5%

**SHAP decomposition:**

- Momentum: +1.2%
- Value: +0.3%
- Volatility: +0.4%
- Volume: +0.1%
- Earnings surprise: +0.5%
- Sum: +2.5% (matches prediction)

**Interpretation**: Most of the positive prediction comes from strong momentum, with earnings surprise also contributing significantly.

**Visualization:**

**Waterfall plot**: Shows how each feature contributes to moving prediction from baseline to final value

**Force plot**: Displays features pushing prediction higher (red) vs lower (blue)

**Summary plot**: Shows feature importance across many predictions

**Python implementation:**

\`\`\`python
import shap

# Train model
model = xgboost.XGBRegressor()
model.fit(X_train, y_train)

# Create SHAP explainer
explainer = shap.Explainer(model)

# Compute SHAP values for test set
shap_values = explainer(X_test)

# Visualize for single prediction
shap.waterfall_plot(shap_values[0])

# Summary across all predictions
shap.summary_plot(shap_values, X_test)
\`\`\`

## LIME Local Interpretable Explanations

**LIME (Local Interpretable Model-agnostic Explanations):** Builds small, interpretable approximations of complex models around specific predictions.

**The LIME approach:**

Instead of explaining the entire model globally, LIME explains a **single prediction** by fitting a simple, interpretable model locally around that prediction.

**Algorithm:**

1. **Select instance** to explain (e.g., one stock prediction)

2. **Generate perturbed samples** near that instance
   - Add noise to features
   - Create synthetic neighbors

3. **Get model predictions** for perturbed samples

4. **Weight samples** by proximity to original instance

5. **Fit simple linear model** on weighted perturbed samples

6. **Interpret coefficients** of simple model as explanations

**Mathematical formulation:**

\\[\\text{explanation}(x) = \\arg\\min_{g \\in G} L(f, g, \\pi_x) + \\Omega(g)\\]

Where:
- \\(f\\) = complex model to explain
- \\(g\\) = simple interpretable model (e.g., linear regression)
- \\(\\pi_x\\) = proximity measure weighting nearby samples
- \\(L\\) = loss function measuring how well \\(g\\) approximates \\(f\\)
- \\(\\Omega(g)\\) = complexity penalty (prefer simpler \\(g\\))

**Example:**

**Complex model**: Deep neural network predicting credit default

**Instance**: Customer A with 5% default probability

**LIME explanation**:

Fit local linear model showing:
- High debt ratio: +3% (increases default risk)
- Good credit score: 2% (decreases risk)
- Recent late payment: +1%
- Long credit history: 0.5%

**Result**: Simple, interpretable explanation of this specific prediction

**Advantages:**

**Model-agnostic**: Works with any black box model

**Local fidelity**: Accurate explanation for the specific prediction

**Intuitive**: Linear explanations are easy to understand

**Limitations:**

**Instability**: Small changes in instance can produce different explanations

**Sampling sensitivity**: Results depend on how perturbations are generated

**Only local**: Does not explain global model behavior

## Attention Visualization

**Attention visualization:** For transformer or sequence models, highlighting which parts of the data the model "focused" on when making a decision.

**Attention mechanism recap:**

Transformers (like BERT, GPT) use attention to weigh the importance of different inputs.

\\[\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V\\]

The attention weights show which tokens (words, time steps, features) the model considers most relevant.

**Visualization approaches:**

**Attention heatmaps:**

Show which input tokens received highest attention weight when predicting output.

Example: For sentiment analysis of earnings call, highlight which sentences most influenced the sentiment score.

**Head-specific attention:**

Transformers have multiple attention heads. Each head can focus on different aspects:
- Head 1: Syntax and grammar
- Head 2: Numeric values
- Head 3: Entity mentions
- Head 4: Sentiment-laden words

**Layer-wise attention:**

Track how attention patterns evolve through model layers:
- Early layers: Local, syntactic patterns
- Middle layers: Semantic relationships
- Late layers: Task-specific focus

**Example in trading:**

**Model**: Transformer predicting stock returns from news articles

**Input**: 500-word earnings call transcript

**Attention visualization** reveals model focused on:
- "exceeded expectations" (high weight)
- "guidance raised" (high weight)
- "strong demand" (high weight)

This builds confidence that model is using sensible signals, not spurious patterns.

**Attention rollout:**

For deep transformers, attention weights from later layers can be traced back through earlier layers to understand the full reasoning chain.

## Model Risk Tiers

Funds use these tools not just for internal transparency but to satisfy **model governance requirements**. Every model is classified into **risk tiers**, for example, **Tier 1** for direct trading models, **Tier 2** for advisory or analytics models, and **Tier 3** for research prototypes.

**Tier classification:**

**Tier 1: Production trading models**

**Definition**: Models that directly generate trade signals or execution decisions

**Examples**: Alpha models, execution algorithms, portfolio optimizers

**Risk**: High (direct P&L impact)

**Requirements**:
- Full documentation
- Quarterly validation
- Independent review
- SHAP/LIME explainability
- Stress testing
- Real-time monitoring
- Incident response plan

**Tier 2: Decision support models**

**Definition**: Models that inform but do not directly generate trades

**Examples**: Risk models, scenario analysis, research tools

**Risk**: Medium (indirect P&L impact)

**Requirements**:
- Standard documentation
- Semi-annual validation
- Periodic review
- Basic explainability
- Performance tracking

**Tier 3: Research and experimental models**

**Definition**: Prototypes, backtests, and exploratory analysis

**Examples**: New strategy ideas, data exploration, hypothesis testing

**Risk**: Low (no direct P&L impact)

**Requirements**:
- Minimal documentation
- Informal review
- No production deployment

**Tier escalation:**

When a Tier 3 model shows promise, it must be promoted through formal review:

Tier 3 → Tier 2: Requires peer review and documentation

Tier 2 → Tier 1: Requires full governance approval, independent validation, and production readiness checklist

## Documentation Standards

Each tier has its own **documentation standard**: data lineage, feature descriptions, testing results, performance metrics, and validation approvals.

**Required documentation elements:**

**Model overview:**
- Purpose and intended use
- Developer and owner
- Development date and version
- Risk tier classification

**Data lineage:**
- Source systems
- Data transformations
- Feature engineering logic
- Historical data availability
- Data quality metrics

**Model methodology:**
- Algorithm type and architecture
- Hyperparameters and tuning process
- Training procedure
- Validation approach
- Performance metrics

**Feature descriptions:**
- Name and definition of each feature
- Expected range and distribution
- Business rationale
- Known limitations or biases

**Testing results:**
- In-sample performance
- Out-of-sample performance
- Walk-forward analysis
- Stress test results
- Comparison to benchmarks

**Risk assessment:**
- Known failure modes
- Sensitivity analysis
- Scenario testing
- Monitoring metrics
- Mitigation controls

**Validation approvals:**
- Validator name and date
- Findings and recommendations
- Approval status
- Conditions for use

**Change log:**
- Version history
- Material changes
- Revalidation dates

## Model Governance Committees

Many firms maintain **Model Risk Committees** that review these logs quarterly.

**Committee composition:**

**Quant researchers**: Understand model design

**Risk managers**: Assess potential risks

**Compliance officers**: Ensure regulatory adherence

**Technology leads**: Evaluate infrastructure and deployment

**Senior management**: Final approval authority

**Review process:**

**Quarterly reviews:**
- Performance versus expectations
- Incidents or failures
- Model drift or decay
- Changes to market conditions
- Regulatory updates

**Annual comprehensive review:**
- Full revalidation
- Documentation update
- Stress testing refresh
- Competitor analysis
- Technology obsolescence assessment

**Ad hoc reviews:**

Triggered by:
- Significant model change
- Performance anomaly
- Regulatory inquiry
- Risk limit breach
- Technology failure

**Governance outcomes:**

**Approved**: Continue using model as is

**Approved with conditions**: Use but enhance monitoring or controls

**Requires remediation**: Fix identified issues before continued use

**Suspended**: Stop using until problems resolved

**Retired**: Decommission model permanently

## Investor Transparency

Explainability also matters for investors. Allocators increasingly demand transparency about how systematic funds generate returns. Being able to demonstrate that your model decisions are grounded in data, not black box luck, builds trust and regulatory confidence alike.

**What investors want to know:**

**Source of alpha**: What patterns do models exploit?

**Risk factors**: What exposures do models create?

**Stability**: How consistent are returns over time?

**Robustness**: How do models perform in stress scenarios?

**Governance**: What controls prevent model failures?

**Transparency without giving away secrets:**

**High level explanations**: Describe strategy families (momentum, mean reversion) without exact formulas

**Performance attribution**: Show which factors contributed to returns

**Risk decomposition**: Break down risk by source (market, sector, idiosyncratic)

**Explainability examples**: Demonstrate that predictions are sensible

**Example investor presentation:**

"Our equity long/short strategy uses machine learning to rank stocks based on value, quality, and momentum signals. This month, momentum contributed +2%, value contributed +1%, and quality was flat. The model correctly identified tech sector strength through features like earnings revisions and price trends. SHAP analysis confirms that predictions align with fundamental drivers."

**Building trust:**

Investors trust funds that can:
- Explain why strategies work
- Show consistent decision logic
- Demonstrate risk awareness
- Prove regulatory compliance
- Transparently discuss failures and learnings

In short, explainability turns AI from something mysterious into something accountable.

**The ultimate goal:**

Make every model decision traceable, understandable, and defensible. This protects the fund from regulatory risk, investor skepticism, and internal confusion.

Explainability is not overhead; it's insurance. And in a business built on trust, insurance is invaluable.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Regulatory & Compliance"
      subtitle="Model Explainability"
      description="Explaining black box trading models to regulators using SHAP values, LIME, and attention mechanisms to provide interpretability, documenting model risk tiers, and maintaining governance frameworks."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default ModelExplainability;

