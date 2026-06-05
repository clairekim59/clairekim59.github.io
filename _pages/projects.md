---
layout: archive
title: "Research Projects"
permalink: /projects/
author_profile: true
redirect_from:
  - /project
---

{% include base_path %}

Ongoing
------
**Reasoning-Level Fairness in LLMs** &mdash; *Under submission*
* Reduced bias scores on the BBQ benchmark while preserving accuracy within 1% across GPT-3.5-Turbo and LLaMA-2-13B baselines.
* Built a reasoning-aware framework that models reasoning as Q → {R} → A to identify how stereotypes emerge during intermediate steps, and introduced a new metric quantifying unsupported demographic assumptions in reasoning traces &mdash; a complementary signal beyond answer-level bias.
* Designed hybrid mitigation: process supervision with counterfactual augmentation, fairness-aware RL rewards, and inference-time guided decoding with fairness verifiers (built on OpenR).

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>PyTorch</span> <span>OpenR</span> <span>Inference-time scaling</span> <span>Fairness-aware RL</span> <span>Benchmark</span></div>


**Bayesian Learning for Uncertainty-Aware Hallucination Mitigation**
* Designing a Bayesian, uncertainty-aware LLM system to detect and mitigate hallucinations in production, paired with evaluation workflows that demonstrate hallucination detection at scale.

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>PyTorch</span> <span>Bayesian methods</span> <span>LLM evaluation</span></div>

2025
------
**MASTOPIA: Transparency in LLM-Assisted Intelligence Analysis**
* Showed in a 2³ factorial human-subject study (n = 304) that high-transparency LLM outputs **did not improve performance** and in marginal conditions decreased it &mdash; evidence of overreliance from information overload, motivating adaptive / on-demand transparency design.
* Built **MASTOPIA**, a multi-agent RAG system (supervisor → retriever → generator agents) powered by GPT-4 / GPT-3.5 that operationalizes Multisource AI Scorecard Table (MAST) tradecraft standards through prompt engineering.
* Shipped an interactive Streamlit demo with model conditions, evidence retrieval, and behavioral logging of verification activity.

<span class="resource-links resource-links--inline" markdown="0"><a class="btn btn--accent-outline" href="https://mastopia-spr2025.streamlit.app/">Demo</a> <a class="btn btn--accent-outline" href="https://github.com/clairekim59/mastopia-spr2025">Code</a></span>

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>GPT-4 / GPT-3.5</span> <span>RAG</span> <span>Multi-agent LLM</span> <span>Vector DB</span> <span>Prompt engineering</span> <span>Flask</span> <span>Zero-inflated Poisson regression</span> <span>Ridit analysis</span> <span>Prolific / Qualtrics human-subject design</span></div>


2024
------
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

2023
------
**PADTHAI-MM: Designing Trustworthy, Human-Centered AI Systems Using the MAST Methodology** &mdash; *Published in AI Magazine, 2025*
* Designed and validated a principled AI design framework (PADTHAI-MM) for trustworthy decision-support systems; demonstrated effectiveness through a deployed AI system that positively impacted user trust perceptions.
* Conducted association analysis between user ratings and trust-impacting factors, providing a theoretical basis for the framework.
* Released open-source implementation artifacts for the READIT and Facewise prototypes supporting the MAST-based design workflow.

<span class="resource-links resource-links--inline" markdown="0"><a class="btn btn--accent-outline" href="https://github.com/clairekim59/PADTHAI-MM">Code</a></span>

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>Decision-support system design</span> <span>User study &amp; evaluation</span></div>

2022
------
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


2021
------
**Interpreting Text Classifiers with Counterfactual Explanation**
* Final project for CSE 472 (Social Media Mining).
* Implemented counterfactual explanations for a multi-layer neural network used in text classification.
* Project report available here. <span class="resource-links resource-links--inline" markdown="0"><a class="btn btn--accent-outline" href="{{ base_path }}/files/CSE_472_report.pdf">Report</a></span>

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>PyTorch</span> <span>Explainable AI</span></div>

2017
------
**Biomedical Entity Relation Extraction**
* Extracted biomedical entities and identified relations using the Comparative Toxicogenomics Database (CTD) via distant supervision.
* Implemented and trained a tree-RNN model (SPINN) combined with a word–character embedding model.

<div class="tech-stack" markdown="0"><span class="tech-stack__label">Tech</span> <span>Python</span> <span>TensorFlow</span> <span>Tree-RNN</span> <span>Distant supervision</span></div>
