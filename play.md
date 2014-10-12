---
layout: page
permalink: /play/
---


<div class = "container-fluid">
  <div class ="row">
    <div class="col-md-1 col-sm-1"></div>
    <div class="col-md-10 col-sm-10">

      <h1 class="page-heading">Ready for some fun?</h1>
      <ul class="post-list">
        {% for post in site.categories.play %}
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

