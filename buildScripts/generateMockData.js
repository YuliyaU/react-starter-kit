var jsf = require('json-schema-faker');
var schema = require('./mockDataSchema');
var fs = require('fs');

const json = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', json, function(err) {
    if (err) {
        return console.log(err);
    } else {
        console.log('Mock data generated!')
    }
});