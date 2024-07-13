<script>
	import Logo from '$lib/Logo.svelte';
	let burger_visible = false;

	function flip_burger() {
		burger_visible = !burger_visible;
	}
</script>

<nav class="navbar has-background-primary" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item has-text-primary-invert" href="/">
			<span class="mr-4"><Logo color="#000000" /></span>
			Dominic Doty
		</a>

		<button
			class="navbar-burger"
			class:is-active={burger_visible}
			aria-label="menu"
			aria-expanded={burger_visible}
			on:click={flip_burger}
		>
			{#each { length: 4 } as _}
				<span aria-hidden="true"></span>
			{/each}
		</button>
	</div>

	<div class="navbar-menu navbar-end" class:is-active={burger_visible}>
		<a class="navbar-item has-text-primary-invert" href="/"> Home </a>
		<a class="navbar-item has-text-primary-invert" href="/topics"> Topics </a>
		<a class="navbar-item has-text-primary-invert" href="/about"> About </a>
	</div>
</nav>
