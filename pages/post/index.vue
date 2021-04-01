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
export default {
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
