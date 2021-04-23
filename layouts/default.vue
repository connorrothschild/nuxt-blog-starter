<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";
export default {
  computed: {
    meta() {
      return getSiteMeta();
    },
  },
  head() {
    return {
      title: "Connor Rothschild",
      meta: [...this.meta],
    };
  },
};
</script>

<style lang="scss">
// GLOBAL STYLES
html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-padding-top: 3.3rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

*:focus {
  outline: none;
}

*:focus-visible {
  outline: 1px dashed #cecece;
}

.has-text-secondary {
  color: $secondary !important;
}

.has-background-primary-off {
  background: $primary-off !important;
}

.has-background-primary-gradient {
  @extend .has-background-primary;
  background-image: linear-gradient(0deg, $primary-off 0%, $primary 100%);
}

.has-background-primary-gradient-rev {
  @extend .has-background-primary;
  background-image: linear-gradient(0deg, $primary 0%, $primary-off 100%);
}

.has-underline-secondary {
  border-bottom: 2px solid $secondary;
}

.object-fit-cover {
  object-fit: cover;
}

.fullscreen {
  min-height: 100vh;
}

.max-width-78ch {
  max-width: 78ch !important;
  margin: 0 auto;
}

.card-content.has-text-black {
  p {
    color: black !important;
  }
}

.card.card-fullheight {
  height: 100%;
}

.has-text-weight-boldest {
  font-weight: 800 !important;
}

.has-border-bottom-grey {
  border-bottom: 1px solid #cecece;
}

// Page transitions
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 250ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.link {
  background-image: linear-gradient(to top, $secondary 50%, transparent 50%);
  background-size: 100% 200%;
  background-position: top;
  transition: background-position 250ms ease-in-out, color 250ms ease-in-out;
  // color: white !important;
  border-radius: 2px;
  padding: 0 2px;

  border-bottom: 2px solid $secondary;

  &:hover {
    background-position: bottom;
    cursor: pointer;
    color: $primary !important;
  }
}

.section-title {
  font-size: 3.5rem !important;
  font-weight: 800 !important;
  margin: 5rem 0 3rem 0;
  // border-bottom: 2px solid #dadada80;
  // padding-bottom: 0.5rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem !important;
  }
}

.has-background-primary-semitransparent {
  background: #cecece10 !important;

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: white !important;
  }
}

hr {
  background-color: $primary-invert !important;
  opacity: 0.3;
  height: 1px !important;
}

// By default, v-img places fullscreen image *behind header*
// Here, push the image down 50px (height of header) and resize accordingly
.content-v-img img {
  top: 50px !important;
  max-height: calc(100% - 50px) !important;
}
</style>
