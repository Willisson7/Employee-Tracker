const inquirer = require('inquirer');
const db = require('../db/connection');


const select = [
    'View all Departments?',
    'View all Roles?',
    'View all Employees?',
    'Add a Department?',
    'Add a Role?',
    'Add an Employee?',
    'Update an Employee Role?',
    'Exit',
]
    
const selectPrompt = [{
        type: 'list',
        name: 'selection',
        message: 'What would you like to do?',
        choices: select,
}]

const startOptions = () => { 
    return inquirer.prompt(selectPrompt)
.then((answers) => {
    if (answers.selection === "View all Departments?") {viewDepartments();}
    if (answers.selection === "View all Roles?") {viewRoles();}   
    if (answers.selection === "View all Employees?") {viewEmployees();}   
})};

function viewDepartments(){
    db.query(
        'SELECT * FROM department', 
        function(err, results) {
            if (err){
                throw err;
            }
            console.table(results);
            }
    )};

    


function viewRoles(){
    db.query(
    'SELECT * FROM roles',
    function(err, results) {
        if (err){
            throw err;
        }
        console.table(results);
        }
)};

function viewEmployees(){
    db.query(
        'SELECT * FROM  employee',
        function(err, results) {
            if (err){
                throw err;
            }
            console.table(results);
            }
)};

function addDepartment(){
    db.query(inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please name the new department.'
        }
]))
    .then((answers) => {
        'INSERT INTO department SET ?', {
        department_name: answers.name
        }
    
})};

// function addRole();

// function addEmployee();

// function updateEmployee();


module.exports = startOptions;