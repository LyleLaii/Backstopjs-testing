const fs = require('fs');
const backstop = require('backstopjs');
const args = require('yargs').argv;
const project = args.p;
// const view = args.v;
const filter = args.filter;
// const constants = require('./scenarios');
// const projectConstants = require(`./projects/${project}/constants`);

const projectData = require(`./scenarios.js`)({
    project: project
});


const projectConfig = require("./backstop.config.js")({
    project: project,
    // viewport: projectConstants.VIEWPORTS[view],
    scenarios: projectData.scenarios.map((scenario) => {
        return Object.assign({}, scenario);
    })
});

let commandToRun = "";

if (args.reference) {
    commandToRun = "reference";
}

if (args.test) {
    commandToRun = "test";
}

if (args.approve) {
    commandToRun = "approve";
}

if (args.openReport) {
    commandToRun = "openReport";
}

process.argv = []; // This is to avoid passing (y)args to the Backstop Client
const fileName = project + '_backstop.json'
fs.writeFile(fileName, JSON.stringify(projectConfig, null,
    
    4), 'utf8', () => {
    console.log(`Successfully generated ${fileName} file.`);
    // if (commandToRun !== '') {
    //     console.log(`Executing Command: ${commandToRun}`);
    //     backstop(commandToRun, { docker: true, config: fileName , filter:filter});
    // }
});

