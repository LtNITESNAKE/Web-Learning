const terminal  = document.getElementById("terminal")

const message = [

    "initializing hacking ",
    "reading your files",
    "password files Dectected",
    "sending all passwords and personal files to sever",
   "cleaning up"
]

let messagecount= 0;

function showMessage() {
    if (messagecount < message.length) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        terminal.appendChild(messageElement);

        let dotCount = 0;
        let interval = setInterval(() => {
            messageElement.textContent = message[messagecount] + '.'.repeat(dotCount);
            dotCount++;
            if (dotCount > 3) {
                clearInterval(interval);
                messagecount++;
                setTimeout(showMessage, Math.floor(Math.random() * 7000) + 1000);
            }
        }, 500); 
    }
}

    
    showMessage();