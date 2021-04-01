<template>
  <div class="columns">
    <div class="column">
      <HoverableCard :to="`/${type}/${next.slug}`" v-if="next">
        <article class="card card-fullheight has-background-primary">
          <div class="card-image" v-if="next.img">
            <figure class="image is-2by1">
              <WebP
                :src="`${type}/${next.img}`"
                :alt="next.img_alt"
                type="post"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content is-flex is-justify-content-space-evenly">
              <div class="has-text-centered">
                <p class="heading title is-size-6">Next {{ type }}</p>
                <p class="has-text-weight-light title is-size-6">
                  {{ next.title }}
                </p>
              </div>
            </div>
          </div>
        </article>
      </HoverableCard>
    </div>
    <!-- <span v-else>&nbsp;</span> -->
    <div class="column">
      <HoverableCard :to="`/${type}/${prev.slug}`" v-if="prev">
        <article class="card card-fullheight has-background-primary">
          <div class="card-image" v-if="prev.img">
            <figure class="image is-2by1">
              <WebP
                :src="`${type}/${prev.img}`"
                :alt="prev.img_alt"
                type="post"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content is-flex is-justify-content-space-evenly">
              <div class="has-text-centered">
                <p class="heading title is-size-6">Previous {{ type }}</p>
                <p class="has-text-weight-light title is-size-6">
                  {{ prev.title }}
                </p>
              </div>
            </div>
          </div>
        </article>
      </HoverableCard>
    </div>
    <!-- <span v-else>&nbsp;</span> -->
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
    type: {
      type: String,
      default: () => null,
    },
  },
  mounted() {},
};
</script>
