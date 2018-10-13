const fs = require('fs');
const husband = require('./husband').someHusband;


fs.appendFile('logFile.txt', husband.getSalary(), function(error) {
                if(error) throw error;         
});
fs.appendFile('logFile.txt', husband.getFriends(), function(error) {
                if(error) throw error;
});
fs.appendFile('logFile.txt', husband.getSoberInf(), function(error) {
                if(error) throw error;
});

let fileData = fs.readFileSync('logFile.txt', 'utf8');

console.log('File writing completed. File contents:');
console.log(fileData);