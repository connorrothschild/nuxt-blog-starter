<template>
  <HoverableCard :to="{ path: `/post/${slug}` }">
    <template v-slot:default>
      <div class="card card-fullheight" :class="background">
        <div class="card-image">
          <figure class="image is-2by1">
            <WebP :src="`post/${img}`" :alt="img_alt" type="post" />
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-size-4">{{ title }}</p>
          <p class="subtitle heading is-size-6 has-text-weight-light">
            {{ formatDate(date) }}
          </p>
          <p>{{ description }}</p>
        </div>
      </div>
    </template>
  </HoverableCard>
</template>

<script>
import HoverableCard from "./HoverableCard.vue";
import WebP from "./WebP.vue";

export default {
  components: { HoverableCard, WebP },
  props: [
    "title",
    "description",
    "date",
    "img",
    "img_alt",
    "slug",
    "path",
    "background",
  ],
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style scoped lang="scss"></style>
