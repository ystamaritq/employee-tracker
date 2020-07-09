const { showActions } = require("./prompts");
const { handleError, instructionsMessage } = require("./utils");

async function init() {
	try {
		instructionsMessage();
		showActions();
	} catch (err) {
		handleError(err);
	}
}

init();
