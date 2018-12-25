const project_path = require('../project_path_config')
const mainpage = require(project_path.PAGE_ELEMENTS_PATH + 'mainpage_ele')


var test_cases = {
    "scenarios":[
      {
        "label": "Mainpage_Other",
        "hideSelectors": [mainpage.main['navigate_area'],mainpage.main['banner_area'],mainpage.main['strategy_area']],
        "removeSelectors": [mainpage.main['guide_icon'],mainpage.main['support_icon']],
        "clickSelectors": [mainpage.guidetab['close_button']]
      }
    ]
}


module.exports = test_cases