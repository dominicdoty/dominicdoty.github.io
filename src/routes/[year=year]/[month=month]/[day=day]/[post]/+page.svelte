<script>
	export let data;
</script>

<title>{data.metadata.title}</title>

<div class="section container is-max-desktop">
	<svelte:component this={data.contents} card={false} path={data.post} />
</div>
