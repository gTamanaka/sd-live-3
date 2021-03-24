const express = require("express");
const app = express();
var admin = require("firebase-admin");
var bodyParser = require("body-parser");

let credentials = `${__dirname}/credentials.json`; // Carregar as
let firebase = admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = firebase.firestore();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/cadastrar", async (req, res, next) => {
  try {
    console.log("I Worked");
    res.status(201).send("User created");
  } catch (error) {}
});

app.post("/salvar-leituras", async (req, res, next) => {
  try {
    console.log(req.body);
    let timestamp = req.body.timestamp
    let content = {[timestamp]: req.body.leitura}
    console.log(content)
    await db
      .collection("sensors")
      .doc(req.body.sensor)
      .update(content);
    res.status(201);
  } catch (error) {
    res.status(400).send("Failed to Update")
  }
});

app.post("/create-sensor", async(req,res,next)=>{
  try {
    
  } catch (error) {
    
  }
})

app.listen(3001, async () => {
  console.log("Web Server Up");
  // console.log(x);
});
