async function click(page, ele) {
  await page.waitFor(ele);
  await page.click(ele);
};6

async function hover(page, ele) {
  await page.waitFor(ele);
  await page.hover(ele);
};

async function mouse_move(page, x, y) {
  await page.mouse.move(x,y);
};


module.exports.click = click
module.exports.hover = hover
module.exports.mouse_move = mouse_move
