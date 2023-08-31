const TIME_OUT = 3000;
const BASE_URL = "http://123.207.32.32:7888/api/hy66";
class HYRequest {
	request(url, method, data) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: BASE_URL + url,
				method: method || "GET",
				timeout: TIME_OUT,
				data: data,
				success(res) {
					resolve(res.data)
				},
				fail(err) {
					reject(err)
				}
			})
		})
	}

	get(url, data) {
		return this.request(url, "GET", data)
	}

	post(url, data) {
		return this.request(url, "POST", data)
	}
}

export default new HYRequest()