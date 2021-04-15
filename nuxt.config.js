const url = 'https://nuxt-blog-starter.netlify.app';

export default {
	head                : {
		htmlAttrs : { lang: 'en' },
		meta      : [ { charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' } ],
		link      : [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' } ]
	},

	// Target (https://go.nuxtjs.dev/config-target)
	target              : 'static',

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css                 : [ '~assets/scss/colors.scss' ],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins             : [ '~/plugins/v-img.js' ],
	// Auto import components (https://go.nuxtjs.dev/config-components)
	components          : true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules        : [ '@aceforth/nuxt-optimized-images', '@nuxtjs/pwa' ],

	optimizedImages     : {
		optimizeImages : true
	},

	publicRuntimeConfig : {
		baseURL : process.env.BASE_URL || url
	},

	generate            : {
		fallback : true
	},

	image               : {
		// Options
	},

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules             : [ '@nuxtjs/bulma', '@nuxt/content', '@nuxt/image', '@nuxtjs/style-resources' ],

	content             : {
		markdown : {
			prism : {
				// https://github.com/PrismJS/prism-themes
				theme : 'prism-themes/themes/prism-atom-dark.css'
			}
		}
	},

	styleResources      : {
		scss : [ './assets/scss/*.scss' ]
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build               : {
		postcss : {
			preset : {
				features : {
					customProperties : false
				}
			}
		}
	}
};
