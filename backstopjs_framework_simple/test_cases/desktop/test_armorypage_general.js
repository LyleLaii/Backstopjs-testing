const project_path = require('../project_path_config')
const armorypage = require(project_path.PAGE_ELEMENTS_PATH + 'armorypage_ele')


var test_cases = {
    "scenarios":[
      {
        "label": "Armorypage_Mine general",
        "url_path": 'armory/mine',
        "cookiePath": project_path.COOKIES_PATH + "desktop_itsatest.json",
        "onBeforeScript": "puppet/common/onBefore.js",
        "readySelectors": [armorypage.main['mine_area']],
        "delay": 1000
      },
      {
        "label": "Armorypage_Shared general",
        "url_path": 'armory/shared',
        "readySelectors": [armorypage.main['shared_area']],
        "delay": 1000
      },
      {
        "label": "Armorypage_Mall general",
        "url_path": 'armory/mall',
        "readySelectors": [armorypage.main['mall_area']],
        "delay": 1000
      }
    ]
}


module.exports = test_cases