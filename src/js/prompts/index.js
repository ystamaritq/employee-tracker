const inquirer = require("inquirer");
const { cyan } = require("colors");
const Employee = require("../models/Employee");

// START - Questions
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

//employee add prompt
const addEmployee = [
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
];

// START - Roles questions
const addRole = [
	{
		type: "input",
		prefix: "*".cyan.bold,
		message: "Please add role title",
		name: "title",
		validate: validateNonEmpty,
	},
	{
		type: "number",
		prefix: "*".cyan.bold,
		message: "Please enter role salary",
		name: "salary",
		validate: validateNonEmpty,
	},
];

const removeRole = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Select which role do you like to remove",
		name: "remove",
		validate: validateNonEmpty,
	},
];

const viewAllRoles = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Roles",
		name: "view",
		validate: validateNonEmpty,
	},
];

const updateRoles = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Select a role to update",
		name: "update",
		validate: validateNonEmpty,
	},
];

// ENDS - Roles questions

async function promptListActions() {
	const answers = await inquirer.prompt(actions);
	return answers.action;
}

async function promptAddEmployee() {
	console.log(` \nEnter Employee's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(addEmployee);
	return new Employee(info.first_name, info.last_name);
}

async function promptUpdateRoles() {
	console.log(` \nUpdate Role's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(updateRoles);
	return info;
}

//start role prompts
async function promptAddRole() {
	console.log(` \nEnter Employee's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(addRole);
	return info;
}

async function promptRemoveRole() {
	console.log(` \nEnter Employee's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(removeRole);
	return info;
}

async function promptViewAllRoles() {
	console.log(` \nEnter Employee's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(viewAllRoles);
	return info;
}

//ends role prompts

function validateNonEmpty(input) {
	return !input || input === "" ? "Invalid input" : true;
}

// Ends - Prompts

module.exports = {
	promptListActions: promptListActions,
	promptAddEmployee: promptAddEmployee,
};
