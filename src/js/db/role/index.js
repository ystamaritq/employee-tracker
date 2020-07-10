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

module.exports = {
	create,
};
