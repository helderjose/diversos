module.exports = function (grunt) {
    grunt.initConfig({

        htmlmin: {
            options: {
              removeComments: true,
              collapseWhitespace: true
            },
            /* copia os arquivos de view para dist/view */
            views: {
                expand: true,
                cwd: 'view/', /* pasta */
                src: ['*.html'], /* tipo do arquivo */
                dest: 'dist/view' /* destino */
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
            },

            /*
            coloca os arquivos gerados nas outras tasks em um
            arquvo unico.
            */
            all: {
                src: ['dist/js/libs.min.js', 'dist/js/scripts.min.js'],
                dest: 'dist/js/all.min.js'
            }
        },

        uglify: {
            scripts: {
                src: ['dist/js/scripts.js'],
                dest: 'dist/js/scripts.min.js'
            }
        },

        cssmin: {
            all: {
                src: [
                  'bower_components/bootstrap/dist/css/bootstrap.min.css',
                  'css/**/*.css'
                ],
                dest: 'dist/css/styles.min.css'
            }
        }
    });

    // carrega os plugins
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    
    /*
    grunt prod  // execute no terminal
    */
    grunt.registerTask('prod', ['jshint', 'concat:scripts',
        'uglify', 'concat:libs', 'concat:all', 'cssmin', 'htmlmin']);
}