<template>
  <span>{{ readingTime }} minute read</span>
</template>

<script>
export default {
  name: "readingTime",
  props: ["content"],
  computed: {
    readingTime() {
      let minutes = 0;
      const contentString = JSON.stringify(this.content);
      const words = contentString.split(" ").length;
      const wordsPerMinute = 200;
      minutes = Math.ceil(words / wordsPerMinute);
      return minutes;
    },
  },
};
</script>
