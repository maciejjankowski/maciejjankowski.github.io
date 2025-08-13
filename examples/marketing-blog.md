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
style: marketing
title: Blog
description: Insights, tips, and updates from our marketing team.
permalink: /marketing-blog/
hero:
  heading: Blog
  image: /assets/img/marketing/home-banner.jpg
  breadcrumbs:
    - Home
    - Blog
blog:
  heading: Latest Updates
  items:
    - title: I like the body. I like to design everything to do with the body.
      image: /assets/img/marketing/blog-1.jpg
      url: /marketing-blog-single
      category: Marketing
    - title: How to build a brand that lasts
      image: /assets/img/marketing/blog-1.jpg
      url: /marketing-blog-single
      category: Marketing
    - title: The future of digital marketing
      image: /assets/img/marketing/blog-1.jpg
      url: /marketing-blog-single
      category: Marketing
    - title: Social Media Growth Campaign
      image: /assets/img/marketing/blog-1.jpg
      url: /marketing-blog-single
      category: Marketing
    - title: Brand Awareness Blitz
      image: /assets/img/marketing/blog-1.jpg
      url: /marketing-blog-single
      category: Marketing
    - title: Influencer Partnership Launch
      image: /assets/img/marketing/blog-1.jpg
      url: /marketing-blog-single
      category: Marketing
---

# {{ page.hero.heading }}

## {{ page.blog.heading }}

{% for post in page.blog.items %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}
