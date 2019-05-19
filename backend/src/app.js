import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {DBClient} from './db/setup'
import orders from './routes/orders'
const PORT = 3000
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/orders', orders)

DBClient.connect(err => {
  // start server when DB is connected
  app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
});


