const { MongoClient } = require('mongodb')

const url = 'mongodb+srv://jasper:jasper123@cluster0.qa2batp.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url)

let dbConnection;
let stockCollection;

const connectToServer = async () => {
    await client.connect()

    dbConnection = client.db("myStore");
    stockCollection = dbConnection.collection("stock");
}

module.exports = {
  connectToServer: connectToServer,
  getDb: () => {
    return dbConnection;
  },
  getStockCollection: () => {
    return stockCollection
  }
};