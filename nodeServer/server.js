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
    let randomNum2 = random(1, 10000);
    let randomNum3 = random(1, 10000);
    let randomNum4 = random(1, 10000);

    const image1 = await ImageNote.findOne({"ImageID":randomNum1.toString()})
    const image2 = await ImageNote.findOne({"ImageID":randomNum2.toString()})
    const image3 = await ImageNote.findOne({"ImageID":randomNum3.toString()})
    const image4 = await ImageNote.findOne({"ImageID":randomNum4.toString()})

    try {
        res.json([image1, image2, image3, image4])
    } catch (error) {
        res.status(500).send(error);
    }
})


// Post request to post the record
app.post('/upload', (req, res)=> {
    res.json({"teddy":"t"})
    console.log(req.body)
    console.log('')
})


app.listen(3080, (req, res)=>{console.log("Listening on port 3080")});