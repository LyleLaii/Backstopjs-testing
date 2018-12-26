const Scenarios = require('../../../project_configs/scenarios_config')

var testScenarios = new Scenarios('bq_web','desktop')

const docspage = testScenarios.get_elementpage('docspage_ele')

testScenarios.testCases(
    {
        "label": "Docspage_Usinghelp general",
        "url_path": 'docs/#/usinghelp',
        "readySelector": docspage.main['main_area'],
        "delay": 2000 
    }
)

module.exports = testScenarios.generate_cases().allScenarios