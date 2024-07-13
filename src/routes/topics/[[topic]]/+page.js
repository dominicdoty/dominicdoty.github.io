import { tags, writings } from '$lib/post_finder.js';

export async function load({ params }) {
	// Check for root page with no topic
	const tag = params.topic == undefined ? 'all' : params.topic;

	// Filter for the page selected tag
	let selected_writings;
	if (tag == 'all') {
		selected_writings = writings;
	} else {
		selected_writings = writings.filter((writing) => {
			return writing[1].metadata.tags.includes(tag);
		});
	}

	return { selected_tag: tag, tags: tags, writings: selected_writings };
}
