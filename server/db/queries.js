// create db
const { Pool } = require('pg');

const pool = new Pool({
  database: 'bugs',
  user: 'postgres',
  password: '1234'
});

function allMessages() {
  return pool.Query('select * from messages')
    .then(result => {
      return result.rows;
    });
}

function sort(level) {
  return pool.Query('select * from messages where threatLevel = $1')
    .then(result => {
      return result.rows;
    });
}

module.export = {
  allMessages,
  sort
};


// postgress
// >> 1. Assigned Team Member
//     >> 2. Threat Level
//         >> 3. Description
//             >> 4. Reporter
