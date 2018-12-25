module.exports = async (page, scenario, vp) => {
    const baseaction = require('../common/base')

    await baseaction.click(page, scenario.clickSelector);
    await page.waitFor(1000);
    await baseaction.mouse_move(page,0,0)
    await page.waitFor(1000)
};
