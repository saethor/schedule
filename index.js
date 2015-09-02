var express = require('express');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + 'public');

app.get('/', function(request, response) {
    response.render('index');
}

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
})