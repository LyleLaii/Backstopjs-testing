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
       
        let basic_conf = require(folder + 'constants.js')
        files.forEach(function (item, index) {
            let file_path = folder + item

            let test_cases = require(file_path).scenarios
            for (const acase of test_cases) {
                acase.label = basic_conf.DEFAULT_LABEL + acase.label
                if ((!acase.hasOwnProperty("url")) && (!acase.hasOwnProperty("url_path"))){
                    acase.url = basic_conf.DEFAULT_URL
                }
                if (acase.hasOwnProperty("url_path")) {
                    acase.url = basic_conf.DEFAULT_URL + '/' + acase.url_path;
                    delete acase.url_path
                }
                if (!acase.hasOwnProperty("viewports")){
                    acase.viewports = basic_conf.DEFAULT_VIEWPORTS
                }
                if (!acase.hasOwnProperty("misMatchThreshold")){
                    acase.misMatchThreshold = basic_conf.DEFAULT_MISMATCHTHRESHOLD
                }
                if (!acase.hasOwnProperty("requireSameDimensions")){
                    acase.requireSameDimensions = basic_conf.DEFAULT_REQUIRE_SAME_DIMENSIONS
                }
                scenarios = scenarios.concat(acase)
            }
        })
    }

    
    return {
        "scenarios":[
            ...scenarios
        ]
    }
}