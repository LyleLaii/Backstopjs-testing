module.exports = async (page, scenario, vp) => {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    const mainpage = require("../../../project_configs/bq_web/elements/mainpage_ele");

    var selector_list = []
    var banner_number = page.$$(mainpage.main['banner_buttons']).lenght
    for(var i=1;i<=banner_number;i++) {
        selector_list.push(`#carouselIndicators > ol > li:nth-child(${i})`)
    }
    return {
        selector_list
    }
};

