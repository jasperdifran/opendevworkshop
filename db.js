const { MongoClient } = require('mongodb')

const url = ''
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