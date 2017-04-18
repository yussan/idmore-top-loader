module.exports = function(grunt) {
    grunt.initConfig({
        babel: {
             options: {
                sourceMap: false,
                presets: ['babel-preset-es2015', 'babili']
            },
            dist: {
                files: {
                    './dist/top-loader.js': './src/top-loader.es6'
                }
            }
        },
        watch: {
            scripts: {
                files: ['./src/**/*.js', './src/**/*.es6'],
                tasks: ['babel'],
                options: {
                    spawn: false,   
                },
            },
        }
    })

    // grunt.loadNpmTasks('grunt-contrib-uglify');    
    grunt.loadNpmTasks('grunt-babel');    
    grunt.loadNpmTasks('grunt-contrib-watch');    

    grunt.registerTask('default', ['babel', 'watch']);  
}