const NODE_ENV = process.env.NODE_ENV;
const __APP__ = process.env.APP;
const __CLIENT_ID__ = process.env.GITHUB_CLIENT_ID;
const __CLIENT_SECRET__ = process.env.GITHUB_CLIENT_SECRET;
const __DB_DIALECT__ = process.env.POSTGRES_DIALECT;
const __DB_HOST__ = process.env.POSTGRES_HOST;
const __DB_NAME__ = process.env.POSTGRES_DB;
const __DB_PASS__ = process.env.POSTGRES_PASS;
const __DB_PORT__ = process.env.POSTGRES_PORT;
const __DB_USER__ = process.env.POSTGRES_USER;
const __EXPRESS_PORT__ = process.env.EXPRESS_PORT || 80;

module.exports = {
  NODE_ENV: NODE_ENV,
  __APP__: __APP__,
  __CLIENT_ID__: __CLIENT_ID__,
  __CLIENT_SECRET__: __CLIENT_SECRET__,
  __DB_DIALECT__:__DB_DIALECT__,
  __DB_HOST__: __DB_HOST__,
  __DB_NAME__: __DB_NAME__,
  __DB_PASS__: __DB_PASS__,
  __DB_PORT__: __DB_PORT__,
  __DB_USER__: __DB_USER__,
  __EXPRESS_PORT__: __EXPRESS_PORT__,
};