const fs = require('fs');
const backstop = require('backstopjs');
const args = require('yargs').argv;
const project = args.p;
const filter = args.f;
const cases_path = "./projects_cases/"


const folders = fs.readdirSync(cases_path)
var projects = []
folders.forEach(function (item, index) {
    let stat = fs.lstatSync(cases_path + item)
    if (stat.isDirectory() === true) {
        projects.push(item)
    }
})

if(!(projects.includes(project))) {
    console.log(`不存在 ${project} 项目，请检查输入`)
    console.log(`目前有的项目为：\n ${projects} \n`)
}

const projectData = require(`./projects_cases/scenarios.js`)({
    project: project
});

const projectConfig = require("./backstop.config.js")({
    project: project,
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
    if (commandToRun !== '') {
        console.log(`Executing Command: ${commandToRun}`);
        backstop(commandToRun, { docker: false, config: fileName , filter: filter});
    }
});

