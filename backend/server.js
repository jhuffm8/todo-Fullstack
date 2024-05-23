import express from 'express'
import db from './config.js'
import 'dotenv/config'
const app = express()
const PORT = 8080

app.get('/', (req, res) => {
    res.json("We are here from Server")
})


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
    db()
})