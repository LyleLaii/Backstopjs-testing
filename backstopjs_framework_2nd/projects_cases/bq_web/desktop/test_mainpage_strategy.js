const Scenarios = require('../../../project_configs/scenarios_config')

var testScenarios = new Scenarios('bq_web','desktop')

const mainpage = testScenarios.get_elementpage('mainpage_ele')

// 检查首页strategy部分
testScenarios.testCases(
  {
      "label": "Mainpage_Strategy",
      "viewports": [
        {
          "label": "desktop",
          "width": 1920,
          "height": 2160
        }],
      "removeSelectors": [mainpage.main['navigate_area'], mainpage.main['guide_icon']],
      "readySelector": mainpage.main['mine_area'],
      "clickSelectors":[mainpage.guidetab['close_button']],
      "selectors": [mainpage.main['strategy_area']]
  }
)


module.exports = testScenarios.generate_cases().allScenarios