<template>
  <div class="has-background-primary-off">
    <Nav color="has-background-primary" />
    <div class="fullscreen">
      <article class="section container">
        <div class="max-width-78ch">
          <h1 class="section-title is-flex is-align-items-center">
            <img src="~/assets/images/me.jpg" class="me" />
            <span style="margin-left: 1rem">About Me</span>
          </h1>
          <p>
            Hey, I'm Connor! I made this template. If you're reading this, you
            should probably be changing the content on this page. You can do
            that in <code>pages/about/index.vue</code>.
          </p>
          <p>
            Want to change the image above? (Hopefully!) Add your own in
            <code>assets/images</code>. You can replace mine and title yours
            <code>me.jpg</code> (or, rename it and change the file path above).
          </p>
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
        url: `${this.$config.baseURL}/about`,
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
          href: `${this.$config.baseURL}/about`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.me {
  max-width: 100px;
  border-radius: 50%;
}

p {
  font-size: 1.2rem;
}

p:not(:last-of-type) {
  margin-bottom: 1rem;
}
</style>
