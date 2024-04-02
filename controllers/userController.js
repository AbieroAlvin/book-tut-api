const UserModel = require("../models/userModel");

exports.getAllUsers = (req, res) => {
  const users = UserModel.getAllusers();
  res.json(users);
};

exports.getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = UserModel.getUsersById(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

exports.createUser = (req, res) => {
  const user = req.body;
  const newUser = UserModel.addUser(user);
  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const id = parseint(req.params.id);
  const updatedUser = req.body;
  const user = UserModel.updatedUser(id, updatedUser);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  UserModel.deleteUser(id);
  res.status(204).send();
};
