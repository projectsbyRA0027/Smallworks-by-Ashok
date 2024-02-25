const { response } = require("express");

const chatLog = document.getElementById('chat-log'),
      userInput = document.getElementById('user-input'),
      sendButton = document.getElementById('send-button'),
      buttonIcon = document.getElementById('button-icon'),
      info = document.querySelector('.info');

sendButton.addEventListener('click',sendMessage);
userInput.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        sendMessage();
    }
}) ;

function sendMessage(){
    const message = userInput.ariaValueMax.trim();
    if(message === ''){
        return;
    }
    else if(message === 'developer'){
        userInput.value = '';

        appendMessage('user',message);

        setTimeout(()=>{
           appendMessage('bot','this project is builded by Ashok.R');

           buttonIcon.classList.add('fa-solid','fa-paper-plane');
           buttonIcon.classList.remove('fas','fa-spinner','fa-plus');
        },2000);
        return;
    }

    appendMessage('user',message);
    userInput.value='';

    const options = {
        method:'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'ec492cb49fmshcaffceb3b1c251cp1ffc16jsne43cefe0dad6',
            'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
        },
        body:`{"messages":[{"role":"user","content":"${message}"}]}`
    };

    fetch('https://chatgpt-api8.p.rapidapi.com/',options).then((responce)=>responce.json()).then((response)=>{
        appendMessage('bot',response.choices[0].message.content);

        buttonIcon.classList.add('fa-solid','fa-paper-plane');
        buttonIcon.classList.remove('fas','fa-spinner','fa-pulse')
    }).catch((err)=>{
        if(err.name === 'TypeError'){
            appendMessage('bot','Error : check Your Api Key!');
            buttonIcon.classList.add('fa-solid','fa-paper-plane');
            buttonIcon.classList.remove('fas','fa-spinner','fa-pulse');
        }
    });
}

function appendMessage(sender,message){
    info.style.display = "none";

    buttonIcon.classList.remove('fa-solid','fa-paper-plane');
    buttonIcon.classList.add('fas','fa-spinner','fa-pulse');

    const messageElement = document.createElement('div');
    const iconElement =document.createElement('div');
    const chatElement = document.createElement('div');
    const icon = document.createElement('i');

    chatElement.classList.add("chat-box");
    iconElement.classList.add("icon");
    messageElement.classList.add(sender);
    messageElement.innerText = message;

    if (sender === 'user') {
        icon.classList.add('fa-regular', 'fa-user');
        iconElement.setAttribute('id', 'user-icon');
    } else {
        icon.classList.add('fa-solid', 'fa-robot');
        iconElement.setAttribute('id', 'bot-icon');
    }

    iconElement.appendChild(icon);
    chatElement.appendChild(iconElement);
    chatElement.appendChild(messageElement);
    chatLog.appendChild(chatElement);
    chatLog.scrollTo = chatLog.scrollHeight;
}
