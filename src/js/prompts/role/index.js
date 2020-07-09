const inquirer = require("inquirer");
const { cyan } = require("colors");
const { validateNonEmpty } = require("./../../utils");

// START - Roles questions
const addRoleQuestions = [
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

const removeRoleQuestions = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Select which role do you like to remove",
		name: "remove",
		validate: validateNonEmpty,
	},
];

const viewAllRolesQuestions = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Roles",
		name: "view",
		validate: validateNonEmpty,
	},
];

const updateRolesQuestions = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Select a role to update",
		name: "update",
		validate: validateNonEmpty,
	},
];
// ENDS - Roles questions

//START - Role prompts

async function addRole() {
	console.log(` \nEnter Role's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(addRoleQuestions);
	return info.add;
}

async function viewAllRoles() {
	console.log(` \nView all Roles \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(viewAllRolesQuestions);
	return info;
}

async function updateRoles() {
	console.log(` \nUpdate Role's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(updateRolesQuestions);
	return info;
}

async function removeRole() {
	console.log(` \nSelect the Role to Remove \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(removeRoleQuestions);
	return info;
}
//ENDS - Role prompts
