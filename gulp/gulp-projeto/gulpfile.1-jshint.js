var gulp = require('gulp');
var jshint = require('gulp-jshint');

/**
 * src = onde estao os arquivos que quero ler.
 * O return faz a task se comportar de forma assincrona.
 * Se nao usar return, vira sincrono.
 * 
 * - le o arquivo.
 * - passa para o jsHint
 * - renderiza o report
 * 
 * Comandos possiveis para executar a task
 * gulp
 * gulp jshint
 * gulp default
 */
gulp.task('jshint', function () {
	return gulp.src('js/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('default', ['jshint']);