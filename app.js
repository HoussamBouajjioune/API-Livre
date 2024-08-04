const express = require("express");
const app = express();
const livrerouter = require("./routers/livre");


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.use('/api/livre',livrerouter);

module.exports = app;