var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var es = require('event-stream');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');

/**
 * OLhar a ultima linha
 */



//exemplo anterior
gulp.task('htmlmin', function () {
	return gulp.src('view/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/view'))
});

//exemplo anterior
gulp.task('cssmin', function () {
	return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.css', 'css/**/*.css'])
	.pipe(cleanCSS())
	.pipe(concat('styles.min.css'))
	.pipe(gulp.dest('dist/css'));
});

//exemplo anterior
gulp.task('uglify', function () {
	// es.merge = faz o merge das saidas dos sources
	return es.merge([
		gulp.src(['bower_components/angular/angular.min.js', 'bower_components/angular-route/angular-route.min.js', 'bower_components/angular-messages/angular-messages.min.js']),
		// faz o uglify soh nesses dois sources, concat e cria o scripts.js
		gulp.src(['lib/**/*.js', 'js/**/*.js']).pipe(concat('scripts.js')).pipe(uglify())
	])
	.pipe(concat('all.min.js'))
	.pipe(gulp.dest('dist/js'));
});


// exemplo anterior
gulp.task('jshint', function () {
	return gulp.src('js/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

// exemplo anterior
gulp.task('clean', function () {
	return gulp.src('dist/')
	.pipe(clean());
});


/**
 * Executa o clean, e depois tudo que estah entre colchetes.
 * O que estah entre colchetes roda de forma assincrona.
 * 
 * cd = callBack
 */
gulp.task('default', function (cb) {
	return runSequence('clean', ['jshint', 'uglify', 'htmlmin', 'cssmin'], cb)
});