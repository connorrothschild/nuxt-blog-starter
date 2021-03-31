# Nuxt Blog Starter

A simple, content-focused, minimal blog site built using NuxtJS and Bulma.

- [Nuxt Blog Starter](#nuxt-blog-starter)
  * [Get started](#get-started)
    + [Creating blog posts](#creating-blog-posts)
      - [Adding images](#adding-images)
  * [Features](#features)
    + [Easy theming](#easy-theming)
      - [Dark mode/light mode](#dark-mode-light-mode)
    + [Blog features](#blog-features)
    + [Image optimization](#image-optimization)
    + [Meta tags/SEO](#meta-tags-seo)
    + [Deploying your site](#deploying-your-site)
      - [Set a base URL](#set-a-base-url)

## Get started

To interact with this site, clone the repository and run the following code on the command line.

```bash
npm install
npm run dev
```

You can just hit the ground running by changing all instances of my name ('Connor') to your own, and editing other content as you see fit (e.g. on the homepage in the `components/Hero.vue`, and on the about page in `pages/about/index.vue`). 

### Creating blog posts

To create a blog post, simply copy an existing Markdown (`.md`) file that lives in `content/posts/`. Change the front matter to reflect your own post, and modify blog post content in the markdown itself.

#### Adding images

Images for your blog posts should live in the folder `static/post/{your blog post}/`. For example, if your blog post had the filename `dogs.md`, you should make an images folder titled `static/post/dogs/`.

`<InlineImage>` is a custom component that I've created that:

* Allows for fullscreen, gallery views via [`v-img`](https://github.com/crowdbotics/v-img).
* Optimizes images with [`nuxt-optimized-images`](https://github.com/juliomrqz/nuxt-optimized-images).

Use <InlineImage> as you would a normal `<img>` tag, specifying `src`, `alt`, and (if desired) `width`. You can also specify `:clickable=false` if you don't want to allow the user to view the image in a fullscreen gallery view.

## Features

### Easy theming

The site relies on three colors: a primary (background), secondary (accent), and a primary-invert (text). These are all defined in Sass variables that live in `assets/scss/colors.scss`. To change the appearance of your site, simply modify the colors you'd like to see as your background (`$primary`), your text (`$text`), and your accent (`$secondary`).

#### Dark mode/light mode

An example of this can be seen below the SCSS defaults that live within `assets/scss/colors.scss`. Simply uncomment those lines (preceded by the comment "LIGHT MODE") to see your site with light mode defaults.

<img src="README-files/dark.png" alt="Dark mode" width="49%"/><img src="README-files/light.png" alt="Light mode" width="49%"/>

### Blog features

This site comes with all the same blog capabilities as a normal site, such as syntax highlighting, images, HTML support, and Vue components. Read [this](https://nuxtjs.org/blog/creating-blog-with-nuxt-content/) if you're curious about features.

You can also include a few custom components I've made:

* **[`InfoBox.vue`](https://github.com/connorrothschild/nuxt-blog-starter/blob/master/components/global/InfoBox.vue)** A component that allows you to put notes/warnings/messages in your blog posts. Feel free to edit the component to adjust its styling.
* **[`InlineImage.vue`](https://github.com/connorrothschild/nuxt-blog-starter/blob/master/components/global/InlineImage.vue)** Optimizes and handles the messy parts of images. See above.
* **[`ResponsiveVideo.vue`](https://github.com/connorrothschild/nuxt-blog-starter/blob/master/components/global/ResponsiveVideo.vue)** Give a YouTube url (or otherwise embeddable video link) and this component will make it responsive.

You can see those components in action in the [sample blog post](https://nuxt-blog-starter.netlify.app/post/welcome).

### Image optimization

Images are optimized during build thanks to [`nuxt-optimized-images`](https://github.com/juliomrqz/nuxt-optimized-images).

### Meta tags/SEO

Setting the proper meta tags for your site is important for effective search engine optimization (SEO) rankings. I use `getSiteMeta()`, found in the `utils/` folder, to provide different tags for each page and for each blog post. In other words, the Twitter Cards for my home page and for a blog post look like this, respectively: 

<img src="README-files/home-card.png" alt="Twitter card of homepage" width="49%"/><img src="README-files/blog-card.png" alt="Twitter card of blog post page" width="49%"/>

The site is set up so that your metatags appear this way automatically! Page-specific meta tags are also helpful for search engine optimization; you might attract a larger swath of visitors if you have a variety of keywords.

### Deploying your site

I recommend easily deploying your site with [Netlify](https://netlify.app/). Netlify will handle the "hard parts" of your build process, and it handles deploys automatically when you push to GitHub.

Specifically, you'll take three steps:

1. Visit Netlify and click 'New Site from Git'
2. Connect this repository
3. Under 'Basic build settings', put `npm run generate` as the build command, and make sure the publish directory is `dist/`. Every other setting can be left untouched.

This will create a site with some funky URL. You'll probably want to change it (`myactualsite.netlify.app`) or connect a custom domain (`www.mycustomdomain.com`).

#### Set a base URL

Within your project, you'll need to specify your base URL so that all file paths cooperate, and your metatags show the correct content. 

You'll input your base URL in two places:

1. **`nuxt.config.js`** (at the top of the file, you'll see `const url = ...`)
2. **`utils/getSiteMeta.js`** This file contains all of the '[meta tags](https://www.wordstream.com/meta-tags)' for your website. Its important you change these to reflect your own site (unless you want my name on everything...)
