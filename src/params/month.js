/**
 * @param {string} param
 * @return {param is month MM or M, string }
 * @satisfies {import('@sveltejs/kit').ParamMatcher}
 */
export function match(param) {
	const day = Number(param);
	return day > 0 && day < 13;
}
