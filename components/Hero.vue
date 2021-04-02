<template>
  <section
    class="hero has-background-primary has-background-primary-gradient is-fullheight"
  >
    <div class="hero-body">
      <div>
        <div>
          <h2 class="subtitle heading is-size-5">Dogs, Cats, and Code</h2>
          <h1 class="title is-size-huge has-text-weight-bold">
            Hi, I'm
            <NuxtLink
              :to="{ path: '/about' }"
              class="has-text-weight-boldest link"
              >Connor Rothschild</NuxtLink
            >!
          </h1>
          <p class="is-size-5 content max-width-78ch">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p class="is-size-5 content max-width-78ch">
            Read some of my
            <NuxtLink :to="{ path: '/post' }" class="link py-1"
              >blog posts</NuxtLink
            >.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showAbout: false,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
h1,
h2,
p,
span,
a {
  &::selection {
    background: $secondary;
    color: $primary;
  }
}

a {
  color: $text;
}

.is-size-huge {
  font-size: 4rem;

  @media screen and (max-width: 860px) {
    font-size: 3rem;
  }
}
</style>
