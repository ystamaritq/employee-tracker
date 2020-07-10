const connection = require("./connection");
const Role = require("../models/Role");
const { handleError } = require("../utils");

/**
 * Creates a new role record
 * @param {Role} role
 */
function create(role) {
	connection.query(
		"INSERT INTO role SET ?",
		{
			title: role.title,
			salary: role.salary,
			department_id: role.department_id,
		},
		handleError
	);
}

/**
 * Reads all roles
 * @returns list of roles
 */
function readAll() {
	return new Promise((respond, reject) => {
		connection.query("SELECT * FROM role", (err, res) => {
			if (err) reject(err);
			else respond(res);
		});
	});
}

/**
 * Reads a role by its id
 * @param {INT} id
 * @returns role
 */
function readOne(id) {
	return new Promise((respond, reject) => {
		connection.query("SELECT * FROM role WHERE ?", { id: id }, (err, res) => {
			if (err) reject(err);
			else respond(res[0]);
		});
	});
}

/**
 * Updates the given department
 * @param {Role} role
 */
function update(role) {
	connection.query(
		"UPDATE role SET ? WHERE ?",
		[
			{
				title: role.title,
				salary: role.salary,
				department_id: role.department_id,
			},
			{
				id: role.id,
			},
		],
		handleError
	);
}

/**
 * Deletes a role by its id
 * @param {*} id
 */
function remove(id) {
	connection.query("DELETE FROM role WHERE id = ?", [id], handleError);
}

module.exports = {
	create,
	readAll,
	update,
	readOne,
	remove,
};
