import * as postcssJitProps from 'postcss-jit-props';
import * as openProps from 'open-props';
const config = {
	plugins: [
		postcssJitProps(openProps),
	]
};

export default config;