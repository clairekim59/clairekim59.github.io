---
permalink: /
title: ""
excerpt: "About"
author_profile: true
redirect_from:
  - /about/
  - /about.html
  - /profile/
  - /projects/
  - /projects/devs/
  - /talks/
---

Hi,
======
{:#about}

I am **Claire (Nayoung) Kim**, a Computer Science Ph.D. candidate at the [School of Computing and Augmented Intelligence (SCAI)](https://scai.engineering.asu.edu/) at Arizona State University, graduating in 2026. I build and evaluate trustworthy NLP and LLM systems, with research spanning fairness, bias mitigation, hallucination, robustness, and human-centered AI evaluation.

My work is strongest at the intersection of rigorous research and practical AI systems: defining measurable failure modes, designing mitigation methods, running careful evaluations, and building usable ML/LLM prototypes.

<div class="snapshot" markdown="0">
  <ul>
    <li><span class="snapshot__label">Focus</span><span class="snapshot__value">Trustworthy LLMs · Fairness · Hallucination mitigation · LLM evaluation</span></li>
    <li><span class="snapshot__label">Core stack</span><span class="snapshot__value">Python · PyTorch · HuggingFace · Transformers · LoRA / PEFT</span></li>
    <li><span class="snapshot__label">LLM systems</span><span class="snapshot__value">RAG · Multi-agent · LLM-as-a-judge · Vector DBs (FAISS, Chroma)</span></li>
    <li><span class="snapshot__label">Cloud &amp; MLOps</span><span class="snapshot__value">AWS (SageMaker, S3, Lambda) · GCP · Docker · MLflow / WandB</span></li>
    <li><span class="snapshot__label">Most recent</span><span class="snapshot__value">Applied Scientist Intern @ Amazon (Fall 2025)</span></li>
    <li><span class="snapshot__label">Looking for</span><span class="snapshot__value">Applied / Research Scientist · ML / AI Engineer — Fall 2026 start</span></li>
  </ul>
</div>

<div class="role-tags" markdown="0">
  <span>Applied Scientist</span>
  <span>Research Scientist</span>
  <span>AI/ML Engineer</span>
  <span>NLP / LLM Systems</span>
</div>

<p class="profile-actions">
  <a class="btn btn--primary btn--spotlight" href="{{ base_path }}/files/ClaireKim_resume.pdf"><i class="fas fa-file-pdf"></i> Download Resume</a>
  <a class="btn btn--accent-outline" href="#research-projects">Research Projects</a>
  <a class="btn btn--accent-outline" href="#dev-projects">Dev Projects</a>
  <a class="btn btn--accent-outline" href="{{ base_path }}/cv/">Full CV</a>
</p>


Experience
------
{:#experience}

<div class="timeline" markdown="1">

* **Applied Scientist Intern**, Amazon &mdash; Bellevue, WA · Sep – Dec 2025
* **AI/ML Intern**, AMD &mdash; Austin, TX · May – Aug 2025
* **Software Development Intern**, AMD &mdash; Austin, TX · Aug – Dec 2024
* **Research Assistant**, DHS-CAOE &mdash; Tempe, AZ · Aug 2022 – May 2025
* **Research Assistant**, ONR / ASU &mdash; Tempe, AZ · Aug 2021 – Aug 2022
* **Research Assistant**, ASU × Mathpresso &mdash; Tempe, AZ · Jan – May 2021
* **Research Assistant**, Korea University DMIS Lab &mdash; Seoul, Republic of Korea · 2017 – 2019

</div>

For full role details (PIs, scope, responsibilities), see the [Full CV]({{ base_path }}/cv/).


Skills
------
{:#skills}

<div class="skills" markdown="0">
  <div class="skill-row"><div class="skill-label">Research focus</div><div class="skill-list"><span class="skill-pill">Trustworthy LLMs</span>
  <span class="skill-pill">Fairness &amp; bias mitigation</span>
  <span class="skill-pill">Hallucination evaluation</span>
  <span class="skill-pill">Robust AI</span>
  <span class="skill-pill">Human-centered evaluation</span></div></div>
  <div class="skill-row"><div class="skill-label">LLM systems</div><div class="skill-list"><span class="skill-pill">RAG</span>
  <span class="skill-pill">Multi-agent</span>
  <span class="skill-pill">LLM-as-a-judge</span>
  <span class="skill-pill">Synthetic QA generation</span>
  <span class="skill-pill">LlamaIndex</span>
  <span class="skill-pill">Vector DBs (FAISS, Chroma)</span>
  <span class="skill-pill">Elasticsearch</span>
  <span class="skill-pill">Prompt engineering</span>
  <span class="skill-pill">Inference-time scaling</span></div></div>
  <div class="skill-row"><div class="skill-label">ML &amp; training</div><div class="skill-list"><span class="skill-pill">PyTorch</span>
  <span class="skill-pill">JAX</span>
  <span class="skill-pill">HuggingFace</span>
  <span class="skill-pill">Transformers</span>
  <span class="skill-pill">SFT</span>
  <span class="skill-pill">RLHF</span>
  <span class="skill-pill">LoRA / PEFT</span>
  <span class="skill-pill">Pandas / NumPy</span></div></div>
  <div class="skill-row"><div class="skill-label">Cloud &amp; MLOps</div><div class="skill-list"><span class="skill-pill">AWS (SageMaker, S3, Lambda)</span>
  <span class="skill-pill">GCP</span>
  <span class="skill-pill">Docker</span>
  <span class="skill-pill">MLflow</span>
  <span class="skill-pill">WandB</span>
  <span class="skill-pill">CI/CD</span></div></div>
  <div class="skill-row"><div class="skill-label">Engineering</div><div class="skill-list"><span class="skill-pill">Python</span>
  <span class="skill-pill">SQL</span>
  <span class="skill-pill">JavaScript</span>
  <span class="skill-pill">Streamlit</span>
  <span class="skill-pill">Flask</span>
  <span class="skill-pill">Node.js</span>
  <span class="skill-pill">Git</span>
  <span class="skill-pill">Linux</span>
  <span class="skill-pill">Algorithms &amp; data structures</span>
  <span class="skill-pill">System design</span></div></div>
  <div class="skill-row"><div class="skill-label">Methods</div><div class="skill-list"><span class="skill-pill">Bayesian inference</span>
  <span class="skill-pill">Uncertainty quantification</span>
  <span class="skill-pill">Statistical analysis</span>
  <span class="skill-pill">Human-subject study design</span></div></div>
</div>


Research Projects
------
{:#research-projects}

A selection of research projects spanning trustworthy LLMs, fairness and bias mitigation, hallucination evaluation, and human-centered AI &mdash; grouped chronologically, with the most concrete outcome leading each entry.

### Ongoing

**Reasoning-Level Fairness in LLMs** &mdash; *Under submission*
* Reduced bias scores on the BBQ benchmark while preserving accuracy within 1% across GPT-3.5-Turbo and LLaMA-2-13B baselines.
* Built a reasoning-aware framework that models reasoning as Q → {R} → A to identify how stereotypes emerge during intermediate steps, and introduced a new metric quantifying unsupported demographic assumptions in reasoning traces &mdash; a complementary signal beyond answer-level bias.
* Designed hybrid mitigation: process supervision with counterfactual augmentation, fairness-aware RL rewards, and inference-time guided decoding with fairness verifiers (built on OpenR).

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>PyTorch</span> <span>OpenR</span> <span>Inference-time scaling</span> <span>Fairness-aware RL</span> <span>Benchmark</span></div>


**Bayesian Learning for Uncertainty-Aware Hallucination Mitigation**
* Designing a Bayesian, uncertainty-aware LLM system to detect and mitigate hallucinations in production, paired with evaluation workflows that demonstrate hallucination detection at scale.

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>PyTorch</span> <span>Bayesian methods</span> <span>LLM evaluation</span></div>

### 2025

**MASTOPIA: Transparency in LLM-Assisted Intelligence Analysis**
* Showed in a 2³ factorial human-subject study (n = 304) that high-transparency LLM outputs **did not improve performance** and in marginal conditions decreased it &mdash; evidence of overreliance from information overload, motivating adaptive / on-demand transparency design.
* Built **MASTOPIA**, a multi-agent RAG system (supervisor → retriever → generator agents) powered by GPT-4 / GPT-3.5 that operationalizes Multisource AI Scorecard Table (MAST) tradecraft standards through prompt engineering.
* Shipped an interactive Streamlit demo with model conditions, evidence retrieval, and behavioral logging of verification activity.

<span class="resource-links resource-links--inline" markdown="0"><a class="btn btn--primary" href="https://mastopia-spr2025.streamlit.app/">Try the demo</a> <a class="btn btn--accent-outline" href="https://github.com/clairekim59/mastopia-spr2025">Code</a></span>

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>GPT-4 / GPT-3.5</span> <span>RAG</span> <span>Multi-agent LLM</span> <span>Vector DB</span> <span>Prompt engineering</span> <span>Flask</span> <span>Zero-inflated Poisson regression</span> <span>Ridit analysis</span> <span>Prolific / Qualtrics human-subject design</span></div>

### 2024

**Towards Fair Language Modeling via Parameter-Efficient Methods by Machine Feedback**
* Mitigated social biases in T5, BERT, and LLaMA-2 for toxicity and hate-speech detection by combining reinforcement learning with parameter-efficient tuning (LoRA, P-tuning).

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>PyTorch</span> <span>Hugging Face</span> <span>LoRA</span> <span>RL</span></div>

**MEGAWATT: MAST for Evaluating Generative AI in Worker–Automation Team Tasks**
* Ran human-subject studies on whether off-the-shelf or improved GPT-4 outputs lead to appropriate use &mdash; including correct rejections &mdash; for intelligence-analysis (I&A) tasks.
* Applied the MAST trust-assessment framework to evaluate baseline performance and inform adoption decisions for GPT-4 in I&A workflows.
* Improved response quality with prompt engineering and RAG across summarization, NER, and conversational tasks.

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>GPT-4 API</span> <span>RAG</span> <span>Human-subject study design</span></div>

**Automated Evaluation of Machine-generated Summaries using RLHF**
* Trained an LLM classifier to score document–summary pairs via multi-class classification + RLHF on a handcrafted human-preferences dataset; validated with expert evaluation to confirm the learning method.

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>PyTorch</span> <span>RLHF</span> <span>LLM evaluation</span></div>

### 2023

**PADTHAI-MM: Designing Trustworthy, Human-Centered AI Systems Using the MAST Methodology** &mdash; *Published in AI Magazine, 2025*
* Designed and validated a principled AI design framework (PADTHAI-MM) for trustworthy decision-support systems; demonstrated effectiveness through a deployed AI system that positively impacted user trust perceptions.
* Conducted association analysis between user ratings and trust-impacting factors, providing a theoretical basis for the framework.
* Released open-source implementation artifacts for the READIT and Facewise prototypes supporting the MAST-based design workflow.

<span class="resource-links resource-links--inline" markdown="0"><a class="btn btn--accent-outline" href="https://github.com/clairekim59/PADTHAI-MM">Code</a></span>

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>Decision-support system design</span> <span>User study &amp; evaluation</span></div>

### 2022

**READIT: Reporting Assistant for Defense and Intelligence Tasks**
* Built a Transformer-based summarization system for intelligence analysts, deployed via a Node.js + Google Cloud web interface for production access to summarized reports.
* Public implementation available through the PADTHAI-MM research-code repository.

<span class="resource-links resource-links--inline" markdown="0"><a class="btn btn--accent-outline" href="https://github.com/clairekim59/PADTHAI-MM/tree/main/readit">Code</a></span>

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>Transformers</span> <span>Node.js</span> <span>Google Cloud Platform</span></div>

**Facewise: AI-based Face ID Verification System**
* Built a face ID verification system for security screening, using CNN + ResNet face matching with fine-tuning to optimize verification performance.
* Public implementation available through the PADTHAI-MM research-code repository.

<span class="resource-links resource-links--inline" markdown="0"><a class="btn btn--accent-outline" href="https://github.com/clairekim59/PADTHAI-MM/tree/main/facewise">Code</a></span>

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>PyTorch</span> <span>CNN</span> <span>ResNet</span></div>

### 2021

**Interpreting Text Classifiers with Counterfactual Explanation**
* Final project for CSE 472 (Social Media Mining).
* Implemented counterfactual explanations for a multi-layer neural network used in text classification.
* Project report available here. <span class="resource-links resource-links--inline" markdown="0"><a class="btn btn--accent-outline" href="{{ base_path }}/files/CSE_472_report.pdf">Report</a></span>

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>PyTorch</span> <span>Explainable AI</span></div>

### 2017

**Biomedical Entity Relation Extraction**
* Extracted biomedical entities and identified relations using the Comparative Toxicogenomics Database (CTD) via distant supervision.
* Implemented and trained a tree-RNN model (SPINN) combined with a word–character embedding model.

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>TensorFlow</span> <span>Tree-RNN</span> <span>Distant supervision</span></div>


Dev Projects
------
{:#dev-projects}

These projects translate my trustworthy AI research direction into interactive systems, demos, and product-quality prototypes &mdash; connecting model behavior, transparency, evaluation, and user interaction in real systems while also showing the engineering judgment needed to build and deploy them.

### MASTOPIA — Transparency-Aware LLM Analysis Demo

**MASTOPIA** is a Streamlit demo for LLM-assisted intelligence analysis. It operationalizes MAST-style transparency ideas through an interactive workflow with model conditions, evidence retrieval, model information, session management, and activity logging.

<p class="action-links">
  <a class="btn btn--primary" href="https://mastopia-spr2025.streamlit.app/">Try the demo</a>
  <a class="btn btn--accent-outline" href="https://github.com/clairekim59/mastopia-spr2025">View code</a>
</p>

**System highlights**
* Multi-agent architecture with supervisor, retriever, and general AI agents.
* Streamlit chat interface with model information controls and sidebar state.
* Session management and activity logging for research evaluation.
* RAG-oriented stack using LangChain / LangGraph, OpenAI APIs, FAISS, and Google Cloud / Firestore components.

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>Streamlit</span> <span>LangChain / LangGraph</span> <span>OpenAI API</span> <span>FAISS</span> <span>Google Cloud / Firestore</span> <span>RAG</span> <span>Activity logging</span></div>

### Sprout — Product-Quality Engineering Build

**Sprout** is not a research project, but it shows my interest in building usable real-world systems with care for interaction quality, reliability, and user-facing product details.

<p class="action-links">
  <a class="btn btn--primary" href="https://sprout-flowers.vercel.app/">Try Sprout</a>
  <a class="btn btn--accent-outline" href="https://github.com/clairekim59/sprout-flowers">View code</a>
</p>

* Full-stack bilingual social app with authentication, profiles, public sharing, responsive UI, dark mode, and Supabase-backed persistence.
* Built with a high-quality agentic coding workflow while retaining ownership of product direction, architecture, testing, and final code quality.
* Included here as engineering evidence alongside my primary research work.
