const project_path = require("../../../project_configs/bq_web/common_config")
const tutorialpage = require(project_path.PAGE_ELEMENTS_PATH + 'tutorialpage_ele')

var test_cases = {
    "scenarios":[
      {
        "label": "Tutorialpage_Main",
        "url_path": 'tutorial/',
        "onReadyScript": project_path.PROJECT_SCRIPT_PATH + 'tutorialpage_new1.js'
      },
      {
        "label": "Tutorialpage_Ai",
        "url_path": 'tutorial/',
        "clickSelector": tutorialpage.main['ai'],
        "hoverSelector": tutorialpage.posts['ai_4'],
        "onReadyScript": project_path.PROJECT_SCRIPT_PATH + 'tutorialpage_check.js'
      },
      {
        "label": "Tutorialpage_Bigstudio",
        "url_path": 'tutorial/',
        "clickSelector": tutorialpage.main['bigstudio'],
        "hoverSelector": tutorialpage.posts['bigstudio_4'],
        "onReadyScript": project_path.PROJECT_SCRIPT_PATH + 'tutorialpage_check.js'
      },
      {
        "label": "Tutorialpage_Ceying",
        "url_path": 'tutorial/',
        "clickSelector": tutorialpage.main['ceying'],
        "hoverSelector": tutorialpage.posts['ceying_4'],
        "onReadyScript": project_path.PROJECT_SCRIPT_PATH + 'tutorialpage_check.js'
      },
      {
        "label": "Tutorialpage_Jinr",
        "url_path": 'tutorial/',
        "clickSelector": tutorialpage.main['jinr'],
        "hoverSelector": tutorialpage.posts['jinr_4'],
        "onReadyScript": project_path.PROJECT_SCRIPT_PATH + 'tutorialpage_check.js'
      },
      {
        "label": "Tutorialpage_Math",
        "url_path": 'tutorial/',
        "clickSelector": tutorialpage.main['math'],
        "hoverSelector": tutorialpage.posts['math_4'],
        "onReadyScript": project_path.PROJECT_SCRIPT_PATH + 'tutorialpage_check.js'
      },
      {
        "label": "Tutorialpage_Python",
        "url_path": 'tutorial/',
        "clickSelector": tutorialpage.main['python'],
        "hoverSelector": tutorialpage.posts['python_4'],
        "onReadyScript": project_path.PROJECT_SCRIPT_PATH + 'tutorialpage_check.js'
      },
    ]
}


module.exports = test_cases