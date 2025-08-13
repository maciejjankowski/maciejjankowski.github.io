layout: mombo
menu_nav:
  - title: One Page 02
    url: /examples/one-page-02
  - title: One Page 03
    url: /examples/one-page-03
  - title: One Page 06
    url: /examples/one-page-06
  - title: One Page 07
    url: /examples/one-page-07
  - title: One Page 08
    url: /examples/one-page-08
  - title: One Page 09
    url: /examples/one-page-09
  - title: One Page 12
    url: /examples/one-page-12
  - title: One Page 13
    url: /examples/one-page-13
  - title: One Page Index
    url: /examples/one-page-index
  - title: Classic Index 02
    url: /examples/classic-index-02
  - title: Corporate About
    url: /examples/corporate-about
  - title: Corporate Blog
    url: /examples/corporate-blog
  - title: Corporate Index
    url: /examples/corporate-index
  - title: Coworking Book a Tour
    url: /examples/coworking-book-a-tour
  - title: Marketing About
    url: /examples/marketing-about
  - title: Marketing Blog
    url: /examples/marketing-blog
  - title: Marketing Index
    url: /examples/marketing-index
  - title: Marketing Projects
    url: /examples/marketing-projects
  - title: Restaurant Index
    url: /examples/restaurant-index
  - title: Software Index
    url: /examples/software-index
style: software
permalink: /software/
title: Software Solutions for Modern Teams
hero:
  heading: Empower Your Business with Software
  subheading: >
    Innovative tools and platforms to accelerate your growth.
  cta:
    text: Request a Demo
    url: /software-contact
features:
  heading: Why Choose Our Software
  items:
    - title: Scalable Architecture
      description: Built to grow with your business.
    - title: Secure by Design
      description: Enterprise-grade security at every layer.
    - title: Seamless Integration
      description: Works with your favorite tools.
about:
  heading: About Our Platform
  description: >
    We deliver robust, user-friendly software for teams of all sizes, with a focus on security, speed, and support.
products:
  heading: Our Products
  items:
    - title: Project Management Suite
      description: Plan, track, and deliver projects efficiently.
    - title: Collaboration Tools
      description: Real-time chat, file sharing, and more.
    - title: Analytics Dashboard
      description: Actionable insights for smarter decisions.
testimonials:
  heading: Customer Success Stories
  items:
    - name: Jamie Lee
      role: CTO
      quote: >
        Their software transformed our workflow and productivity.
contact:
  heading: Contact Our Team
  email: support@domain.com
  phone: +01 9876 5432
  address: 456 Software Ave, Tech City
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

## {{ page.products.heading }}

{% for p in page.products.items %}
- **{{ p.title }}**: {{ p.description }}
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
