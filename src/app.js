import 'dotenv/config'
import express from 'express'
import router from './routes/person.js'

const app = express()

app.get('/', (req,res) => res.json({ server: 'OK'}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/persons', router)

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    console.log(`- [APP] - Running in http://${process.env.APP_HOST}:${process.env.APP_PORT}`)
})