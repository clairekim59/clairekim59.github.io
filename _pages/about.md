---
permalink: /
title: ""
excerpt: "About"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

About
======

I am **Claire (Nayoung) Kim**, a Computer Science Ph.D. candidate at the [School of Computing and Augmented Intelligence (SCAI)](https://scai.engineering.asu.edu/) at Arizona State University. My research advances trustworthiness and truthfulness in AI, with the goal of building fair, robust, and accurate NLP and LLM systems &mdash; spanning fairness, bias mitigation, robustness, and human-centered evaluation.

I have worked as a research assistant at the [DHS Center for Accelerating Operational Efficiency (CAOE)](https://caoe.asu.edu/) and the Data Mining and Machine Learning (DMML) Lab, advised by [Dr. Huan Liu](https://scholar.google.com/citations?hl=en&user=Dzf46C8AAAAJ) and [Dr. Mickey Mancenido](https://scholar.google.com/citations?user=f_0QDJUAAAAJ&hl=en). I previously earned my B.S. and M.E. at Korea University, where I was advised by [Dr. Jaewoo Kang](https://dmis.korea.ac.kr/home).

<div class="open-to">
<strong>Currently seeking</strong> full-time <strong>Applied Scientist / ML Engineer / Research Scientist</strong> roles starting Summer 2026.
</div>

<a class="btn btn--primary" href="{{ base_path }}/files/ClaireKim_resume.pdf"><i class="fas fa-file-pdf"></i> Download Resume</a>


Experience
------
<div class="timeline" markdown="1">

* **Applied Scientist Intern**, Amazon &mdash; Bellevue, WA · Fall 2025
* **AI/ML Intern**, AMD &mdash; Austin, TX · Summer 2025
* **SDE Intern**, AMD &mdash; Austin, TX · Fall 2024
* **Research Assistant**, DHS-CAOE &mdash; Tempe, AZ · 2022 – 2025
* **Research Assistant**, ONR &mdash; Tempe, AZ · 2021 – 2022
* **Research Assistant**, Korea University DMIS Lab &mdash; Seoul, KR · 2017 – 2019

</div>


Skills
------
<div class="skills" markdown="0">
  <div class="skill-row"><div class="skill-label">Languages</div><div class="skill-list">Python, SQL, JavaScript</div></div>
  <div class="skill-row"><div class="skill-label">ML & DL</div><div class="skill-list">PyTorch, TensorFlow, Hugging Face (Transformers, PEFT, Accelerate, Datasets), Pandas, NumPy</div></div>
  <div class="skill-row"><div class="skill-label">Fine-tuning</div><div class="skill-list">Supervised fine-tuning (SFT) · classification · forecasting · RLHF · parameter-efficient methods (LoRA, P-tuning)</div></div>
  <div class="skill-row"><div class="skill-label">LLM Systems</div><div class="skill-list">RAG, vector DBs (Weaviate, Chroma, Faiss), LLM-as-a-judge, synthetic QA generation, multi-agent LLM, hallucination mitigation, prompt engineering, inference-time scaling</div></div>
  <div class="skill-row"><div class="skill-label">Frameworks</div><div class="skill-list">LangChain, LlamaIndex, Node.js, Flask, Streamlit</div></div>
  <div class="skill-row"><div class="skill-label">AI-Assisted Dev</div><div class="skill-list">Claude Code, Cursor, GitHub Copilot, agentic coding workflows, MCP (Model Context Protocol)</div></div>
  <div class="skill-row"><div class="skill-label">Production & MLOps</div><div class="skill-list">End-to-end CI/CD pipelines, model serving, Python packaging, inference optimization (throughput / latency), AWS (SageMaker, S3, Redshift, Glue, Lambda, CodeBuild), GCP, Docker, WandB, MLflow</div></div>
  <div class="skill-row"><div class="skill-label">NLP & Models</div><div class="skill-list">Claude, GPT-4o, Llama-3, Mistral, DeepSeek, BERT · topic modeling, sentiment & stance detection, text summarization</div></div>
  <div class="skill-row"><div class="skill-label">Methods & Tooling</div><div class="skill-list">Bayesian inference &amp; uncertainty quantification · Git · Linux / shell · Jupyter</div></div>
</div>


Selected Projects
------

**Reasoning-Level Fairness in LLMs** &mdash; *Under submission*\
A reasoning-aware framework that mitigates bias inside intermediate LLM reasoning steps, not just final answers. Introduced the **Reasoning Bias Rate** metric and combined process supervision, fairness-aware RL, and inference-time guided decoding to substantially reduce bias while preserving baseline accuracy.\
*Tech: Python · PyTorch · OpenR · inference-time scaling · fairness-aware RL*

**Sprout: A Kindness-Based Social Plant App** &mdash; *2026*\
A full-stack, bilingual social web app where friends send kind notes that grow into leaves on a personal plant. Built authentication, profile customization, neighbor workflows, public share links, responsive UI, dark mode, and Supabase-backed persistence.\
[[live app](https://sprout-flowers.vercel.app/)] [[code](https://github.com/clairekim59/sprout-flowers)]\
*Tech: HTML/CSS · vanilla JavaScript · Supabase/Postgres · Vercel · i18n*

**Fair Language Modeling via Parameter-Efficient Methods** &mdash; *2025*\
Reduced social biases in BERT and LLaMA for toxicity and hate-speech detection using reinforcement learning combined with parameter-efficient fine-tuning.\
*Tech: Python · PyTorch · Hugging Face · LoRA · RL*

**MASTOPIA: Transparency in LLM-Assisted Intelligence Analysis** &mdash; *Under review (Human Factors)*\
A multi-agent RAG system operationalizing MAST tradecraft standards, evaluated through a large human-subject study. Showed that adding transparency features did **not** improve performance and can induce overreliance &mdash; motivating adaptive, on-demand transparency.\
*Tech: Python · GPT-4 · RAG · multi-agent LLM · vector DB · human-subject study*

See the [full project list]({{ base_path }}/projects/).


Selected Publications
------

**PADTHAI-MM: A Principled Approach for the Design of Trustworthy, Human-Centered AI Systems Using the MAST Methodology**\
Myke C. Cohen, **Nayoung Kim**, Yang Ba, et al.\
*AI Magazine, 2025.*\
[[pdf](https://arxiv.org/pdf/2401.13850.pdf)] [[code](https://github.com/clairekim59/PADTHAI-MM)]

**Robust Stance Detection: Understanding Public Perceptions in Social Media**\
**Nayoung Kim**, David Mosallanezhad, Lu Cheng, Michelle V. Mancenido, Huan Liu\
*ASONAM, 2024.*\
[[pdf](https://browse.arxiv.org/pdf/2309.15176.pdf)] [[code](https://github.com/Davood-M/RobustStanceDet)]

**Debiasing Word Embeddings with Nonlinear Geometry**\
Lu Cheng, **Nayoung Kim**, Huan Liu\
*COLING, 2022.*\
[[pdf](https://arxiv.org/pdf/2208.13899.pdf)] [[code](https://github.com/GitHubLuCheng/Implementation-of-JoSEC-COLING-22)]

See the [full publication list]({{ base_path }}/publications/).
