const { cyan } = require("colors");

const showErrors = false;

const handleError = (err) => {
	if (err) {
		console.log(
			"\n\nThere was an error: ".red +
				(err.message ? err.message : err) +
				"\n\n"
		);
		if (showErrors) throw err;
	}
};

const instructionsMessage = () =>
	console.log(
		`
******************************************************************************************
*                                                                                        *
*                             "Employee Tracker"                                         *
*                                                                                        *
* This utility will walk you through A solution for managing a company's employees       *
* using node, inquirer, and MySQL.                                                       *     
*                                                                                        *
* Press ^C at any time to quit.                                                          *
****************************************************************************************** 

		`.cyan
	);

function validateNonEmpty(input) {
	return !input || input === "" ? "Invalid input" : true;
}

function validateDecimal(input) {
	const re = /^[1-9]\d*(\.\d+)?$/;
	return !input || !re.test(input) ? "Invalid decimal" : true;
}

module.exports = {
	handleError,
	instructionsMessage,
	validateNonEmpty,
	validateDecimal,
};
