require('babel-register');
var server = require('./source/server').default;
var app = server();
var listener = app.listen(3000, () => {
	var address = listener.address().address;
	var port = listener.address().port;
	console.log('App listening on: ' + address + port);
});
