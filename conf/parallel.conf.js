exports.config = {
  services: [
    [
      "lambdatest",
      {
        tunnel: false,
        lambdatestOpts: {
          logFile: "tunnel.log"
        }
      }
    ]
  ],
  user: process.env.LT_USERNAME,
  key: process.env.LT_ACCESS_KEY,
  specs: [
    './tests/specs/single_test.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
     name: 'Parallel Sample Test',
     build: 'WebDriver Selenium Sample'
  },

  capabilities: [
    {
      platform : "Android",
      deviceName : "Google Pixel 3a",
      platformVersion : "10",
      browserName: "chrome"
    },
    {
      platform : "Android",
      deviceName : "Galaxy S20 Ultra",
      platformVersion : "10",
      browserName: "chrome"
    },
    {
      platform : "iOS",
      deviceName : "iPhone 11",
      platformVersion : "13.6",
      browserName: "safari"
    }
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 100000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    require: ['@babel/register', './test/helpers/common.js'],
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
