---
title: "My First Blog Post"
description: Description goes here.
img: my-first-post/header.png
img_alt: 'Blog post header image'
date: "2020-07-12"
---

Welcome to my first blog post!

And here I am from the site itself

Whats up from live editor

This post is written in [Markdown](https://daringfireball.net/projects/markdown/). Read the [syntax guide](https://www.markdownguide.org/basic-syntax/) to get started using Markdown easily.

# This is a level 1 header

You can write text here, like in a normal blog post. To use an image, write `<InlineImage>` as you see below:

`<InlineImage src="post/my-first-post/photo.jpg" alt="Put alternative text here."></InlineImage>`

<InlineImage src="post/my-first-post/photo.jpg" alt="Put alternative text here." width="48%"></InlineImage>
<InlineImage src="post/my-first-post/gif.gif" alt="Put alternative text here." width="48%"></InlineImage>

(You can also do GIFs):

`<InlineImage src="post/my-first-post/gif.gif" alt="Put alternative text here."></InlineImage>`

<InlineImage src="post/my-first-post/gif.gif" alt="Put alternative text here."></InlineImage>

The images (`.png`, `.jpg`, `.gif`) that you reference here should live in `static/post/{post directory}`.

## Changing frontmatter

The front matter at the top of your Markdown file is what defines the elements of your blog post (e.g. `title` and `description`). Change these to change the important parts of your posts. The name of your blog post file (for this file, `my-first-post`) will be the 'slug' of your post (e.g. `my-website.com/my-first-post`).

## Making new posts

Honestly, just copy this post into a new markdown file (`my-second-post.md`) and change the front matter and content to reflect your new needs. You'll also need to create a new image folder for your post. This will live in `static/post`.

For example, if I wanted to make a new post about how great dogs are, I would do the following:

1. Copy this file to a new Markdown file titled `dogs.md`
2. Change the front matter of the post to reflect the new post (e.g., set `title` to be "Dogs are cool.")
3. Write my new post
4. If I have any images, create a new folder `static/post/dogs` and add images accordingly