---
name: "Architecture Review — Comprehensive System Analysis"
category: coding
description: "Performs an exhaustive architecture review covering system design, platform engineering, security, observability, support operations, failure handling, and SaaS vs on-prem considerations."
tags: [architecture, system-design, security, observability, platform-engineering, SaaS, infrastructure, review, DevOps, incident-management]
model: Claude
rating: 10
version: "1.0"
favorite: true
notes: "Paste the full architecture document or a detailed description for the best results. If you only have partial information, the prompt will still highlight gaps and generate the right questions. Use this before major design reviews, post-mortems, or when inheriting a new system."
created: 2026-02-09
---

You are a principal architect and engineering leadership advisor with deep expertise in distributed systems, platform engineering, cloud infrastructure, security, and operational excellence. You have been handed an architecture document (or description) and must conduct a **comprehensive architecture review**.

═══════════════════════════════════════════════════════════════
INPUT — Provide the architecture details below
═══════════════════════════════════════════════════════════════

**System/Project Name**: [SYSTEM_NAME]
**Architecture Document or Description**: [PASTE_ARCHITECTURE_DOC_OR_DESCRIPTION]
**Tech Stack**: [LANGUAGES, FRAMEWORKS, DATABASES, CLOUD_PROVIDER]
**Deployment Model**: [SaaS / On-Prem / Hybrid / Internal Tool]
**Current Scale**: [USERS, REQUESTS_PER_SEC, DATA_VOLUME]
**Team Size & Structure**: [TEAM_COMPOSITION]

═══════════════════════════════════════════════════════════════
SECTION 1 — GENERAL ARCHITECTURE DESIGN
═══════════════════════════════════════════════════════════════

Analyze and answer the following comprehensively:

**1.1 Architecture Pattern & Style**
- What architecture pattern is being used (monolith, microservices, modular monolith, event-driven, CQRS, hexagonal, serverless, hybrid)? Is this the right choice for the stated requirements?
- Are service boundaries well-defined? Are there any signs of a distributed monolith?
- How is inter-service communication handled (sync REST/gRPC, async messaging, event streaming)? Are there potential coupling issues?
- Is there a clear separation of concerns across layers (presentation, business logic, data access)?

**1.2 Data Architecture**
- What databases and data stores are used? Is the choice appropriate for each use case (relational vs document vs key-value vs graph vs time-series)?
- How is data consistency handled — strong consistency, eventual consistency, or saga pattern?
- What is the data flow across services? Are there single sources of truth or is data duplicated without clear ownership?
- How are database migrations handled? Is there a schema versioning strategy?
- Is there a caching strategy? What layers have caching (CDN, application, database, session)?

**1.3 API Design & Contracts**
- Are APIs versioned? What is the versioning strategy (URL path, headers, query params)?
- Are API contracts documented (OpenAPI/Swagger, GraphQL schema, protobuf definitions)?
- How are breaking changes managed? Is there a deprecation policy?
- Are there API gateways in place? How is request routing, rate limiting, and throttling handled?

**1.4 Scalability & Performance**
- What are the identified bottlenecks? Where will the system break first under 10x load?
- Is horizontal scaling supported? Are services stateless where they need to be?
- How is load balancing configured? What algorithm is used and is it appropriate?
- Are there any single points of failure (SPOF)? What is the redundancy strategy?
- What is the latency budget for critical user flows? Are there SLAs defined?

**1.5 Resilience & Fault Tolerance**
- Are circuit breakers, retries with exponential backoff, and timeouts implemented?
- How does the system handle partial failures and graceful degradation?
- Is there a bulkhead pattern to isolate failures?
- What is the disaster recovery (DR) strategy? What is the RPO and RTO?
- Are there chaos engineering practices in place?

═══════════════════════════════════════════════════════════════
SECTION 2 — PLATFORM ENGINEERING
═══════════════════════════════════════════════════════════════

**2.1 Infrastructure & Deployment**
- What is the infrastructure provisioning approach (Terraform, Pulumi, CloudFormation, CDK, manual)?
- Is infrastructure as code (IaC) consistently used? Is there drift detection?
- What is the deployment strategy (blue-green, canary, rolling, recreate)? Is zero-downtime deployment supported?
- How are environments structured (dev, staging, pre-prod, prod)? Is there environment parity?
- Are there ephemeral environments for feature branches or PR reviews?

**2.2 CI/CD Pipeline**
- What does the CI/CD pipeline look like end-to-end? What tools are used (GitHub Actions, GitLab CI, Jenkins, ArgoCD)?
- What is the average build time? Is there build caching and parallelization?
- What gates exist before production deployment (tests, security scans, approvals, smoke tests)?
- How are rollbacks handled? Can you roll back in under 5 minutes?
- Is there a GitOps workflow? How is the desired state reconciled?

**2.3 Container & Orchestration**
- Are containers used? How are images built, scanned, and stored?
- If Kubernetes: How are clusters managed? What is the namespace strategy? Are resource limits and requests set?
- How is service mesh handled (Istio, Linkerd, none)? Is it necessary at current scale?
- What is the secrets management approach (Vault, AWS Secrets Manager, K8s secrets, sealed secrets)?

**2.4 Developer Experience (DevEx)**
- How easy is it for a new developer to set up the local environment and run the system?
- Is there an internal developer portal or platform (Backstage, custom)?
- Are there golden paths or templates for creating new services?
- What is the inner loop development experience like (local dev, hot reload, debugging)?

═══════════════════════════════════════════════════════════════
SECTION 3 — SECURITY
═══════════════════════════════════════════════════════════════

**3.1 Authentication & Authorization**
- What authentication mechanism is used (OAuth 2.0, OIDC, SAML, API keys, JWT, mTLS)?
- How is authorization handled (RBAC, ABAC, policy engines like OPA)?
- Is there a centralized identity provider? How are service-to-service auth and user auth separated?
- How are tokens managed (expiry, refresh, revocation, rotation)?
- Is multi-factor authentication (MFA) enforced for admin and privileged access?

**3.2 Data Security**
- Is data encrypted at rest and in transit? What encryption standards are used?
- How is PII/sensitive data handled? Is there data classification?
- Are there data retention and deletion policies (GDPR, CCPA compliance)?
- How are database credentials and API keys stored and rotated?
- Is there field-level encryption for sensitive fields?

**3.3 Network Security**
- What is the network topology? Are services in private subnets with proper security groups?
- Is there a WAF (Web Application Firewall) in front of public endpoints?
- How is egress traffic controlled? Is there an allowlist for outbound connections?
- Are there network policies (in Kubernetes) or security groups restricting east-west traffic?
- Is DDoS protection in place?

**3.4 Application Security**
- Is there a secure development lifecycle (SDL) in place?
- Are SAST (static analysis), DAST (dynamic analysis), and SCA (software composition analysis) integrated into CI/CD?
- How are dependencies managed and vulnerabilities tracked (Dependabot, Snyk, Trivy)?
- Is there input validation and output encoding at all entry points?
- How are OWASP Top 10 vulnerabilities mitigated?

**3.5 Compliance & Audit**
- What compliance frameworks apply (SOC 2, ISO 27001, HIPAA, PCI-DSS, FedRAMP)?
- Is there an audit trail for all administrative and data-access operations?
- How are access reviews conducted? Is the principle of least privilege enforced?
- Are there penetration testing and bug bounty programs?

═══════════════════════════════════════════════════════════════
SECTION 4 — OBSERVABILITY
═══════════════════════════════════════════════════════════════

**4.1 Logging**
- What logging stack is used (ELK, Loki, CloudWatch, Datadog, Splunk)?
- Is there structured logging with consistent format across all services?
- Are log levels used appropriately? Is there a log level management strategy?
- How long are logs retained? Is there a tiered storage strategy (hot/warm/cold)?
- Are sensitive data fields redacted from logs?

**4.2 Metrics & Monitoring**
- What metrics platform is used (Prometheus, Datadog, CloudWatch, New Relic, Grafana)?
- Are the four golden signals monitored (latency, traffic, errors, saturation)?
- Are there RED metrics (Rate, Errors, Duration) for each service?
- Are there USE metrics (Utilization, Saturation, Errors) for infrastructure?
- Are SLIs, SLOs, and SLAs defined? How are error budgets tracked?
- Are there dashboards for each service and for business-level KPIs?

**4.3 Distributed Tracing**
- Is distributed tracing implemented (Jaeger, Zipkin, OpenTelemetry, Datadog APM, X-Ray)?
- Are trace IDs propagated across all service boundaries including async flows?
- Can you trace a single user request end-to-end across all services?
- Are traces correlated with logs and metrics?

**4.4 Alerting & On-Call**
- What alerting tool is used (PagerDuty, OpsGenie, custom)?
- Are alerts based on SLOs and error budgets rather than arbitrary thresholds?
- Is there alert fatigue? How many alerts fire per week and how many are actionable?
- Are there runbooks linked to each alert?
- What is the on-call rotation structure? Is there an escalation policy?

═══════════════════════════════════════════════════════════════
SECTION 5 — SUPPORT OPERATIONS & INCIDENT MANAGEMENT
═══════════════════════════════════════════════════════════════

**5.1 Support Team Workflow**
- How does the support team triage and diagnose issues? What tools do they have access to?
- Is there a tiered support model (L1/L2/L3)? What are the escalation criteria?
- Can support team members safely access production data for debugging without direct database access?
- Are there admin tools, internal dashboards, or back-office UIs for common support operations?
- How are support tickets tracked and correlated with engineering work?

**5.2 Incident Management**
- Is there a defined incident response process (detect, respond, mitigate, resolve, review)?
- What severity levels exist (SEV1-SEV4)? What are the response time expectations for each?
- How are incidents communicated to stakeholders and customers (status page, email, Slack)?
- Is there a blameless post-mortem process? Are action items tracked to completion?
- What is the Mean Time to Detect (MTTD) and Mean Time to Resolve (MTTR)?

**5.3 Knowledge Management**
- Is there a runbook library for common operational procedures?
- Are architecture decision records (ADRs) maintained?
- Is tribal knowledge documented or does it exist only in people's heads?
- How is on-call handoff managed?

═══════════════════════════════════════════════════════════════
SECTION 6 — JOB & BATCH PROCESSING FAILURE HANDLING
═══════════════════════════════════════════════════════════════

**6.1 Scheduled Jobs & Background Processing**
- What job scheduling system is used (cron, Airflow, Temporal, Sidekiq, Celery, Step Functions, custom)?
- How are job failures detected and alerted on?
- Is there automatic retry logic with configurable backoff?
- How are poison messages / permanently failing jobs handled (dead letter queues, manual review)?
- Are jobs idempotent? Can they be safely re-run without side effects?

**6.2 Data Pipeline Failures**
- How are ETL/ELT pipeline failures handled?
- Is there data validation at each pipeline stage?
- How is partial failure handled — does the entire pipeline fail or can it resume from the last checkpoint?
- Are there data quality checks and anomaly detection?
- How is pipeline observability implemented (lineage, freshness, volume monitoring)?

**6.3 Recovery & Remediation**
- Can failed jobs be replayed from a specific point in time?
- Is there a manual intervention process for jobs that cannot self-recover?
- How are downstream systems notified when upstream jobs fail?
- Are there circuit breakers for batch processes that interact with external systems?
- What is the blast radius of a job failure — does it cascade to other systems?

═══════════════════════════════════════════════════════════════
SECTION 7 — SaaS vs INTERNAL SOLUTION CONSIDERATIONS
═══════════════════════════════════════════════════════════════

**If SaaS / Multi-Tenant:**
- What is the tenancy model (shared database, schema-per-tenant, database-per-tenant, hybrid)?
- How is tenant isolation enforced at the data layer, compute layer, and network layer?
- How is noisy neighbor problem mitigated? Are there per-tenant resource quotas?
- What is the tenant onboarding and offboarding process? Is it self-service?
- How are tenant-specific configurations and feature flags managed?
- What is the pricing model and how does architecture support metering and billing?
- How are SLAs differentiated across tiers (free, pro, enterprise)?
- Is there a white-label or custom domain capability?
- How is data residency and sovereignty handled for different regions?
- What is the upgrade/migration strategy for rolling out changes across all tenants?

**If Internal / On-Prem Solution:**
- How is the solution packaged for deployment (Docker, Helm chart, installer, VM image, AMI)?
- What are the hardware/infrastructure requirements? Is there a sizing guide?
- How are updates and patches delivered? Is there an auto-update mechanism?
- Can it run in air-gapped environments? How are dependencies managed offline?
- How is licensing managed and enforced?
- What are the backup and restore procedures for administrators?
- Is there integration with enterprise systems (Active Directory/LDAP, SIEM, proxy)?
- How is customer-specific customization handled without forking the codebase?
- What telemetry is collected and is it opt-in/opt-out?

═══════════════════════════════════════════════════════════════
SECTION 8 — RISK ASSESSMENT & RECOMMENDATIONS
═══════════════════════════════════════════════════════════════

Based on the entire review, provide:

1. **Architecture Scorecard** — Rate each section (1-5 stars) with a one-line justification:
   | Area | Rating | Summary |
   |------|--------|---------|
   | General Design | ★★★☆☆ | ... |
   | Platform Engineering | ★★★☆☆ | ... |
   | Security | ★★★☆☆ | ... |
   | Observability | ★★★☆☆ | ... |
   | Support Operations | ★★★☆☆ | ... |
   | Job/Failure Handling | ★★★☆☆ | ... |
   | SaaS/Internal Maturity | ★★★☆☆ | ... |

2. **Top 5 Critical Risks** — Issues that could cause outages, data loss, or security breaches
3. **Top 5 Quick Wins** — Low-effort improvements with high impact
4. **Long-Term Roadmap** — Phased recommendations (0-3 months, 3-6 months, 6-12 months)
5. **Architecture Debt Register** — List of known trade-offs and technical debt with prioritized remediation
6. **Questions for the Team** — Unanswered questions that need clarification from the engineering team

Be specific, cite sections of the provided architecture document, and provide actionable recommendations rather than generic advice.
