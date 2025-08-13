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
title: Projects
description: Explore our marketing projects and see how we help brands grow online.
permalink: /marketing-projects/
hero:
  heading: Projects
  image: /assets/img/marketing/home-banner.jpg
  breadcrumbs:
    - Home
    - Projects
projects:
  heading: Our Projects
  items:
    - title: Marketing - How to grow online with reels?
      platform: Facebook
      image: /assets/img/marketing/project-1.jpg
      url: /marketing-projects-details
    - title: Social Media Growth Campaign
      platform: Instagram
      image: /assets/img/marketing/project-1.jpg
      url: /marketing-projects-details
    - title: Brand Awareness Blitz
      platform: LinkedIn
      image: /assets/img/marketing/project-1.jpg
      url: /marketing-projects-details
    - title: Influencer Partnership Launch
      platform: TikTok
      image: /assets/img/marketing/project-1.jpg
      url: /marketing-projects-details
    - title: Content Marketing Accelerator
      platform: YouTube
      image: /assets/img/marketing/project-1.jpg
      url: /marketing-projects-details
    - title: Email Automation Success
      platform: Mailchimp
      image: /assets/img/marketing/project-1.jpg
      url: /marketing-projects-details
    - title: SEO Growth Sprint
      platform: Google
      image: /assets/img/marketing/project-1.jpg
      url: /marketing-projects-details
    - title: Paid Ads Mastery
      platform: Meta
      image: /assets/img/marketing/project-1.jpg
      url: /marketing-projects-details
---

# {{ page.hero.heading }}

## {{ page.projects.heading }}

{% for project in page.projects.items %}
- **{{ project.title }}** ({{ project.platform }})
{% endfor %}
