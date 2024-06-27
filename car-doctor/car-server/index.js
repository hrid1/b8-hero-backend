const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware

app.use(cors());
app.use(express.json());

// ------------mongodb------------

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://car-doctor:NrCm4QbIKWcI7ERg@cluster0.54rjrr8.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const serviceCollection = client.db('carDoctor').collection('services');

    // ------------------ lets create all api-----------------------
    app.get('/services',async (req, res) => {
       const items = serviceCollection.find();
       const result = await items.toArray();
       res.send(result);
    })

    app.post('/:id', async(req, res) => {
        const newItem = req.body;
        const result = await serviceCollection.insertOne(newItem);
        res.send(result);
    })

    app.put('/id', async(req, res) => {
        const updateItem = req.body;
        const result = await serviceCollection.updateOne({
            _id: new ObjectId(req.params.id)
        }, {
            $set: updateItem
        })
        res.send(result);
    })

    app.post('/', async (req, res) => {
        const result = await serviceCollection.deleteOne({_id: new ObjectId(req.params.id)});
        res.send(result);
    })


    

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// api f
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is Running: http://localhost:${port}`);
});
