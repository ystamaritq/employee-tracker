const { promptListActions, promptAddEmployeeQuestions } = require("./prompts");
const { handleError, instructionsMessage } = require("./utils");

async function init() {
	try {
		instructionsMessage();
		const actionSelected = await promptListActions();
		if (actionSelected == "Add Employee") {
			const employee = await promptAddEmployeeQuestions();
		}
	} catch (err) {
		handleError(err);
	}
}

init();
