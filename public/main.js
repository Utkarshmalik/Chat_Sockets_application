const socket=io();


socket.on("message",(data)=>
{
    console.log(data);

    
var node = document.createElement("li");                 // Create a <li> node
var textnode = document.createTextNode(data);         // Create a text node
node.appendChild(textnode);                  
document.getElementById("lists").appendChild(node);     // Append <li> to <ul> with id="myList"



});

const form = document.getElementById("myform");

form.addEventListener("submit",(e)=>
{
    e.preventDefault();
    let searchValue=e.target.search.value;    
    socket.emit("sendMessage",searchValue);
})




