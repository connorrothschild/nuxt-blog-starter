<template>
	<div class="main-body">
		<Nav color="has-background-primary-off" />
		<Hero />
		<Footer />
	</div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";

export default {
	computed: {
		// * Default meta tags for homepage
		// https://nuxtjs.org/docs/2.x/features/meta-tags-seo/
		head() {
			return {
				title: "Connor Rothschild",
				meta: getSiteMeta(),
			};
		},
	},
};
</script>

<style lang='scss' scoped></style>