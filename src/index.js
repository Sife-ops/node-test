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

  await db.Account.create({
    username: "wyatt",
    password: "pass",
  });

  await db.Item.create({
    name: "Lemon",
    description: "Organic fruit.",
    price: 100,
  });

  await db.Item.create({
    name: "Banana",
    description: "Organic fruit.",
    price: 200,
  });

  await db.AccountItem.create({
    account_id: 1,
    item_id: 1,
    quantity: 33,
  });

  await db.AccountItem.create({
    account_id: 1,
    item_id: 2,
    quantity: 55,
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

  function getItems(req, res) {
    db.Item.findAll().then((items) => {
      res.json(items);
    });
  }
  app.get("/items", getItems);

  function getAccount(req, res) {
    db.Account.findOne({
      where: {
        username: req.params.username,
      },
      include: db.Item,
    }).then((account) => {
      res.json(account);
    });
  }
  app.get("/accounts/:username", getAccount);

  app.listen(ENV.__EXPRESS_PORT__, () => {
    console.info(`running on port ${ENV.__EXPRESS_PORT__}`);
  });
};

main().catch((err) => {
  console.error(err);
});
