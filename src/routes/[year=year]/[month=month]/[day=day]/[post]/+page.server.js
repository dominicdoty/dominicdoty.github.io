import { writings } from '$lib/post_finder.js';

export async function load({ params }) {
	// Find post
	for (const [post, contents] of writings) {
		if (post.replace('/src/posts/', '').replace('.md', '') == params.post) {
			const post_data = {
				post: post,
				metadata: contents.metadata,
				contents: contents.default
			};

			return post_data;
		}
	}
}
