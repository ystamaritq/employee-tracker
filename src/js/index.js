const { promptListActions, promptAddEmployee } = require("./prompts");
const { handleError, instructionsMessage } = require("./utils");

async function init() {
	try {
		instructionsMessage();
		const actionSelected = await promptListActions();
		if (actionSelected == "Add Employee") {
			const employee = await promptAddEmployee();
		}
	} catch (err) {
		handleError(err);
	}
}

init();
