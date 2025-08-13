---
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
style: coworking
permalink: /examples/coworking-book-a-tour/
title: Book a Tour
description: >
  Schedule a visit to experience our coworking space in person.
hero:
  heading: Book a Tour
  subheading: >
    Book your tour and discover the perfect workspace for your team.
form:
  fields:
    - label: Your Name
      type: text
      placeholder: Your Name
    - label: Your Email
      type: email
      placeholder: Your Email
    - label: Your Phone
      type: text
      placeholder: Your Phone
    - label: Subject
      type: text
      placeholder: Subject
    - label: Your Date
      type: date
      placeholder: Select a date
    - label: Select Time
      type: select
      options:
        - 10:00 AM
        - 10:30 AM
        - 11:00 AM
        - 11:30 AM
        - 12:00 PM
        - 12:30 PM
        - 1:00 PM
        - 1:30 PM
        - 2:00 PM
        - 2:30 PM
        - 3:00 PM
        - 3:30 PM
        - 4:00 PM
        - 4:30 PM
        - 5:00 PM
        - 5:30 PM
        - 6:00 PM
        - 6:30 PM
        - 7:00 PM
        - 7:30 PM
        - 8:00 PM
        - 8:30 PM
        - 9:00 PM
        - 9:30 PM
        - 10:00 PM
        - 10:30 PM
    - label: Your Message
      type: textarea
      placeholder: Your Message
  cta: Send a Message
sidebar:
  image: /assets/img/coworking/about-1.jpg
  help:
    heading: Need Quick Help?
    address: 301 The Greenhouse London, E2 8DY UK
    email: support@domain.com
    team_email: info@domain.com
    phone: +01 8585 855 855
    phone2: 02454 8523 856
footer:
  address: 301 The Greenhouse London, E2 8DY UK
  email: support@domain.com
  phone: +01 8585 855 855
---

# {{ page.hero.heading }}

{{ page.hero.subheading }}

**Book a Tour Form:**
{% for field in page.form.fields %}
- {{ field.label }} ({{ field.type }}) — {{ field.placeholder }}
{% if field.options %}
  - Options: {{ field.options | join: ', ' }}
{% endif %}
{% endfor %}

[{{ page.form.cta }}](#)

---

**Need Quick Help?**
- Address: {{ page.sidebar.help.address }}
- Email: {{ page.sidebar.help.email }}
- Team Email: {{ page.sidebar.help.team_email }}
- Phone: {{ page.sidebar.help.phone }}
- Phone2: {{ page.sidebar.help.phone2 }}

---

**Contact:**
- Address: {{ page.footer.address }}
- Email: {{ page.footer.email }}
- Phone: {{ page.footer.phone }}
