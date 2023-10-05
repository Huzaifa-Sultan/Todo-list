import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    let answer = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "what do you want to add in your todo?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo?",
            default: false
        }
    ]);
    let { TODO, addmore } = answer;
    console.log(answer);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("kindly enter a valid input");
    }
}
if (todos.length > 0) {
    console.log("your to do list");
}
else {
    console.log("No todos found");
}
;
