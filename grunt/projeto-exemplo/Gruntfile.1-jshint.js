module.exports = function (grunt) {
    grunt.initConfig({
        /* grunt jshint - execute no terminal */
        jshint: {
            dist: {
                /* path do(s) arquivo(s) js para fazer a verificacao */
                src: ['js/**/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    
    /*
    grunt prod  // execute no terminal
    passo 1: jshint
    */
    grunt.registerTask('prod', ['jshint']);
}