import path from 'path'
import yargs from 'yargs'
import errorHandler from './lib/errorHandler'

const paths = {
	url: 'http://localhost:3000',
	src: './src',
	dist: './app/public/assets',
	views: './app/views',
	vendor: './node_modules',
}

export default {
	mode: yargs.argv.production ? 'production' : 'development',

	paths,

	output: {
		size: {
			gzip: true,
			showFiles: true,
		},
	},

	browserSync: {
		proxy: paths.url,
	},

	plumber: {
		errorHandler,
	},

	tasks: {
		styles: {
			src: path.join(paths.src, 'scss'),
			dist: path.join(paths.dist, 'css'),
			extensions: ['css', 'scss', 'sass'],
			dependencies: [],
			autoprefixer: {
				browsers: [
					'last 2 versions',
					'ie >= 10',
					'android >= 4',
				],
			},
		},

		scripts: {
			src: path.join(paths.src, 'js'),
			dist: path.join(paths.dist, 'js'),
			files: ['app.js'],
			extensions: ['js', 'vue', null],
		},

		views: {
			src: path.join(paths.src, 'views'),
			dist: paths.views,
			extensions: ['html', 'njk'],
		},
	},
}
