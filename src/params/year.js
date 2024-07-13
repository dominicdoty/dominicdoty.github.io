/**
 * @param {string} param
 * @return {param is YYYY year}
 * @satisfies {import('@sveltejs/kit').ParamMatcher}
 */

export function match(param) {
	const day = Number(param);
	return day > 2010 && day < 2120;
}
