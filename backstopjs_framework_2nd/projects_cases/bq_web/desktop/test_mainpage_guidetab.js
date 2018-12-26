const Scenarios = require('../../../project_configs/scenarios_config')

var testScenarios = new Scenarios('bq_web','desktop')

const mainpage = testScenarios.get_elementpage('mainpage_ele')

testScenarios.testCases(
    {
        "label": "Mainpage_Guidetab nologin",
        "selector": mainpage.main['guidetab_area'],
        "readySelector": mainpage.main['mine_area'],
        "misMatchThreshold" : 1.5
    }
)

testScenarios.testCases(
    {
        "label": "Mainpage_Guidetab login",
        "cookiePath": "desktop_itsatest.json",
        "onBeforeScript": "puppet/common/onBefore.js",
        "clickSelector":mainpage.main['guidetab_button'],
        "selector": mainpage.main['guidetab_area'],
        "readySelector": mainpage.main['mine_area'],
        "misMatchThreshold" : 1.5
    }
)

module.exports = testScenarios.generate_cases().allScenarios