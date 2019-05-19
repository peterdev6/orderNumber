const dbService = db => ({
  getOrdersByNumber: (number, cb) => {
    db.findOne({id: number}).then(data => {
      cb(data)
    }).catch(e => console.log(e))
  },
  insertOne: (data, cb) => {
    db.insertOne({data}).then(_ => {
      cb()
    }).catch(e => console.log(e))
  },
  insertMany: (data, cb) => {
    db.insertMany(data).then(result => {
      cb(result)
    }).catch(e => console.log(e))
  }
})

export default dbService