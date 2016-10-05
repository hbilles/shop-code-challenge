import gulp from 'gulp'
import sequence from 'gulp-sequence'

// Default Task
gulp.task('default', sequence(
	'clean',
	'styles',
	'scripts',
	'views'
))
