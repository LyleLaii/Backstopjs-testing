const project_path = require('../project_path_config')
const mainpage = require(project_path.PAGE_ELEMENTS_PATH + 'mainpage_ele')


var test_cases = {
    "scenarios":[{
        "label": "Mainpage_Strategy",
        "viewports": [
          {
            "label": "desktop",
            "width": 1920,
            "height": 2160
          }],
        "removeSelectors": [mainpage.main['navigate_area'], mainpage.main['guide_icon']],
        "onReadyScript": project_path.PROJECT_SCRIPT_PATH + 'mainpage_strategy_check.js',
        "clickSelector":mainpage.guidetab['close_button'],
        "selectors": [mainpage.main['strategy_area']],
      }]
}


module.exports = test_cases