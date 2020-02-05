var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');

/**
 * Esse exemplo faz o clean e o concat de arquivos.
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
gulp.task('uglify', ['clean'], function () {
	return gulp.src(['lib/**/*.js', 'js/**/*.js'])
	.pipe(concat('scripts.js'))
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