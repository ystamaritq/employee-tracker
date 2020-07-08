const inquirer = require("inquirer");
const colors = require("colors");

const handleError = (err) => {
	if (err) console.log("There was an error: ".red + err);
};

const instructionsMessage = () =>
	console.log(
		`
******************************************************************************************
*                                                                                        *
*                             "Employee Tracker"                                         *
*                                                                                        *
* This utility will walk you through A solution for managing a company's employees       *
* using node, inquirer, and MySQL.                                                       *     
*                                                                                        *
* Press ^C at any time to quit.                                                          *
****************************************************************************************** 

		`.cyan
	);

const actions = [
	{
		type: "list",
		prefix: "?".cyan.bold,
		name: "action",
		message: "What would you like to do?",
		choices: [
			new inquirer.Separator(),
			"   Add Department".cyan,
			"   Add Role".cyan,
			"   Add Employee".cyan,
			"   View All Departments".cyan,
			"   View All Roles".cyan,
			"   View All Employees by Department".cyan,
			"   View All Employees by Manager".cyan,
			"   Update Employee Roles".cyan,
			"   Update Employee Manager".cyan,
			"   View Employee by Manager".cyan,
			"   Delete departments".cyan,
			"   Delete roles".cyan,
			"   Delete employees".cyan,
			"   View Total Budget of a Department".cyan,
			new inquirer.Separator(),
		],
	},
];

async function promptListActions() {
	try {
		instructionsMessage();
		const answers = await inquirer.prompt(actions);
		return answers.action;
	} catch (err) {
		handleError(err);
	}
}

promptListActions();
