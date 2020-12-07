describe('resolution matcher', () => {
    it('resolution is matched', () => {

      i = 1;
      while (i < 2) {
        browser.url('https://whatismyresolution.com/');
      }
      const reso = $('.jumbotron-h1.strong');
      const resolutionvalue = browser.config.capabilities.resolution;
      if (resolutionvalue == reso.getText()) {
        driver.execute("lambda-status=".concat("passed"));
      }
      else {
        driver.execute("lambda-status=".concat("failed"));
      }
    });
  });


/*
describe('Ebay search', () => {

    before(() => {
        //SearchPage.open();

        browser.url('https://www.ebay.com/');
    });

    after(() => {
        browser.url('https://www.lambdatest.com/');
    });

    it('should open the URL and verify the title', () => {
        
        expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');
    });

    it('write in search box and click on search', () =>{
        const searchInput = $('#gh-ac');
        const searchBtn = $('#gh-btn');
        
        searchInput.addValue('Laptop');
        searchBtn.click();
       
        //SearchPage.searchInput.addValue('Laptop');
        //SearchPage.searchBtn.click();
    

        expect(searchInput).toHaveValue('Laptop');
        //expect(SearchPage.searchInput).toHaveValue('Laptop');
    });

    it('should redirect to a new page and verify the title', () =>{
        expect(browser).toHaveTitle('Laptop | eBay');
    });
});
*/
















