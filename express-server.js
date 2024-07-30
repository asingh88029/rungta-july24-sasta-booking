const express = require("express")
require('dotenv').config()
require('./src/db/connect')

const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

const server = express()

server.listen(PORT, ()=>{
    console.log(`Server started successfully in ${NODE_ENV} at PORT - ${PORT}`)
})