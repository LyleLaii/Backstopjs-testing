const default_config = require('../../../project_configs/bq_web/common_config')
const docspage = require(default_config.PAGE_ELEMENTS_PATH + 'docspage_ele')

var test_cases = {
    "scenarios":[
      {
        "label":default_config.DEFAULT_DESKTOP_CONF['prefix_label'] + "Docspage_Usinghelp",
        "url": default_config.DEFAULT_URL + 'docs/#/usinghelp',
        "viewports": default_config.DEFAULT_DESKTOP_CONF['viewports'],
        "misMatchThreshold": default_config.DEFAULT_MISMATCHTHRESHOLD,
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS,
        "readySelector": docspage.main['main_area'],
        "delay": 2000
      }
    ]
}


module.exports = test_cases