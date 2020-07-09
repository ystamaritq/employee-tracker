const inquirer = require("inquirer");
const { cyan } = require("colors");
const { validateNonEmpty } = require("./../../utils");
const Department = require("../../models/Department");
const db = require("../../db/department");

// START - Department questions
function getDepartmentQuestions(defaults = {}) {
	return [
		{
			type: "input",
			prefix: "*".cyan.bold,
			message: "Department's name",
			name: "name",
			default: defaults.name,
			validate: validateNonEmpty,
		},
	];
}

async function selectDepartment() {
	const departments = await db.readAll();
	const choices = departments.map((d) => ({ name: d.name, value: d.id }));
	const answers = await inquirer.prompt([
		{
			type: "list",
			prefix: "*".cyan.bold,
			message: "Select a department",
			name: "selected",
			choices: choices,
		},
	]);
	return answers.selected;
}

// ENDS - Department questions

//START - Department prompts

async function addDepartment() {
	console.log(` \nEnter Department's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(getDepartmentQuestions());
	db.create(new Department(null, info.name));
}

async function viewAllDepartment() {
	const departments = await db.readAll();
	console.log(` \nDEPARTMENTS \n`.cyan.bold.dim.italic);
	console.log(departments);
}

async function updateDepartment() {
	console.log(` \nSelect the Department to Update \n`.cyan.bold.dim.italic);
	const selectedId = await selectDepartment();
	const selectedDepartment = await db.readOne(selectedId.selected);
	console.log(` \nUpdate Department's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(
		getDepartmentQuestions(selectedDepartment)
	);
	db.update(new Department(selectedId, info.name));
}

async function removeDepartment() {
	console.log(` \nSelect the Department to Remove \n`.cyan.bold.dim.italic);
	const selectedId = await selectDepartment();
	db.remove(selectedId);
}
//ENDS - Department prompts

module.exports = {
	addDepartment,
	viewAllDepartment,
	updateDepartment,
	removeDepartment,
};
