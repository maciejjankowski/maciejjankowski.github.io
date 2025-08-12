---
layout: default
title: Blog
permalink: /blog/
---
<div class="container py-5">
  <h1 class="mb-4">Blog</h1>
  <div class="row">
    {% for post in site.posts %}
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="h5 card-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
            <p class="card-text text-muted">{{ post.date | date: "%B %d, %Y" }}</p>
            <p class="card-text">{{ post.excerpt | strip_html | truncate: 120 }}</p>
            <a href="{{ post.url | relative_url }}" class="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
