<script>
	import '$src/app.scss';
	import Navbar from '$lib/Navbar.svelte';

	const current_year = new Date().getFullYear();
</script>

<Navbar />
<div style="flex: 1;">
	<slot></slot>
</div>

<footer class="footer">
	<div class="content has-text-centered">
		© 2012-{current_year}, Dominic Doty, All rights reserved.
	</div>
</footer>
