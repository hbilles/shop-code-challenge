export default function baseUrl() {
	const protocol = location.protocol,
		host = location.host,
		port = location.port ? `:${location.port}` : ''

	return `${protocol}//${host}/`
}
