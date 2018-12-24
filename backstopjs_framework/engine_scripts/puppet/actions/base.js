async click(page, ele) => {
  await page.waitFor(ele);
  await page.click(ele);
};

module.exports.click = click