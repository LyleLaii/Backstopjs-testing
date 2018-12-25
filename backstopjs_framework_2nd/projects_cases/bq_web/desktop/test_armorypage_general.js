const default_config = require('../../../project_configs/bq_web/common_config')
const armorypage = require(default_config.PAGE_ELEMENTS_PATH + 'armorypage_ele')

var test_cases = {
    "scenarios":[
      {
        "label": default_config.DEFAULT_DESKTOP_CONF['prefix_label'] + "Armorypage_Mine general",
        "url": default_config.DEFAULT_URL + 'armory/mine',
        "misMatchThreshold": default_config.DEFAULT_MISMATCHTHRESHOLD,
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS,
        "viewports": default_config.DEFAULT_DESKTOP_CONF['viewports'],
        "cookiePath": default_config.COOKIES_PATH + "desktop_itsatest.json",
        "onBeforeScript": "puppet/common/onBefore.js",
        "readySelectors": [armorypage.main['mine_area']],
        "delay": 1000
      },
      {
        "label": default_config.DEFAULT_DESKTOP_CONF['prefix_label'] +"Armorypage_Shared general",
        "viewports": default_config.DEFAULT_DESKTOP_CONF['viewports'],
        "misMatchThreshold": default_config.DEFAULT_MISMATCHTHRESHOLD,
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS,        
        "url": default_config.DEFAULT_URL + 'armory/shared',
        "readySelectors": [armorypage.main['shared_area']],
        "delay": 1000
      },
      {
        "label": default_config.DEFAULT_DESKTOP_CONF['prefix_label'] +"Armorypage_Mall general",
        "viewports": default_config.DEFAULT_DESKTOP_CONF['viewports'],
        "misMatchThreshold": default_config.DEFAULT_MISMATCHTHRESHOLD,
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS,        
        "url": default_config.DEFAULT_URL + 'armory/mall',
        "readySelectors": [armorypage.main['mall_area']],
        "delay": 1000
      }
    ]
}


module.exports = test_cases