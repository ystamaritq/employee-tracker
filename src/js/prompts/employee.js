const inquirer = require("inquirer");
const cTable = require("console.table");
const { cyan } = require("colors");
const { validateNonEmpty } = require("../utils");
const Employee = require("../models/Employee");
const db = require("../db/employee");
const deptDb = require("../db/department");
const roleDb = require("../db/role");
const departmentDb = require("../db/department");
const employee = require("../db/employee");

// START - Employee questions
async function getEmployeeQuestions(defaults = {}) {
	const rolesList = await roleDb.readAll();
	const roles = rolesList.map((r) => ({ name: r.title, value: r.id }));
	const managerList = await employee.readAll();
	const managers = managerList.map((m) => ({
		name: `|${m.first_name}|${m.last_name}|`,
		value: m.id,
	}));

	const questions = await inquirer.prompt([
		{
			type: "input",
			prefix: "*".cyan.bold,
			message: "Please enter the employee first name",
			name: "first_name",
			default: defaults.first_name,
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
			default: defaults.role_id,
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
			message: "Please select a manager \n",
			name: "manager_id",
			default: defaults.manager_id,
			when: (answers) => answers.hasManager && managers.length > 0,
			choices: managers,
		},
	]);

	return questions;
}

async function selectedEmployee() {
	const employees = await employee.readAll();
	const choices = employees.map((e) => ({
		name: `${e.id} | ${e.first_name} ${e.last_name} | ${e.department} | ${e.role}`,
		value: e.id,
	}));
	const answers = await inquirer.prompt([
		{
			type: "list",
			prefix: "*".cyan.bold,
			message: `Select an employee \n`,
			name: "selected",
			choices: choices,
		},
	]);
	return answers.selected;
}

async function selectedRole() {
	const rolesList = await roleDb.readAll();
	const roles = rolesList.map((r) => ({
		name: `${r.title} -- ${r.department}`,
		value: r.id,
	}));
	const answers = await inquirer.prompt([
		{
			type: "list",
			prefix: "*".cyan.bold,
			message: "Please select a role",
			name: "selected",
			choices: roles,
		},
	]);
	return answers.selected;
}

async function selectedDepartment() {
	const departmentList = await departmentDb.readAll();
	const departments = departmentList.map((d) => ({
		name: d.name,
		value: d.id,
	}));
	const answers = await inquirer.prompt([
		{
			type: "list",
			prefix: "*".cyan.bold,
			message: "Please select a department",
			name: "selected",
			choices: departments,
		},
	]);
	return answers.selected;
}

// ENDS - Employee questions

// START - Functions

async function addEmployee() {
	const roles = await roleDb.readAll();
	if (roles.length == 0) {
		console.log(
			`\nWe can't create an employee till we have at least one role  \n`.red
		);
		return;
	}

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

	const employeeInfo = await db.readOne(employeeId);

	const info = await getEmployeeQuestions(employeeInfo);

	db.update(
		new Employee(
			employeeId,
			info.first_name,
			info.last_name,
			info.role_id,
			info.manager_id
		)
	);
}

async function getAllManagers() {
	console.log(` \n Managers \n`.cyan.bold.dim.italic);
	const managers = await employee.readAllManagers();
	console.table(managers);
}

async function removeEmployee() {
	console.log(` \n Select Employee to Remove \n`.cyan.bold.dim.italic);
	const selectedId = await selectedEmployee();
	db.remove(selectedId);
}

async function employeesByDepartment() {
	console.log(` \n Employees by Department \n`.cyan.bold.dim.italic);
	const selectedId = await selectedDepartment();
	const employees = await employee.readAllByDepartment(selectedId);
	console.table(employees);
}

async function budgetByDepartment() {
	console.log(` \n Budget by Department \n`.cyan.bold.dim.italic);
	const selectedId = await selectedDepartment();
	const budget = await employee.budgetByDepartment(selectedId);
	console.table(budget);
}

async function employeesByManager() {
	console.log(` \n Employees by Manager \n`.cyan.bold.dim.italic);
	const selectedId = await selectedEmployee();
	const employees = await employee.readAllByManager(selectedId);
	console.table(employees);
}

async function employeesByRole() {
	console.log(` \n Employees by Role \n`.cyan.bold.dim.italic);
	const selectedId = await selectedRole();
	const employees = await employee.readAllByRole(selectedId);
	console.table(employees);
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
	updateEmployeeManager,
	budgetByDepartment,
	getAllManagers,
};
