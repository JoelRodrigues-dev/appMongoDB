import { response } from "express";
import User from "../models/createUser.js";

async function getUsers(request, response) {
  const users = await User.find();

  return response.status(200).json(users);
}

async function createUser(request, response) {
  const user = request.body;

  const newUser = await User.create(user);

  return response.status(201).json(newUser);
}

async function updateUser(request, response) {
  const id = request.params.id;
  const user = request.body;

  const newUser = await User.findByIdAndUpdate({ _id: id }, user, {
    new: true,
  });

  return response
    .status(200)
    .json({ response: "usuario atualizado com sucesso", newUser });
}

async function deleteUser(request, response) {
  const id = request.params.id;

  await User.findByIdAndDelete({ _id: id });

  return response.status(200).json({ response: "Usuario deletado!" });
}

export { getUsers, createUser, deleteUser, updateUser };
