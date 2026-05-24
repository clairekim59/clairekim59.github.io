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
* Built a reasoning-aware framework for bias identification and mitigation in LLMs, modeling reasoning as Q → {R} → A to analyze how stereotypes emerge during intermediate steps.
* Introduced the **Reasoning Bias Rate (RBR)** metric, the first measure quantifying unsupported demographic assumptions in reasoning traces (a complementary signal beyond answer-level bias).
* Hybrid mitigation: process supervision with counterfactual augmentation, fairness-aware RL rewards, and inference-time guided decoding with fairness verifiers (built on OpenR).
* Reduced bias scores by **>20%** on the BBQ benchmark while preserving accuracy within 1% across GPT-3.5-Turbo and LLaMA-2-13B baselines.
* *Tech: Python · PyTorch · OpenR · Inference-time scaling · Fairness-aware RL ·  benchmark*

2025
------
**MASTOPIA: Transparency in LLM-Assisted Intelligence Analysis** 
* Built **MASTOPIA**, a multi-agent RAG system (supervisor → retriever → generator agents) powered by GPT-4 / GPT-3.5 that operationalizes Multisource AI Scorecard Table (MAST) tradecraft standards through prompt engineering.
* Designed and ran a 2³ factorial human-subject study (n = 304) varying LLM performance, MAST transparency, and task severity, with behavioral logging of verification activity.
* Found that high-transparency outputs **did not improve performance** and in marginal conditions decreased it &mdash; evidence of overreliance from information overload &mdash; motivating adaptive / on-demand transparency design.
* Built an interactive Streamlit demo version for exploring the system workflow. [[demo](https://mastopia-spr2025.streamlit.app/)] [[code](https://github.com/clairekim59/mastopia-spr2025)]
* *Tech: Python · GPT-4 / GPT-3.5 · RAG · multi-agent LLM · vector DB · prompt engineering · Flask · zero-inflated Poisson regression · ridit analysis · Prolific / Qualtrics human-subject design*

**Bayesian Learning for Uncertainty-Aware Hallucination Mitigation** 
* Designing an uncertainty-aware LLM system using Bayesian inference to detect and mitigate hallucinations in production settings.
* Developing evaluation workflows that demonstrate hallucination detection at scale.
* *Tech: Python · PyTorch · Bayesian methods · LLM evaluation*

2024
------
**Towards Fair Language Modeling via Parameter-Efficient Methods by Machine Feedback**
* Mitigated social biases in T5, BERT, and LLaMA-2 for toxicity and hate-speech detection.
* Trained LLMs to learn fairness using reinforcement learning combined with parameter-efficient tuning (LoRA, P-tuning).
* *Tech: Python · PyTorch · Hugging Face · LoRA · RL*

**MEGAWATT: MAST for Evaluating Generative AI in Worker–Automation Team Tasks**
* Applied the MAST trust-assessment framework to evaluate baseline performance and inform appropriate adoption of GPT-4 for intelligence-analysis (I&A) tasks.
* Ran human-subject studies measuring whether off-the-shelf or improved outputs lead to appropriate use, including correct rejections.
* Improved response quality with prompt engineering and retrieval-augmented generation (RAG) for summarization, NER, and conversational tasks.
* *Tech: Python · GPT-4 API · RAG · Human-subject study design*

**Automated Evaluation of Machine-generated Summaries using RLHF**
* Trained an LLM-based classifier to score document–summary pairs via multi-class classification and RLHF with a handcrafted human-preferences dataset.
* Validated outputs with expert evaluation to confirm the proposed learning method.
* *Tech: Python · PyTorch · RLHF · LLM evaluation*

2023
------
**PADTHAI-MM: Designing Trustworthy, Human-Centered AI Systems Using the MAST Methodology**
* Developed a novel AI design framework for building trustworthy decision-support systems.
* Demonstrated effectiveness through a deployed AI system that positively impacted user trust perceptions.
* Conducted association analysis between user ratings and trust-impacting factors, providing a theoretical basis for the framework.
* Released implementation artifacts for the READIT and Facewise prototypes supporting the MAST-based design workflow. [[code](https://github.com/clairekim59/PADTHAI-MM)]
* *Tech: Python · Decision-support system design · User study & evaluation*

2022
------
**READIT: Reporting Assistant for Defense and Intelligence Tasks**
* Trained a Transformer-based text-summarization system for intelligence analysts.
* Built a user-friendly web interface using Node.js and Google Cloud, enabling analysts to access summarized reports in production.
* Public implementation is available through the PADTHAI-MM research-code repository. [[code](https://github.com/clairekim59/PADTHAI-MM/tree/main/readit)]
* *Tech: Python · Transformers · Node.js · Google Cloud Platform*

**Facewise: AI-based Face ID Verification System**
* Built a face ID verification system for security screening with reliable identity authentication.
* Implemented face matching with CNNs and ResNet, fine-tuning to optimize verification performance.
* Public implementation is available through the PADTHAI-MM research-code repository. [[code](https://github.com/clairekim59/PADTHAI-MM/tree/main/facewise)]
* *Tech: Python · PyTorch · CNN · ResNet*

**Bridging the Gap: Online and Offline COVID-19 Data**
* Released reproducibility code for a published social-computing study comparing online and offline COVID-19 signals.
* Implemented topic modeling, matrix factorization, preprocessing, and comparison workflows for analyzing cross-source commonality and differences. [[paper](https://arxiv.org/pdf/2208.03907.pdf)] [[code](https://github.com/clairekim59/Bridging-the-Gap)]
* *Tech: Python · topic modeling · matrix factorization · social computing*

2021
------
**Interpreting Text Classifiers with Counterfactual Explanation**
* Final project for CSE 472 (Social Media Mining).
* Implemented counterfactual explanations for a multi-layer neural network used in text classification.
* *Tech: Python · PyTorch · Explainable AI*

2017
------
**Biomedical Entity Relation Extraction**
* Extracted biomedical entities and identified relations using the Comparative Toxicogenomics Database (CTD) via distant supervision.
* Implemented and trained a tree-RNN model (SPINN) combined with a word–character embedding model.
* *Tech: Python · TensorFlow · Tree-RNN · Distant supervision*
