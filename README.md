# Backstopjs-testing

依照自己理解的PO模式简单改写的测试框架。

如有错误，还请指出。

首先感谢Marc Roland Dacanay的[代码](https://github.com/marcdacz/visual-testing-backstopjs)

backstopjs_framework/_2nd 更适用与多项目

backstopjs_framework_simple 更适用与单项目


## backstopjs_framework_2nd
个人推介，更接近PO模式思想
目录树如下
```
backstopjs_framework_2nd
│  backstop.config.js
│  backstop.js
│  bq_web_backstop.json
│  package.json
│  scenarios.js.bak   // 可与/projects_cases目录下的scenarios.js调换，只修改了路径调用
│  
├─engine_scripts
│  └─puppet
│      ├─bq_web
│      │      mainpage_banner_check.js
│      │      项目脚本
│      │      
│      └─common
│              base.js
│              onBefore.js
│              onReady.js
│              通用脚本
│          
├─projects_cases
│  │  scenarios.js    // scenarios生成脚本
│  │  
│  └─bq_web
│      ├─desktop
│      │      test_armorypage_general.js
│      │      测试用例脚本
│      │      
│      ├─phone
│      └─table
├─projects_data       // 测试数据
│  └─bq_web
│          test_data.txt
│          
└─project_configs
    │  scenarios_config.js   // 测试用例转化scenario脚本，主要填充默认配置
    │  
    └─bq_web
        │  constants_config.js // 默认固定配置
        │  
        ├─cookies
        │      desktop_itsatest.json  // cookies文件目录
        │      
        └─elements
                armorypage_ele.js
                页面元素定位
                
```
与backstopjs_framework类似，将配置文件统一，并在生成配置时添加。

### backstop.js
相比于原版，把`viewports`的配置划分到了用例目录下，不再手动控制；同时增加`filter`参数，用于只执行部分测试。
```
const fs = require('fs');
const backstop = require('backstopjs');
const args = require('yargs').argv;
const project = args.p;
const filter = args.f; // 过滤参数
const cases_path = "./projects_cases/"  // 指定默认用例存放目录


const folders = fs.readdirSync(cases_path)
var projects = []
folders.forEach(function (item, index) {
    let stat = fs.lstatSync(cases_path + item)
    if (stat.isDirectory() === true) {
        projects.push(item)
    }
})

// 以下检测输入，对不存在的项目进行提示
if(!(projects.includes(project))) {
    console.log(`不存在 ${project} 项目，请检查输入`)
    console.log(`目前有的项目为：\n ${projects} \n`)
}

// 通过scenarios.js脚本配置测试用例，根据实际情况调整
const projectData = require(`./projects_cases/scenarios.js`)({
    project: project
});

// 通过backstop.config.js配置测试配置
const projectConfig = require("./backstop.config.js")({
    project: project,
    scenarios: projectData.scenarios.map((scenario) => {
        return Object.assign({}, scenario);
    })
});

let commandToRun = "";

if (args.reference) {
    commandToRun = "reference";
}

if (args.test) {
    commandToRun = "test";
}

if (args.approve) {
    commandToRun = "approve";
}

if (args.openReport) {
    commandToRun = "openReport";
}

process.argv = []; // This is to avoid passing (y)args to the Backstop Client
const fileName = project + '_backstop.json'  // 配置文件增加项目名字用以区分
fs.writeFile(fileName, JSON.stringify(projectConfig, null,
    
    4), 'utf8', () => {
    console.log(`Successfully generated ${fileName} file.`);
    if (commandToRun !== '') {
        console.log(`Executing Command: ${commandToRun}`);
        backstop(commandToRun, { docker: false, config: fileName , filter: filter});
    }
});

```

### backstop.config.js
相比于原版，去掉了`viewports`配置；更改了数据存放位置，根据个人配置绝对`onBeforeScript`,`onReadyScript`是否默认添加。
```
module.exports = options => {
	return {
		"id": options.project,
		"viewports": [],
		// "onBeforeScript": "puppet/common/onBefore.js",
		"onReadyScript": "puppet/common/onReady.js",
		"scenarios": options.scenarios,
		"paths": {
			"bitmaps_reference": `projects_data/${options.project}/bitmaps_reference`,
			"bitmaps_test": `projects_data/${options.project}/bitmaps_test`,
			"engine_scripts": `engine_scripts`,
			"html_report": `projects_data/${options.project}/html_report`,
			"ci_report": `projects_data/${options.project}/ci_report`
		},
		"report": ["browser"],
		"engine": "puppeteer",
		"engineOptions": {
			"args": ["--no-sandbox"]
		},
		"asyncCaptureLimit": 5,
		"asyncCompareLimit": 10,
		"debug": false,
		"debugWindow": false
	}
}
```
### project_cases/scenarios.js
增加目录下用例查找功能
```
module.exports = (options) => {
    var path = require('path');
    const fs = require('fs')
    const scenarios_path = `./projects_cases/${options.project}/`// 确定项目用例目录
    const folders = fs.readdirSync(scenarios_path)
    let folders_path = []
    let scenarios = []
    folders.forEach(function (item, index) {
        let stat = fs.lstatSync(scenarios_path + item)
        if (stat.isDirectory() === true) {
            folders_path.push(scenarios_path + item)
        }
    })

// 根目录下的scenarios与这个文件的区别在于路径调用不一样
    for (const folder of folders_path) {
        let all_files = fs.readdirSync(folder)
        let files = []
        var path_arr = folder.split("/");
        path_arr.splice(1,1)
        const reg = /test_.*/

        for (const file of all_files) {
            if (reg.test(file)) files.push(file);
        }
       
        files.forEach(function (item, index) {
            let file_path = path_arr.join("/") + "/" + item

            let test_cases = require(file_path).scenarios
            scenarios = scenarios.concat(test_cases)
        })
    }

    
    return {
        "scenarios":[
            ...scenarios
        ]
    }
}
```

### project_configs/scenarios_configs.js
一个用例类，提取默认配置对单个用例进行填充
```
class Scenarios {
    constructor(project, type) {
        const project_config = require(`./${project}/constants_config`);
        this.type = type;
        this.DEFAULT_URL = project_config.DEFAULT_URL;
        this.DEFAULT_MISMATCHTHRESHOLD = project_config.DEFAULT_MISMATCHTHRESHOLD;
        this.DEFAULT_REQUIRE_SAME_DIMENSIONS = project_config.DEFAULT_REQUIRE_SAME_DIMENSIONS;
        this.VIEWPORTS = project_config.VIEWPORTS[type];

        this.PAGE_ELEMENTS_PATH = `./${project}/elements/`;
        this.PROJECT_SCRIPT_PATH = `puppet/${project}/`;
        this.COOKIES_PATH = `project_configs/${project}/cookies/`;

        this.scenarios = []
    }

    get_elementpage(element_file) {
        return require(this.PAGE_ELEMENTS_PATH + element_file)
    }

    testCases(options) {
        this.scenarios.push(options)
    }

    generate_cases() {
        var allScenarios = {"scenarios":[]}
        for(const acase of this.scenarios) {
            acase.label = this.type + '_' + acase.label
            if ((!acase.hasOwnProperty("url")) && (!acase.hasOwnProperty("url_path"))) {
                acase.url = this.DEFAULT_URL
            }
            if (acase.hasOwnProperty("url_path")) {
                acase.url = this.DEFAULT_URL + acase.url_path;
                delete acase.url_path
            }
            if (!acase.hasOwnProperty("viewports")) {
                acase.viewports = this.VIEWPORTS
            }
            if (!acase.hasOwnProperty("misMatchThreshold")) {
                acase.misMatchThreshold = this.DEFAULT_MISMATCHTHRESHOLD
            }
            if (!acase.hasOwnProperty("requireSameDimensions")) {
                acase.requireSameDimensions = this.DEFAULT_REQUIRE_SAME_DIMENSIONS
            }
            if (acase.hasOwnProperty("onReadyScript") && (acase.onReadyScript != "puppet/common/onReady.js") ) {
                acase.onReadyScript = this.PROJECT_SCRIPT_PATH + acase.onReadyScript
            }
            if (acase.hasOwnProperty("onBeforeScript") && (acase.onBeforeScript != "puppet/common/onBefore.js") ) {
                acase.onBeforeScript = this.PROJECT_SCRIPT_PATH + acase.onBeforeScript
            }
            if (acase.hasOwnProperty("cookiePath")) {
                acase.cookiePath = this.COOKIES_PATH + acase.cookiePath
            }

            allScenarios.scenarios.push(acase)
        }

        return {
            allScenarios
        }
        
    }

}

module.exports = Scenarios
```


### constants_config.js
保存项目基本信息
```
exports.DEFAULT_URL = 'https://bigquant.com/'

exports.DEFAULT_MISMATCHTHRESHOLD = 0.01

exports.DEFAULT_REQUIRE_SAME_DIMENSIONS = true

exports.VIEWPORTS ={
    'desktop': [
    {
    "label": "desktop",
    "width": 1920,
    "height": 1080
    }
    ]
}
```

### test_*.js
用例
```
const Scenarios = require('../../../project_configs/scenarios_config')

var testScenarios = new Scenarios('bq_web','desktop')

const mainpage = testScenarios.get_elementpage('mainpage_ele')

// 用例描述
testScenarios.testCases(
    {
        "label": "Mainpage_Guidetab nologin",
        "selector": mainpage.main['guidetab_area'],
        "readySelector": mainpage.main['mine_area'],
        "misMatchThreshold" : 1.5
    }
)

testScenarios.testCases(
    {
        "label": "Mainpage_Guidetab login",
        "cookiePath": "desktop_itsatest.json",
        "onBeforeScript": "puppet/common/onBefore.js",
        "clickSelector":mainpage.main['guidetab_button'],
        "selector": mainpage.main['guidetab_area'],
        "readySelector": mainpage.main['mine_area'],
        "misMatchThreshold" : 1.5
    }
)

module.exports = testScenarios.generate_cases().allScenarios
```

## backstopjs_framework
目录树如下
```
backstopjs_framework
│  backstop.config.js // 默认配置
│  backstop.js      // 配置生成、测试运行脚本
│  bq_web_backstop.json // 测试配置
│  scenarios.js     // 用例处理脚本
│  
├─engine_scripts
│  └─puppet
│      ├─bq_web
│      │      mainpage_banner_check.js
│      │      项目脚本
│      │      
│      └─common
│              base.js
│              onBefore.js
│              onReady.js
│              通用脚本
│          
├─projects_cases
│  └─bq_web
│      │  project_path_config.js // 路径配置文件
│      │  
│      ├─desktop
│      │      constants.js  //默认配置
│      │      test_armorypage_general.js
│      │      测试脚本
│      │      
│      ├─phone
│      └─table
├─projects_data // 测试结果保存
│  └─bq_web
│          test_data.txt
│          
└─project_configs
    └─bq_web
        │  common_config.js //通用配置
        │  
        ├─cookies
        │      desktop_itsatest.json
        │      cookies文件
        │     
        └─elements
                armorypage_ele.js
        页面元素定位配置
```




### scenarios.js
相比于原版，增加目录下用例查找功能，增加对默认字段的检查、填充。
```
module.exports = (options) => {
    const fs = require('fs')
    const scenarios_path = `./projects_cases/${options.project}/`   // 确定项目用例目录
    const folders = fs.readdirSync(scenarios_path)
    let folders_path = []
    let scenarios = []
    folders.forEach(function (item, index) {
        let stat = fs.lstatSync(scenarios_path + item)
        if (stat.isDirectory() === true) {
            folders_path.push(scenarios_path + item + '/')
        }
    })

    // 以下用于选择`test_`开头的文件作为用例文件
    for (const folder of folders_path) {
        let all_files = fs.readdirSync(folder)
        let files = []
        const reg = /test_.*/

        for (const file of all_files) {
            if (reg.test(file)) files.push(file);
        }
        if (files.length == 0) continue;
       
        let basic_conf = require(folder + 'constants.js')  // 读取默认配置文件
        files.forEach(function (item, index) {
            let file_path = folder + item

            let test_cases = require(file_path).scenarios
            // 针对每一个用例配置，检查基础配置是否存在，没有则加上
            for (const acase of test_cases) {
                acase.label = basic_conf.DEFAULT_LABEL + acase.label
                if ((!acase.hasOwnProperty("url")) && (!acase.hasOwnProperty("url_path"))){
                    acase.url = basic_conf.DEFAULT_URL
                }
                if (acase.hasOwnProperty("url_path")) {
                    acase.url = basic_conf.DEFAULT_URL + '/' + acase.url_path;  // 针对路由单独添加路径即可
                    delete acase.url_path
                }
                if (!acase.hasOwnProperty("viewports")){
                    acase.viewports = basic_conf.DEFAULT_VIEWPORTS
                }
                if (!acase.hasOwnProperty("misMatchThreshold")){
                    acase.misMatchThreshold = basic_conf.DEFAULT_MISMATCHTHRESHOLD
                }
                if (!acase.hasOwnProperty("requireSameDimensions")){
                    acase.requireSameDimensions = basic_conf.DEFAULT_REQUIRE_SAME_DIMENSIONS
                }
                scenarios = scenarios.concat(acase)
            }
        })
    }

    
    return {
        "scenarios":[
            ...scenarios
        ]
    }
}
```
### common_config.js
项目默认配置文件，暂时只记录Url等信息
```
exports.DEFAULT_URL = 'https://bigquant.com'

exports.DEFAULT_MISMATCHTHRESHOLD = 0.01

exports.DEFAULT_REQUIRE_SAME_DIMENSIONS = true

```

### constants.js
视图默认配置文件，获取项目默认配置文件属性
```
const common_conf = require("../../../project_configs/bq_web/common_config")

exports.DEFAULT_LABEL = 'desktop_'

exports.DEFAULT_VIEWPORTS = [
    {
    "label": "desktop",
    "width": 1920,
    "height": 1080
}
]

exports.DEFAULT_URL = common_conf.DEFAULT_URL

exports.DEFAULT_MISMATCHTHRESHOLD = common_conf.DEFAULT_MISMATCHTHRESHOLD

exports.DEFAULT_REQUIRE_SAME_DIMENSIONS = common_conf.DEFAULT_REQUIRE_SAME_DIMENSIONS
```

### test_*.js
测试用例配置文件,通过引入其他文件确定各页面元素位置，方便后续修改等。
```
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
```

#### *_ele.js
记录元素定位
```
const main = {
	'main_area':"#main"
}

module.exports.main = main
```

### custom_script.js
用户自定义脚本操作
```
module.exports = async (page, scenario, vp) => {
    const baseaction = require('../common/base')

    await baseaction.click(page, scenario.clickSelector);
    await page.waitFor(1000);
    await baseaction.hover(page, scenario.hoverSelector);
    await page.waitFor(1000);
};
```

### path_config.js
路径位置文件，目前该模式造成层级增加，增加路径配置文件便于维护
#### engine_scripts\puppet\bq_web\project_path_config.js
```
exports.PAGE_ELEMENTS_PATH = '../../../project_configs/bq_web/elements/'
```
#### projects_cases\bq_web\project_path_config.js
生成测试scenarios用的文件，需要注意cookies的路径和script路径的配置
```
exports.PAGE_ELEMENTS_PATH = '../../../project_configs/bq_web/elements/'

exports.COOKIES_PATH = './project_configs/bq_web/cookies/'

exports.PROJECT_SCRIPT_PATH = 'puppet/bq_web/'

```

## backstopjs_framework_simple
目录树如下
```
backstopjs_framework_simple
│  backstop.config.js	    // 默认配置
│  backstop.js	    // 配置生成、运行测试脚本
│  bq_web_backstop.json  // 测试配置
│  scenarios.js	    // 用例处理脚本
│  
├─configs
│  │  common_config.js
│  │  通用配置  
│  │
│  ├─cookies
│  │      desktop_itsatest.json
│  │      各种cookie
│  │      
│  └─elements
│          armorypage_ele.js
│          页面元素定位文件
│          
├─engine_scripts
│  └─puppet
│      ├─bq_web
│      │      mainpage_banner_check.js
│      │      特殊脚本
│      │      
│      └─common
│              base.js
│              onBefore.js
│              onReady.js
│	           通用脚本
│               
└─test_cases
    │  project_path_config.js
    │  路径配置文件
    │  
    ├─desktop
    │      constants.js   // 固定参数
    │      test_armorypage_general.js
    │      测试用例
    │      
    ├─phone
    └─table

```

与backstopjs_framework主要差异在路径处理上，不再描述。
