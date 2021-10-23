const ENV = require("./util/const");
console.info(ENV);

const cors = require("cors");
const express = require("express");

// capture SIGINT (^C) from terminal
const process = require("process");
process.on("SIGINT", () => {
  console.info("Interrupted");
  process.exit(0);
});

const main = async () => {
  //   _____  ___ __  _ __ ___  ___ ___
  //  / _ \ \/ / '_ \| '__/ _ \/ __/ __|
  // |  __/>  <| |_) | | |  __/\__ \__ \
  //  \___/_/\_\ .__/|_|  \___||___/___/
  //           |_|

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  function test(req, res) {
    res.send("hello");
  }
  app.get("/test", test);

  app.listen(ENV.__EXPRESS_PORT__, () => {
      console.info(`running on port ${ENV.__EXPRESS_PORT__}`)
  });
};

main().catch((err) => {
  console.error(err);
});
