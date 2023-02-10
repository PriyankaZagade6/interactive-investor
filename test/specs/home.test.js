/*********   This Page is for  Home page testcases for handling different scenarios     *******/

const homePage = require('../pageobjects/home.page');    //To create home page references





describe('Home page feature test', function() {
    
  it('verify home page title', async () => {
      await browser.url('/');        // To pass the base Url
      await browser.maximizeWindow();                    //method to maximize window
     // const title=browser.title();
       homePage.clickOnAccept();
       expect(browser).toHaveTitle('interactive investor – the UK’s number one flat-fee investment platform');   //To verify home page title

    })

    
    it('verify Servies header', function() {
      homePage.verifyServiceHeaderText                             //method overriding for home page
      homePage.clickOnServices();
      
        })
    it('verify click on Trading Account link and verify the new url', function() {
         homePage.clickOnTradingAccountLink
         homePage.VerifyTradingAccountLink

         
         expect(browser).toHaveUrl('https://www.ii.co.uk/ii-accounts/trading-account');  //To verify new url after clicking on Trading Account 
      
          
     })
      
     it('verify Pensions header', function() {
        homePage.verifyPensionsHeaderText                  //method overriding for home page
        homePage.clickOnPensions
    
      })
     it('verify click on SIPP drawdown link and verify the new url', function() {
        homePage.clickOnPensionsSIPPdrawdown
        homePage.VerifySIPPdrawdownLink
        expect(browser).toHaveUrl('https://www.ii.co.uk/ii-accounts/sipp/income-drawdown');
    
        
   })

     
   it('verify click on Investments header and verify text', function() {
    homePage.verifyInvestmentsHeaderText
    homePage.clickOnInvestments

  })
 it('verify click on FTSE250 link and verify the new url', function() {
    homePage.clickOnInvestmentsFTSE250                                //method overriding for home page
    homePage.VerifyInvestmentsFTSE250Link
    expect(browser).toHaveUrl('https://www.ii.co.uk/indices/ftse-250-index');

    
})
it('verify click on Help & learning header and verify text', function() {
  homePage.verifyHelplearningHeaderText
  homePage.clickOnHelplearning

})
it('verify click on Knowledge Centre link and verify the new url', function() {
  homePage.clickOnHelplearningKnowledgeCentre
  homePage.VerifyKnowledgeCentreLink
  expect(browser).toHaveUrl('https://www.ii.co.uk/indices/ftse-250-index');

  
})
it('verify click on News header and verify text', function() {
  homePage.verifyNewsHeaderText
  homePage.clickOnNewHeader

})


})  