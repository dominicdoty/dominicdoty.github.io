// Find all posts in the posts folder
const glob_import = import.meta.glob('$src/posts/*.md', {
	eager: true
});

// Flatten writings to 2D array
let writings = Object.entries(glob_import);

// Remove any writings that aren't published
writings = writings.filter((writing) => {
	return writing[1].metadata.published;
});

// sort by date
writings.sort((a, b) => {
	const a_date = new Date(a[1].metadata.date);
	const b_date = new Date(b[1].metadata.date);
	return b_date - a_date;
});

// Extract list of tags from writings and sort alphabetically
const tags = ['all'].concat(
	[
		...new Set(
			writings
				.map((value) => {
					return value[1].metadata.tags;
				})
				.flat()
		)
	].sort()
);

export { writings, tags };
