const inquirer = require("inquirer");
const { cyan } = require("colors");

// START - Questions
const actions = [
	{
		type: "list",
		prefix: "?".cyan.bold,
		name: "action",
		message: "What would you like to do?",
		choices: [
			"Add Employee".cyan,
			"View All Employees".cyan,
			"Update Employee".cyan,
			"Remove Employee".cyan,
			"Update Employee Role".cyan,
			"Update Employee Manager".cyan,
			"View All Employees by Department".cyan,
			"View All Employees by Manager".cyan,
			"View All Employees by Role".cyan,
			"Add Role".cyan,
			"View All Roles".cyan,
			"Update Role".cyan,
			"Remove Role".cyan,
			"Add Department".cyan,
			"View All Departments".cyan,
			"Update Department".cyan,
			"Remove Department".cyan,
		],
	},
];

// ENDS - Questions

// START - Prompts
async function promptListActions() {
	const answers = await inquirer.prompt(actions);
	return answers.action;
}

// Ends - Prompts

module.exports = {
	promptListActions: promptListActions,
};
