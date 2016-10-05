import config from '../config'

import browserSync from 'browser-sync'
import cached from 'gulp-cached'
import gulpif from 'gulp-if'
import fs from 'fs'
import gulp from 'gulp'
import modify from 'gulp-modify'
import path from 'path'


const paths = {
	src: path.join(config.tasks.views.src, `/**/*.{${config.tasks.views.extensions}}`),
	dist: config.tasks.views.dist,
	manifest: path.join(config.paths.src, 'rev-manifest.json'),
}

// Copy web html to dist
gulp.task('views', () => {
	let manifest = {}
	try {
		manifest = JSON.parse(fs.readFileSync(paths.manifest, 'utf8'))
	} catch (e) {}

	gulp.src(paths.src)
		.pipe(cached('views'))
		.pipe(gulpif(config.mode === 'production', modify({
			fileModifier: (file, contents) => {
				let view = contents
				Object.keys(manifest).forEach((originalFile) => {
					const newFile = manifest[originalFile]
					view = view.replace(originalFile, newFile)
				})
				return view
			},
		})))
		.pipe(gulp.dest(paths.dist))
})

gulp.task('views-watch', ['views'], () => {
	return browserSync.reload()
})
