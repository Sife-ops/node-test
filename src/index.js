const ENV = require("./util/const");
console.info(ENV);

const cors = require("cors");
const express = require("express");

const db = require("./db");

// capture SIGINT (^C) from terminal
const process = require("process");
process.on("SIGINT", () => {
  console.info("Interrupted");
  process.exit(0);
});

const main = async () => {
  //                            _ _
  //  ___  ___  __ _ _   _  ___| (_)_______
  // / __|/ _ \/ _` | | | |/ _ \ | |_  / _ \
  // \__ \  __/ (_| | |_| |  __/ | |/ /  __/
  // |___/\___|\__, |\__,_|\___|_|_/___\___|
  //              |_|

  await db.sequelize.sync({ force: true }).then(() => {
    console.log("migration successful");
  });

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
    console.info(`running on port ${ENV.__EXPRESS_PORT__}`);
  });
};

main().catch((err) => {
  console.error(err);
});
