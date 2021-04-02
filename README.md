# Nuxt Blog Starter

A simple, content-focused, minimal blog site built using NuxtJS and Bulma.

- [Get started](#get-started)
  * [Creating blog posts](#creating-blog-posts)
    + [Adding images](#adding-images)
- [Blog features](#blog-features)
  * [Info boxes!](#info-boxes-)
  * [Better images!](#better-images-)
  * [Videos!](#videos-)
- [Site Features](#site-features)
  * [Easy theming](#easy-theming)
    + [Dark mode/light mode](#dark-mode-light-mode)
  * [Image optimization](#image-optimization)
  * [Meta tags/SEO](#meta-tags-seo)
  * [Deploying your site](#deploying-your-site)
  * [Setting a base URL and site metadata](#setting-a-base-url-and-site-metadata)
- [Need help?](#need-help)

## Get started

To interact with this site, clone the repository and run the following code on the command line.

```bash
npm install
npm run dev
```

You can just hit the ground running by changing all instances of my name ('Connor') to your own, and editing other content as you see fit (e.g. on the homepage in the `components/Hero.vue`, and on the about page in `pages/about/index.vue`). 

### Creating blog posts

To create a blog post, simply copy an existing Markdown (`.md`) file that lives in `content/posts/`. Change the front matter to reflect your own post, and modify blog post content in the markdown itself. ([Need help with Markdown?](https://www.markdownguide.org/cheat-sheet/))

#### Adding images

Images for your newly created blog post should live in the folder `static/post/{your blog post}/`. For example, if your blog post had the filename `hello.md`, you should make an images folder titled `static/post/hello/`.

You'll then include those images using my component `<InlineImage>`, which I'll talk about [later](#blog-features).

Use <InlineImage> as you would a normal `<img>` tag, specifying `src`, `alt`, and (if desired) `width`. You can also specify `:clickable=false` if you don't want to allow the user to view the image in a fullscreen gallery view.

## Blog features

This site comes with all the same blog capabilities as a normal site, such as syntax highlighting, images, HTML support, and Vue components. Read [this](https://nuxtjs.org/blog/creating-blog-with-nuxt-content/) if you're curious about features.

You can also include a few custom components I've made:

### Info boxes!

**[`InfoBox.vue`](https://github.com/connorrothschild/nuxt-blog-starter/blob/master/components/global/InfoBox.vue)** is component that allows you to put notes/warnings/messages in your blog posts. Feel free to edit the component to adjust its styling.

### Better images!

**[`InlineImage.vue`](https://github.com/connorrothschild/nuxt-blog-starter/blob/master/components/global/InlineImage.vue)** optimizes and handles the messy parts of images. 

In specific, it:

* Allows for fullscreen, gallery views via [`v-img`](https://github.com/crowdbotics/v-img).
* Optimizes images with [`nuxt-optimized-images`](https://github.com/juliomrqz/nuxt-optimized-images).

### Videos!

**[`ResponsiveVideo.vue`](https://github.com/connorrothschild/nuxt-blog-starter/blob/master/components/global/ResponsiveVideo.vue)** takes a YouTube url (or otherwise embeddable video link) and makes it responsive.

You can see all of these components in action in the [sample blog post](https://nuxt-blog-starter.netlify.app/post/welcome).

## Site Features

### Easy theming

The site relies on three colors: a primary (background), secondary (accent), and a primary-invert (text). These are all defined in Sass variables that live in `assets/scss/colors.scss`. To change the appearance of your site, simply modify the colors you'd like to see as your background (`$primary`), your text (`$text`), and your accent (`$secondary`). Obviously, make sure your `$primary` and `$text` colors have sufficient contrast.

#### Dark mode/light mode

An example of this can be seen below the Sass defaults that live within `assets/scss/colors.scss`. Simply uncomment those lines (preceded by the comment "LIGHT MODE") to see your site with light mode defaults.

<img src="README-files/dark.png" alt="Dark mode" width="49%"/><img src="README-files/light.png" alt="Light mode" width="49%"/>

### Image optimization

Images are optimized during build thanks to [`nuxt-optimized-images`](https://github.com/juliomrqz/nuxt-optimized-images).

### Meta tags/SEO

Setting proper meta tags for your site is important for effective search engine optimization (SEO) rankings. Use `getSiteMeta()`, found in the `utils/` folder, to provide different tags for each page and for each blog post. This file allows the Twitter Cards for my home page and for a blog post to look different, like this: 

<img src="README-files/home-card.png" alt="Twitter card of homepage" width="47.2%"/><img src="README-files/blog-card.png" alt="Twitter card of blog post page" width="50%"/>

The site is set up so that your cards will appear this way automatically! All you will have to do is edit `utils/getSiteMeta()`, as you'll read about [later](#setting-a-base-url-and-site-metadata). Page-specific meta tags are also helpful for search engine optimization; you might attract a larger number of visitors if you have a variety of keywords.

### Deploying your site

I recommend deploying your site with [Netlify](https://netlify.app/). Netlify will handle the "hard parts" of your build process, and it handles deploys automatically when you push to GitHub.

Specifically, you'll take three steps:

1. Visit [Netlify](https://netlify.app/) and click 'New Site from Git'
2. Connect this repository
3. Under '*Basic build settings*', put `npm run generate` as the build command, and make sure the publish directory is set to `dist/`. Every other setting can be left untouched.

This will create a site with some funky URL. You'll probably want to change it in Netlify's settings (e.g., `myactualsite.netlify.app`) or connect a custom domain (e.g., `www.mycustomdomain.com`).

### Setting a base URL and site metadata

Within your project, you'll need to specify your base URL so that all file paths cooperate. You'll get your base URL from Netlify, or whatever other service you end up using. (For example, the base URL for this site is [https://nuxt-blog-starter.netlify.app/](https://nuxt-blog-starter.netlify.app/); yours will likely look similar.)

Once you have your base URL, add it to **`nuxt.config.js`** (at the top of the file, you'll see `const url = ...`).

While you're at it, go ahead and change the site metadata in **`utils/getSiteMeta.js`**. This file contains all of the '[meta tags](https://www.wordstream.com/meta-tags)' for your website. Its important you change these to reflect your own site (unless you want my name on everything!). I've highlighted the things you'll want to change (Twitter handle, site title, site description, and site URL) with comments that pleasantly yell `// CHANGE ME!`.

To update your OG image that will appear in Twitter Cards, iMessages, etc., replace the file `static/social.png`. Similarly, you'll probably want to replace the site icon in `static/favicon.png`. 

* [More on OG images](https://www.kapwing.com/resources/what-is-an-og-image-make-and-format-og-images-for-your-blog-or-webpage/)
* [More on favicons](https://developer.mozilla.org/en-US/docs/Glossary/Favicon)
* [Make a favicon](https://favicon.io/)

## Need help?

That should be it! Is anything unclear, or want to see some other functionality? Open an issue, or message me on Twitter [@CL_Rothschild](https://twitter.com/CL_Rothschild).