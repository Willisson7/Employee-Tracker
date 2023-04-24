SELECT e.id, e.first_name, e.last_name, r.title, r.salary
FROM employee e
JOIN roles r ON e.role_id = r.id;
