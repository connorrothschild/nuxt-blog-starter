<template>
  <figure class="image is-16by9">
    <iframe
      class="has-ratio"
      width="640"
      height="360"
      :src="url"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </figure>
</template>

<script>
export default {
  props: ["url"],
};
</script>

<style scoped></style>
