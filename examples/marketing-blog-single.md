---
layout: mombo
style: marketing
title: Marketing is one of the most important aspects of running a successful business
description: After we understand your business goals and target audience, we will recommend the assets that are most likely to help you achieve your goals and reach your target audience.
permalink: /examples/marketing-blog-single/
hero:
  heading: Marketing is one of the most important aspects of running a successful business
  image: /assets/img/marketing/banner-01.jpg
  category: WordPress
  date: 18. MAY 2023
  author: Jenna Lyons
content:
  lead: After we understand your business goals and target audience, we will recommend the assets that are most likely to help you achieve your goals and reach your target audience.
  sections:
    - heading: Where does it come from?
      text: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    - heading: What are my payment options?
      text: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    - heading: Where does it come from?
      text: |
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
  quote:
    text: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    author: Someone famous in Dick Grayson
  figure:
    image: /assets/img/corporate/banner-01.jpg
    caption: Type here your description
  list:
    - The standard Lorem Ipsum passage, used since the 1500s
    - Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
    - At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
    - On the other hand, we denounce with righteous indignation
  author:
    name: JENNA LYONS
    date: Published on 18. MAY 2023
    image: /assets/img/avatar/03.jpg
    socials:
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
related:
  heading: Latest Updates
  items:
    - title: I like the body. I like to design everything to do with the body.
      url: /marketing-blog-single
    - title: How to build a brand that lasts
      url: /marketing-blog-single
    - title: The future of digital marketing
      url: /marketing-blog-single
---

# {{ page.hero.heading }}

*Category: {{ page.hero.category }}*  
*Date: {{ page.hero.date }}*  
*Author: {{ page.hero.author }}*

{{ page.content.lead }}

{% for section in page.content.sections %}
## {{ section.heading }}
{{ section.text }}
{% endfor %}

> {{ page.content.quote.text }}
> — {{ page.content.quote.author }}

![{{ page.content.figure.caption }}]({{ page.content.figure.image }})

**Key Points:**
{% for item in page.content.list %}
- {{ item }}
{% endfor %}

**Author:** {{ page.content.author.name }} ({{ page.content.author.date }})

## {{ page.related.heading }}
{% for post in page.related.items %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}
