// set log level
runtime.require('logger').level('debug');

// create a system
var system = runtime.system('example');

// add your code in the main method of the system
system.on('main', function main() {
    console.log('Hello world !');
});

// run your system
system.main();