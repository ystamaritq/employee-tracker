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
		choices: ["test1", "test2", "test3"],
	},
];

const viewEmployeesQuestions = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "List of Employees",
		name: "view",
		choices: ["test1", "test2", "test3"],
	},
];

const updateEmployeeQuestions = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Please select the employee to update",
		name: "update",
		choices: ["test1", "test2", "test3"],
	},
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

const removeEmployeeQuestions = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Please select the employee to remove",
		name: "remove",
		choices: ["test1", "test2", "test3"],
	},
];

const employeesByDepartmentQuestions = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Please select a department to display the employees",
		name: "by_department",
		choices: ["test1", "test2", "test3"],
	},
];

const employeesByManagerQuestions = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Please select the manager to display the employees",
		name: "by_manager",
		choices: ["test1", "test2", "test3"],
	},
];

const employeesByRoleQuestions = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Please select the role to display the employees",
		name: "by_role",
		choices: ["test1", "test2", "test3"],
	},
];

const updateEmployeeRoleQuestions = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Please select the employee to update the role",
		name: "employee_role",
		choices: ["test1", "test2", "test3"],
	},
];

const updateEmployeeManagerQuestions = [
	{
		type: "list",
		prefix: "*".cyan.bold,
		message: "Please select the employee to update",
		name: "employee_manager",
		choices: ["test1", "test2", "test3"],
	},
];

// ENDS - Employee questions

// START - Functions

// add employees function
async function addEmployee() {
	console.log(` \n Enter Employee's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(addEmployeeQuestions);
	return new Employee(null, info.first_name, info.last_name, info.role, null);
}

// view employees function
async function viewEmployees() {
	console.log(` \n Employees List \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(viewEmployeesQuestions);
	return info.view;
}

// update employees function
async function updateEmployee() {
	console.log(` \n Update Employee's Info \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(updateEmployeeQuestions);
	return new Employee(
		null,
		info.update_first_name,
		info.update_last_name,
		null,
		null
	);
}

// remove employee function
async function removeEmployee() {
	console.log(` \n Remove Employee \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(removeEmployeeQuestions);
	return console.log("Employee removed");
}

// view employees by department function
async function employeesByDepartment() {
	console.log(` \n Employees by Department \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(employeesByDepartmentQuestions);
	return info.by_department;
}

//  view employees by manager function
async function employeesByManager() {
	console.log(` \n Employees by Manager \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(employeesByManagerQuestions);
	return info.by_manager;
}

// view employees by role
async function employeesByRole() {
	console.log(` \n Employees by Role \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(employeesByRoleQuestions);
	return info.by_role;
}

async function updateEmployeeRole() {
	console.log(` \n Update Employee's Role \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(updateEmployeeRoleQuestions);
	return info.employee_role;
}

async function updateEmployeeManager() {
	console.log(` \n Update Employee's Role \n`.cyan.bold.dim.italic);
	const info = await inquirer.prompt(updateEmployeeManagerQuestions);
	return info.employee_manager;
}

module.exports = {
	addEmployee,
	viewEmployees,
	updateEmployee,
	removeEmployee,
	employeesByDepartment,
	employeesByManager,
	employeesByRole,
	updateEmployeeRole,
	updateEmployeeManager,
};
