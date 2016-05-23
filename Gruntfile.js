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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    // run server
    grunt.registerTask('start',
        'connect:server'
    );
};