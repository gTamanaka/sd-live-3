const express = require("express");
const app = express();
var admin = require("firebase-admin");

let credentials = `${__dirname}/credentials.json`; // Carregar as
let firebase = admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = firebase.firestore();

app.listen(3000, async () => {
  console.log("Web Server Up");
  await db
    .collection("sensors")
    .doc("temperatura teste")
    .set({ "dia": { 100: 12 } });
});
