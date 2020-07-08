const inquirer = require("inquirer");
const { cyan } = require("colors");
const Employee = require("./Employee");

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

// ENDS - Questions

// START - Prompts
async function promptListActions() {
	const answers = await inquirer.prompt(actions);
	return answers.action;
}

async function promptAddEmployeeQuestions() {
	console.log(` \nEnter Employee's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(addEmployee);
	return new Employee(info.first_name, info.last_name);
}

function validateNonEmpty(input) {
	return !input || input === "" ? "Invalid input" : true;
}

// Ends - Prompts

module.exports = {
	promptListActions: promptListActions,
	promptAddEmployeeQuestions: promptAddEmployeeQuestions,
};
