const Scenarios = require('../../../project_configs/scenarios_config')

var testScenarios = new Scenarios('bq_web','desktop')

const mainpage = testScenarios.get_elementpage('mainpage_ele')
const banner_number = mainpage.main['banner_number']

for (var i=1;i<=banner_number;i++) {
    testScenarios.testCases(
        {
            "label": `Mainpage_Banner${i}`,
            "clickSelectors":[mainpage.guidetab['close_button'], `#carouselIndicators > ol > li:nth-child(${i})`],
            "selectors": [mainpage.main['banner_area']]
        }
    )
}

module.exports = testScenarios.generate_cases()