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

const Item = sequelize.define(
  "item",
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  }
);

const db = {};

db.Item = Item;
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;