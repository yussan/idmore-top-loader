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
            babel: {
                files: '*.es6',
                tasks: ['babel']
            }
        }
    })

    // grunt.loadNpmTasks('grunt-contrib-uglify');    
    grunt.loadNpmTasks('grunt-babel');    

    grunt.registerTask('default', ['babel']);  
}