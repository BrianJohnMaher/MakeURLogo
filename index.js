// needs to have the inquire and fs package
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle }=  require('./lib/shape')


function init(){

    // it need to ask the user 4 questions: 1. what shape? (circle, triangle, square) 2.text color. 3. text to add to the shape. 4. the shape color
    inquirer.prompt([
        {
            type:'list', 
            name: 'shape',
            message: 'What Shape do you choose?', 
            choices: ['circle', 'triangle', 'square']
        }, 
        {
            type:'input', 
            name: 'shapeColor',
            message: 'What Shape color do you choose?', 
          
        }, 
        {
            type:'input', 
            name: 'text',
            message: 'What text do you choose?', 
          
        }, 
        {
            type:'input', 
            name: 'textColor',
            message: 'What text color do you choose?', 
            
        }, 
    ]).then((answer)=> {
        
        let choice;
        switch (answer.shape) {
            case 'circle':
     
                choice = new Circle(answer.shapeColor, answer.text, answer.textColor)
                break;
        
            default:
                console.log('no other choice');
                break;
        }

        fs.writeFile('./dist/logo.svg', choice.render(), (err, res) => {
            if (err) throw err;
            console.log('svg is complete');
        })
    })

    // once we have collected the response we need to create the file that will have the svg created in it. 
}
init()