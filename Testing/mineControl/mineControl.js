/*jshint esversion: 6, node: true */

var events   = require("events"),
    path     = require("path"),
    child_process = require('child_process'),
    colors = require('colors');

var minecraftProcess,
    minecraftPath = path.join(__dirname, '../..', 'spigot-1.8', 'spigot-1.8.jar');

// minecraftProcess = child_process.spawn('./launchServer.sh', ['-Xms1G', '-Xmx2G', '-jar', minecraftPath]);
minecraftProcess = child_process.spawn(__dirname + '/launchServer.sh', ['-Xms1G', '-Xmx2G', '-jar', minecraftPath]);

minecraftProcess.stdout.on('data', (data) => {
  console.log(data.toString().trim());
});

minecraftProcess.stderr.on('data', (data) => {
  console.log(data.toString().trim().underline.red);
});

minecraftProcess.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
