const ws = new WebSocket('ws://localhost:6969');


const chatInputField = document.querySelector('#chat-input-field');
const chatSendButton = document.querySelector('#chat-send-button');





ws.onopen = () => {
    console.log('Connection opened!');
}


ws.onmessage = ({ data }) =>{ 
    console.log(data) 

    chatSendButton.addEventListener('click', () => {
        console.log(chatInputField.value);
        ws.send(JSON.stringify( {data : chatInputField.value, type : 'message'}));
        chatInputField.value = '';
    });

    ws.send(JSON.stringify('hello'))

}




ws.onerror = function(error) {
    console.log('Error:', error);
}





ws.onclose = function() {
    ws = null;
}
