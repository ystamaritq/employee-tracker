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

function readAll() {
	return new Promise((respond, reject) => {
		connection.query(
			"SELECT e.id, e.first_name, e.last_name, r.title role, r.salary, d.name department, CONCAT(ifnull(m.first_name, ''), ' ', ifnull(m.last_name, '')) manager " +
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

function readAllByManager(manager_id) {
	return new Promise((respond, reject) => {
		connection.query(
			"SELECT e.id, e.first_name, e.last_name, r.title role, r.salary, d.name department, CONCAT(ifnull(m.first_name, ''), ' ', ifnull(m.last_name, '')) manager " +
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

function readAllManagers() {
	return new Promise((respond, reject) => {
		connection.query(
			"SELECT DISTINCT CONCAT(m.first_name, ' ', m.last_name) name,  d.name department, r.title role " +
				"FROM employee e " +
				"LEFT JOIN employee m " +
				"ON e.manager_id = m.id " +
				"LEFT JOIN role r " +
				"ON m.role_id = r.id " +
				"LEFT JOIN department d " +
				"ON r.department_id = d.id " +
				"WHERE e.manager_id = m.id",
			(err, res) => {
				if (err) reject(err);
				else respond(res);
			}
		);
	});
}

function readAllByRole(role_id) {
	return new Promise((respond, reject) => {
		connection.query(
			"SELECT e.id, e.first_name, e.last_name, r.title role, r.salary, d.name department, CONCAT(ifnull(m.first_name, ''), ' ', ifnull(m.last_name, '')) manager " +
				"FROM employee e " +
				"LEFT JOIN employee m " +
				"ON e.manager_id = m.id " +
				"LEFT JOIN role r " +
				"ON e.role_id = r.id " +
				"LEFT JOIN department d " +
				"ON r.department_id = d.id " +
				"WHERE r.id = ?",
			[role_id],
			(err, res) => {
				if (err) reject(err);
				else respond(res);
			}
		);
	});
}

function readAllByDepartment(department_id) {
	return new Promise((respond, reject) => {
		connection.query(
			"SELECT e.id, e.first_name, e.last_name, r.title role, r.salary, d.name department, CONCAT(ifnull(m.first_name, ''), ' ', ifnull(m.last_name, '')) manager " +
				"FROM employee e " +
				"LEFT JOIN employee m " +
				"ON e.manager_id = m.id " +
				"LEFT JOIN role r " +
				"ON e.role_id = r.id " +
				"LEFT JOIN department d " +
				"ON r.department_id = d.id " +
				"WHERE d.id = ?",
			[department_id],
			(err, res) => {
				if (err) reject(err);
				else respond(res);
			}
		);
	});
}

function budgetByDepartment(department_id) {
	return new Promise((respond, reject) => {
		connection.query(
			"SELECT d.id, d.name, sum(r.salary) total_salary, COUNT(e.id) employee_count " +
				"FROM employee e " +
				"LEFT JOIN role r " +
				"ON e.role_id = r.id " +
				"LEFT JOIN department d " +
				"ON r.department_id = d.id " +
				"WHERE d.id = ?",
			[department_id],
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
	readAllByManager,
	readAllByRole,
	readAllByDepartment,
	budgetByDepartment,
	readAllManagers,
};
