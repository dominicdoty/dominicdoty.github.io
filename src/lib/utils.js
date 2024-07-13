export function post_to_obj(post_file, post_date) {
	return {
		year: post_date.getFullYear().toString().padStart(4, '0'),
		month: (post_date.getMonth() + 1).toString().padStart(2, '0'),
		day: post_date.getDate().toString().padStart(2, '0'),
		post: post_file.split('posts/')[1].split('.md')[0]
	};
}

export function post_to_href(post_obj) {
	// /year/month/day/post/
	return (
		'/' + [post_obj['year'], post_obj['month'], post_obj['day'], post_obj['post']].join('/') + '/'
	);
}
