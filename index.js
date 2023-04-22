const inquirer = require('inquirer');
const startOptions = require('./lib/promptHandler.js');

async function startApp() {
    await startOptions();
}

startApp();