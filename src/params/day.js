/**
 * @param {string} param
 * @return {param is DD or D day}
 * @satisfies {import('@sveltejs/kit').ParamMatcher}
 */

export function match(param) {
	const day = Number(param);
	return day > 0 && day < 32;
}
