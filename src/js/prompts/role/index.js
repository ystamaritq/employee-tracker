const inquirer = require("inquirer");
const { cyan } = require("colors");
const { validateNonEmpty } = require("./../../utils");

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

//START - Role prompts

async function promptAddRole() {
	console.log(` \nEnter Employee's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(addRole);
	return info;
}

async function promptViewAllRoles() {
	console.log(` \nEnter Employee's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(viewAllRoles);
	return info;
}

async function promptUpdateRoles() {
	console.log(` \nUpdate Role's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(updateRoles);
	return info;
}

async function promptRemoveRole() {
	console.log(` \nEnter Employee's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(removeRole);
	return info;
}

//ENDS - Role prompts
