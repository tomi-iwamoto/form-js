const form = document.getElementById('form-wrap');
const text = document.getElementById('text');
const sendButton = document.getElementById('send');
const clearButton = document.getElementById('clear');
const message = document.getElementById('message');

//1) Type a message in the input field box
//2) Click the submit button
//3) You will see your message appear at the bottom of the screen where it says "Message Appears Here" 
//4) You can click the clear button to clear the typed info



//This event handler will take from the value of the text input and then display it as the innertext of the p element (the "message" variable) when submit button is clicked
sendButton.addEventListener('click', function() {

    //The message inside the p element with the id of "message" will have the text that is assigned to text's value
    message.innerHTML = text.value;

})


//This event handler will clear the message written inside the input field and the message that appears on the bottom of the screen when the clear button is clicked
clearButton.addEventListener('click', function() {

    text.value = ' ';
    message.innerHTML = ' ';

})