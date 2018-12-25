const project_path = require("../../../project_configs/bq_web/common_config")
const mainpage = require(project_path.PAGE_ELEMENTS_PATH + 'mainpage_ele')


var test_cases = {
    "scenarios":[
      {
        "label": "Mainpage_Guidetab nologin",
        "selectors": [mainpage.main['guidetab_area']],
        "misMatchThreshold" : 1.5
      },
      {
        "label": "Mainpage_Guidetab login",
        "cookiePath": project_path.COOKIES_PATH + "desktop_itsatest.json",
        "onBeforeScript": "puppet/common/onBefore.js",
        "clickSelectors":[mainpage.main['guidetab_button']],
        "selectors": [mainpage.main['guidetab_area']],
        "misMatchThreshold" : 1.5
      }
    ]
}


module.exports = test_cases