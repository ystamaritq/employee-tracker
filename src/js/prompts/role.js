const inquirer = require("inquirer");
const cTable = require("console.table");
const { cyan } = require("colors");
const { validateNonEmpty } = require("../utils");
const db = require("../db/role");
const deptDb = require("../db/department");
const Role = require("../models/Role");

// START - Roles questions
async function getRoleQuestions(defaults = {}) {
	const departments = await deptDb.readAll();
	const choices = departments.map((d) => ({
		name: `|${d.id}| ${d.name}|`,
		value: d.id,
	}));

	const questions = await inquirer.prompt([
		{
			type: "input",
			prefix: "*".cyan.bold,
			message: `Please enter role title (enter to keep current value)`,
			name: "title",
			default: defaults.title,
			validate: validateNonEmpty,
		},
		{
			type: "input",
			prefix: "*".cyan.bold,
			message: "Please enter role salary (enter to keep current value)",
			name: "salary",
			default: defaults.salary,
			validate: validateNonEmpty,
		},
		{
			type: "list",
			prefix: "*".cyan.bold,
			message: "Select a department (enter to keep current value)",
			name: "department_id",
			default: defaults.department_id,
			choices: choices,
		},
	]);

	return questions;
}

async function selectedRole() {
	const roles = await db.readAll();
	const choices = roles.map((r) => ({
		name: `${r.id} | ${r.title} | ${r.salary} | ${r.department_id}`,
		value: r.id,
	}));
	const answers = await inquirer.prompt([
		{
			type: "list",
			prefix: "*".cyan.bold,
			message: "Select a role to update",
			name: "selected",
			choices: choices,
		},
	]);
	return answers.selected;
}

// ENDS - Roles questions

//START - Role prompts

async function addRole() {
	console.log(` \nEnter Role's Info \n`.cyan.bold.dim.italic);
	const info = await getRoleQuestions();
	db.create(new Role(null, info.title, info.salary, info.department_id));
}

async function viewAllRoles() {
	console.log(` \nView all Roles \n`.cyan.bold.dim.italic);
	const roles = await db.readAll();
	console.table(roles);
}

async function updateRoles() {
	console.log(` \n Select Role's to Update \n`.cyan.bold.dim.italic);

	const selectedId = await selectedRole();

	const selectedRoleInfo = await db.readOne(selectedId);

	console.log(` \nUpdate Role's Info \n`.cyan.bold.dim.italic);

	const answers = await getRoleQuestions(selectedRoleInfo);

	db.update(
		new Role(selectedId, answers.title, answers.salary, answers.department_id)
	);
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
