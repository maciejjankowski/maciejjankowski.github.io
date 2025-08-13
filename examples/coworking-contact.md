---
layout: mombo
style: coworking
permalink: /examples/coworking-contact/
title: Contact Us
description: >
  Get in touch with our team for workspace tours, support, and more.
hero:
  heading: Contact Us
  subheading: >
    Need a quick response? E-mail us or contact our call line below.
contact:
  address: 301 The Greenhouse London, E2 8DY UK
  email: support@domain.com
  team_email: info@domain.com
  phone: +01 8585 855 855
  phone2: 02454 8523 856
  hours: Monday - Friday 10.00 AM - 7.00 PM
  social:
    - platform: Facebook
      url: https://facebook.com
    - platform: Twitter
      url: https://twitter.com
    - platform: LinkedIn
      url: https://linkedin.com
    - platform: Instagram
      url: https://instagram.com
sales:
  heading: Contact our sales team
  description: >
    Our sales team is ready to help you find the perfect workspace solution.
form:
  fields:
    - label: Name
      type: text
      placeholder: Rachel Roth
    - label: Email address
      type: email
      placeholder: name@example.com
    - label: Comment
      type: textarea
      placeholder: Hi there, I would like to ...
  cta: Create my account
footer:
  address: 301 The Greenhouse London, E2 8DY UK
  email: support@domain.com
  phone: +01 8585 855 855
---

# {{ page.hero.heading }}

{{ page.hero.subheading }}

**Address:** {{ page.contact.address }}

**Email:** {{ page.contact.email }}

**Phone:** {{ page.contact.phone }}

**Team Email:** {{ page.contact.team_email }}

**Hours:** {{ page.contact.hours }}

**Social:**
{% for s in page.contact.social %}
- [{{ s.platform }}]({{ s.url }})
{% endfor %}

## {{ page.sales.heading }}

{{ page.sales.description }}

---

**Contact Form:**
{% for field in page.form.fields %}
- {{ field.label }} ({{ field.type }}) — {{ field.placeholder }}
{% endfor %}

[{{ page.form.cta }}](#)

---

**Contact:**
- Address: {{ page.footer.address }}
- Email: {{ page.footer.email }}
- Phone: {{ page.footer.phone }}
