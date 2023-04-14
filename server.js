const express = require('express');

const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false}))
app.use(express. json());

// establish connnection to database

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.password,
        database: '@14th3SQL!'
    },
    console.log('Connected to employee_db database')
);

