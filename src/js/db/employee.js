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
		connection.query("SELECT * FROM employee", (err, res) => {
			if (err) reject(err);
			else respond(res);
		});
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

module.exports = {
	create,
	readAll,
	readOne,
	update,
	remove,
};
