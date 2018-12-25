const project_path = require("../../../project_configs/bq_web/common_config")
const mainpage = require(project_path.PAGE_ELEMENTS_PATH + 'mainpage_ele')

const banner_number = mainpage.main['banner_number']

var test_cases = {
    "scenarios":[]
}

for (var i=1;i<=banner_number;i++) {
    banner_case = {
        "label": `Mainpage_Banner${i}`,
        "clickSelectors":[mainpage.guidetab['close_button'], `#carouselIndicators > ol > li:nth-child(${i})`],
        "selectors": [mainpage.main['banner_area']],
    }
    test_cases.scenarios.push(banner_case)
}

module.exports = test_cases