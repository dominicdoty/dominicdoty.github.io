// Find all posts in the posts folder
const glob_import = import.meta.glob('$src/posts/*.md', {
	eager: true
});

// Flatten writings to 2D array and sort by date
const all_writings = Object.entries(glob_import).sort((a, b) => {
	return a[1].metadata.date < b[1].metadata.date;
});

// Remove any writings that aren't published
const writings = all_writings.filter((writing) => {
	return writing[1].metadata.published;
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
