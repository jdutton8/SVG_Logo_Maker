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
};


createFile();
