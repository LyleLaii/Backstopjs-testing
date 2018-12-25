const default_config = require('../../../project_configs/bq_web/common_config')
const codepage = require(default_config.PAGE_ELEMENTS_PATH + 'codepage_ele')


var test_cases = {
    "scenarios":[
      {
        "label":default_config.DEFAULT_DESKTOP_CONF['prefix_label'] + "Codepage general",
        "url": 'https://i.bigquant.com/',
        "viewports": default_config.DEFAULT_DESKTOP_CONF['viewports'],
        "misMatchThreshold": default_config.DEFAULT_MISMATCHTHRESHOLD,
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS,
        "cookiePath": default_config.COOKIES_PATH + "desktop_itsatest.json",
        "onBeforeScript": "puppet/common/onBefore.js",
        "readySelectors": [codepage.main['folder_area']],
        "delay": 2000
      }
    ]
}


module.exports = test_cases