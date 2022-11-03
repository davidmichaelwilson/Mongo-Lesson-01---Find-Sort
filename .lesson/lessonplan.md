# Lesson plan
  
---

```
const {MongoClient} = require('mongodb')
const url = "mongodb+srv://kwilson2:cPX4dYiAP9kN8rG5@cluster0.pnvyu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(url)

async function findGrades() {
  try {
    await client.connect()
    const collection = client.db("sample_training").collection("grades")
    const cursorArr = await collection.find().sort({class_id: 1}).toArray()
    console.log(cursorArr)
    await client.close()
  }
    
  catch(err) {
    console.log(err)
  }
}

findGrades()


async function findShips() {
  try {
    await client.connect()
    const collection = client.db("sample_geospatial").collection("shipwrecks")
    const cursorArr = await collection.find({watlev: "always dry"}).project({chart: 1}).toArray()
    console.log(cursorArr)
    await client.close()
  }
    
  catch(err) {
    console.log(err)
  }
}

findShips()


async function findSales() {
  try {
    await client.connect()
    const collection = client.db("sample_supplies").collection("sales")
    const cursorArr = await collection.find({storeLocation: "Austin", purchaseMethod: "Online"}).project({customers: 0}).sort({saleDate: -1}).toArray()
    console.log(cursorArr)
    await client.close()
  }
    
  catch(err) {
    console.log(err)
  }
}

findSales()
```