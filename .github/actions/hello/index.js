const core = require("@actions/core");
const github = require("@actions/github");

try {
    core.debug("This is a debug log");
    core.warning("This is a warning log");
    core.error("This is an error log");

    const name = core.getInput("who-to-greet");
    console.log(`Hello ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString());

    console.log(JSON.stringify(github.context.payload, null, "\t"));
} catch (error) {
    core.setFailed(error.message);
}
