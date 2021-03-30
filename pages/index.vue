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
		meta() {
			return getSiteMeta();
		},
	},
	head() {
		return {
			meta: [...this.meta],
		};
	},
};
</script>

<style lang='scss' scoped></style>