<template>
  <div
    v-on:mouseout="
      x = 0;
      y = 0;
    "
    v-on:mouseover="
      x = 0;
      y = 10;
    "
    v-bind:style="`transition: 1s transform ease; transform: translateX(${x}px) translateY(-${y}px);`"
    style="height: 100%"
  >
    <!-- IF USER PROVIDES "to", internal link -->
    <NuxtLink v-if="to" :to="to" prefetch>
      <slot></slot>
    </NuxtLink>
    <!-- IF USER PROVIDES "href", external link -->
    <a v-if="href" :href="href" target="_blank" rel="noopener noreferrer">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  mounted() {},
  props: ["to", "href"],
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
};
</script>

<style lang="scss"></style>
