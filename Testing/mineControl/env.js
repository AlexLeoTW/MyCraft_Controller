/*jshint esversion: 6, node: true */

var exec = require('child_process').exec;

function getJava() {
    return new Promise((resolve, reject) => {
        exec('which java', (error, stdout, stderr) => {
          if (error) { reject(error); }
          resolve(stdout.trim());
        });
    }).then((path) => {
        var info = {
            //path: '/usr/bin/java',
            //version: '1.8.0_91',
            //vm: 'OpenJDK 64-Bit Server VM (build 25.91-b14, mixed mode)'
        };
        info.path = path;

        return new Promise((resolve, reject) => {
            exec('java -version', (error, stdout, stderr) => {
                if (error) { throw error; }
                var lines = stderr.split('\n');
                info.version = lines.shift().split('"')[1];
                info.vm = lines[1];
                resolve(info);
            });
        });
    });
}

module.exports.getJava = getJava;
