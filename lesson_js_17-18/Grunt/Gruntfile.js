module.exports = function (grunt) {

    grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: ['src/js/*.js'],
                dest: 'dist/js/main.js'
            }
        },

        uglify: {
            build: {
                src: 'dist/js/main.js',
                dest: 'dist/js/main.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.{png, jpg, gif}'],
                    dest: 'dist/'
                }]
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: 'src/sass',
                    src: ['*.scss'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        },
        
        watch: {
            options: {
                livereload: true
            },
           
            sass: {
                files: ['src/sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
            scripts: {
                files: ['src/js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');



    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'imagemin', 'watch']);
};