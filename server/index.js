import http from "http";
import app from "../app";

function log(message) {
  process.stdout.write(`${message}\n`);
}

function startServer(serverPort) {
  server.listen(serverPort); // Listen on provided port, on all network interfaces.
}

// Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = `${typeof port === "string" ? "Pipe" : "Port"} ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      log(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      log(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Event listener for HTTP server "listening" event.
function onListening() {
  const addr = server.address();
  let bind = "";

  if (typeof addr === "string") {
    bind = `pipe ${addr}`;
  } else {
    bind = `port ${addr.port}`;
  }

  log(`Server is listening on ${bind}`);
  log(`Visit: http://localhost:${addr.port}`);
}

// Get port from environment and store in Express.
const port = process.env.PORT || 3000;
app.set("port", port);

// Create HTTP server.
const server = http.createServer(app);

// Start server.
server.on("error", onError);
server.on("listening", onListening);
startServer(port);
