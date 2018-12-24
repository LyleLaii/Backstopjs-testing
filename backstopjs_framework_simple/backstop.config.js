module.exports = options => {
	return {
		"id": options.project,
		"viewports": [],
		"onBeforeScript": "puppet/onBefore.js",
		"onReadyScript": "puppet/onReady.js",
		"scenarios": options.scenarios,
		"paths": {
			"bitmaps_reference": `test_data/bitmaps_reference`,
			"bitmaps_test": `test_data/bitmaps_test`,
			"engine_scripts": `engine_scripts`,
			"html_report": `test_data/html_report`,
			"ci_report": `test_data/ci_report`
		},
		"report": ["browser"],
		"engine": "puppeteer",
		"engineOptions": {
			"args": ["--no-sandbox"]
		},
		"asyncCaptureLimit": 5,
		"asyncCompareLimit": 10,
		"debug": false,
		"debugWindow": false
	}
}