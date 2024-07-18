<script>
	import { page } from '$app/stores';
</script>

<div class="section">
	<div class="container is-max-desktop has-text-centered">
		<h1 class="title">{$page.status}: {$page.error.message}</h1>
	</div>
</div>
