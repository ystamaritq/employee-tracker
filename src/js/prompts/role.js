const inquirer = require("inquirer");
const cTable = require("console.table");
const { cyan, red } = require("colors");
const { validateNonEmpty, validateDecimal } = require("../utils");
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
			message: "Please enter role title",
			name: "title",
			default: defaults.title,
			validate: validateNonEmpty,
		},
		{
			type: "input",
			prefix: "*".cyan.bold,
			message: "Please enter role salary",
			name: "salary",
			default: defaults.salary,
			validate: validateDecimal,
		},
		{
			type: "list",
			prefix: "*".cyan.bold,
			message: "Select a department",
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
		name: `${r.id} | ${r.title} | ${r.salary} | ${r.department}`,
		value: r.id,
	}));
	const answers = await inquirer.prompt([
		{
			type: "list",
			prefix: "*".cyan.bold,
			message: "Roles",
			name: "selected",
			choices: choices,
		},
	]);
	return answers.selected;
}

// ENDS - Roles questions

//START - Role prompts

async function addRole() {
	const departments = await deptDb.readAll();
	if (departments.length == 0) {
		console.log(
			` \nWe can't create roles till we have at least one department  \n`.red
		);
		return;
	}
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
	const selectedRoleId = await selectedRole();
	db.remove(selectedRoleId);
}
//ENDS - Role prompts

module.exports = {
	addRole,
	viewAllRoles,
	updateRoles,
	removeRole,
};
