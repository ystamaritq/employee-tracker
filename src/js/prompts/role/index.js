const inquirer = require("inquirer");
const cTable = require("console.table");
const { cyan } = require("colors");
const { validateNonEmpty } = require("./../../utils");
const db = require("../../db/role");
const deptDb = require("../../db/department");
const Role = require("../../models/Role");

// START - Roles questions
async function getRoleQuestions() {
	const departments = await deptDb.readAll();
	const choices = departments.map((d) => ({
		name: `|${d.id}| ${d.name}|`,
		value: d.id,
	}));
	return inquirer.prompt([
		{
			type: "input",
			prefix: "*".cyan.bold,
			message: "Please enter role title",
			name: "title",
			validate: validateNonEmpty,
		},
		{
			type: "input",
			prefix: "*".cyan.bold,
			message: "Please enter role salary",
			name: "salary",
			validate: validateNonEmpty,
		},
		{
			type: "list",
			prefix: "*".cyan.bold,
			message: "Select a department",
			name: "department_id",
			choices: choices,
		},
	]);
}

const removeRoleQuestions = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Select which role do you like to remove",
		name: "remove",
		choices: ["test1", "test2", "test3"],
	},
];

const viewAllRolesQuestions = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Roles",
		name: "view",
		choices: ["test1", "test2", "test3"],
	},
];

const updateRolesQuestions = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Select a role to update",
		name: "update",
		choices: ["test1", "test2", "test3"],
	},
];
// ENDS - Roles questions

//START - Role prompts

async function addRole() {
	console.log(` \nEnter Role's Info \n`.cyan.bold.dim.italic);
	const info = await getRoleQuestions();
	db.create(new Role(null, info.title, info.salary, info.department_id));
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

module.exports = {
	addRole,
	viewAllRoles,
	updateRoles,
	removeRole,
};
