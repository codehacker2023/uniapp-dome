<template>
	<view class="home">
		<!-- 轮播图组件 -->
		<!-- <home-banner :banners="banners" @bannerItemClick="handleBannerItemClick"></home-banner> -->
		<!-- 推荐栏组件 -->
		<!-- <home-recommens :recommends="recommends" @itemClik="handleItemClick"></home-recommens> -->
		<!-- <view class="popularTitle">本周流行</view> -->
		<!-- <home-recommens :recommends="recommends" @itemClik="handleItemClick"></home-recommens> -->
		<!-- <home-recommens :recommends="recommends" @itemClik="handleItemClick"></home-recommens> -->
		<!-- 标签 -->
		<!-- 选项卡组件 -->
		<tab-control :titles="['流行', '新款', '精选']" @tabItemClick="handleTabItemClick"></tab-control>
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

function handleTabItemClick(index) {
	console.log(index)
}

</script>

<style lang="scss">
.home {
	.popularTitle {
		display: flex;
		justify-content: center;
		width: 100%;
		font-size: 36rpx;
	}
}
</style>