const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shape");
const SVG = require("./lib/svg");
const { writeFile } = require("fs/promises")


inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Please enter 3 characters:",
    },
    {
      type: "input",
      name: "textColor",
      message:
        "Please enter a color or hexadecimal numer for the logo's text color:",
    },
    {
      type: "list",
      name: "shape",
      message: "Please enter one of the three, Triangle, Circle, or Square:",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message:
        "Please enter another color or hexadecimal number for the shape's colour:",
    },
  ])

  .then(({ text, textColor, shapeType, shapeColor }) => {
    let shape;
    switch (shapeType) {
      case "Circle":
        shape = new Circle();
        break;

      case "Square":
        shape = new Square();
        break;

      default:
        shape = new Triangle();
        break;
    }
    shape.setColor(shapeColor);

    const svg = new SVG();
    svg.setText(text, textColor);
    svg.setShape(shape);
    return writeFile("logo.svg", svg.render());
  })
  .then(() => {
    console.log("Generated logo.svg");
  })
  .catch((error) => {
    console.log(error);
    console.log("Oops! Something went wrong.");
  });


// Need to create a function using inputs
