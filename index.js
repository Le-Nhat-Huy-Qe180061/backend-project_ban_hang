
const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

//---------- ROUTE ----------
//---- ROUTE Client
const routes = require("./src/routes/client/index");

//---------- DATABASE ----------
const database = require("./config/database");
database.connect();
//---------- END DATABASE ----------



const app = express();
const port = process.env.PORT || 3001


//---------- USE ROUTE ----------
//---- Client
routes.index(app);
//---- Admin

//---------- END USE ROUTE ----------


app.listen(port, () => {
    console.log(`Success connection localhost ${port}`);
})