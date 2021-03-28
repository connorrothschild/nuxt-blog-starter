module.exports = {
	root          : true,
	env           : {
		browser : true,
		node    : true
	},
	parserOptions : {
		parser : 'babel-eslint'
	},
	extends       : [
		//'@nuxtjs',
		//'plugin:nuxt/recommended',
		//'plugin:vue/recommended',
		'plugin:vue/essential',
		'eslint:recommended'
	]
};
