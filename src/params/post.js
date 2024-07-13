/**
 * @param {string} param
 * @return {param is post-#}
 * @satisfies {import('@sveltejs/kit').ParamMatcher}
 */

export function match(param) {
	const [pword, text_num] = param.split('-');
	let num = Number(text_num);
	return pword == 'page' && num > 0;
}
