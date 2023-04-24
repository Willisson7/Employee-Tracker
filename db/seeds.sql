INSERT INTO  department (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Legal"),
       ("Finance");
       

INSERT INTO roles (title, salary, department_id)
VALUES ('Salesperson', 250000.00, 1),
       ('Lead Engineer', 200000.00, 2),
       ('Software Engineer', 180000.00, 2),
       ('Account Manager', 150000.00, 4),
       ('Accountant', 150000.00, 4),
       ('Legal Team Lead', 100000.00, 3),
       ('Lawyer', 100000.00, 3);
    
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Peter','Banning', 1, NULL),
       ('Genie', 'Aladdin', 7, 1),
       ('John', 'Keating', 6, NULL),
       ('Patch', 'Adams', 2, NULL),
       ('Daniel', 'Hillard', 3, 4),
       ('Robina', 'Doubtfire', 7, 3),
       ('Teddy', 'Roosevelt', 4, NULL),
       ('Sean', 'Maguire', 5, 7);
