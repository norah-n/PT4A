
// load our app server using express ....
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

app.use(morgan('combined'))

app.get('/patient/:name', (req, res) => {
  console.log("Fetching patient with name: " + req.params.id)

  const connection = mysql.createConnection({
    host: '142.93.103.37',
    user: 'test_user',
    database: 'testDB',  
    password:'Eek6FEuxS7Y8IGlV@2021' 
  })

  const userId = req.params.name
  const queryString = "SELECT * FROM patient WHERE `name` = ?"
  connection.query(queryString, [userId], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for patient: " + err)
      res.sendStatus(500)
      return
      // throw err
    }

    console.log("I think we fetched patient successfully")

    const patient = rows.map((row) => {
      return {name: row.name}
    })

    res.json(patient)
  })

  // res.end()
})

app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from ROOOOOT")
})
// localhost:3003
app.listen(3003, () => {
  console.log("Server is up and listening on 3003...")
})
