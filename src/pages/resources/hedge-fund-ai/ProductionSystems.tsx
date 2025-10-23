import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const ProductionSystems = () => {
  const content = `
## Overview

**In this section:**
- [Overview](#overview)
- [From Research to Production](#from-research-to-production)
- [Data Pipelines and Orchestration](#data-pipelines-and-orchestration)
- [Model Registries and Feature Stores](#model-registries-and-feature-stores)
- [Real-Time Inference and Deployment](#real-time-inference-and-deployment)
- [Monitoring and Alerting](#monitoring-and-alerting)

## Overview

When a model graduates from research into live trading, the bar for reliability skyrockets. Production systems ensure that models run on time, on clean data, and under constant monitoring. This is where machine learning infrastructure becomes real engineering.

## From Research to Production

In research, you can restart a notebook, fix a bug, and rerun a backtest. In production, the model is running with real money. Every input must be correct, every prediction must arrive on time, and every failure must be caught instantly.

**The production challenge:**
- Data must flow automatically and predictably
- Models must be versioned and reproducible
- Features must be computed identically in research and production
- Latency must be low enough for trading decisions
- Failures must be detected and handled gracefully

This is where the modern hedge fund becomes an engineering organization, not just a finance firm.

## Data Pipelines and Orchestration

Data is the foundation of everything. Raw data arrives from dozens of sources — market feeds, alternative datasets, vendor APIs, internal databases. It needs to be collected, cleaned, transformed, and stored in a way that's queryable and reliable.

**Pipeline orchestration tools** manage this workflow:

**Apache Airflow** (Most Common):
- DAG-based (Directed Acyclic Graph) workflow orchestration
- Schedule jobs to run at specific times or on triggers
- Retry failed tasks, alert on errors, track dependencies
- Integrates with nearly every data system

**Example Airflow DAG:**

A typical daily pipeline might:
1. **Extract** overnight trades from market data vendors (7:00 AM)
2. **Load** into a staging table in BigQuery (7:15 AM)
3. **Compute features**: rolling volatilities, momentum signals (7:30 AM)
4. **Generate predictions** for today's trading using yesterday's model (8:00 AM)
5. **Retrain or update models** using today's actual outcomes (after market close)
6. **Send alerts** if anything looks anomalous (8:35 AM)

Each step is a separate task. If step 2 fails, Airflow retries it. If it keeps failing, it alerts the team and stops the downstream tasks.

**Other orchestration tools:**
- **Prefect**: Modern alternative with better observability and dynamic workflows
- **Dagster**: Asset-oriented framework focused on data quality
- **Luigi**: Spotify's pipeline framework, simpler than Airflow
- **Temporal**: For complex, long-running workflows with state management

**Data storage layer:**

Once data is processed, it's stored in a **data warehouse** or **data lake**:

**BigQuery (Google Cloud):**
- Serverless, scales automatically
- SQL-based, easy for analysts and researchers
- Separates compute from storage (pay for what you query)
- Common choice for hedge funds on GCP

**Snowflake:**
- Cloud data platform with strong performance
- Works across AWS, GCP, and Azure
- Great for large-scale analytics and sharing data

**AWS Redshift:**
- Amazon's data warehouse
- Integrates well with other AWS services
- Used by funds already in the AWS ecosystem

**Databricks Delta Lake:**
- Lakehouse architecture (combines lake and warehouse)
- Built on top of S3 or other object storage
- Strong support for machine learning workloads
- Native Spark integration

**Time-Series Databases:**
- **TimescaleDB**: PostgreSQL extension optimized for time series
- **ClickHouse**: Fast columnar database for analytics
- **InfluxDB**: Purpose-built for high-frequency time series

**Example data flow:**

1. Market data arrives via **FIX protocol** or vendor API
2. Ingested into **Kafka** topics for streaming
3. **Spark Structured Streaming** processes and enriches data
4. Written to **Delta Lake** on S3
5. **Airflow** runs nightly batch jobs to compute features
6. Results stored in **BigQuery** for SQL access
7. **Feature store** serves features to models

## Model Registries and Feature Stores

As models evolve, you need to track **which version is running, when it was deployed, and how it's performing**.

**Model Registries:**

**MLflow:**
- Open-source platform for the ML lifecycle
- Tracks experiments, logs metrics, versions models
- Deploys models as REST APIs
- Integrates with most ML frameworks (scikit-learn, PyTorch, XGBoost)

**Weights & Biases (W&B):**
- Experiment tracking with rich visualizations
- Model versioning and registry
- Strong team collaboration features
- Popular in research-heavy organizations

**Internal Custom Systems:**
Many large funds build their own registries that integrate with their execution systems. These might store:
- Model code and trained weights
- Training data version and feature set used
- Hyperparameters and performance metrics
- Deployment history and rollback capability

**Feature Stores:**

A feature store ensures that the **exact same inputs** used in research are served in real time to production models — guaranteeing parity between backtest and live deployment.

**What a feature store provides:**
- **Offline features**: Historical feature values for training
- **Online features**: Real-time feature values for inference
- **Feature definitions**: Code that generates each feature
- **Time-travel queries**: Get features "as of" any historical timestamp
- **Consistency**: Same computation in research and production

**Popular feature stores:**
- **Tecton**: Enterprise platform with strong real-time support
- **Feast**: Open-source from Google/Tecton founders
- **Hopsworks**: Full-stack ML platform with integrated feature store
- **AWS SageMaker Feature Store**
- **Databricks Feature Store**

**Example:**

Without a feature store:
- Researcher computes features in Python, trains model
- Engineer reimplements features in production (Java or C++)
- Features drift slightly, model performance degrades

With a feature store:
- Researcher defines feature in store: \`momentum_20d = (price / price.shift(20)) - 1\`
- Store computes feature for training (batch) and production (real-time)
- Guaranteed consistency

## Real-Time Inference and Deployment

For live inference, hedge funds often **containerize** their models using Docker or Kubernetes.

**Why containers?**
- **Reproducibility**: Model runs the same way everywhere
- **Isolation**: Each model has its own environment
- **Scalability**: Spin up more instances under load
- **Fast rollback**: Switch back to previous version instantly

**Deployment patterns:**

**REST API:**
Model served as an HTTP endpoint. Execution systems send feature vectors, get predictions back. Good for lower-frequency strategies.

**Streaming inference:**
Model consumes events from Kafka or Kinesis and publishes predictions in real time. Good for high-frequency or event-driven strategies.

**Embedded models:**
For ultra-low latency (microseconds), models are compiled and embedded directly in the execution engine (C++/Rust).

**Example production setup:**

1. Model trained in Python (PyTorch, XGBoost)
2. Serialized and uploaded to **MLflow registry**
3. Packaged into a **Docker container** with dependencies
4. Deployed to **Kubernetes cluster** (EKS, GKE, or on-prem)
5. Exposed as a **REST API** or subscribes to **Kafka topic**
6. Execution engine queries model for signals
7. Predictions logged to monitoring system

**Canary deployments:**

Before fully deploying a new model:
- Deploy to a small fraction of traffic (e.g., 5%)
- Run in **shadow mode** alongside the old model
- Compare predictions side by side
- If stable, gradually increase traffic
- If issues detected, roll back instantly

This lets you test in production without risking everything.

## Monitoring and Alerting

Production systems need constant oversight. If something breaks, you need to know **immediately**.

**What to monitor:**

**System Health:**
- Data pipeline status (is data arriving on time?)
- Model inference latency (are predictions fast enough?)
- API uptime and error rates
- Database and storage capacity

**Model Performance:**
- **Prediction distribution**: Are outputs in the expected range?
- **Feature drift**: Are input features shifting from training distribution?
- **Model drift**: Is accuracy degrading over time?
- **Correlation with actuals**: Are predictions still aligned with outcomes?

**Data Quality:**
- Missing or stale data
- Outliers or anomalies in features
- Schema changes breaking pipelines
- Duplicate or corrupted records

**Alerting systems:**

**PagerDuty / Opsgenie:**
For critical production incidents, page the on-call engineer.

**Slack / Email / SMS:**
For warnings and anomalies that need attention but aren't emergencies.

**Grafana / Datadog / Prometheus:**
Dashboards showing real-time system metrics, model performance, and data quality.

**Example alert rules:**

- If market data feed is delayed > 10 seconds → Page on-call
- If model latency exceeds 100ms → Send Slack alert
- If feature mean shifts > 3 standard deviations → Email team
- If prediction accuracy drops below threshold → Pause model, investigate

## The Real Test: Scaling Safely

The real test of a production system is whether it lets a fund **scale safely**. Every hedge fund eventually becomes a system of systems — research pipelines, execution engines, data streams, and models all running together.

Production infrastructure is what keeps them aligned, stable, and accountable. It's what turns a research idea into a durable, tradeable system that can run autonomously, under pressure, with real capital on the line.

In short, production systems keep the engine running while everyone sleeps. They automate the boring parts so researchers can focus on what matters: designing better signals and managing risk.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Machine Learning Infrastructure"
      subtitle="Production Systems"
      description="Running models in live trading—real-time data pipelines, model registries for versioning, monitoring for drift and errors, canary deployments, instant rollbacks, and feature stores for low-latency inference."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default ProductionSystems;

