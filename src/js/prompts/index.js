const inquirer = require("inquirer");
const { cyan } = require("colors");
const Employee = require("../models/Employee");
const Role = require("../models/Role");
const Department = require("../models/Department");
const {
	addEmployee,
	viewEmployees,
	updateEmployee,
	removeEmployee,
	employeesByDepartment,
	employeesByManager,
	employeesByRole,
	updateEmployeeRole,
	updateEmployeeManager,
} = require("./employee");
const {
	addDepartment,
	viewAllDepartment,
	updateDepartment,
	removeDepartment,
} = require("./department");
const { addRole, viewAllRoles, updateRoles, removeRole } = require("./role");

const actions = [
	{
		type: "list",
		prefix: "\n\n?".cyan.bold,
		name: "action",
		message: "What would you like to do?",
		choices: [
			// "Add Employee",
			// "View All Employees",
			// "Update Employee",
			// "Remove Employee",
			// "Update Employee Role",
			// "Update Employee Manager",
			// "View All Employees by Department",
			// "View All Employees by Manager",
			// "View All Employees by Role",
			"Add Role",
			"View All Roles",
			"Update Role",
			"Remove Role",
			"Add Department",
			"View All Departments",
			"Update Department",
			"Remove Department",
		],
	},
];

async function showActions() {
	const answers = await inquirer.prompt(actions);
	switch (answers.action) {
		case "Add Employee":
			await addEmployee();
			break;
		case "View All Employees":
			await viewEmployees();
			break;
		case "Update Employee":
			await updateEmployee();
			break;
		case "Remove Employee":
			await removeEmployee();
			break;
		case "Update Employee Role":
			await updateEmployeeRole();
			break;
		case "Update Employee Manager":
			await updateEmployeeManager();
			break;
		case "View All Employees by Department":
			await employeesByDepartment();
			break;
		case "View All Employees by Manager":
			await employeesByManager();
			break;
		case "View All Employees by Role":
			await employeesByRole();
			break;
		case "Add Role":
			await addRole();
			break;
		case "View All Roles":
			await viewAllRoles();
			break;
		case "Update Role":
			await updateRoles();
			break;
		case "Remove Role":
			await removeRole();
			break;
		case "Add Department":
			await addDepartment();
			break;
		case "View All Departments":
			await viewAllDepartment();
			break;
		case "Update Department":
			await updateDepartment();
			break;
		case "Remove Department":
			await removeDepartment();
			break;
	}
}

module.exports = {
	showActions,
};
