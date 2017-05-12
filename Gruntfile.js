module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
           dist: {
            options: {
               transform: [
                  ["babelify", {
                      "presets": ["es2015"]
                  }]
               ]
            },
            files: {
               "./dist/top-loader.js": ["./src/js/top-loader.js"]
            }
         } 
        },
        watch: {
            scripts: {
                files: ['./src/**/*.js'],
                tasks: ['browserify'],
                options: {
                    spawn: false,   
                },
            },
        }
    })

    grunt.loadNpmTasks('grunt-contrib-watch');    
    grunt.loadNpmTasks('grunt-browserify');    

    grunt.registerTask('default', ['browserify', 'watch']);  
}