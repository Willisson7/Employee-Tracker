const inquirer = require('inquire');
const {db} = require('../db/connection');

const viewDepartments= "SELECT * FROM department";

const addDepPrompt = [
    {
    name: 'department_name',
    type: 'input',
    message: 'What Department would you like to create?',
    }
]

const addDep = (({department_name}) => {
    const SQL = `INSERT INTO department (department_name) VALUES (?)`;
    const param = department_name;
    db.query(SQL, param, (err, res) => {}); 
});


module.exports = {
    viewDepartments,
    addDepPrompt,
    addDep,
};