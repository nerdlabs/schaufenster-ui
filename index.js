require('babel-register');
var server = require('./source/server').default;
server().then(function (app) {
	var listener = app.listen(3000, function () {
		var address = listener.address().address;
		var port = listener.address().port;
		console.log('App listening on: ' + address + port);
	});
});
