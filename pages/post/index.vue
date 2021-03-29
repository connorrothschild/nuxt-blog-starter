<template>
	<div class="has-background-primary-off">
		<Nav color="is-primary" />
		<div class="fullscreen">
			<article class="section max-width-78ch">
				<!-- TITLE -->
				<h1 class="section-title">Blog Posts</h1>
				<!-- CONTAINER FOR PROJECTS -->
				<div class="columns is-multiline">
					<div v-for="(post, index) in posts" :key="index" class="column is-4">
						<BlogCard v-bind="post" background="has-background-white" />
					</div>
				</div>
			</article>
		</div>
		<Footer />
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const posts = await $content("posts", params)
			.sortBy("date", "desc")
			.fetch();

		return {
			posts,
		};
	},
};
</script>

<style scoped>
p {
	font-size: 1rem !important;
}
</style>
