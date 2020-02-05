module.exports = function (grunt) {
    grunt.initConfig({

        /*
        grunt concat - executa apenas essa task.
        Coloca todo o js em um unico arquivo.
        */
        concat: {
            /* Concatena os script que fizemos no projeto */
            scripts: {
                src: [
                    'js/**/*.js',
                    'lib/**/*.js'
                ],
                dest: 'dist/js/scripts.js'
            },

            /*
            Concatenando as libs, olhe no index.html, sao as libs
            que usamos la.
            */
            libs: {
                src: [
                  'bower_components/angular/angular.min.js',
                  'bower_components/angular-route/angular-route.min.js',
                  'bower_components/angular-messages/angular-messages.min.js'
                ],
                dest: 'dist/js/libs.min.js'
            }
        },
        
        jshint: {
            dist: {
                src: ['js/**/*.js']
            }
        }
    });

    // carrega os plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    

    
    /*
    grunt prod  // execute no terminal
    passo 1: jshint
    */
    grunt.registerTask('prod', ['jshint', 'concat:scripts', 'concat:libs']);
}