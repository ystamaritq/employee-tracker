const connection = require("../connection");
const Role = require("../../models/Role");

/**
 * Creates a new role record
 * @param {Role} role
 */
function create(role) {
	connection.query("INSERT INTO role SET ?", {
		title: role.title,
		salary: role.salary,
		department_id: role.department_id,
	});
}

/**
 * Reads all departments
 * @returns list of departments
 */
function readAll() {
	return new Promise((respond, reject) => {
		connection.query("SELECT * FROM role", (err, res) => {
			if (err) reject(err);
			else respond(res);
		});
	});
}

module.exports = {
	create,
	readAll,
};
