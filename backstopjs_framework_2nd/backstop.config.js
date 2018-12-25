module.exports = options => {
	return {
		"id": options.project,
		"viewports": [],
		// "onBeforeScript": "puppet/common/onBefore.js",
		"onReadyScript": "puppet/common/onReady.js",
		"scenarios": options.scenarios,
		"paths": {
			"bitmaps_reference": `projects_data/${options.project}/bitmaps_reference`,
			"bitmaps_test": `projects_data/${options.project}/bitmaps_test`,
			"engine_scripts": `engine_scripts`,
			"html_report": `projects_data/${options.project}/html_report`,
			"ci_report": `projects_data/${options.project}/ci_report`
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