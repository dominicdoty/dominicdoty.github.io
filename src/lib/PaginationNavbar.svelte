<script>
	export let selected_page;
	export let num_pages;

	const page_array = [...Array(num_pages).keys()].map((x) => x + 1);
</script>

<nav class="pagination" aria-label="pagination">
	<a
		href="/page-{selected_page == 1 ? selected_page : selected_page - 1}"
		class="pagination-previous"
		class:is-disabled={selected_page == 1}>Previous</a
	>

	<a
		href="/page-{selected_page == num_pages ? selected_page : selected_page + 1}"
		class="pagination-next"
		class:is-disabled={selected_page == num_pages}>Next</a
	>

	<!-- TODO: Fix these links not actually reloading page - check "shallow routing" -->

	<ul class="pagination-list">
		{#each page_array as page_num}
			<li>
				<a
					href="/page-{page_num}"
					class="pagination-link"
					class:is-current={selected_page == page_num}
					aria-current={selected_page == page_num ? 'page' : null}
					aria-label="Goto page {page_num}">{page_num}</a
				>
			</li>

			<!-- TODO: Ellipsis skipped for now -->
			<!-- <li><span class="pagination-ellipsis">&hellip;</span></li> -->
		{/each}
	</ul>
</nav>
