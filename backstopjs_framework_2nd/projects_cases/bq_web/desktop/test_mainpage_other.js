const Scenarios = require('../../../project_configs/scenarios_config')

var testScenarios = new Scenarios('bq_web','desktop')

const mainpage = testScenarios.get_elementpage('mainpage_ele')

testScenarios.testCases(
    {
        "label": "Mainpage_Other general",
        "hideSelectors": [mainpage.main['navigate_area'],mainpage.main['banner_area'],mainpage.main['strategy_area']],
        "removeSelectors": [mainpage.main['guide_icon'],mainpage.main['support_icon']],
        "clickSelector": mainpage.guidetab['close_button']
    }
)

module.exports = testScenarios.generate_cases().allScenarios