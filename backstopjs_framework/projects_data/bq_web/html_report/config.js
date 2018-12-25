report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\bq_web_desktop_Mainpage_Strategy_0_bodydivcontentdivnth-child1_0_desktop.png",
        "test": "..\\bitmaps_test\\20181225-155606\\bq_web_desktop_Mainpage_Strategy_0_bodydivcontentdivnth-child1_0_desktop.png",
        "selector": "#body > div.content > div:nth-child(1)",
        "fileName": "bq_web_desktop_Mainpage_Strategy_0_bodydivcontentdivnth-child1_0_desktop.png",
        "label": "desktop_Mainpage_Strategy",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.01,
        "url": "https://bigquant.com",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.75",
          "analysisTime": 102
        },
        "diffImage": "..\\bitmaps_test\\20181225-155606\\failed_diff_bq_web_desktop_Mainpage_Strategy_0_bodydivcontentdivnth-child1_0_desktop.png"
      },
      "status": "fail"
    }
  ],
  "id": "bq_web"
});