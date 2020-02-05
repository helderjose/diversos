var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');

/**
 * Esse exemplo so esta limpando a pasta dist e criando de novo.
 */


/**
 * Limpa os arquivos deixados pelo build anterior.
 */
gulp.task('clean', function () {
	return gulp.src('dist/')
	.pipe(clean());
});


/**
 * obs: Aqui uglify eh o nome da task, e nao 
 * o plugin.
 * 
 * Executa o clean antes do uglify
 * 
 * Comandos:
 * gulp
 * gulp clean
 */
gulp.task('uglify', ['clean'], function () {
	return gulp.src('js/**/*.js')
	.pipe(gulp.dest('dist/js'));
});


// exemplo anterior
gulp.task('jshint', function () {
	return gulp.src('js/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});




gulp.task('default', ['jshint', 'uglify']);