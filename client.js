const net = require("net");
const { IP, PORT } = require("./constants");
const userName = "BEN";


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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
    conn.write(`Name: ${userName}`);
    // // move up cmd
    // setInterval(() => {
    //   conn.write(`Move: up`);
    // }, 500);
  })

  return conn;

};

module.exports = { connect };