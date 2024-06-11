const { configDotenv } = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors({

origin: ["https://cogni-draw-frontend-eight.vercel.app"],
methods: ["POST", "GET"],
credentials: true
}));

configDotenv();

const url = 'mongodb+srv://maan:maan123456@cd.wytjue7.mongodb.net/?retryWrites=true&w=majority&appName=CD';
const port = process.env.PORT || 8000;

mongoose
  .connect(url)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Not Connected");
  });

const User = require("./Router/User");
app.use("/api",User);

app.get("/home", (req, res) => {
  res.send("Hello World I am Soban");
});

app.listen(3001, () => {
  console.log(`Server running on ${port}`);
});
