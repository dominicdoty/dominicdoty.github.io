---
title: SvelteKit Blog
layout: post
image: /images/svelte/svelte_hero.png
date: 2024-07-13
tags: [webdev]
published: true
uses_codeblock: true
---

I decided to rewrite this blog to migrate from Jekyll and a bunch of hand written HTML+CSS to SvelteKit+Bulma.
Here's some notes.
(Image shamelessly borrowed from [Svelte.dev](https://svelte.dev/))

<!--more-->

This post will mainly be brief notes on the components I used to create the new version of the website and some notes about why I chose them and problems I ran into.

I chose to write the website from scratch instead of using a pre-made blog template mainly as a learning exercise and because I like that I fully understand my website now.
It's not really necessary - but it was entertaining.

### Svelte

The backbone of the new site is [Svelte](https://svelte.dev/) / [SvelteKit](https://kit.svelte.dev/).
Svelte is a web app framework akin to React et al.
Take below opinions with a grain of salt because I've never used other frameworks - but I really like writing Svelte.

A Svelte component looks like this:

```html
<script>
	import Image from '$lib/Image.svelte';

	export let title;
	export let src;
	export let alt = 'No alt available';
</script>

<div class="section">
    <h1>My Title: {title}</h1>
	<Image {src} {alt} />
</div>
```

Svelte lets you write components as a combination of JS and HTML in the same file, not by returning an HTML blob from a JS function.
For some reason this works for me better as it allows me to keep the HTML and JS separate in my mind while I write.

Svelte HTML can use the values of JS variables directly inline, using a `{my_var}` notation.
When a Svelte project is built, the compiler separates the parts of the HTML that need to be dynamically updated and hooks JS directly to them to update them.
This is in contrast to other frameworks like React which (as I understand it) will replace whole sections of HTML when values are updated.
Those replacements slow down the website and make it larger.

The above also shows using another component `Image` inside this component.
Components can take what I'd call arguments, like `export let title;` here, which makes it easy to re-use code.
There's also a bunch of cool stuff like `{#if condition}` and `{#each colors as color}` that you can use in your HTML to create multiple HTML elements from JS variables.
This is probably common to all frameworks but it was groundbreaking for me coming from only writing raw HTML+CSS.
This is really only scratching the surface of why Svelte is cool, but I'll leave it at that for now.

You can see the components that make up this website [here](https://github.com/dominicdoty/dominicdoty.github.io/tree/main/src/lib).

### SvelteKit

Pure Svelte seems to be more made for SPAs (single page applications), where the user does not need to navigate from page to page.
My [Lunar Lander Game](/2023/07/30/lunarlander) is an example of a Svelte based SPA.
The SPA model does not fit as well for something like a blog, where you'd prefer pages to have actual routes, and be accessible without javascript.

Here enters SvelteKit.
SvelteKit adds a file based router on top of Svelte, allowing you to create different pages at discrete URLs, but maintaining the compiled power of Svelte.
For example this blog post is a route in this application, located at `/src/routes/[year]/[month]/[day]/[post]/+page.svelte`<sub>[git](https://github.com/dominicdoty/dominicdoty.github.io/blob/main/src/routes/%5Byear%3Dyear%5D/%5Bmonth%3Dmonth%5D/%5Bday%3Dday%5D/%5Bpost%5D/%2Bpage.svelte)</sub>.

SvelteKit can support a combination of CSR (client side rendering) and SSR (server side rendering).
There are benefits to both approaches, and I won't get into that here since there's plenty of info on that on the web.
The important thing to note is that SvelteKit allows you to use both, swapping between them where advantageous.

For a blog however, favoring static and client side rendering is preferable mainly because it can allow you to use free hosting/CDN providers like [Cloudflare](https://pages.cloudflare.com/), who host this site.
Using a CDN has lots of advantages for speed and ease of use, but the biggest one I'm interested in here is that its FREE :)

Using only static/CSR pages in the site means that the server does not do *anything*, merely provides HTML, CSS, and JS files as they're requested by the browser.

SvelteKit has a special mode for [static site generation](https://kit.svelte.dev/docs/adapter-static) that allows you to generate all the pages on the site at compile time.
Now this is no different than a static site generator like [Hugo](https://gohugo.io/) or [Jekyll](https://jekyllrb.com/) (which this site used to be based on).
The key difference here is what happens after you load that first static page.
Where other SSG's would require each successive navigation to fetch new pages from the server, SvelteKit can then take over and perform routing locally with javascript.
This allows Svelte to store resources and data locally, making navigation from page to page extremely quick.
On top of this though, we still have the fallback route that all pages can be fetched directly from the server like a normal static site if the browser does not support JS (or has it disabled).
If you're into SEO and stuff, I hear this is helpful.
I think it's cool to be kind to people who don't want JS for whatever reason.

### Bulma

[Bulma](https://bulma.io/) is the CSS/Sass framework I used to style the website.
I have yet to try out bootstrap - but in my usage so far I quite like Bulma and will likely continue to use it.
The previous version of this site used hand written CSS, which was a mistake.
If you're new to web dev and you're hand writing CSS, I'm here to tell you you should probably stop and try a framework.

### enhanced:img

[enhanced:img](https://kit.svelte.dev/docs/images) is a feature of SvelteKit that can create web optimized file formats and resolutions of photos on the website automatically.
I had to do some wrangling to make this functional with mdsvex posts, but it was worth it in the end.
I suspect this significantly slows down my clean build time, but it after the first time rendering all the alternate versions are cached and it becomes faster.

My images are placed in posts in markdown - so I had to figure out how to dynamically load images with enhanced:img to replace images called out in my markdown posts.
This took me some time to find the correct combination of incantations, but I eventually settled on loading all images from the image folder via a glob.
After all images are loaded, I can then select the correct image based on the source parameter passed to the image.
This is all contained in the [Image](https://github.com/dominicdoty/dominicdoty.github.io/blob/main/src/lib/Image.svelte) component.

I put the dynamic load of the images in a `context="module"` script, which I believe should only make it run once.
I'm not entirely certain this is true though, as my build takes so long I think it may be optimizing images more than once.

### lqip: Low Quality Image Placeholder

I also use [vite-plugin-lqip](https://github.com/drwpow/vite-plugin-lqip) to generate low quality/blurry placeholder images that can be directly inlined as base64 strings in the HTML.
They're only visible for a fraction of a second on my connection, but it still minimizes visual changes to the layout during load.
This was also somewhat painful to discover how to apply this with enhanced:img, but after I figured out dynamic loading for enhanced:img I was able to use that solution again for lqip.

### mdsvex

[mdsvex](https://mdsvex.pngwn.io/) converts markdown with frontmatter (often YAML) into Svelte components.
Since my blog was previously Jekyll based, it used markdown files in this style already.
I wanted to minimize the amount of changes I had to make to my source files so this was a nice find.

Mdsvex also allows you to inject custom Svelte components in to replace standard HTML tags.
I did this for the `<img>` tag, to allow me to inject optimized image types and inline low resolution placeholders.

One additional extension I used with mdsvex was [remark-excerpt](https://github.com/manovotny/remark-excerpt).
This extension allows you to create short "tag line" style component renderings of a post by using a `<!--more-->` comment in the markdown.
By manipulating flags before loading the component, you can produce a partial post component (used on my website front page and topics page), or a full post page.
This further reduces code and copy duplication which is pleasant.

I also discovered I needed to wrap my mdsvex components in a Bulma `content` class `div`.
Doing so forces Bulma CSS onto the HTML tags generated inside the mdsvex component, keeping the visual style more similar to the rest of the website.

### lite-youtube-embed

[lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed) is a strategy to embed Youtube videos without their giant/slow `iframe` thing.
I used a Svelte component version of this from [this blog](https://kellenmace.com/blog/lite-youtube-embed-for-svelte).

I couldn't figure out a clean way to use component overrides in mdsvex to force this into my posts.
Instead I was delighted to find out I can put full Svelte code right into my markdown and it works!
Check out an embed [here](https://github.com/dominicdoty/dominicdoty.github.io/blob/main/src/posts/laserrunning.md?plain=1).

### Conclusion

Longer post than anticipated, but it's half notes for future me anyways.
Hope this was helpful to you if you stumbled on this on accident.
If you're considering creating your own blog using some or all of this same stack, please feel free to refer to or copy from my code on [GitHub](https://github.com/dominicdoty/dominicdoty.github.io).