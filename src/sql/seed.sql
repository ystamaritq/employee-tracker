-- insert departments
INSERT INTO department (id, name)
VALUES (1, "Human Resources");
INSERT INTO department (id, name)
VALUES (2, "Production");
INSERT INTO department (id, name)
VALUES (3, "Accounting");
INSERT INTO department (id, name)
VALUES (4, "Development");
INSERT INTO department (id, name)
VALUES (5, "Marketing");
-- insert roles
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Manager", 45000, 1);
INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Recruiter", 30000, 1);
INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Intern", 5000, 1);
INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Manager", 40000, 2);
INSERT INTO role (id, title, salary, department_id)
VALUES (5, "Manager", 60000, 3);
INSERT INTO role (id, title, salary, department_id)
VALUES (6, "Accountant", 55000, 3);
INSERT INTO role (id, title, salary, department_id)
VALUES (7, "Manager", 75000, 4);
INSERT INTO role (id, title, salary, department_id)
VALUES (8, "Software Engineer", 70000, 4);
INSERT INTO role (id, title, salary, department_id)
VALUES (9, "Manager", 40000, 5);
INSERT INTO role (id, title, salary, department_id)
VALUES (10, "Analyst", 40000, 5);
-- insert employees
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Rebecca", "Kennedy", 1, null);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Mariam", "Hammond", 2, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Samantha", "Moore", 3, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Taylor", "Cooper", 3, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Leroy", "Holt", 4, null);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Yasin", "Khan", 5, null);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Mohamed", "Holt", 6, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Umar", "Gardner", 7, null);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (9, "Franklin", "Cunningham", 8, 8);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (10, "Ronan", "Carter", 8, 8);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (11, "Ashley", "Barton", 8, 8);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (12, "Theodore", "Brewer", 9, null);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (13, "Hassan", "Graves", 10, 12);