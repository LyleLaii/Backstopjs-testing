const Scenarios = require('../../../project_configs/scenarios_config')

var testScenarios = new Scenarios('bq_web','desktop')

const armorypage = testScenarios.get_elementpage('armorypage_ele')

testScenarios.testCases(
    {
        "label": "Armorypage_Mine general",
        "url_path": 'armory/mine',
        "cookiePath": "desktop_itsatest.json",
        "readySelector": armorypage.main['mine_area'],
        "delay": 1000 
    }
)

testScenarios.testCases(
    {
        "label": "Armorypage_Shared general",
        "url_path": 'armory/mine',
        "readySelector": armorypage.main['shared_area'],
        "delay": 1000 
    }
)

testScenarios.testCases(
  {
      "label": "Armorypage_Mall general",
      "url_path": 'armory/mine',
      "readySelector": armorypage.main['mall_area'],
      "delay": 1000 
  }
)

module.exports = testScenarios.generate_cases().allScenarios