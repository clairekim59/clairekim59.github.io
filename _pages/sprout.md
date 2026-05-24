---
layout: archive
title: "Sprout"
permalink: /projects/sprout/
author_profile: true
---

{% include base_path %}

Sprout: A Kindness-Based Social Plant App
======

**Sprout** is a full-stack, bilingual social web app where friends and visitors send kind notes that grow into leaves on each user's personal plant. It is included here as development experience alongside my primary research work.

![Sprout app preview]({{ base_path }}/images/sprout-preview.png)

[Try the live app](https://sprout-flowers.vercel.app/){: .btn .btn--primary} [View code](https://github.com/clairekim59/sprout-flowers){: .btn}

What I Built
------
* Authentication and user profiles backed by Supabase Auth and Postgres.
* Neighbor/friend workflows for sending kind notes and growing plants.
* Public plant sharing with read-only share links and Vercel serverless link previews.
* Responsive UI, dark mode, Korean/English support, and profile customization.
* Garden history so users can preserve completed plants and start new ones.

Engineering Highlights
------
* Designed the app as a lightweight vanilla JavaScript single-page app with no build step.
* Implemented Supabase-backed persistence with Row-Level Security policies, RPC functions, and database triggers.
* Used a high-quality agentic coding workflow to accelerate implementation while maintaining ownership of product direction, architecture decisions, testing, and final code quality.
* Treated the project as a product-quality build: coherent interaction design, shareable public pages, polished responsive layout, and production deployment.

Tech Stack
------
* **Frontend:** HTML, CSS, vanilla JavaScript
* **Backend:** Supabase Postgres, Auth, Row-Level Security, RPC functions, triggers
* **Deployment:** Vercel static hosting and serverless functions
* **Product features:** i18n, dark mode, responsive UI, public sharing
* **Development process:** agentic coding with human-led architecture, review, and QA
