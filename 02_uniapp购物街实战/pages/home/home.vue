<template>
	<view class="home">
		<!-- 轮播图组件 -->
		<home-banner :banners="banners" @bannerItemClick="handleBannerItemClick"></home-banner>
		<!-- 推荐栏组件 -->
		<home-recommens :recommends="recommends" @itemClik="handleItemClick"></home-recommens>
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
	import HomeBanner from './cpns/home-banner.vue'
	import HomeRecommens from './cpns/home-recommends.vue'
	const homeStore = useHomeStore()
	const {
		banners,
		recommends
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

	function handleItemClick(link) {
		uni.navigateTo({
			url: '/pages/webview/webview?link=' + link
		})
	}
</script>

<style lang="scss">

</style>