<script>
	import img from '$lib/Image.svelte';
	const Image = img;

	export let src;
	export let alt = 'No alt available';
</script>

<div class="section">
	<Image {src} {alt} />
</div>
