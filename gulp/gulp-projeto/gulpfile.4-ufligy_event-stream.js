var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var es = require('event-stream');

/**
 * Esse exemplo faz o uglify, concat e es (event-stream)
 */



/**
 * Executa o clean antes do uglify
 * Executa o concat e cria o arquivo scripts.js
 * Cria a pasta dist/js e grava scripts.js
 * 
 * Comandos:
 * gulp
 * gulp clean
 */
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




gulp.task('default', ['jshint', 'uglify']);