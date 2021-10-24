const ENV = require("../util/const");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  ENV.__DB_NAME__,
  ENV.__DB_USER__,
  ENV.__DB_PASS__,
  {
    host: ENV.__DB_HOST__,
    port: ENV.__DB_PORT__,
    dialect: ENV.__DB_DIALECT__,
  }
);

const Account = sequelize.define(
  "account",
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

const Item = sequelize.define(
  "item",
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  }
);

const AccountItem = sequelize.define(
  "account_item",
  {
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  }
);

Account.belongsToMany(Item, { through: AccountItem, foreignKey: "account_id" });
Item.belongsToMany(Account, { through: AccountItem, foreignKey: "item_id" });

const db = {};

db.Account = Account;
db.Item = Item;
db.AccountItem = AccountItem;
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
