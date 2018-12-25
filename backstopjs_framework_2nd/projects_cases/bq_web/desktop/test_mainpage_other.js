const default_config = require('../../../project_configs/bq_web/common_config')
const mainpage = require(default_config.PAGE_ELEMENTS_PATH + 'mainpage_ele')


var test_cases = {
    "scenarios":[
      {
        "label":default_config.DEFAULT_DESKTOP_CONF['prefix_label'] + "Mainpage_Other",
        "url": default_config.DEFAULT_URL,
        "hideSelectors": [mainpage.main['navigate_area'],mainpage.main['banner_area'],mainpage.main['strategy_area']],
        "removeSelectors": [mainpage.main['guide_icon'],mainpage.main['support_icon']],
        "clickSelectors": [mainpage.guidetab['close_button']],
        "viewports": default_config.DEFAULT_DESKTOP_CONF['viewports'],
        "misMatchThreshold": default_config.DEFAULT_MISMATCHTHRESHOLD,
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS
      }
    ]
}


module.exports = test_cases