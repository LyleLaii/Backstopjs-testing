const Scenarios = require('../../../project_configs/scenarios_config')

var testScenarios = new Scenarios('bq_web','desktop')

const tutorialpage = testScenarios.get_elementpage('tutorialpage_ele')



testScenarios.testCases(
    {
      "label":"Tutorialpage_Main",
      "url_path": 'tutorial/',
      "onReadyScript": 'tutorialpage_new1.js' 
    }
)

testScenarios.testCases(
    {
      "label":"Tutorialpage_Ai",
      "url_path": 'tutorial/',
      "clickSelector": tutorialpage.main['ai'],
      "hoverSelector": tutorialpage.posts['ai_4'],
      "onReadyScript": 'tutorialpage_check.js'
    }
)

testScenarios.testCases(
    {
      "label":"Tutorialpage_Bigstudio",
      "url_path": 'tutorial/',
      "clickSelector": tutorialpage.main['bigstudio'],
      "hoverSelector": tutorialpage.posts['bigstudio_4'],
      "onReadyScript": 'tutorialpage_check.js'
    }
)

testScenarios.testCases(
    {
      "label":"Tutorialpage_Ceying",
      "url_path": 'tutorial/',
      "clickSelector": tutorialpage.main['ceying'],
      "hoverSelector": tutorialpage.posts['ceying_4'],
      "onReadyScript": 'tutorialpage_check.js'
    }
)

testScenarios.testCases(    
    {
      "label":"Tutorialpage_Jinr",
      "url_path": 'tutorial/',
      "clickSelector": tutorialpage.main['jinr'],
      "hoverSelector": tutorialpage.posts['jinr_4'],
      "onReadyScript": 'tutorialpage_check.js'
    }
)

testScenarios.testCases(
    {
      "label":"Tutorialpage_Math",
      "url_path": 'tutorial/',
      "clickSelector": tutorialpage.main['math'],
      "hoverSelector": tutorialpage.posts['math_4'],
      "onReadyScript": 'tutorialpage_check.js'
    }
)

testScenarios.testCases(    
    {
      "label":"Tutorialpage_Python",
      "url_path": 'tutorial/',
      "clickSelector": tutorialpage.main['python'],
      "hoverSelector": tutorialpage.posts['python_4'],
      "onReadyScript": 'tutorialpage_check.js'
    }
)

module.exports = testScenarios.generate_cases().allScenarios