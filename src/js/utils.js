const { cyan } = require("colors");

const handleError = (err) => {
	if (err) console.log("There was an error: ".red + err);
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

module.exports = {
	handleError: handleError,
	instructionsMessage: instructionsMessage,
};
