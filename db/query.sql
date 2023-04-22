SELECT 
  d.id AS department_id, d.name AS department_name, 
  r.id AS role_id, r.title AS role_title, r.salary AS role_salary,
  e.id AS employee_id, CONCAT(e.first_name, ' ', e.last_name) AS employee_name
FROM departments d
JOIN roles r ON r.department_id = d.id
JOIN employees e ON e.role_id = r.id;
