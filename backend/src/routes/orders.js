import express from 'express'
import {DBClient} from '../db/setup'
import dbService from '../db/db'
const router = express.Router()
const data = require('../db/data.json')

let db
DBClient.connect().then(_ => {
  const col = DBClient.db('app').collection('customers')
  db = dbService(col)
  // seed data if not already seeded
  db.getOrdersByNumber("12345", data => {
    if(!data) {
      db.insertMany(data, (result) => {
        console.log(result)
      })
    }
  })
})

router.get('/:order', function (req, res) {
  const order = req.params.order
  if(db) {
    db.getOrdersByNumber(order, (data) => {
      res.json(data)
    })
  }
})

export default router