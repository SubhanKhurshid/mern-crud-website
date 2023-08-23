const User = require("../models/Users");

const addData = async (req, res) => {
  let userNew;
  try {
    userNew = new User({
      username: req.body.username,
      email: req.body.email,
      job: req.body.job,
      number: req.body.number,
    });
    userNew.save();
  } catch (error) {
    console.log(error);
  }
};

const getData = async (req, res) => {
  let newEmployee;
  try {
    newEmployee = await User.find();
  } catch (e) {
    console.log(e);
  }

  if (!newEmployee) {
    console.log("No Data Found ! ");
  } else {
    res.status(201).json(newEmployee);
  }
};

const deleteUser = async (req, res) => {
  let userDelete;
  const id = req.params.id;

  try {
    userDelete = await User.findByIdAndRemove(id);
  } catch (e) {
    console.log(e);
  }

  if (!userDelete) {
    console.log("Error");
  } else {
    res.status(201).json({ message: "Done" });
    console.log("Deleted ! ");
  }
};

const editUser = async (req, res) => {
  let editUser;
  const id = req.params.id;

  try {
    editUser = await User.findByIdAndUpdate(id, {
      username: req.body.username,
      email: req.body.email,
      job: req.body.job,
      number: req.body.number,
    });
    editUser.save();
  } catch (e) {
    console.log(e);
  }

  if (!editUser) {
    res.status(404).json({ message: "Can't be edited" });
  } else {
    res.status(200).json({ message: "Edited" });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  let getById;

  try {
    getById = await User.findById(id);
  } catch (e) {
    console.log(e);
  }
  if (!getById) {
    res.status(404).json({ message: "Can't find" });
  } else {
    res.status(200).json({ message: "Edited" });
  }
};

exports.addData = addData;
exports.getData = getData;
exports.deleteUser = deleteUser;
exports.editUser = editUser;
exports.getUserById = getUserById;
