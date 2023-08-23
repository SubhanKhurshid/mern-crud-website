require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/user-router");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/crudBase", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected To DataBase ! ");
  });

app.use("/api/v1", router);

app.listen(3000, () => {
  console.log("Server started at port 3000.");
});

// mongodb://127.0.0.1:27017/crudBase
