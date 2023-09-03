<template>
	<view class="home">
		<home-banner :banners="banners" @bannerItemClick="handleBannerItemClick"></home-banner>
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
	import HomeBanner from './cpns/home_banner.vue'
	const homeStore = useHomeStore()
	const {
		banners
	} = storeToRefs(homeStore)

	onLoad(() => {
		homeStore.fetchHomeMutidataAction()
	})

	// 轮播图的点击事件
	function handleBannerItemClick(link) {
		uni.navigateTo({
			url: '/pages/webview/webview?link=' + link
		})
	}
</script>

<style lang="scss">

</style>