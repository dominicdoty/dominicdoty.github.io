---
title: Svelte Documents
layout: post
image: /images/sveltedoc/sveltedoc.png
date: 2025-03-02
tags: [webdev]
published: true
---

A small proof of concept on creating formatted documents using web development tools.

<!--more-->

### TLDR
An attempt at making a passable alternative to [Asciidoctor](https://asciidoctor.org/) or [LaTeX](https://www.latex-project.org/) documents using HTML+CSS and web development tools.

While it is primitive at the moment, this approach does show promise.

Skip straight to the rendered [demo page](https://sveltedoc.pages.dev/), or take a look at the code on [github](https://github.com/dominicdoty/sveltedoc).

### Why
I've been making some large documents at work using [Asciidoctor](https://asciidoctor.org/).

Overall I feel its better than LaTeX, but it does have some sticking points I do not like.
 * Difficult doing manual layout/formatting: Asciidoc rightly hides the majority of control of layout from the user.
This makes it nice to write the document as the formatting is nicely separated from the content.
However, Asciidoc does not have an easy way to "go deep" and meddle with the layout or formatting when you need to, as in making odd title pages or other special cases.
 * Varying rendering backends: There are multiple competing rendering solutions and they sometimes produce slightly varying results.
This is especially irritating when using a fast preview in VSCode and then exporting to PDF.
Final formatting often ends up with rebuilding the project over and over again tweaking things to see if the result is what you wanted.
 * Slow builds: PDF export of large documents takes a handful of seconds.
Overall not a massive issue, but it adds up.
I'd really prefer a live preview of the final document that renders almost instantly.
 * Theming: Theming is relatively flexible but lacking in some ways.
Specifically things like headers/footers are tied into the theme, which can make it difficult to share a theme across multiple documents/projects.
 * Lack of inline code/extensibility: Asciidoc does have an extension API, but I'd much prefer the ability to add small things inline, like JS.


LaTeX counters some of these shortcomings while introducing others.
I won't address it here other than to say Asciidoc and LaTeX are both strong competitors, but neither really satisfy me.

While working on this, I realized that HTML+CSS+JS and the browser also represent a way to render formatted content from code.
That stack (and all the related frameworks available ala React/Svelte/Django/etc.) has probably had multiple orders of magnitude more human effort and money put into them than either LaTeX or Asciidoc have.
So why not try and leverage it?

#### Why HTML
The HTML+CSS+JS approach gives you:
 * Near instant rendering: The document draws from scratch in milliseconds. View updates instantly as you make them (once reactivity is fixed lol).
 * Virtually unlimited power for formatting and layout: Create any document layout or format you'd like. Far, far more documentation available.
 * Use existing web frameworks and tooling: Browser developer tools are massively powerful debugging tools compared to what you can do in LaTeX or Asciidoc.
 * Free web version of your document: Hostable, searchable, etc. Can be identical to your print document, or pagination could be easily disabled and TOC co-opted to make a web friendly sidebar to jump around the document. No more MS Word docs or PDFs that you can't host or search on your intranet.


### Tools
I again chose to use the [Svelte Framework](https://svelte.dev/) as my main tool for this proof of concept, as I've used it a few times before.
There's no huge advantage here for Svelte over the other frameworks to my eyes - I used it out of familiarity.

Svelte has an extension called [mdsvex](https://mdsvex.pngwn.io/) that can transform markdown files into Svelte components, with some hooks for the user to inject custom formatting.
This allows us to mimic some of the ease of use of Asciidoc in that the user only needs to edit markdown files, but now has the ability to go deeper where needed, directly including Svelte components and HTML+CSS+JS directly in their documents.

### How

[Repo](https://github.com/dominicdoty/sveltedoc)

The top level document is located in `./src/App.svelte`.

It loads the title page and table of contents are rendered from components in `./src/lib`.

It also loads `Content.svelte` which loads `content.md` via `mdsvex`.

`Content.svelte` is wrapped in a `src/lib/Paginator.svelte` component, which renders the contents to an invisible div, and then goes through the children of that div and copies them over to a visible div, while inserting page breaks.
The paginator also sets page numbers for `src/lib/SectHead.svelte` instances it finds in the content.
These page numbers are then fed back to the table of contents to set the page numbers for sections correctly.

There's also `src/lib/Layout.svelte` which leverages components in `src/lib/md_components/` to customize the `mdsvex` converted content of `content.md`.
Part of that layout is replacing `h1`, `h2`, etc. tags with `SectHead.svelte` components, so they show up in the table of contents.

CSS has a `@media print` tag that can be used to set the CSS when printing the website.
Firefox appears to play well with this when setting the page dimensions to match the size of the page `<div>`'s I use in the document.

Firefox (or Chrome) print to PDF can then be used to output a document that is identical to the browser version.

### Outstanding Issues

There are several outstanding issues in this demo:
 * Reactivity is broken
    * The site does not currently HMR automatically or correctly when editing the `content.md` file (and other stuff too. Table of Contents also acts weird in HMR).
    * This is likely due to the hot mess of mixed Svelte 4 & 5 paradigms in here, and my own mistakes.
 * Document content is held in a single `content.md` file at the moment
    * This is something that could be solved by globbing all `*.md` files in the `doc` directory and rendering them in order of filenames.
    * This should make it easier to edit large, multipart documents.
    * I'm thinking something like `10_TitlePage.svelte`, ..., `40_Chapter1.md`, etc.
 * The TitlePage and TableOfContents are both included in the `App.svelte` file
    * It would be more user friendly to put those into the `doc` folder and have a top level app that auto renders them and all `*.md` files there also.
 * Pagination problems
   * pagination code is gross
   * Currently page breaks are automatically inserted based on height alone.
   * Would be nice to make this smarter, avoiding splitting section titles from the section content
   * Pagination splits content at the HTML tag level. It cannot for instance split a really long paragraph that's contained in a single `<p></p>`
 * Figure/Table Numbers/Captions and Table of Figures/Tables
    * This is not yet implemented but should be possible by following the Section numbering model.
 * Cross referencing to sections/figures/tables is not implemented
    * Inter-page links (`href=#My Section`) work, currently used in the TOC.
    * Need to add auto-generated IDs to Figures/Tables so that the user can create links to them.
    * Need to add a way to xref Section/Figure/Table numbers in text.
    * e.g. `As seen in [xref](#my_table)` -> `As seen in Table 3.2`
 * PDF bookmarks
    * Not implemented, but seems possible by inspecting the generate PDF and adding them in post processing.
    * Hoping there's some way to add an HTML tag or id that gets passed through to the PDF that we can search for in the PDF XML.
 * TOC cannot handle identical section titles.
    * The section title is used un-edited as the id, which can break links when multiple sections have the same name.
 
### Conclusion
As a proof of concept I consider this a success, as it proves this is a viable path forward.

I'm not sure I will pursue this further as the workflow is currently more painful than Asciidoc or LaTeX.
I do however think this could be a strong contender with some more work turning this project into more of a framework to hide more of the gory details in this version.

The power of HTML+CSS+JS I think far out strips any other existing code->formatted document tool.
While far from perfect, it seems like the obvious choice to leverage the existing work on web development for creating text documents.

Check out a rendered [demo page](https://sveltedoc.pages.dev/) (print it to PDF!), or take a look at the code on [github](https://github.com/dominicdoty/sveltedoc).