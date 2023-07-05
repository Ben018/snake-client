// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // if input is ctrl + c, exit
  stdin.on("data", handleUserInput);
  return stdin;
};

// event listener function
const handleUserInput = function (data) {
  // if input is ctrl + c, exit
  if (data === "\u0003") {
    process.exit();
    // moves for snake
  } else if (data === "w") {
    connection.write("Move: up");
  } else if (data === "a") {
    connection.write("Move: left");
  } else if (data === "s") {
    connection.write("Move: down");
  } else if (data === "d") {
    connection.write("Move: right");
  };
};

module.exports = { setupInput };
