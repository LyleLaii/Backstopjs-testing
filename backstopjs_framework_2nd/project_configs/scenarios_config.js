class Scenarios {
    constructor(project, type) {
        const project_config = require(`./${project}/constants_config`);
        this.type = type;
        this.DEFAULT_URL = project_config.DEFAULT_URL;
        this.DEFAULT_MISMATCHTHRESHOLD = project_config.DEFAULT_MISMATCHTHRESHOLD;
        this.DEFAULT_REQUIRE_SAME_DIMENSIONS = project_config.DEFAULT_REQUIRE_SAME_DIMENSIONS;
        this.PAGE_ELEMENTS_PATH = project_config.PAGE_ELEMENTS_PATH;
        this.PROJECT_SCRIPT_PATH = project_config.PROJECT_SCRIPT_PATH;
        this.COOKIES_PATH = project_config.COOKIES_PATH;
        this.VIEWPORTS = project_config.VIEWPORTS[type];
        this.scenarios = []
    }

    testcase(options) {
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
                acase.url = this.DEFAULT_URL + '/' + acase.url_path;
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
            allScenarios['scenarios'].push(acase)
        
        return {
            allScenarios
        }
        }
    }

}