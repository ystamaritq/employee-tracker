const inquirer = require("inquirer");
const { cyan } = require("colors");
const { validateNonEmpty } = require("./../../utils");

// START - Department questions
const addDepartment = [
	{
		type: "input",
		prefix: "*".cyan.bold,
		message: "Please add the department's name",
		name: "name",
		validate: validateNonEmpty,
	},
];

const removeDepartment = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Select which department do you like to remove",
		name: "remove",
		validate: validateNonEmpty,
	},
];

const viewAllDepartments = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "List of Departments",
		name: "view",
		validate: validateNonEmpty,
	},
];

const updateDepartment = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Select a department to update",
		name: "update",
		validate: validateNonEmpty,
	},
];
// ENDS - Department questions
