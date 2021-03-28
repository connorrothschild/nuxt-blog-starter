<template>
	<div class="table-handler-container">
		<a :href="link" target="_blank" rel="noopener noreferrer">
			<img :src="imgSrc()" :alt="alt" />
		</a>
		<p class="is-size-7">
			<strong>Note:</strong> This table was created in a reactive environment
			and is usually interactive. Since I've moved sites, my new content
			rendering doesn't support HTML tables. Find the original table
			<a :href="link" target="_blank" rel="noopener noreferrer">here</a>.
		</p>
		<hr />
	</div>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
		},
	},
	methods: {
		imgSrc() {
			try {
				return require(`~/static/${this.src}`);
			} catch (error) {
				return null;
			}
		},
	},
};
</script>

<style scoped>
.table-handler-container {
	padding: 1rem 0;
}

/* img {
	max-width: 80%;
	margin: 0 auto;
} */
</style>

