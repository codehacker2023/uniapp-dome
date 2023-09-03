<template>
	<web-view :src="link"></web-view>
</template>

<script setup>
	const props = defineProps({
		link: {
			type: String,
			default: ""
		}
	})
</script>

<style lang="scss">

</style>