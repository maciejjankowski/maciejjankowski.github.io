---
layout: mombo
style: coworking
permalink: /examples/coworking-gallery/
title: Gallery
description: >
  Explore our coworking space and see what makes us unique.
hero:
  heading: Gallery
  subheading: >
    Discover our vibrant community and inspiring workspaces.
gallery:
  items:
    - image: /assets/img/project/project-1.jpg
      alt: Workspace 1
    - image: /assets/img/project/project-1.jpg
      alt: Workspace 2
    - image: /assets/img/project/project-1.jpg
      alt: Workspace 3
    - image: /assets/img/project/project-1.jpg
      alt: Workspace 4
    - image: /assets/img/project/project-1.jpg
      alt: Workspace 5
    - image: /assets/img/project/project-1.jpg
      alt: Workspace 6
    - image: /assets/img/project/project-1.jpg
      alt: Workspace 7
    - image: /assets/img/project/project-1.jpg
      alt: Workspace 8
    - image: /assets/img/project/project-1.jpg
      alt: Workspace 9
cta:
  heading: Growth and development are fostered here!
  buttons:
    - text: Google Play
      icon: bi-google
      url: #
    - text: App Store
      icon: bi-apple
      url: #
footer:
  address: 301 The Greenhouse London, E2 8DY UK
  email: support@domain.com
  phone: +01 8585 855 855
---

# {{ page.hero.heading }}

{{ page.hero.subheading }}

## Gallery

{% for item in page.gallery.items %}
![{{ item.alt }}]({{ item.image }})
{% endfor %}

## {{ page.cta.heading }}

{% for btn in page.cta.buttons %}
- [{{ btn.text }}]({{ btn.url }})
{% endfor %}

---

**Contact:**
- Address: {{ page.footer.address }}
- Email: {{ page.footer.email }}
- Phone: {{ page.footer.phone }}
