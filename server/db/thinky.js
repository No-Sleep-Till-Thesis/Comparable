var thinky = require('thinky')({
  host: process.env.RDB_HOST|| 'localhost',
  port: process.env.RDB_PORT || 28015,
  db: process.env.RDB_DB || 'comparable',
  authKey: ''
});

module.exports = thinky;