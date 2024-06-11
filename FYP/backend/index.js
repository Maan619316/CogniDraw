const { configDotenv } = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
const corsOptions = {
   origin: [
    "https://cogni-draw-frontend-eight.vercel.app",
    "https://cogni-draw-frontend-n8phjdn34-usmans-projects-9557ae50.vercel.app",
    // Add any other origins that you want to allow
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

configDotenv();

const url = 'mongodb+srv://maan:maan123456@cd.wytjue7.mongodb.net/?retryWrites=true&w=majority&appName=CD';
const port = process.env.PORT || 8000;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Not Connected", err);
  });

const UserRouter = require("./Router/User");
app.use("/api", UserRouter);

app.get("/", (req, res) => {
  res.send("Hello World I am Soban");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

module.exports = app;
