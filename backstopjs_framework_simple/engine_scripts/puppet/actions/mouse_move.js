module.exports = async (page, x, y) => {
    await page.mouse.move(x,y);
  };