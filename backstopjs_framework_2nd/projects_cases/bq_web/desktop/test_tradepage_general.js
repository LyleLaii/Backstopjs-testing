const Scenarios = require('../../../project_configs/scenarios_config')

var testScenarios = new Scenarios('bq_web','desktop')

const tradepage = testScenarios.get_elementpage('tradepage_ele')

testScenarios.testCases(
    {
        "label": "Tradepage general",
        "url_path": 'trade',
        "cookiePath": "desktop_itsatest.json",
        "onBeforeScript": "puppet/common/onBefore.js",
        "readySelector": tradepage.main['strategy_area'],
        "delay": 2000 
    }
)

module.exports = testScenarios.generate_cases().allScenarios