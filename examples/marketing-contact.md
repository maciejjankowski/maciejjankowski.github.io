---
layout: mombo
style: marketing
title: Contact
description: Let's talk content. Get in touch for a free 30min consultation or to discuss your project goals.
permalink: /marketing-contact/
hero:
  heading: Let's Talk Content
  image: /assets/img/marketing/home-banner.jpg
  breadcrumbs:
    - Home
    - Contact
contact:
  heading: What content goals would you like to achieve?
  form:
    - label: What's your name?
      type: text
      name: name
      placeholder: Type your full name
    - label: Your email address?
      type: email
      name: email
      placeholder: example@email.com
    - label: Your company name?
      type: text
      name: company
      placeholder: Type your company name
    - label: Website URL (if applicable)
      type: text
      name: website
      placeholder: company Website
    - label: Tell us about your project
      type: textarea
      name: project
      placeholder: Please type your project description
    - label: Submit
      type: submit
      name: submit
      value: Submit
sidebar:
  consultation:
    heading: Free 30min consultation
    description: >
      Get expert advice on your marketing strategy. Schedule a discovery call with our team.
    cta: Schedule discovery call
    url: /marketing-contact
  office:
    heading: Head Office
    address: |
      2 Embarcadero Center,
      San Francisco,
      CA 94111 USA
    phone: +01 3232 323 3232
    email: example@email.com
  social:
    - platform: Facebook
      icon: bi-facebook
      url: '#'
    - platform: Twitter
      icon: bi-twitter
      url: '#'
    - platform: Instagram
      icon: bi-instagram
      url: '#'
    - platform: LinkedIn
      icon: bi-linkedin
      url: '#'
---

# {{ page.hero.heading }}

## {{ page.contact.heading }}

<!-- Contact Form Placeholder -->

## Free 30min consultation
{{ page.sidebar.consultation.description }}

[{{ page.sidebar.consultation.cta }}]({{ page.sidebar.consultation.url }})

## {{ page.sidebar.office.heading }}
{{ page.sidebar.office.address }}

{{ page.sidebar.office.phone }}

{{ page.sidebar.office.email }}

## Follow Us
{% for social in page.sidebar.social %}
- {{ social.platform }}
{% endfor %}
