<template>
  <nav
    class="navbar is-fixed-top"
    :class="color"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" to="/">
        <span class="has-text-weight-boldest">Connor Rothschild</span>
      </NuxtLink>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarID"
        @click="isVisible = !isVisible"
        :class="{ 'is-active': isVisible }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarID" class="navbar-menu" :class="{ 'is-active': isVisible }">
      <div class="navbar-end" :class="color">
        <NuxtLink class="navbar-item" :to="{ path: '/about' }">
          About
        </NuxtLink>
        <NuxtLink class="navbar-item" :to="{ path: '/post' }"> Blog </NuxtLink>
        <!-- Have a resume hosted online somewhere? Uncomment below and add your resume link to the href! -->
        <!-- Or, change the text of 'Resume' to anything else you want to link to! (Twitter, GitHub, etc): -->
        <!-- <a
          class="navbar-item"
          href="https://docs.google.com/document/d/1qBH-wNMe2nv9Xa4uzHZ5wBevohwKuB3h2i9M2yk4POk/edit?usp=sharing"
          rel="noopener noreferrer"
          target="_blank"
        >
          Resume
        </a> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    color: String,
  },
  data() {
    return {
      isVisible: false,
    };
  },
};
</script>

<style scoped lang="scss">
.navbar-end {
  .navbar-item {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.8rem;
  }
}

.navbar-start {
  .navbar-item {
    font-size: 1.2rem;
  }
}

.navbar.has-background-primary * {
  color: $text !important;
}

.has-background-primary {
  background-color: $primary;
  .navbar-item {
    &:hover,
    &:focus,
    .is-active {
      background-color: $primary-off;
    }
  }
}

.has-background-primary-off {
  background-color: $primary-off;
  .navbar-item {
    &:hover,
    &:focus,
    .is-active {
      background-color: $primary;
    }
  }
}

.navbar-menu {
  background: transparent;
}
</style>
