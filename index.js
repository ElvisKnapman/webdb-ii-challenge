const server = require("./api/server.js");

const port = process.env.PORT || 7000;

server.listen(port, () => {
  console.log(`\n** SERVER UP AND RUNNING ON PORT ${port} **\n`);
});