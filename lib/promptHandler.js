const inquirer = require('inquirer');
const {db} = require('../db/connection');


const startSelect = [
    'View all Departments',
    'View all Roles',
    'View all Employees',
    'Add a Department',
    'Add a Role',
    'Add an Employee',
    'Update an Employee Role',
    'Exit',
]
    
const startSelectPrompt = [{
        type: 'list',
        name: 'selection',
        message: 'What would you like to do?',
        choices: startSelect,
}]

const startOptions = () => { 
    return inquirer.prompt(startSelectPrompt)
.then((answers) => {
    answers.selection === "View All Departments" ? showChoice(showChoices) : null;
    answers.selection ==='View Employees by Manager' ? viewOperation(viewEmployeesByManager) : null;
    answers.selection ==='View Roles' ? viewOperation(viewRoles) : null;
    answers.selection ==='View Employees' ? viewOperation(viewEmployees) : null;
    answers.selection ==='Add Employee' ? addOperation(addEmployeePrompt,addEmployee) : null;
    answers.selection ==='Add Department' ? addOperation(addDepartmentPrompt,addDepartment) : null;
    answers.selection ==='Add Role' ? addOperation(addRolePrompt,addRole) : null;
    answers.selection ==='Update Employees Role'? updateOperation(employeeUpdatePrompt,employeeUpdate) : null;
    answers.selection ==='Exit' ? true : null;
})};

const showChoices = async (showSQL) => {
    db.query(showSQL, (err, result) => {
        const width = process.stdout.columns;
        const line = '-'.repeat(width);
        console.log(line);
    })

}

module.exports = startOptions;