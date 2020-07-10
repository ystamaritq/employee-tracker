const inquirer = require("inquirer");
const cTable = require("console.table");
const { cyan } = require("colors");
const { validateNonEmpty } = require("../utils");
const Employee = require("../models/Employee");
const db = require("../db/employee");
const deptDb = require("../db/department");
const roleDb = require("../db/role");

// START - Employee questions
const employeeQuestions = [
	{
		type: "input",
		prefix: "*".cyan.bold,
		message: "Please enter the employee first name",
		name: "first_name",
		validate: validateNonEmpty,
	},
	{
		type: "input",
		prefix: "*".cyan.bold,
		message: "Please enter the employee last name",
		name: "last_name",
		validate: validateNonEmpty,
	},
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Please select the employee role",
		name: "role",
		choices: choices,
	},
];

// ENDS - Employee questions

// START - Functions

async function addEmployee() {
	console.log(` \n Enter Employee's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(employeeQuestions);
	return new Employee(null, info.first_name, info.last_name, info.role, null);
}

async function viewEmployees() {
	console.log(` \n Employees List \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(viewEmployeesQuestions);
	return info.view;
}

async function updateEmployee() {
	console.log(` \n Update Employee's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(updateEmployeeQuestions);
	return new Employee(
		null,
		info.update_first_name,
		info.update_last_name,
		null,
		null
	);
}

async function removeEmployee() {
	console.log(` \n Remove Employee \n`.cyan.bold.dim.italic);
}

async function employeesByDepartment() {
	console.log(` \n Employees by Department \n`.cyan.bold.dim.italic);
}

async function employeesByManager() {
	console.log(` \n Employees by Manager \n`.cyan.bold.dim.italic);
}

async function employeesByRole() {
	console.log(` \n Employees by Role \n`.cyan.bold.dim.italic);
}

async function updateEmployeeRole() {
	console.log(` \n Update Employee's Role \n`.cyan.bold.dim.italic);
}

async function updateEmployeeManager() {
	console.log(` \n Update Employee's Role \n`.cyan.bold.dim.italic);
}

module.exports = {
	addEmployee,
	viewEmployees,
	updateEmployee,
	removeEmployee,
	employeesByDepartment,
	employeesByManager,
	employeesByRole,
	updateEmployeeRole,
	updateEmployeeManager,
};
