const inquirer = require("inquirer");
const cTable = require("console.table");
const { cyan } = require("colors");
const { validateNonEmpty } = require("../utils");
const Employee = require("../models/Employee");
const db = require("../db/employee");
const deptDb = require("../db/department");
const roleDb = require("../db/role");
const employee = require("../db/employee");

// START - Employee questions
async function getEmployeeQuestions(defaults = {}) {
	const rolesList = await roleDb.readAll();
	const roles = rolesList.map((r) => ({ name: r.title, value: r.id }));
	const managerList = await employee.readAll();
	const managers = managerList.map((m) => ({
		name: `|${m.first_name}|${m.last_name}|${m.role_id}`,
		value: m.id,
	}));

	const questions = await inquirer.prompt([
		{
			type: "input",
			prefix: "*".cyan.bold,
			message: "Please enter the employee first name",
			name: "first_name",
			default: defaults.name,
			validate: validateNonEmpty,
		},
		{
			type: "input",
			prefix: "*".cyan.bold,
			message: "Please enter the employee last name",
			name: "last_name",
			default: defaults.last_name,
			validate: validateNonEmpty,
		},
		{
			type: "list",
			prefix: "*".cyan.bold,
			message: "Please select the employee role",
			name: "role_id",
			default: defaults.role_selected,
			choices: roles,
		},
		{
			type: "confirm",
			prefix: "*".cyan.bold,
			message: "Would you like to set a manager?",
			name: "hasManager",
			default: false,
			when: (answers) => managers.length > 0,
		},
		{
			type: "list",
			prefix: "*".cyan.bold,
			message: "Please select a manager",
			name: "manager_id",
			when: (answers) => answers.hasManager && managers.length > 0,
			choices: managers,
		},
	]);

	return questions;
}

async function selectedEmployee() {
	const employees = await employee.readAll();
	const choices = employees.map((e) => ({
		name: `${e.id} | ${e.first_name} | ${e.last_name} | ${e.role_id}`,
		value: e.id,
	}));
	const answers = await inquirer.prompt([
		{
			type: "list",
			prefix: "*".cyan.bold,
			message: "Employees",
			name: "selected",
			choices: choices,
		},
	]);
	return answers.selected;
}

// ENDS - Employee questions

// START - Functions

async function addEmployee() {
	console.log(` \n Enter Employee's Info \n`.cyan.bold.dim.italic);
	const info = await getEmployeeQuestions({});
	db.create(
		new Employee(
			null,
			info.first_name,
			info.last_name,
			info.role_id,
			info.manager_id
		)
	);
}

async function viewEmployees() {
	console.log(` \n Employees List \n`.cyan.bold.dim.italic);
	const employees = await employee.readAll();
	console.table(employees);
}

async function updateEmployee() {
	const employeeId = await selectedEmployee();

	console.log(` \n Update Employee's Info \n`.cyan.bold.dim.italic);

	return new Employee(
		null,
		info.update_first_name,
		info.update_last_name,
		info.role_id,
		info.manager_id
	);
}

async function removeEmployee() {
	console.log(` \n Select Employee to Remove \n`.cyan.bold.dim.italic);
	const selectedId = await selectedEmployee();
	db.remove(selectedId);
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
