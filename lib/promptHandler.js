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
    'Remove a Department?',
    'Remove a Role?',
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
            if (answers.selection === "View all Departments?") { viewDepartments(); }
            if (answers.selection === "View all Roles?") { viewRoles(); }
            if (answers.selection === "View all Employees?") { viewEmployees(); }
            if (answers.selection === "Add a Department?") { addDepartment(); }
            if (answers.selection === "Remove a Department?") { deleteDepartment(); }
            if (answers.selection === "Add a Role?") { addRole(); }
            if (answers.selection === "Remove a Role?") { deleteRole(); }

        })
};

function viewDepartments() {
    db.query(
        'SELECT * FROM department',
        function (err, results) {
            if (err) {
                throw err;
            }
            console.table(results);
            next();
        }
    )
};

function viewRoles() {
    db.query(
        'SELECT * FROM roles',
        function (err, results) {
            if (err) {
                throw err;
            }
            console.table(results);
            next();
        }

    )
};

function viewEmployees() {
    db.query(
        'SELECT * FROM  employee',
        function (err, results) {
            if (err) {
                throw err;
            }
            console.table(results);
            next();
        }
    )
};

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please name the new department.'
        }
    ])
        .then((answers) => {
            const query = 'INSERT INTO department SET ?';
            const values = {
                department_name: answers.name
            };
            db.query(query, values, (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return;
                }
            })
            console.log(answers.name + ' succesfully added!');
            next();
        })
};

function deleteDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the department to delete:'
        }
    ])
        .then((answers) => {

            const query = 'DELETE FROM department WHERE department_name = ?';
            const values = [answers.name];
            db.query(query, values, (error, results, fields) => {
                if (error) {
                    console.error(error);
                    return;
                }
                console.log(`${results.affectedRows} department(s) deleted.`);
                next();
            });
        });
}

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the new Role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What will be the salary for this position?'
        },
        {
            type: 'input',
            name: 'department',
            message: 'Which Department does this belong to? (Use the department_id number)',
        }
    ])
        .then((answers) => {
            const query = 'INSERT INTO roles SET ?';
            const values = {
                title: answers.title,
                salary: answers.salary,
                department_id: answers.department
            };
            db.query(query, values, (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return;
                }
            })
            console.log(answers + ' succesfully added!');
            next();
        })
};

function deleteRole() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of the role to remove:'
      }
    ])
    .then((answers) => {
    
      const query = 'DELETE FROM roles WHERE title = ?';
      const values = answers.title;
      db.query(query, values, (error, results, fields) => {
        if (error) {
          console.error(error);
          return;
        }
  
        console.log(`${results.affectedRows} role(s) deleted.`);
        next();
      });
    });
  }

// function addEmployee();

// function updateEmployee();

function next() {
    inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'Would you like to continue?',
        choices: ['Yes', 'No']
    })
        .then(answers => {
            if (answers.choice === 'No') {
                console.log("Thank You! Goodbye!");
                db.end((err) => {
                    if (err) {
                        console.error('Couldnt not Terminate Connection:', err.stack)
                        return;
                    }
                    console.log('Connection Terminated.');
                });
            }
            else {
                startOptions();
            }
        });
};



module.exports = startOptions;