module.exports = (options) => {
    const fs = require('fs')
    const scenarios_path = `./projects_cases/${options.project}/`
    const folders = fs.readdirSync(scenarios_path)
    let folders_path = []
    let scenarios = []
    folders.forEach(function (item, index) {
        let stat = fs.lstatSync(scenarios_path + item)
        if (stat.isDirectory() === true) {
            folders_path.push(scenarios_path + item + '/')
        }
    })

    for (const folder of folders_path) {
        let all_files = fs.readdirSync(folder)
        let files = []
        const reg = /test_.*/

        for (const file of all_files) {
            if (reg.test(file)) files.push(file);
        }
        if (files.length == 0) continue;
       
        files.forEach(function (item, index) {
            let file_path = folder + item

            let test_cases = require(file_path).scenarios
            scenarios = scenarios.concat(test_cases)
        })
    }

    
    return {
        "scenarios":[
            ...scenarios
        ]
    }
}