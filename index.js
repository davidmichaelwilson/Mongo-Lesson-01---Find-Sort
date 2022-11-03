// ===== PROJECT PRACTICE 1 =====
const {MongoClient} = require('mongodb')
const url = "mongodb+srv://davidmichaelwilson:wXRRbRVzvKRcspHw@dmwcluster0.vrpyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const client = new MongoClient(url)

async function findTraining() {
  try {
    await client.connect()
    
    const collection = client.db("sample_training").collection("grades")
    const cursorArray = await collection.find().project({scores: 1, class_id: 1, _id: 0}).sort({class_id: 1}).toArray()
    
    console.log(cursorArray)
    await client.close()
  }
    
  catch(error) {
    console.log(error)
  }
}

findTraining()

// ===== PROJECT PRACTICE 2 =====
const {MongoClient} = require('mongodb')
const url = "mongodb+srv://davidmichaelwilson:wXRRbRVzvKRcspHw@dmwcluster0.vrpyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const client = new MongoClient(url)

async function findShips() {
  try {
    await client.connect()
    
    const collection = client.db("sample_geospatial").collection("shipwrecks")
    const cursorArray = await collection.find({watlev: "always dry"}).project({chart: 1}).toArray()
    
    console.log(cursorArray)
    await client.close()
  }
    
  catch(error) {
    console.log(error)
  }
}

findShips()

// ===== PROJECT PRACTICE 3 =====
const {MongoClient} = require('mongodb')
const url = "mongodb+srv://davidmichaelwilson:wXRRbRVzvKRcspHw@dmwcluster0.vrpyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const client = new MongoClient(url)

async function findSupplies() {
  try {
    await client.connect()
    
    const collection = client.db("sample_supplies").collection("sales")
    const cursorArray = await collection.find({storeLocation: "Austin", purchaseMethod: "Online"}).project({customer: 0}).sort({saleDate: -1}).toArray()
    
    console.log(cursorArray)
    await client.close()
  }
    
  catch(error) {
    console.log(error)
  }
}

findSupplies()