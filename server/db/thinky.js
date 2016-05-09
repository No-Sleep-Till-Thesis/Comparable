var thinky = require('thinky')({
  host: process.env.DBHOST || 'localhost',
  port: 28015,          
  db: 'comparable',  
  authKey: '',
  expressPort: process.env.PORT || 3000,
});

module.exports = thinky;