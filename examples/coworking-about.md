---
layout: mombo
style: coworking
permalink: /coworking-about/
title: About Our Coworking Space
description: >
  Discover what makes our coworking community unique, flexible, and inspiring.
hero:
  heading: About
  subheading: >
    Get to know us and our mission to empower modern teams.
about:
  heading: We Known for Having Cool Workspaces Filled with Canada
  description: >
    Mombo is a modern coworking template for startups and teams. Flexible, creative, and community-driven.
  stats:
    - label: Member active
      value: 500
    - label: Company active
      value: 285
    - label: Private room
      value: 150
    - label: Years Experience
      value: 15
features:
  heading: Work together. Work efficiently. Work smartly
  description: >
    Join a vibrant community and enjoy premium amenities.
  items:
    - title: The Best Location
      description: Prime city center address, easy access.
      image: /assets/img/coworking/about-1.jpg
    - title: The Feature List
      description: All-inclusive services for your productivity.
      image: /assets/img/coworking/about-1.jpg
    - title: The Private office
      description: Secure, private spaces for teams of all sizes.
      image: /assets/img/coworking/about-1.jpg
testimonials:
  heading: Testimonials
  items:
    - name: Nancy Drew
      role: pxdraft
      avatar: /assets/img/avatar/avatar-1.jpg
      quote: >
        Mombo is a modern, creative coworking space that helped our startup grow.
footer:
  address: 301 The Greenhouse London, E2 8DY UK
  email: support@domain.com
  phone: +01 8585 855 855
---

# {{ page.hero.heading }}

{{ page.hero.subheading }}

## {{ page.about.heading }}

{{ page.about.description }}

{% for stat in page.about.stats %}
- **{{ stat.label }}**: {{ stat.value }}
{% endfor %}

## {{ page.features.heading }}

{{ page.features.description }}

{% for feature in page.features.items %}
- **{{ feature.title }}**: {{ feature.description }}
{% endfor %}

## {{ page.testimonials.heading }}

{% for t in page.testimonials.items %}
> {{ t.quote }}
> — {{ t.name }}, {{ t.role }}
{% endfor %}

---

**Contact:**
- Address: {{ page.footer.address }}
- Email: {{ page.footer.email }}
- Phone: {{ page.footer.phone }}
