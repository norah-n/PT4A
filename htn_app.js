// load our app server using express somehow....
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

app.use(morgan('combined'))

app.get('/flat_cdm_summary/:htn_status', (req, res) => {
  console.log("Fetching patients with htn status: " + req.params.id)

  const connection = mysql.createConnection({
    host: '142.93.103.37',
    user: 'test_user',
    database: 'testDB',
    password: 'Eek6FEuxS7Y8IGlV@2021'
  })

  const userId = req.params.id
  const queryString = "SELECT * FROM flat_cdm_summary WHERE htn_status = 7285"
  connection.query(queryString, [userId], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for users: " + err)
      res.sendStatus(500)
      return
      // throw err
    }

    console.log("I think we fetched users successfully")

    const users = rows.map((row) => {
      return {patient_id: row.patient_id, htn_status: row.htn_status}
    })

    res.json(users)
  })

  // res.end()
})

app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from ROOOOOT")
})

http.get('patient/' + $routeParams.patient_name + '.json').then(function(response) {
  self.patient = response.data;
});


// localhost:3003
app.listen(3003, () => {
  console.log("Server is up and listening on 3003...")
})
