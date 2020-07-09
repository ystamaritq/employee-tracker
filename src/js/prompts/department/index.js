const inquirer = require("inquirer");
const { cyan } = require("colors");
const { validateNonEmpty } = require("./../../utils");
const Department = require("../../models/Department");

// START - Department questions
const addDepartmentQuestions = [
	{
		type: "input",
		prefix: "*".cyan.bold,
		message: "Please add the department's name",
		name: "name",
		validate: validateNonEmpty,
	},
];

const removeDepartmentQuestions = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Select which department do you like to remove",
		name: "remove",
		validate: validateNonEmpty,
	},
];

const viewAllDepartmentsQuestions = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "List of Departments",
		name: "view",
		validate: validateNonEmpty,
	},
];

const updateDepartmentQuestions = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Select a department to update",
		name: "update",
		validate: validateNonEmpty,
	},
];
// ENDS - Department questions

//START - Department prompts

async function addDepartment() {
	console.log(` \nEnter Department's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(addDepartmentQuestions);
	return new Department(null, info.name);
}

async function viewAllDepartment() {
	console.log(` \nView all Department \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(viewAllDepartmentsQuestions);
	return info.view;
}

async function updateDepartment() {
	console.log(` \nUpdate Department's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(updateDepartmentQuestions);
	return new Department(null, info.name);
}

async function removeDepartment() {
	console.log(` \nSelect the Department to Remove \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(removeDepartmentQuestions);
	return console.log("Department Removed");
}
//ENDS - Department prompts
