const inquirer = require("inquirer");
const { promptListActions } = require("./prompts");
const { handleError, instructionsMessage } = require("./utils");

async function init() {
	try {
		instructionsMessage();
		const actionSelected = await promptListActions();
	} catch (err) {
		handleError(err);
	}
}

init();
