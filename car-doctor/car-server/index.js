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

    const serviceCollection = client.db("carDoctor").collection("services");
    const bookingCollection = client.db("carDoctor").collection("bookings");

    // ------------------ lets create all api-----------------------
    // load all data
    app.get("/services", async (req, res) => {
      const items = serviceCollection.find();
      const result = await items.toArray();
      res.send(result);
    });

    // load single
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      // here options filter the data
      const options = {
        projection: {
          title: 1,
          price: 1,
          service_id: 1,
          img: 1,
        },
      };
      const result = await serviceCollection.findOne(query, options);
      res.send(result);
    });

    // bookings
    app.post('/bookings', async(req, res) => {
      const booking = req.body;
      // console.log(booking);
      const result = await bookingCollection.insertOne(booking);
      res.send(result);
    })
    // booking

    app.get('/bookings', async(req, res) => {
      console.log(req.query.email);
      let query = {};
      if (req.query?.email){
        query = {email: req.query.email};
      }
      const result = await bookingCollection.find(query).toArray();
      res.send(result);
    })

    // app.post("/:id", async (req, res) => {
    //   const newItem = req.body;
    //   const result = await serviceCollection.insertOne(newItem);
    //   res.send(result);
    // });

    // app.put("/id", async (req, res) => {
    //   const updateItem = req.body;
    //   const result = await serviceCollection.updateOne(
    //     {
    //       _id: new ObjectId(req.params.id),
    //     },
    //     {
    //       $set: updateItem,
    //     }
    //   );
    //   res.send(result);
    // });

    // app.post("/", async (req, res) => {
    //   const result = await serviceCollection.deleteOne({
    //     _id: new ObjectId(req.params.id),
    //   });
    //   res.send(result);
    //   r;
    // });

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
