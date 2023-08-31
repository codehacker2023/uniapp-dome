//导入 pinia
import {
	defineStore
} from 'pinia'
import {
	getHomeMutidata
} from '@/service/home.js'

export const useHomeStore = defineStore('home', {
	state: () => {
		return {
			banners: [],
			recommends: []
		}
	},
	actions: {
		async fetchHomeMutidataAction() {
			const {
				data: res
			} = await getHomeMutidata()
			this.banners = res.banner.list || []
			this.recommends = res.recommend.list || []
		}
	}
})