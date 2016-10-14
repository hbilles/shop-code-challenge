const path = require('path')
const dbPath = path.resolve('./database')

module.exports = env => {
	switch(env) {
		case 'development':
			return {
				'host': 'localhost',
				'dialect': 'sqlite',
				'pool': {
					'max': 5,
					'min': 0,
					'idle': 10000
				},
				'storage': path.join(dbPath, 'development.sqlite'),
				'sync': true
			}

		case 'production':
			return {
				'host': 'localhost',
				'dialect': 'sqlite',
				'pool': {
					'max': 5,
					'min': 0,
					'idle': 10000
				},
				'storage': path.join(dbPath, 'production.sqlite'),
				'sync': true
			}
	}
}