module.exports = function (grunt) {
    grunt.initConfig({

        /*
        grunt cssmin  - executa apenas essa task
        Coloca o css do boostrap e o css da aplicacao em
        um arquivo unico chamado styeles.min.css
         */
        cssmin: {
            all: {
                src: [
                  'bower_components/bootstrap/dist/css/bootstrap.min.css',
                  'css/**/*.css'
                ],
                dest: 'dist/css/styles.min.css'
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
        },

        uglify: {
            scripts: {
                src: ['dist/js/scripts.js'],
                dest: 'dist/js/scripts.min.js'
            }
        }
    });

    // carrega os plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    

    
    /*
    grunt prod  // execute no terminal
    */
    grunt.registerTask('prod', ['jshint', 'concat:scripts', 'uglify', 'concat:libs', 'cssmin']);
}