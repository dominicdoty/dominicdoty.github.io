---
title: DominicDoty.com
layout: default
---

<div class="row">
{% for tag in site.tags %}
      {% cycle '', '', '', '', '<div class="column">' %}
      <div class="image-box">
      <a href="/tags/{{ tag[0] }}"><img src="{{site.url}}/images/{{tag[0]}}/cover.JPG"></a>
      <a href="/tags/{{ tag[0] }}">{{ tag[0] | capitalize }}</a>
      </div>
      {% cycle '', '', '', '', '</div>' %}
{% endfor %}
</div>

<hr>