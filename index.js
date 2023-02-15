const inquirer = require("inquirer");
const fetch = require("node-fetch");

inquirer.prompt(
  {
    type: "input",
    name: "text",
    message: "Please enter 3 characters:",
  },
  {
    type: "input",
    name: "text-color",
    message: "Please enter a color or hexadecimal numer for the logo's colour:",
  },
  {
    type: "input",
    name: "shape-style",
    message: "Please enter one of the three, Triangle, Circle, or Square:",
  },
  {
    type: "input",
    name: "shape-color",
    message:
      "Please enter another color or hexadecimal numer for the shape's colour",
  }
);
