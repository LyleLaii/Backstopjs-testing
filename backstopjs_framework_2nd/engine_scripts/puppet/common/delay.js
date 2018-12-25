module.exports = async (page, scenario, vp) => {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  await delay(1000)
};
