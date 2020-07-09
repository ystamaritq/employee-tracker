const inquirer = require("inquirer");
const { cyan } = require("colors");
const { validateNonEmpty } = require("./../../utils");
const Employee = require("./../../models/Employee");

// START - Employee questions
const addEmployeeQuestions = [
	{
		type: "input",
		prefix: "*".cyan.bold,
		message: "Please enter the employee first name",
		name: "first_name",
		validate: validateNonEmpty,
	},
	{
		type: "input",
		prefix: "*".cyan.bold,
		message: "Please enter the employee last name",
		name: "last_name",
		validate: validateNonEmpty,
	},
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Please select the employee role",
		name: "role",
		validate: validateNonEmpty,
	},
];

const viewEmployees = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "List of Employees",
		name: "view",
	},
];

const updateEmployee = [
	{
		type: "input",
		prefix: "*".cyan.bold,
		message: "Please enter the employee first name",
		name: "update_first_name",
		validate: validateNonEmpty,
	},
	{
		type: "input",
		prefix: "*".cyan.bold,
		message: "Please enter the employee last name",
		name: "update_last_name",
		validate: validateNonEmpty,
	},
];

const removeEmployee = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Please select the employee to remove",
		name: "remove",
	},
];

const employeesByDepartment = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Please select a department to display the employees",
		name: "by_department",
	},
];

const employeesByManager = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Please select the manager to display the employees",
		name: "by_manager",
	},
];

const employeesByRole = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Please select the role to display the employees",
		name: "by_role",
	},
];
// ENDS - Employee questions

// START - functions

async function addEmployee() {
	console.log(` \nEnter Employee's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(addEmployeeQuestions);
	return new Employee(null, info.first_name, info.last_name, null, null);
}

module.exports = { addEmployee };
