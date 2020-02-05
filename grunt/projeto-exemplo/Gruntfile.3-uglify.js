module.exports = function (grunt) {
    grunt.initConfig({

        /* Minifica os arquivos js concatenados pelo concat */
        uglify: {
            scripts: {
                src: ['dist/js/scripts.js'],
                dest: 'dist/js/scripts.min.js'
            }
        },
        
        
        jshint: {
            dist: {
                src: ['js/**/*.js']
            }
        },

        concat: {
            scripts: {
                src: [
                    'js/**/*.js',
                    'lib/**/*.js'
                ],
                dest: 'dist/js/scripts.js'
            },

            libs: {
                src: [
                  'bower_components/angular/angular.min.js',
                  'bower_components/angular-route/angular-route.min.js',
                  'bower_components/angular-messages/angular-messages.min.js'
                ],
                dest: 'dist/js/libs.min.js'
            }
        }
    });

    // carrega os plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');

    
    /*
    grunt prod  // execute no terminal
    */
    grunt.registerTask('prod', ['jshint', 'concat:scripts', 'uglify', 'concat:libs']);
}