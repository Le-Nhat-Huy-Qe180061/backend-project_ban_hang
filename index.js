
const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

//---------- ROUTE ----------
//---- ROUTE Client
const routes = require("./api/v1/routes/index");

//---------- DATABASE ----------
const database = require("./config/database");
database.connect();
//---------- END DATABASE ----------

//--- body-parser Lấy dữ liệu từ body
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001

//---------- USE BODY-PARSER ----------
app.use(bodyParser.json()); 

//---------- USE ROUTE ----------
//---- Client
routes(app);
//---- Admin

//---------- END USE ROUTE ----------



app.listen(port, () => {
    console.log(`Success connection localhost ${port}`);
})