'use strict';
let fs = require('fs');
let classReadLine = require('readline');
let rsReadStream = fs.createReadStream('./log.txt'); //todo: allow loop thru directory structure by list of allowed file extensions
let wsWriteStream = fs.createWriteStream('./todo.csv');


let rl = classReadLine.createInterface({
    input: rsReadStream
});

rl.on('line', (sLine) => {
    if (sLine.substr(0,5).toLowerCase() === 'todo:') {
        wsWriteStream.write(sLine);
        wsWriteStream.write('\n');
    }
});
