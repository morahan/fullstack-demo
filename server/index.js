const express = require('express');
const app = express();
const port = 3000;
const dbMethods = require('./db/queries.js');
const body = require('body-parser');


app.get('/', (req, res) => res.send('hello, it is working'));

app.get('/all', (req, res) => {
  // let arr = [req.body.id, req.body.reporter, req.body.description, req.body.threatLevel, req.body.assignedTeamMember]
  dbMethods.allMessages()
    .then(result => {
      return result
    });
});

app.get('/filter', (req, res) => {
  let arr = [req.body.threatLevel];
  dbMethods.sort(arr)
    .then(result => {
      return result
    })
})
app.listen(port, () => console.log(`App is listening on port ${port}`));


// express