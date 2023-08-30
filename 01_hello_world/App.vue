<script>
	import checkUpdate from '@/uni_modules/uni-upgrade-center-app/utils/check-update.js'

	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			checkUpdate()
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>