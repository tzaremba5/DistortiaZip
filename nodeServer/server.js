const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const mongoose = require("mongoose");
const ImageNote = require("./models/imageModel")

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

// Connects to mongodb
mongoose.connect("mongodb+srv://tzaremba5:Bsd500020@serverlessinstance0.ref0p.mongodb.net/URL-LabelDB?retryWrites=true&w=majority", connectionParams)
const db = mongoose.connection;
db.on("error", (err)=>{console.log("error connect")});

// Creates the Server
const app = express()
app.use(express.json())

app.get('/', (req, res)=> {
    res.send('Hello');
} )

app.get('/test', (req, res)=> {
    res.send('Hii');
} )

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

// Get request to fetch the image the json with url, label
app.get('/api/image', async (req, res)=> {
    let randomNum1 = random(1, 10000);

    const image = await ImageNote.findOne({"ImageID":randomNum1.toString()})

    try {
        res.json(image)
    } catch (error) {
        res.status(500).send(error);
    }
})



app.listen(3080, (req, res)=>{console.log("Listening on port 3080")});