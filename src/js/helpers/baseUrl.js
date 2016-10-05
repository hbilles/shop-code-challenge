export default function baseUrl() {
	if (location.hostname == 'localhost' || location.hostname == 'shop-code-challenge.dev') {
		return 'http://shop-code-challenge.dev/'
	} else {
		return location.protocol + '//' + location.host + '/'
	}
}
