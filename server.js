var http = require('http');

http.createServer(function(request, response){
	console.log('Er was een request.');
	response.writeHead(200, {'content-type': 'text/json'});
	var json = JSON.stringify({
		tekst: "Dit is nog steeds JSON"
		});
	response.end(json);
}).listen(process.env.PORT || 3000);

console.log('De server luistert op port 80 of 3000 ofzo, kijk maar.');