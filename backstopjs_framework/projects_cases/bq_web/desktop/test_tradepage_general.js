const project_path = require('../project_path_config')
const tradepage = require(project_path.PAGE_ELEMENTS_PATH + 'tradepage_ele')


var test_cases = {
    "scenarios":[
      {
        "label": "Tradepage general",
        "url_path": 'trade',
        "cookiePath": project_path.COOKIES_PATH + "desktop_itsatest.json",
        "onBeforeScript": "puppet/common/onBefore.js",
        "readySelectors": [tradepage.main['strategy_area']],
        "delay": 2000
      }
    ]
}


module.exports = test_cases