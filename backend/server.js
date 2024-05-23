import express from 'express'
import db from './config.js'
import 'dotenv/config'
import todoRoutes from './routes/todoRoutes.js'
import cors from 'cors'


const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())
app.use('/api/todos', todoRoutes)

app.get('/', (req, res) => {
    res.json("We are here from Server")
})


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
    db()
})