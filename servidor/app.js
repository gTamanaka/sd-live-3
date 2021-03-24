const express = require("express");
const app = express();
var admin = require("firebase-admin");

let credentials = `${__dirname}/credentials.json`; // Carregar as
let firebase = admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = firebase.firestore();

app.post("/cadastrar", async(req,res,next)=>{
  try {
    console.log("I Worked")
    res.status(201).send( "User created")
  } catch (error) {
    
  }
})


app.listen(3001, async () => {
  console.log("Web Server Up");
  let x = await db
    .collection("sensors")
    .doc("temperatura teste")
    .set({ 20210320: { 102: 12 }, 20210321: {103:14} });
    console.log(x)
});
