const express = require("express");
const app = express();
var admin = require("firebase-admin");
var bodyParser = require("body-parser");
var cors = require("cors");

let credentials = `${__dirname}/credentials.json`; // Carregar as
let firebase = admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = firebase.firestore();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/cadastrar", async (req, res, next) => {
  try {
    console.log(req.body);
    let resp = await firebase.auth().createUser({
      uid: (req.body.user).replace(" ", ".").toLowerCase(),
      displayName: req.body.user,
      password: req.body.pwd,
      email: req.body.email,
    });
    console.log(resp.toJSON())
    res.status(201).send("Usuário Criado com Sucesso");
  } catch (error) {
    console.log(error.errorInfo)
    res.status(400).send(error.errorInfo.message)
  }
});

app.post("/salvar-leituras", async (req, res, next) => {
  try {
    console.log(req.body);
    let timestamp = req.body.timestamp;
    let content = { [timestamp]: req.body.leitura };
    console.log(content);
    await db.collection("sensors").doc(req.body.sensor).update(content);
    res.status(201);
  } catch (error) {
    res.status(400).send("Failed to Update");
  }
});

app.post("/create-sensor", async (req, res, next) => {
  try {
  } catch (error) {}
});

app.listen(3002, async () => {
  console.log("Web Server Up");
  // console.log(x);
});
