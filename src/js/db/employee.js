const connection = require("./connection");
const Employee = require("../models/Employee");
const { handleError } = require("../utils");

/**
 * Creates a new employee record
 * @param {Employee} employee
 */
function create(employee) {
	connection.query(
		"INSERT INTO employee SET ?",
		{
			first_name: employee.first_name,
			last_name: employee.last_name,
			role_id: employee.role_id,
			manager_id: employee.manager_id,
		},
		handleError
	);
}

/**
 * Reads all employees
 * @returns list of employees
 */

/* 
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL (6) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department (id)
);
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role (id),
    manager_id INT NULL,
    FOREIGN KEY (manager_id) REFERENCES employee (id)
);
 */
function readAll() {
	return new Promise((respond, reject) => {
		connection.query(
			"SELECT e.id, e.first_name, e.last_name, r.title role, r.salary, d.name department, CONCAT(m.first_name, ' ', m.last_name) manager " +
				"FROM employee e " +
				"LEFT JOIN employee m " +
				"ON e.manager_id = m.id " +
				"LEFT JOIN role r " +
				"ON e.role_id = r.id " +
				"LEFT JOIN department d " +
				"ON r.department_id = d.id",
			(err, res) => {
				if (err) reject(err);
				else respond(res);
			}
		);
	});
}

/**
 * Reads a employee by its id
 * @param {INT} id
 * @returns employee
 */
function readOne(id) {
	return new Promise((respond, reject) => {
		connection.query(
			"SELECT * FROM employee WHERE id = ?",
			[id],
			(err, res) => {
				if (err) reject(err);
				else respond(res[0]);
			}
		);
	});
}

/**
 * Updates the given employee
 * @param {Employee} employee
 */
function update(employee) {
	console.log(employee);
	connection.query(
		"UPDATE employee SET ? WHERE ?",
		[
			{
				first_name: employee.first_name,
				last_name: employee.last_name,
				role_id: employee.role_id,
				manager_id: employee.manager_id,
			},
			{
				id: employee.id,
			},
		],
		handleError
	);
}

/**
 * Deletes a employee by its id
 * @param {*} id
 */
function remove(id) {
	connection.query("DELETE FROM employee WHERE id = ?", [id], handleError);
}

/**
 * Display the employees by role
 * @param {*} role_id
 * @returns list of employees by role
 */
function readAllByRole(role_id) {
	return new Promise((respond, reject) => {
		connection.query(
			"SELECT e.id, e.first_name, e.last_name, r.title role, r.salary, d.name department, CONCAT(m.first_name, ' ', m.last_name) manager " +
				"FROM employee e, employee m, role r, department d " +
				"WHERE e.manager_id = m.id AND m.id = ? AND e.role_id = r.id AND r.department_id = d.id",
			[manager_id],
			(err, res) => {
				if (err) reject(err);
				else respond(res);
			}
		);
	});
}

function readAllByManager(manager_id) {
	return new Promise((respond, reject) => {
		connection.query(
			"SELECT e.id, e.first_name, e.last_name, r.title role, r.salary, d.name department, CONCAT(m.first_name, ' ', m.last_name) manager " +
				"FROM employee e, employee m, role r, department d " +
				"WHERE e.manager_id = m.id AND m.id = ? AND e.role_id = r.id AND r.department_id = d.id",
			[manager_id],
			(err, res) => {
				if (err) reject(err);
				else respond(res);
			}
		);
	});
}

module.exports = {
	create,
	readAll,
	readOne,
	update,
	remove,
	readAllByRole,
	readAllByManager,
};
