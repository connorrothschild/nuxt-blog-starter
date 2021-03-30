# Nuxt Blog Starter

A simple, content-focused, minimal blog site built using NuxtJS and Bulma.

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
