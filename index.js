import http from "http";
import express from "express";

// Express app setup
const app = express();

const server = http.createServer(app);
server.listen(3000);
server.on("listening", () => {
  console.log("Server is listening on port: 3000");
});

// router management
// gets any route and responds with "Hello Express"
app.get("*", (req, res) => {
  res.end("Hello Express");
});
