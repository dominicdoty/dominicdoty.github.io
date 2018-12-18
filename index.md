---
title: DominicDoty.com
layout: default
---

<div class="image-grid">
{% for tag in site.tags %}
      <div class="image-box">
      <a href="/tags/{{ tag[0] }}"><img src="{{site.url}}/images/{{tag[0]}}/cover.JPG"></a>
      <a href="/tags/{{ tag[0] }}">{{ tag[0] | capitalize }}</a>
      </div>
{% endfor %}
</div>

<hr>