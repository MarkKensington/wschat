const WebSocket = require ('ws');
const wss = new WebSocket.Server({ port: 8080 });

console.log("WebSocket Server running on port 8080");

wss.on('connection', function connection(ws) {
    console.log("Connected");
    ws.on('message', function incoming(message) {
        console.log('Incomming message');
        wss.clients.forEach(function each(client) {
            client.send(message);
        });
    });
});