const default_config = require('../../../project_configs/bq_web/common_config')
const tutorialpage = require(default_config.PAGE_ELEMENTS_PATH + 'tutorialpage_ele')

var test_cases = {
    "scenarios":[
      {
        "label":default_config.DEFAULT_DESKTOP_CONF['prefix_label'] + "Tutorialpage_Main",
        "url": default_config.DEFAULT_URL + 'tutorial/',
        "onReadyScript": default_config.PROJECT_SCRIPT_PATH + 'tutorialpage_new1.js',
        "viewports": default_config.DEFAULT_DESKTOP_CONF['viewports'],
        "misMatchThreshold": default_config.DEFAULT_MISMATCHTHRESHOLD,
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS
      },
      {
        "label":default_config.DEFAULT_DESKTOP_CONF['prefix_label'] + "Tutorialpage_Ai",
        "url": default_config.DEFAULT_URL + 'tutorial/',
        "clickSelector": tutorialpage.main['ai'],
        "hoverSelector": tutorialpage.posts['ai_4'],
        "onReadyScript": default_config.PROJECT_SCRIPT_PATH + 'tutorialpage_check.js',
        "viewports": default_config.DEFAULT_DESKTOP_CONF['viewports'],
        "misMatchThreshold": default_config.DEFAULT_MISMATCHTHRESHOLD,
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS
      },
      {
        "label":default_config.DEFAULT_DESKTOP_CONF['prefix_label'] + "Tutorialpage_Bigstudio",
        "url": default_config.DEFAULT_URL + 'tutorial/',
        "clickSelector": tutorialpage.main['bigstudio'],
        "hoverSelector": tutorialpage.posts['bigstudio_4'],
        "onReadyScript": default_config.PROJECT_SCRIPT_PATH + 'tutorialpage_check.js',
        "viewports": default_config.DEFAULT_DESKTOP_CONF['viewports'],
        "misMatchThreshold": default_config.DEFAULT_MISMATCHTHRESHOLD,
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS
      },
      {
        "label":default_config.DEFAULT_DESKTOP_CONF['prefix_label'] + "Tutorialpage_Ceying",
        "url": default_config.DEFAULT_URL + 'tutorial/',
        "clickSelector": tutorialpage.main['ceying'],
        "hoverSelector": tutorialpage.posts['ceying_4'],
        "onReadyScript": default_config.PROJECT_SCRIPT_PATH + 'tutorialpage_check.js',
        "viewports": default_config.DEFAULT_DESKTOP_CONF['viewports'],
        "misMatchThreshold": default_config.DEFAULT_MISMATCHTHRESHOLD,
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS
      },
      {
        "label":default_config.DEFAULT_DESKTOP_CONF['prefix_label'] + "Tutorialpage_Jinr",
        "url": default_config.DEFAULT_URL + 'tutorial/',
        "clickSelector": tutorialpage.main['jinr'],
        "hoverSelector": tutorialpage.posts['jinr_4'],
        "onReadyScript": default_config.PROJECT_SCRIPT_PATH + 'tutorialpage_check.js',
        "viewports": default_config.DEFAULT_DESKTOP_CONF['viewports'],
        "misMatchThreshold": default_config.DEFAULT_MISMATCHTHRESHOLD,
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS
      },
      {
        "label":default_config.DEFAULT_DESKTOP_CONF['prefix_label'] + "Tutorialpage_Math",
        "url": default_config.DEFAULT_URL + 'tutorial/',
        "clickSelector": tutorialpage.main['math'],
        "hoverSelector": tutorialpage.posts['math_4'],
        "onReadyScript": default_config.PROJECT_SCRIPT_PATH + 'tutorialpage_check.js',
        "viewports": default_config.DEFAULT_DESKTOP_CONF['viewports'],
        "misMatchThreshold": default_config.DEFAULT_MISMATCHTHRESHOLD,
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS
      },
      {
        "label":default_config.DEFAULT_DESKTOP_CONF['prefix_label'] + "Tutorialpage_Python",
        "url": default_config.DEFAULT_URL + 'tutorial/',
        "clickSelector": tutorialpage.main['python'],
        "hoverSelector": tutorialpage.posts['python_4'],
        "onReadyScript": default_config.PROJECT_SCRIPT_PATH + 'tutorialpage_check.js',
        "viewports": default_config.DEFAULT_DESKTOP_CONF['viewports'],
        "misMatchThreshold": default_config.DEFAULT_MISMATCHTHRESHOLD,
        "requireSameDimensions": default_config.DEFAULT_REQUIRE_SAME_DIMENSIONS
      },
    ]
}


module.exports = test_cases