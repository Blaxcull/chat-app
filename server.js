import { WebSocketServer } from 'ws';
import { v4 } from 'uuid';

const wss = new WebSocketServer({ port: 6969});

wss.on('connection', function connection(ws) {

    const UUID = v4()
    console.log(UUID)



    ws.on('error', console.error);
    console.log('connected');

    ws.on('message', function message(data) {

        const parsedData = JSON.parse(data)

        console.log(parsedData.type)

        if (parsedData.type === 'message') {

            console.log('received: ', parsedData);


        }


    });

    ws.send('something');
});
