INSERT INTO  department (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Legal"),
       ("Finance");
       

INSERT INTO roles (title, salary, department_id)
VALUES ('CEO', 250000.00, 1),
       ('COO', 200000.00, 1),
       ('CFO', 180000.00, 2),
       ('HRM', 150000.00, 2),
       ('CRDO', 150000.00, 3),
       ('Salesman 2', 100000.00, 1),
       ('Salesman 3', 100000.00, 1),
       ('Salesman 4', 100000.00, 1),
       ('Salesman 5', 100000.00, 1);
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Maleficent","Bystander", 1, NULL),
       ("Jafar", "Ugleman", 1, 2),
       ("Taka", "Scar", 2, 3);