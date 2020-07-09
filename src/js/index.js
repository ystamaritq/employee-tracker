const { showActions } = require("./prompts");
const { handleError, instructionsMessage } = require("./utils");

async function init() {
	try {
		instructionsMessage();
		while (true) {
			await showActions();
		}
	} catch (err) {
		handleError(err);
	}
}

init();
