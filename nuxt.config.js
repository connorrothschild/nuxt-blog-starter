export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target          : 'static',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head            : {
		htmlAttrs : {
			lang : 'en'
		},
		title     : 'Connor Rothschild',
		meta      : [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid     : 'description',
				name    : 'description',
				content : 'Connor Rothschild is a data scientist, web developer, and designer based in Houston Texas.'
			},
			{
				hid      : 'og:type',
				property : 'og:type',
				content  : 'website'
			},
			{
				hid      : 'og:url',
				property : 'og:url',
				content  : 'https://www.connorrothschild.com'
			},
			{
				hid      : 'og:title',
				property : 'og:title',
				content  : 'Connor Rothschild'
			},
			{
				hid      : 'og:description',
				property : 'og:description',
				content  : 'Connor Rothschild is a data scientist, web developer, and designer based in Houston Texas.'
			},
			{
				hid      : 'og:image',
				property : 'og:image',
				content  :
					'https://raw.githubusercontent.com/connorrothschild/connorrothschild.com/master/static/social.png'
			},
			{
				hid     : 'twitter:url',
				name    : 'twitter:url',
				content : 'https://www.connorrothschild.com'
			},
			{
				hid     : 'twitter:title',
				name    : 'twitter:title',
				content : 'Connor Rothschild'
			},
			{
				hid     : 'twitter:description',
				name    : 'twitter:description',
				content : 'Connor Rothschild is a data scientist, web developer, and designer based in Houston Texas.'
			},
			{
				hid     : 'twitter:image',
				name    : 'twitter:image',
				content :
					'https://raw.githubusercontent.com/connorrothschild/connorrothschild.com/master/static/social.png'
			},
			{
				hid     : 'twitter:site',
				name    : 'twitter:site',
				content : '@CL_Rothschild'
			},
			{
				hid     : 'twitter:card',
				name    : 'twitter:card',
				content : 'summary_large_image'
			}
		],
		link      : [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' } ]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css             : [ '~assets/scss/colors.scss' ],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins         : [ '~/plugins/v-img.js' ],
	// Auto import components (https://go.nuxtjs.dev/config-components)
	components      : true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules    : [ '@aceforth/nuxt-optimized-images' ],

	optimizedImages : {
		optimizeImages : true
	},

	generate        : {
		fallback : true
	},

	image           : {
		// Options
	},

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules         : [ '@nuxtjs/bulma', '@nuxt/content', '@nuxt/image', '@nuxtjs/style-resources' ],

	content         : {
		markdown : {
			prism : {
				// https://github.com/PrismJS/prism-themes
				theme : 'prism-themes/themes/prism-atom-dark.css'
			}
		}
	},

	styleResources  : {
		scss : [ './assets/scss/*.scss' ]
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build           : {
		postcss : {
			preset : {
				features : {
					customProperties : false
				}
			}
		}
	}
};
