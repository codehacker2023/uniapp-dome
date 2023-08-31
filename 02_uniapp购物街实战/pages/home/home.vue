<template>
	<view>
		{{ banners }}
	</view>
</template>

<script setup>
	import {
		onLoad
	} from "@dcloudio/uni-app";
	import {
		storeToRefs
	} from 'pinia'
	import {
		useHomeStore
	} from '@/store/home.js'

	const homeStore = useHomeStore()
	const {
		banners
	} = storeToRefs(homeStore)

	onLoad(() => {
		homeStore.fetchHomeMutidataAction()
	})
</script>

<style lang="scss"></style>