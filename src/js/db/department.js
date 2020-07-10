const connection = require("./connection");
const Department = require("../models/Department");
const { handleError } = require("../utils");

/**
 * Creates a new department record
 * @param {Department} department
 */
function create(department) {
	connection.query(
		"INSERT INTO department SET ?",
		{
			name: department.name,
		},
		handleError
	);
}

/**
 * Reads all departments
 * @returns list of departments
 */
function readAll() {
	return new Promise((respond, reject) => {
		connection.query("SELECT * FROM department", (err, res) => {
			if (err) reject(err);
			else respond(res);
		});
	});
}

/**
 * Reads a department by its id
 * @param {String} id
 * @returns department
 */
function readOne(id) {
	return new Promise((respond, reject) => {
		connection.query(
			"SELECT * FROM department WHERE id = ?",
			[id],
			(err, res) => {
				if (err) reject(err);
				else respond(res[0]);
			}
		);
	});
}

/**
 * Updates the given department
 * @param {Department} department
 */
function update(department) {
	connection.query(
		"UPDATE department SET ? WHERE ?",
		[
			{
				name: department.name,
			},
			{
				id: department.id,
			},
		],
		handleError
	);
}

/**
 * Deletes a department by its id
 * @param {*} id
 */
function remove(id) {
	connection.query("DELETE FROM department WHERE id = ?", [id], handleError);
}

module.exports = {
	create,
	readAll,
	readOne,
	update,
	remove,
};
