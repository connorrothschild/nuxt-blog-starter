<template>
	<div class="has-background-light p-4 mb-4 info-box">
		<!-- <img src="~/assets/icons/exclamation.png" alt="Note" /> -->
		<div><slot name="info-box"></slot></div>
	</div>
</template>

<style scoped>
img {
	max-width: 30px;
	max-height: 30px;
	margin-right: 1em;
}
.info-box {
	display: flex;
	place-items: center;
	border-radius: 10px;
	font-weight: normal;
	box-shadow: 2px 2px 1px 1px #ccc;
}
</style>