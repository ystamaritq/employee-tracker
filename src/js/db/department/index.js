const connection = require("../connection");
const Department = require("../../models/Department");

/**
 * Creates a new department record
 * @param {Department} department
 */
function create(department) {
	connection.query("INSERT INTO department SET ?", {
		name: department.name,
	});
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
async function readOne(id) {}

/**
 * Updates the given department
 * @param {Department} department
 */
function update(department) {}

/**
 * Deletes a department by its id
 * @param {*} id
 */
function remove(id) {}

module.exports = {
	create,
	readAll,
	readOne,
	update,
	remove,
};
