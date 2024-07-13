import { writings } from '$lib/post_finder.js';

const posts_per_page = 5;
let num_pages = Math.ceil(writings.length / posts_per_page);

export async function load({ params }) {
	// if we're on the home page, params will be {}
	// this is the same as params.post_page = page-1
	if (Object.keys(params).length === 0) {
		params.post_page = 'page-1';
	}

	const selected_page = Number(params.post_page.split('-')[1]);

	// Slice down to writings present on this page
	const sel_writings = writings.slice((selected_page - 1) * num_pages, selected_page * num_pages);

	return { selected_page: selected_page, num_pages: num_pages, writings: sel_writings };
}
