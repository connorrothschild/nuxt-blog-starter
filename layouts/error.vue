<template>
  <div>
    <div class="error-page">
      <div class="error-body" v-if="error.statusCode === 404">
        <h1 class="title">Hey there! This page doesn't exist.</h1>
        <p class="has-text-dark">Don't worry, this is my problem, not yours.</p>
        <p class="is-size-5 has-text-dark has-text-weight-light">
          While you're here, why don't you check out the rest of my site?
        </p>
        <hr />
        <NuxtLink to="/" class="has-text-black">👈 Back to Home</NuxtLink>
      </div>
      <div class="error-body" v-else>
        <h1 class="title">Hey there! An error occurred.</h1>
        <NuxtLink to="/" class="has-text-black">👈 Back to Home</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>

<style scoped lang="scss">
.error-page {
  height: 100vh;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  place-content: center;

  background-color: $primary !important;
  color: white !important;

  .error-body {
    max-width: 968px;
    margin: 0 auto;
    padding: auto 1rem;
    display: flex;
    flex-direction: column;

    a {
      color: white;
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
}
</style>
