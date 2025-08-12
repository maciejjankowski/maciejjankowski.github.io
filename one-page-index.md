---
layout: mombo
style: one-page
permalink: /one-page/
title: One Page Template
hero:
  heading: Welcome to Our One Page Experience
  subheading: >
    All your business essentials, beautifully presented on a single page.
  cta:
    text: Get Started
    url: /contact
features:
  heading: Why Choose Us
  items:
    - title: Fast Setup
      description: Launch your site in minutes.
    - title: Modern Design
      description: Sleek, responsive, and user-friendly.
    - title: All-in-One
      description: Everything you need, nothing you don't.
about:
  heading: About Us
  description: >
    We help businesses create stunning one-page websites that convert visitors into customers.
services:
  heading: Our Services
  items:
    - title: Web Design
      description: Custom, conversion-focused design.
    - title: SEO Optimization
      description: Get found and grow your audience.
    - title: Support
      description: We're here for you, always.
portfolio:
  heading: Recent Projects
  items:
    - title: Project Alpha
      image: /assets/img/project/project-1.jpg
      url: /project-alpha
    - title: Project Beta
      image: /assets/img/project/project-2.jpg
      url: /project-beta
testimonials:
  heading: What Clients Say
  items:
    - name: Alex Smith
      role: Startup Founder
      quote: >
        The one-page site helped us launch fast and look professional.
contact:
  heading: Get in Touch
  email: hello@domain.com
  phone: +01 2345 6789
  address: 123 Main St, City, Country
---

# {{ page.hero.heading }}

{{ page.hero.subheading }}

[{{ page.hero.cta.text }}]({{ page.hero.cta.url }})

## {{ page.features.heading }}

{% for f in page.features.items %}
- **{{ f.title }}**: {{ f.description }}
{% endfor %}

## {{ page.about.heading }}

{{ page.about.description }}

## {{ page.services.heading }}

{% for s in page.services.items %}
- **{{ s.title }}**: {{ s.description }}
{% endfor %}

## {{ page.portfolio.heading }}

{% for p in page.portfolio.items %}
- [{{ p.title }}]({{ p.url }})
{% endfor %}

## {{ page.testimonials.heading }}

{% for t in page.testimonials.items %}
> {{ t.quote }}
> — {{ t.name }}, {{ t.role }}
{% endfor %}

## {{ page.contact.heading }}

- Email: {{ page.contact.email }}
- Phone: {{ page.contact.phone }}
- Address: {{ page.contact.address }}
