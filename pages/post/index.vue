<template>
  <div class="has-background-primary-off">
    <Nav color="has-background-primary" />
    <div class="fullscreen">
      <article class="section max-width-78ch">
        <!-- TITLE -->
        <h1 class="section-title">Blog Posts</h1>
        <!-- CONTAINER FOR PROJECTS -->
        <div class="columns is-multiline">
          <div v-for="(post, index) in posts" :key="index" class="column is-4">
            <BlogCard v-bind="post" background="has-background-primary" />
          </div>
        </div>
      </article>
    </div>
    <Footer />
  </div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";
import { TweenMax, Power3 } from "gsap";

export default {
  transition: {
    mode: "out-in",
    css: false,
    enter() {
      TweenMax.fromTo(
        ".section-title",
        { x: "10%" },
        { x: "0%", duration: 0.1 }
      );
      TweenMax.fromTo(
        ".columns",
        { x: "10%", autoAlpha: 0 },
        {
          x: "0%",
          autoAlpha: 1,
          delay: 0.25,
          duration: 0.5,
          ease: Power3.easeOut,
        }
      );
    },
  },
  computed: {
    meta() {
      const metaData = {
        url: `${this.$config.baseURL}/post`,
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: "Posts | Connor Rothschild",
      meta: [...this.meta],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${this.$config.baseURL}/post`,
        },
      ],
    };
  },
  async asyncData({ $content, params }) {
    const posts = await $content("posts", params)
      .sortBy("date", "desc")
      .fetch();

    return {
      posts,
    };
  },
};
</script>

<style scoped>
p {
  font-size: 1rem !important;
}
</style>
