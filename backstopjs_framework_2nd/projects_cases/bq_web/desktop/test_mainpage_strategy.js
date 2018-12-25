const default_config = require('../../../project_configs/bq_web/common_config')
const mainpage = require(default_config.PAGE_ELEMENTS_PATH + 'mainpage_ele')


var test_cases = {
    "scenarios":[{
        "label":default_config.DEFAULT_DESKTOP_CONF['prefix_label'] + "Mainpage_Strategy",
        "url": default_config.DEFAULT_URL,
        "viewports": [
          {
            "label": "desktop",
            "width": 1920,
            "height": 2160
          }],
        "misMatchThreshold": default_config.DEFAULT_MISMATCHTHRESHOLD,
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS,
        "removeSelectors": [mainpage.main['navigate_area'], mainpage.main['guide_icon']],
        "onReadyScript": default_config.PROJECT_SCRIPT_PATH + 'mainpage_strategy_check.js',
        "clickSelector":mainpage.guidetab['close_button'],
        "selectors": [mainpage.main['strategy_area']]
      }]
}


module.exports = test_cases