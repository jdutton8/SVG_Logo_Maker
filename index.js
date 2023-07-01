const Shape = require("./lib/shapes");
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const Triangle = require("./lib/triangle");
const inquirer = require("inquirer");
const fs = require("fs");

function createFile(){
    inquirer
    .prompt([   
    {
        type: "list",
        name: "shape",
        message: "Which shape would you like to use for your logo?",
        choices: ["Circle", "Square", "Triangle"],

    },
    {
        type: "input",
        name: "backgroundColor",
        message: "What color for your shape?",
    },
    {
        type: "input",
        name: "text",
        message: "Please enter up to three characters for your logo",
    },
    {
        type: "input",
        name: "textColor",
        message: "What color for your text?",
    },
    {
        type: "input",
        name: "fileName",
        message: "What would you like your .svg file to be named?"
    }, 
  ])
  .then((data) => {
    if (data.text.length > 3){
      console.log("Please enter a max of 3 characters and try again!");
      return; 
    }
    
    var logoRender;
     var textColor = data.textColor;
     var backgroundColor = data.backgroundColor;
     switch(data.shape)  {
         case "Circle":
             logoRender = new Circle(textColor, backgroundColor, data.text);
             break;
         case "Square":
             logoRender = new Square(textColor, backgroundColor, data.text);
             break;
         case "Triangle":
             logoRender = new Triangle(textColor, backgroundColor, data.text);
             y=150;
             break;
  }

  const rendString = logoRender.render();

  const logo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${rendString}
  
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoRender.textColor}">${logoRender.text}</text>
  
  </svg>`;
  
 
  fs.writeFile(`./svg_examples/${data.fileName}.svg`, logo, (err) => 
  err ? console.log(err) : console.log("success!"));
})
}

createFile();
