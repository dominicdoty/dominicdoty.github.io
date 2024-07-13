<script>
	import PaginationNavbar from '$lib/PaginationNavbar.svelte';

	export let data;
</script>

<title>DominicDoty.com</title>

<div class="section container is-max-desktop">
	<!-- Posts -->
	{#each data.writings as [path, module]}
		<svelte:component this={module.default} card={true} {path} />
	{/each}

	<!-- Pagination Bar -->
	<PaginationNavbar selected_page={data.selected_page} num_pages={data.num_pages} />
</div>
