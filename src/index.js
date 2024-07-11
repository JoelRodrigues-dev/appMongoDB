import express from "express";
import routes from "./routes.js";
import connectDatabase from "./database/database.js";

const app = express();
app.use(express.json());
app.use(routes);

connectDatabase
  .then(() =>
    app.listen(3000, () =>
      console.log("banco de dados conectado e servidor rodando na porta 3000")
    )
  )
  .catch((error) => console.log(error));
