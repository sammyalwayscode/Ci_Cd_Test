const express = require('express')
const mongoose = require('mongoose')
const PORT = 2000

//Creating an Object instance
const app = express()

//Enabling our responce in json
app.use(express.json())

// Listen to the Port
app.listen(PORT, () => {
  console.log(`Listning To Port ${PORT}`)
})