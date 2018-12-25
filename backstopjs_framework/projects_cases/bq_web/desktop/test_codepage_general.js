const project_path = require("../../../project_configs/bq_web/common_config")
const codepage = require(project_path.PAGE_ELEMENTS_PATH + 'codepage_ele')


var test_cases = {
    "scenarios":[
      {
        "label": "Codepage general",
        "url": 'https://i.bigquant.com/',
        "cookiePath": project_path.COOKIES_PATH + "desktop_itsatest.json",
        "onBeforeScript": "puppet/common/onBefore.js",
        "readySelectors": [codepage.main['folder_area']],
        "delay": 2000
      }
    ]
}


module.exports = test_cases