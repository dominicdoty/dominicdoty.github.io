<script context="module">
	let images = import.meta.glob(['$src/images/**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}'], {
		eager: true,
		query: { enhanced: true }
	});

	let lqips = import.meta.glob(['$src/images/**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}'], {
		eager: true,
		query: { lqip: true }
	});

	const rename_key = (o, old_key, new_key) => {
		if (old_key != new_key) {
			Object.defineProperty(o, new_key, Object.getOwnPropertyDescriptor(o, old_key));
			delete o[old_key];
		}
	};

	const force_img_root = (o) => {
		Object.keys(o).forEach((old_key) => {
			rename_key(o, old_key, old_key.replace('/src', ''));
		});
	};

	force_img_root(images);
	force_img_root(lqips);

	const get_full = (desired_image) => {
		if (images[desired_image] == undefined) {
			console.error('Cant find Image for: ', desired_image);
		}
		return images[desired_image].default;
	};

	const get_lqip = (desired_image) => {
		if (lqips[desired_image] == undefined) {
			console.error('Cant find LQIP for: ', desired_image);
		}
		return lqips[desired_image].default;
	};
</script>

<script>
	export let src;
	export let alt = 'No alt available';
	export let class_passthrough = '';

	const lqip = get_lqip(src);
	const image = get_full(src);
</script>

<div
	style="background-image: url('{lqip.lqip}'); background-size: cover; border-radius: var(--bulma-card-radius);"
>
	<figure class="image">
		<enhanced:img class={class_passthrough} src={image} {alt} />
	</figure>
</div>
