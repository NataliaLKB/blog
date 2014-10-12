---
layout: page
permalink: /work/
---

<div class = "container-fluid">
  <div class ="row">
    <div class="col-md-1 col-sm-1"></div>
    <div class="col-lg-12 col-md-10 col-sm-10" class="home">

      <h1 class="page-heading">What have we been working on?</h1>
      <ul class="post-list">
        {% for post in site.categories.work %}
        <li>
          <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

          <h2>
            <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          </h2>
          <p>{{ post.description }}</p>
          <div class="postimg-outer">
            <img class="postimg" src="{{ post.img }}"/> 
          </div>
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>
