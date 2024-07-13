<script>
	// This page displays a grid of all posts as short cards
	// with a tag selection menu in on the left
	export let data;

	$: selected_tag = data.selected_tag;
	$: tags = data.tags;
	$: writings = data.writings;
</script>

<title>DominicDoty.com</title>

<div class="columns">
	<!-- Desktop Side Tag Bar -->
	<div class="column is-narrow m-3 is-hidden-tablet-only is-hidden-mobile">
		<aside class="menu">
			<p class="menu-label">Tags</p>
			<ul class="menu-list">
				{#each tags as tag}
					<li>
						<span class="tag m-1" class:is-primary={tag == selected_tag}>
							<a class="p-0" style="background: none;" href="/topics/{tag}">{tag}</a>
						</span>
					</li>
				{/each}
			</ul>
		</aside>
	</div>

	<!-- Tablet/Mobile Tag Bar (at top) -->
	<div class="column is-narrow m-3 is-hidden-desktop">
		<div class="tags">
			{#each tags as tag}
				<span class="tag" class:is-primary={tag == selected_tag}>
					<a class="has-text-primary-invert" style="background: none;" href="/topics/{tag}">
						{tag}
					</a>
				</span>
			{/each}
		</div>
	</div>

	<!-- Posts -->
	<div class="column">
		<div class="section p-3">
			<div class="grid is-col-min-12">
				{#each writings as [path, module]}
					<div class="cell">
						<svelte:component this={module.default} card={true} {path} {selected_tag} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
