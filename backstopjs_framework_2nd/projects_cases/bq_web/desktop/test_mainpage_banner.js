const default_config = require('../../../project_configs/bq_web/common_config')
const mainpage = require(default_config.PAGE_ELEMENTS_PATH + 'mainpage_ele')

const banner_number = mainpage.main['banner_number']

var test_cases = {
    "scenarios":[]
}

for (var i=1;i<=banner_number;i++) {
    banner_case = {
        "label":default_config.DEFAULT_DESKTOP_CONF['prefix_label'] + `Mainpage_Banner${i}`,
        "url": default_config.DEFAULT_URL,
        "clickSelectors":[mainpage.guidetab['close_button'], `#carouselIndicators > ol > li:nth-child(${i})`],
        "viewports": default_config.DEFAULT_DESKTOP_CONF['viewports'],
        "misMatchThreshold": default_config.DEFAULT_MISMATCHTHRESHOLD,
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS,
        "selectors": [mainpage.main['banner_area']]
    }
    test_cases.scenarios.push(banner_case)
}

module.exports = test_cases