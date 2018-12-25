const default_config = require('../../../project_configs/bq_web/common_config')
const tradepage = require(default_config.PAGE_ELEMENTS_PATH + 'tradepage_ele')


var test_cases = {
    "scenarios":[
      {
        "label":default_config.DEFAULT_DESKTOP_CONF['prefix_label'] + "Tradepage general",
        "url": default_config.DEFAULT_URL + 'trade',
        "viewports": default_config.DEFAULT_DESKTOP_CONF['viewports'],
        "misMatchThreshold": default_config.DEFAULT_MISMATCHTHRESHOLD,
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS,
        "cookiePath": default_config.COOKIES_PATH + "desktop_itsatest.json",
        "onBeforeScript": "puppet/common/onBefore.js",
        "readySelectors": [tradepage.main['strategy_area']],
        "delay": 2000
      }
    ]
}


module.exports = test_cases