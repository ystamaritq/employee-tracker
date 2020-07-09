const inquirer = require("inquirer");
const { cyan } = require("colors");
const Employee = require("../models/Employee");
const Role = require("../models/Role");
const Department = require("../models/Department");
const { addEmployee } = require("./employee");
const department_prompts = require("./department");
const roles_prompts = require("./role");

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
	while (answers) {
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
				break;
			case "View All Employees by Manager":
				employeesByDepartment();
				break;
			case "View All Employees by Role":
				employeesByRole();
				break;
			case "Add Role":
				break;
			case "View All Roles":
				break;
			case "Update Role":
				break;
			case "Remove Role":
				break;
			case "Add Department":
				break;
			case "View All Departments":
				break;
			case "Update Department":
				break;
			case "Remove Department":
				break;
		}
	}
	return console.log("Finish");
}

module.exports = {
	showActions: showActions,
};
