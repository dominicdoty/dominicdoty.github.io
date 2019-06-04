---
title: DominicDoty.com
layout: default
---

{% assign count = 0 %}

<div class="row">
{% for tag in site.tags %}
      {% if {{ count | modulo: 5 }} == 0 %}
            {% if count != 0 %}
                  </div>
            {% endif %}
      {% endif %}
      {% if {{ count | modulo: 5 }} == 0 %}
            <div class="column">
      {% endif %}
      {% increment count %}

      <div class="image-box">
      <a href="/tags/{{ tag[0] }}"><img src="{{site.url}}/images/{{tag[0]}}/cover.JPG"></a>
      <a href="/tags/{{ tag[0] }}">{{ tag[0] | capitalize }}</a>
      </div>
{% endfor %}
      </div>
</div>

<hr>