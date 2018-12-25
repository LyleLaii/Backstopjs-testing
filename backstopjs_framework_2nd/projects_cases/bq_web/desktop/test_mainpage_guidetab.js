const default_config = require('../../../project_configs/bq_web/common_config')
const mainpage = require(default_config.PAGE_ELEMENTS_PATH + 'mainpage_ele')


var test_cases = {
    "scenarios":[
      {
        "label":default_config.DEFAULT_DESKTOP_CONF['prefix_label'] + "Mainpage_Guidetab nologin",
        "url": default_config.DEFAULT_URL,
        "selectors": [mainpage.main['guidetab_area']],
        "viewports": default_config.DEFAULT_DESKTOP_CONF['viewports'],
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS,
        "misMatchThreshold" : 1.5
      },
      {
        "label":default_config.DEFAULT_DESKTOP_CONF['prefix_label'] + "Mainpage_Guidetab login",
        "url": default_config.DEFAULT_URL,
        "cookiePath": default_config.COOKIES_PATH + "desktop_itsatest.json",
        "onBeforeScript": "puppet/common/onBefore.js",
        "clickSelectors":[mainpage.main['guidetab_button']],
        "selectors": [mainpage.main['guidetab_area']],
        "viewports": default_config.DEFAULT_DESKTOP_CONF['viewports'],
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS,
        "misMatchThreshold" : 1.5
      }
    ]
}


module.exports = test_cases