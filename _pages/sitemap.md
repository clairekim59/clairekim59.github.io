---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: false
---

{% include base_path %}

Everything on this site, in one place. There is an [XML version]({{ base_path }}/sitemap.xml) for crawlers.

Pages
------

* **[Home]({{ base_path }}/)** &mdash; profile, experience, skills, publications and projects
* **[Curriculum Vitae]({{ base_path }}/cv/)** &mdash; full CV, formatted to print straight to PDF

Sections on the home page
------

<!-- Generated from _data/navigation.yml so this list cannot drift out of sync
     with the nav. Entries with children contribute their children instead of
     themselves (Projects and its Research child point at the same anchor), and
     anything without a '#' is a real page, already listed above. -->
<ul>
{%- for link in site.data.navigation.main -%}
  {%- if link.children -%}
    {%- for child in link.children %}
  <li><a href="{{ base_path }}{{ child.url }}">{{ child.title }}</a></li>
    {%- endfor -%}
  {%- elsif link.url contains '#' %}
  <li><a href="{{ base_path }}{{ link.url }}">{{ link.title }}</a></li>
  {%- endif -%}
{%- endfor %}
</ul>

Elsewhere
------

* [Google Scholar]({{ site.author.googlescholar }})
* [GitHub](https://github.com/{{ site.author.github }})
* [LinkedIn](https://www.linkedin.com/in/{{ site.author.linkedin }})
