
// load our app server using express ....
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

app.use(morgan('combined'))

app.get('/', (req, res) => {
  console.log("Fetching patient with name: " + req.params.id)

  const connection = mysql.createConnection({
    host: '142.93.103.37',
    user: 'test_user',
    database: 'testDB',  
    password:'Eek6FEuxS7Y8IGlV@2021' 
  })

  const userId = req.params.patient_id
  const queryString = "select patient.name, patient.gender, patient.dob, patient.phone_number, flat_cdm_summary.htn_status, flat_cdm_summary.dm_status from testDB.flat_cdm_summary, testDB.patient where flat_cdm_summary.patient_id = patient.patient_id"
  connection.query(queryString, [userId], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for patient data: " + err)
      res.sendStatus(500)
      return
      // throw err
    }

    console.log("I think we fetched patient data successfully")

    const patient = rows.map((row) => {
      return {name: row.name, gender: row.gender, dob: row.dob, phone_number: row.phone_number, htn_status: row.htn_status, dm_status: row.dm_status }
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
