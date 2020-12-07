const assert = require('assert')
describe('demo', () => {
  it('resolution is matched', () => {
    browser.url('https://whatismyresolution.com/');
    const reso = $('.jumbotron-h1.strong');
    const resolutionvalue=browser.config.capabilities.resolution;  
    if(resolutionvalue==reso.getText()){
      driver.execute("lambda-status=".concat("passed"));
    }
    else {
      driver.execute("lambda-status=".concat("failed"));
    }
  });
});
