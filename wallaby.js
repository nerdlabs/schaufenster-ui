module.exports = function (wallaby) {
	return {
		files: [
			'source/**/*.js',
			'!source/**/__test__/*.js'
		],

		tests: [
			'source/**/__test__/*.js'
		],

		env: {
			type: 'node'
		},

		compilers: {
			'**/*.js': wallaby.compilers.babel({
				presets: ['es2015-node', 'stage-0', 'react'],
				plugins: [
					require('babel-plugin-espower/create')(
						require('babel-core'), {
							patterns:require('ava/lib/enhance-assert').PATTERNS
						}
					)
				]
			})
		},

		testFramework: 'ava',

		setup: function () {
			require('babel-polyfill');
		},

		debug: true
	};
};
