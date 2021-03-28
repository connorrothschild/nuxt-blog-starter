<template>
	<div>
		<Nav color="is-primary" />
		<div class="fullscreen has-background-light">
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
			// .only(["title", "description", "img", "date", "slug"])
			.sortBy("date", "desc")
			.fetch();

		return {
			posts,
		};
	},
};
</script>

<style>
.fullscreen {
	min-height: 100vh;
}
</style>
