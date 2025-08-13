---
layout: mombo
style: classic
permalink: /examples/classic-contact/
title: Contact Us
hero:
  heading: Contact
  subheading: >
    Get in touch with our team for project inquiries or support.
  cta:
    text: Create my account
    url: /signup
contact:
  heading: Contact Us
  form:
    - label: Name
      type: text
      placeholder: Rachel Roth
    - label: Email address
      type: email
      placeholder: name@example.com
    - label: Comment
      type: textarea
      placeholder: Hi there, I would like to ...
  address: |
    2 Embarcadero Center,
    San Francisco, CA 94111 USA
  email: support@domain.com
  phone: +1 (800) 555-1212
  socials:
    - facebook
    - twitter
    - instagram
    - linkedin
footer:
  about: Modern multipurpose template for startups and creative businesses.
  contact:
    email: support@domain.com
    phone: 820-885-3321
    address: |
      301 The Greenhouse London,
      E2 8DY UK
---

# {{ page.hero.heading }}

{{ page.hero.subheading }}

[{{ page.hero.cta.text }}]({{ page.hero.cta.url }})

## {{ page.contact.heading }}

Address: {{ page.contact.address }}

Email: {{ page.contact.email }}

Phone: {{ page.contact.phone }}

> {{ page.footer.about }}

Contact: {{ page.footer.contact.email }} | {{ page.footer.contact.phone }}

{{ page.footer.contact.address }}
