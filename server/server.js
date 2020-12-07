const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").Server(app);
const router = require("./api");
const bodyParser = require("body-parser");
const { Socket } = require("socket.io");
const io = require("socket.io")(server);
require("./repositories/index");

app.use(cors());
app.use(bodyParser.json());
app.use(router);

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected", userId);

    socket.on("disconnect", () => {
      socket.to("roomId").broadcast.emit("user-disconnected", userId);
    });
  });
});

server.listen(5050, () => {
  console.log("Server is running in 5050");
});
