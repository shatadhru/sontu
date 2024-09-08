const path = require("path");
const userinfo = require("../models/user.models");

exports.about = (req, res) => {
  res.send(`<h1>Sontu be Eida about file</h1>`);
};

exports.login = (req, res) => {
  res.sendFile(path.join(__dirname, `/../views/login.html`));
};

exports.signup = (req, res) => {
  res.sendFile(path.join(__dirname, `/../views/signup.html`));
};

exports.contact = (req, res) => {
  res.send(`<h1>Sontu be Eida contact file</h1>`);
};

exports.userdata = (req, res) => {
  const { user, email, password } = req.body;

  const newUser = { user, email, password };
  userinfo.push(newUser);

  res.send(`<h1>User Data Submitted Successfully</h1>`);
  console.log("Current Users:", userinfo); // Optional: To see the current state of the userinfo array in the console
};
