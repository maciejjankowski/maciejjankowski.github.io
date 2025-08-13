---
layout: mombo
style: classic
permalink: /examples/classic-blog-detail/
title: Blog Single
hero:
  heading: I like the body. I like to design everything to do with the body.
  author: Calvin Carlo
  date: 2019-08-13
  cta:
    text: Back to Blog
    url: /classic-blog
content:
  - heading: Where does it come from?
    text: |
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  - heading: What are my payment options?
    text: |
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  - heading: Where does it come from?
    text: |
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
blockquote:
  text: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
  author: Dick Grayson
comments:
  - author: Nancy Bayers
    text: Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
  - author: Nancy Bayers
    text: Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
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

By {{ page.hero.author }} on {{ page.hero.date }}

[{{ page.hero.cta.text }}]({{ page.hero.cta.url }})

{% for section in page.content %}
## {{ section.heading }}

{{ section.text }}
{% endfor %}

> {{ page.blockquote.text }}
>
> — {{ page.blockquote.author }}

## Comments
{% for comment in page.comments %}
- **{{ comment.author }}**: {{ comment.text }}
{% endfor %}

> {{ page.footer.about }}

Contact: {{ page.footer.contact.email }} | {{ page.footer.contact.phone }}

{{ page.footer.contact.address }}
