module.exports = async (page, ele) => {
    await page.waitFor(ele);
    await page.hover(ele);
  };