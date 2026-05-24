---
layout: archive
title: "Developments"
permalink: /projects/devs/
author_profile: true
---

{% include base_path %}


These projects translate my trustworthy AI research direction into interactive systems, demos, and product-quality prototypes. The goal is to connect model behavior, transparency, evaluation, and user interaction in real systems while also showing the engineering judgment needed to build and deploy them.

MASTOPIA: Transparency-Aware LLM Analysis Demo
------
**MASTOPIA** is a Streamlit demo for LLM-assisted intelligence analysis. It operationalizes MAST-style transparency ideas through an interactive workflow with model conditions, evidence retrieval, model information, session management, and activity logging.

[Try the demo](https://mastopia-spr2025.streamlit.app/){: .btn .btn--primary} [View code](https://github.com/clairekim59/mastopia-spr2025){: .btn}

**System highlights**
* Multi-agent architecture with supervisor, retriever, and general AI agents.
* Streamlit chat interface with model information controls and sidebar state.
* Session management and activity logging for research evaluation.
* RAG-oriented stack using LangChain / LangGraph, OpenAI APIs, FAISS, and Google Cloud / Firestore components.

*Tech: Python · Streamlit · LangChain / LangGraph · OpenAI API · FAISS · Google Cloud / Firestore · RAG · activity logging*

Sprout: Product-Quality Engineering Build
------
**Sprout** is not a research project, but it shows my interest in building usable real-world systems with care for interaction quality, reliability, and user-facing product details.

[View Sprout project page]({{ base_path }}/projects/sprout/){: .btn} [Try Sprout](https://sprout-flowers.vercel.app/){: .btn .btn--primary} [View code](https://github.com/clairekim59/sprout-flowers){: .btn}

* Full-stack bilingual social app with authentication, profiles, public sharing, responsive UI, dark mode, and Supabase-backed persistence.
* Built with a high-quality agentic coding workflow while retaining ownership of product direction, architecture, testing, and final code quality.
* Included here as engineering evidence alongside my primary research work.
