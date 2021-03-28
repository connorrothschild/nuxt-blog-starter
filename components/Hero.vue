<template>
	<section class="hero is-primary is-fullheight">
		<div class="hero-body">
			<div class="is-flex responsive-flex prevent-shifting">
				<div class="half-flex responsive-margin">
					<div>
						<h2 class="subtitle heading is-size-5">
							Entrepreneurship, data science, design.
						</h2>
						<h1 class="title is-size-huge has-text-weight-bold has-text-black">
							Hi, I'm
							<NuxtLink :to="{ path: '/about' }" class="has-text-weight-boldest link"
								>Connor</NuxtLink
							>!
						</h1>
						<p class='is-size-5 content max-width-78ch'>
							I'm a senior at Rice University, interested in entrepreneurship and data science. 
						</p>
						<p class='is-size-5 content max-width-78ch'>
							Read some of my
							<NuxtLink
								:to="{ path: '/post' }"
								class="link py-1"
							>blog posts</NuxtLink>.
							</p>
						</div>
					</div>
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

<style lang='scss' scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.33s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.me {
	height: 300px;
	width: 300px;
	border-radius: 0.5rem;
	transition: transform 1s ease;
	
	&:hover {
		transform: translateY(6px) translateX(2px);
		cursor: pointer;
	}
}

.responsive-margin {
	@media screen and (min-width: 860px) {
		margin-right: 1rem;
		margin-left: 1rem;
	}

	@media screen and (max-width: 860px) {
		margin-bottom: 3rem;
	}
}

@media screen and (max-width: 860px) {
	.prevent-jitter {
		min-height: 200px;
	}
}

.half-flex {
	flex: 1 1 0px;
	width: 100%;
}

.responsive-flex {
	flex-direction: row;
	align-items: center;

	@media screen and (max-width: 860px) {
		flex-direction: column;
		align-items: flex-start;
	}
}

.prevent-shifting {
	width: 100%;
}

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

.is-size-huge {
	font-size: 4rem;

	@media screen and (max-width: 860px) {
		font-size: 3rem;
	}
}
</style>
