import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 6969});

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);
    console.log('connected');

  ws.on('message', function message(data) {
    console.log('received: ', JSON.parse(data));
  });

  ws.send('something');
});
