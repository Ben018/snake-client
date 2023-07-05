// event listener function if input is ctrl + c, exit
const handleUserInput = function (data) {
  if (data === "\u0003");
  process.exit();
};

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // if input is ctrl + c, exit
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };