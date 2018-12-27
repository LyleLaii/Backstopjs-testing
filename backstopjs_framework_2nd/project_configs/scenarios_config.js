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

        return allScenarios
        
    }

}

module.exports = Scenarios