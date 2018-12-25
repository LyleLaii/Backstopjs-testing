module.exports = async (page, scenario, vp) => {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    const element_path = require('./project_path_config')
    const tutorialpage = require(element_path.PAGE_ELEMENTS_PATH + 'tutorialpage_ele')
    const baseaction = require('../common/base')

    await baseaction.hover(page, tutorialpage.posts['main_4']);
    await page.waitFor(1000)
};

