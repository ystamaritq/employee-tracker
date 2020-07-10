const { showActions } = require("./prompts");
const { handleError, instructionsMessage } = require("./utils");

async function init() {
	instructionsMessage();
	while (true) {
		try {
			await showActions();
		} catch (err) {
			handleError(err);
		}
	}
}

init();
