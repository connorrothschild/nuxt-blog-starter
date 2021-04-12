---
title: How to Blog
description: Getting started with the Nuxt Blog Starter template.
img: welcome/header.png
img_alt: Pikachu waving hello!
date: 2021-03-12 # Date should always be in YYYY-MM-DD format
---

Welcome! Here's how to write a blog post. (Not how to write, but how to write a blog post *using this template*.) This post is written in [Markdown](https://daringfireball.net/projects/markdown/). Read the [syntax guide](https://www.markdownguide.org/basic-syntax/) to get started using Markdown easily.

### Images 

To use an image, write `<InlineImage>` as you see below.

```html
<InlineImage src="post/welcome/photo.png" alt="Pikachu waving!">
</InlineImage>
```

The above outputs the following:

<InlineImage src="post/welcome/photo.png" alt="Pikachu waving!"></InlineImage>

The images (`.png`, `.png`, `.gif`) that you reference here should live in `static/post/{post directory}`.

(You can also do GIFs):

```html
<InlineImage src="post/welcome/gif.gif" alt="Pikachu waving, in a GIF!">
</InlineImage>
```

<InlineImage src="post/welcome/gif.gif" alt="Pikachu waving, in a GIF!"></InlineImage>

#### Grids

By specifying `width` in an `InlineImage`, you can create grid-based layouts:

```html
<InlineImage src="post/welcome/pokemon.png" alt="Pikachu waving!" width="49%"></InlineImage>
<InlineImage src="post/welcome/gif.gif" alt="Pikachu waving, in a GIF!" width="49%"></InlineImage>
<InlineImage src="post/welcome/gif.gif" alt="Pikachu waving, in a GIF!" width="49%"></InlineImage>
<InlineImage src="post/welcome/pokemon.png" alt="Pikachu waving!" width="49%"></InlineImage>
```

<InlineImage src="post/welcome/pokemon.png" alt="Pikachu waving!" width="49%"></InlineImage>
<InlineImage src="post/welcome/gif.gif" alt="Pikachu waving, in a GIF!" width="49%"></InlineImage>
<InlineImage src="post/welcome/gif.gif" alt="Pikachu waving, in a GIF!" width="49%"></InlineImage>
<InlineImage src="post/welcome/pokemon.png" alt="Pikachu waving!" width="49%"></InlineImage>

### Info boxes

The `<InfoBox>` component allows you to include quick notes in your blog posts.

```html
<info-box>
  <template #info-box>

  They look like this.

    </template>
</info-box>
```

<info-box>
  <template #info-box>

  They look like this.

  </template>
</info-box>

## Changing front matter

The front matter at the top of your Markdown file is what defines the elements of your blog post (e.g. `title` and `description`). Change these to change the important parts of your posts. The name of your blog post file (for this file, `welcome`) will be the 'slug' of your post (e.g. `my-website.com/welcome`).

## Making new posts

Honestly, just copy this post into a new markdown file and change the front matter and content to reflect your new needs. You'll also need to create a new image folder for your post. This will live in `static/post`.

For example, if I wanted to make a new post about how great dogs are, I would do the following:

1. Copy this file to a new Markdown file titled `dogs.md`
2. Change the front matter of the post to reflect the new post (e.g., set `title` to be "Dogs are cool.")
3. Write my new post
4. If I have any images, create a new folder `static/post/dogs` and add images accordingly
