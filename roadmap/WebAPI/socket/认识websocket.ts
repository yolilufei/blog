const client = new WebSocket("ws://localhost:8888");
client.addEventListener("open", function (event) {
  client.send("Hello Server!");
});

// Listen for messages
client.addEventListener("message", function (event) {
  console.log("Message from server ", event.data);
});
