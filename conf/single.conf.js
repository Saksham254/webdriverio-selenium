const { config } = require("./parallel.conf");

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
  specs: ["./tests/specs/single_test.js"],
  exclude: [],

  capabilities: [
    {
      platform : "Windows 10",
      browserName: "chrome",
      version: "86.0",
      resolution : "1280x800",
      name: "Test webdriverio",
      build: "build 1",
      network: false,
      video: true,
      visual: false,
      console: true
    }
  ],
  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 1200000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
  }
};
