const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://PeterLeiLei:WsQ4NV6xZy6sDCS@cluster0-itfqv.mongodb.net/test?retryWrites=true";
const DBClient = new MongoClient(uri, { useNewUrlParser: true });

export {DBClient}