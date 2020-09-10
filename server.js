const express=require("express");
const app=express();
const http=require("http");
const path=require("path");
const socketIO=require("socket.io");

const server=http.createServer(app);
const io=socketIO(server);

app.use(express.static( path.join(__dirname,'/public')));

io.on("connection",(socket)=>
{
     console.log("A new client has been connected ");

     socket.on("disconnect",()=>
    {
        io.emit("message","A user has left");
    })

    socket.emit("message","Welcome");
    socket.broadcast.emit("message","A new user has joined");

    socket.on("sendMessage",(message)=>
    {
        io.emit("message",message);
    })
    
});


const port=process.env.PORT || 3000;


server.listen(port, ()=>
{
    console.log("Server is runnning");
});