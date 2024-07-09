const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/createUser.js");

const app = express();
app.use(express.json());

app.post("/usuarios", async (req, res) => {
  const userData = req.body;

  try {
    const newUser = await User.create(userData); // Utiliza o método create do modelo User
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://joelprodrigues25:Asdqwe00*@cluster0.iwggpuq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("banco de dados conectado"))
  .catch(() => console.log("Deu ruim!"));

app.listen(3000);
