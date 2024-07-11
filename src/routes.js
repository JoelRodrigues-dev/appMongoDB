import { Router } from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "./controllers/UserControllers.js";

const routes = Router();

routes.get("/usuario", getUsers);
routes.post("/usuario", createUser);
routes.put("/usuario/:id", updateUser);
routes.delete("/usuario/:id", deleteUser);

export default routes;
