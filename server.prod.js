var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 5000));

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '../dist/index.html'));
// });

app.use(express.static(__dirname + '/dist'));

app.listen(app.get('port'), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('We are on port ' + app.get('port') + '!');
    } 
});

