const Scenarios = require('../../../project_configs/scenarios_config')

var testScenarios = new Scenarios('bq_web','desktop')

const codepage = testScenarios.get_elementpage('codepage_ele')

testScenarios.testCases(
    {
        "label": "Codepage general",
        "url": 'https://i.bigquant.com/',
        "cookiePath": "desktop_itsatest.json",
        "onBeforeScript": "puppet/common/onBefore.js",
        "readySelector": codepage.main['folder_area'],
        "delay": 1000 
    }
)

module.exports = testScenarios.generate_cases().allScenarios