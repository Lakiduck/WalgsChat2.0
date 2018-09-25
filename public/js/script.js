var socket = io();

function send(){
    var message = document.getElementById("message").value;
    socket.emit("send", { "message" : message });
    document.getElementById("message").value = "";
}

socket.on("new", function(data){
    console.log("NEW MESSAGE : ", data);
    var chatMessage = document.createElement("p");
    chatMessage.innerHTML = data.message;
    document.getElementById("content").appendChild(chatMessage)
});
