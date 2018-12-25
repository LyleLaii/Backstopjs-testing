const project_path = require('../project_path_config')
const docspage = require(project_path.PAGE_ELEMENTS_PATH + 'docspage_ele')

var test_cases = {
    "scenarios":[
      {
        "label": "Docspage_Usinghelp",
        "url_path": 'docs/#/usinghelp',
        "readySelector": docspage.main['main_area'],
        "delay": 2000
      }
    ]
}


module.exports = test_cases