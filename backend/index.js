const express = require('express')
const app = express()
const geolocationRouter = require("./routes/geolocation");
require('dotenv').config();

console.log("Print application port: ", process.env.APPLICATION_PORT);
const port = process.env.APPLICATION_PORT

app.use("/api/geolocation", geolocationRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})