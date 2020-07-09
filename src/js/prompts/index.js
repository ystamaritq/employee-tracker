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
		prefix: "?".cyan.bold,
		name: "action",
		message: "What would you like to do?",
		choices: [
			"Add Employee",
			"View All Employees",
			"Update Employee",
			"Remove Employee",
			"Update Employee Role",
			"Update Employee Manager",
			"View All Employees by Department",
			"View All Employees by Manager",
			"View All Employees by Role",
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
			addEmployee();
			break;
		case "View All Employees":
			viewEmployees();
			break;
		case "Update Employee":
			updateEmployee();
			break;
		case "Remove Employee":
			removeEmployee();
			break;
		case "Update Employee Role":
			updateEmployeeRole();
			break;
		case "Update Employee Manager":
			updateEmployeeManager();
			break;
		case "View All Employees by Department":
			employeesByDepartment();
			break;
		case "View All Employees by Manager":
			employeesByManager();
			break;
		case "View All Employees by Role":
			employeesByRole();
			break;
		case "Add Role":
			addRole();
			break;
		case "View All Roles":
			viewAllRoles();
			break;
		case "Update Role":
			updateRoles();
			break;
		case "Remove Role":
			removeRole();
			break;
		case "Add Department":
			addDepartment();
			break;
		case "View All Departments":
			viewAllDepartment();
			break;
		case "Update Department":
			updateDepartment();
			break;
		case "Remove Department":
			removeDepartment();
			break;
	}
}

module.exports = {
	showActions,
};
