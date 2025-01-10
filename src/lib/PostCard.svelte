<script context="module">
	import PostImage from '$lib/PostImage.svelte';
	const img = PostImage;

	export { img };
</script>

<script>
	export let card = false;
	export let title;
	export let path; // path to markdown file (used in URL)
	export let image;
	export let tags;
	export let layout;
	export let published; // this is already resolved by post_finder
	export let date;
	export let uses_codeblock = false; // include CSS for codeblock highlight
	export let selected_tag = '';

	import Image from '$lib/Image.svelte';
	import { setContext } from 'svelte';
	import { post_to_href, post_to_obj } from '$lib/utils';

	if (card) {
		setContext('SHOW_ONLY_EXCERPT', true);
	}

	// prevent unused warning
	const _layout = layout;
	const _published = published;

	if (date[date.length - 1] == 'Z') {
		date = date.substring(0, date.length - 3);
	}

	const date_obj = new Date(date);
	const date_fmtted = date_obj.toLocaleDateString('en-us', {
		year: 'numeric',
		day: 'numeric',
		month: 'numeric'
	});

	const post_href = post_to_href(post_to_obj(path, date_obj));
</script>

<!-- If we start using this a lot, this should move to a <link> file -->
{#if uses_codeblock}
	<style>
		@import '$lib/prism-atom-dark.css';
	</style>
{/if}

{#if !card}
	<title>{title}</title>
{/if}

<div class="card" style="height:100%; min-height: 30em;">
	<div>
		<!-- Header Image -->
		<div class="card-image">
			<a href={post_href}>
				<Image src={image} alt={image} />
			</a>
		</div>

		<!-- Header Section -->
		<div class="card-content pb-0">
			<!-- Title and Date -->
			<div class="columns is-mobile mb-auto">
				<div class="column is-flex is-flex-direction-column">
					<div class="mt-auto is-size-5">
						<a style="color:var(--bulma-text-color)" href={post_href}>{title}</a>
					</div>
				</div>
				<div class="column is-narrow is-flex is-flex-direction-column">
					<div class="mt-auto is-size-7">{date_fmtted}</div>
				</div>
			</div>

			<div class="tags is-size-7">
				{#each tags as tag}
					<a class="tag" class:is-primary={tag == selected_tag} href="/topics/{tag}">
						{tag}
					</a>
				{/each}
			</div>
		</div>
	</div>

	<!-- Actual writing contents -->
	<div class="card-content content">
		<slot></slot>
	</div>
</div>
