const ws = new WebSocket('ws://localhost:6969');

ws.onopen = () => {
    console.log('Connection opened!');
}


ws.onmessage = ({ data }) =>{ 
    console.log(data) 
    ws.send(JSON.stringify('hello'))

}




ws.onerror = function(error) {
    console.log('Error:', error);
}





ws.onclose = function() {
    ws = null;
}
