const net = require("net");
const userName = "BEN";

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // added // listen for and receive data from server
  conn.on("data", data => {
    console.log(data);
  })
  // added // message on connecting to server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // added // send user name
    conn.write(`${userName}`);
  })

  return conn;
};

module.exports = { connect };