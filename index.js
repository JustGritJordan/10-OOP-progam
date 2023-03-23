const inquirer = require("inquirer");
const {Triangle} = require("./lib/shape")
const fs = require("fs")

inquirer.prompt([{
  type: "input",
  name: "text",
  message: "Please enter 3 characters:",
},
{type: "input",
name: "textColor",
message: "Please enter a color or hexadecimal numer for the logo's colour:",
},
{
  type: "list",
  name: "shape",
  message: "Please enter one of the three, Triangle, Circle, or Square:",
  choices: ["Triangle", "Circle", "Square"]
},
{
  type: "input",
  name: "shapeColor",
  message:
    "Please enter another color or hexadecimal numer for the shape's colour",
}

]).then(answers => {
  switch (answers.shape) {
    case "Triangle":
      return new Triangle(answers.shapeColor)
    default:
      break;
  }
}) 






