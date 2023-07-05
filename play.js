const { connect } = require("./client");

// // interpret incoming data as text
// conn.setEncoding("utf8");

// // added // listen for and receive data from server
// conn.on("data", data => {
//   console.log(data);
// });

// return conn;

console.log("Connecting ...");
connect();