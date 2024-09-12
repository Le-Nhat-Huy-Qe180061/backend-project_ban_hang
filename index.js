
const express = require("express");

const dotenv = require("dotenv");
dotenv.config();


//---- routes
const routes = require("./src/routes");

//---- Database
const database = require("./config/database");
database.connect();


const app = express();
const port = process.env.PORT || 3001

//---- Use routes
routes(app);

app.get('/', (req, res) => {
    return res.send('Hello word');
})

app.listen(port, () => {
    console.log(`Success connection localhost ${port}`);
})