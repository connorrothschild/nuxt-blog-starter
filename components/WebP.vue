<template>
  <!-- https://marquez.co/docs/nuxt-optimized-images/usage -->
  <picture>
    <!-- If webp is accessible prefer -->
    <source
      :srcSet="imgSrc()"
      :alt="alt"
      type="image/webp"
      class="object-fit-cover"
    />
    <!-- If not, optimized PNG -->
    <source
      :srcSet="imgSrcFallback()"
      :alt="alt"
      type="image/png"
      class="object-fit-cover"
    />
    <!-- If not, regular image -->
    <img
      :src="imgSrcFallback()"
      :alt="alt"
      class="object-fit-cover"
      loading="lazy"
    />
  </picture>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/static/${this.src}?webp`);
      } catch (error) {
        return null;
      }
    },
    imgSrcFallback() {
      try {
        return require(`~/static/${this.src}`);
      } catch (error) {
        return null;
      }
    },
  },
};
</script>

<style scoped></style>
