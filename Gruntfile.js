module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    index: 'index.html',
                    keepalive: true,
                    port: 9001,
                    base: 'web'
                }
            }
        },
        copy: {
            systemruntime: {
                src: 'bower_components/system-runtime/dist/system-runtime.min.js',
                dest: 'web/lib/system-runtime.min.js'
            }
        }
    });

    // register tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // run server
    grunt.registerTask('start', [
        'copy:systemruntime',
        'connect:server'
    ]);
};