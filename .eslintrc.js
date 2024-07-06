module.exports = {
	extends: ['eslint:recommended', 'plugin:prettier/recommended', 'airbnb-base'],
	env: {
	  browser: true,
	  es2021: true,
	  jest: true,
	  node: true,
	},
	plugins: ['prettier'],
	rules: {
	  'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
	  'linebreak-style': ['error', 'windows'],
	  'no-tabs': 'off',
	  'import/extensions': [
		'error',
		'ignorePackages',
		{
		  js: 'always',
		},
	  ],
	  'prettier/prettier': [
		'error',
		{
		  endOfLine: 'auto',
		},
	  ],
	  quotes: ['error', 'single'],
	},
  };