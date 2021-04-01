<template>
  <div
    v-if="clickable"
    class="img"
    style="display: inline-block"
    :style="{ width: width }"
  >
    <picture>
      <source
        v-img
        :src="imgSrcFallback()"
        :srcSet="imgSrc()"
        :alt="alt"
        type="image/webp"
      />
      <source
        v-img
        :src="imgSrcFallback()"
        :srcSet="imgSrcFallback()"
        :alt="alt"
        type="image/png"
      />
      <img v-img :src="imgSrcFallback()" :alt="alt" />
    </picture>
  </div>
  <div
    v-else
    class="img"
    style="display: inline-block"
    :style="{ width: width }"
  >
    <picture>
      <source :srcSet="imgSrc()" :alt="alt" type="image/webp" />
      <source :srcSet="imgSrcFallback()" :alt="alt" type="image/png" />
      <img :src="imgSrcFallback()" :alt="alt" />
    </picture>
  </div>
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
    width: {
      type: String,
      required: false,
      default: "100%",
    },
    clickable: {
      type: Boolean,
      required: false,
      default: true,
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
