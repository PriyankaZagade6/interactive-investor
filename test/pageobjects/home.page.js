/*  This is Home Page class where I have used Page object model.
    Page object model is design strategy and It is easy to resualble and maintain.                         
*/



class HomePage{

    //**************  Page locators ***********************/

   /***   Home page webelement ***/
    
    get acceptbutton(){return $('button.ii-7kliwd')} 

    get headerServices(){return $('span.ii-1havngz')}
    get LinkServicesTradingAccount(){return $('#navigationItemServices > div > div:nth-child(1) > ul > li:nth-child(2) > a')}
    get LinkTradingAccountServicesdisplay(){return $('=Trading Account')}
    
    get headerPensions(){return $('span.ii-b72g5p')}  
    get LinkPensionsSIPPDown(){return $('#navigationItemPensions > div > div:nth-child(2) > ul > li:nth-child(3) > a')}
  
    get headerInvestments(){return $('span.ii-fprasz')}
    get LinkInvestmentsFTSE250(){return $('#navigationItemInvestments > div > div:nth-child(4) > ul > li:nth-child(2) > a')}
    get LinkinkSIPPDowns(){return $('=SIPP drawdown')}    

    get headerHelplearning(){return $('span.css-b14ele')}
    get LinkHelplearningKnowledgeCentre(){return $('#navigationItemHelpLearning > div > div:nth-child(2) > ul > li:nth-child(1) > a')}  
    get headerNews(){return $('span.ii-1j4x8p8')}
    
    
   //**************  Page methods ***********************/
   
   getPageTitleOnExpext(){
     
      return browser.getTitle
    }
  
  /***   Method for clicking on accept button ***/
  

   clickOnAccept()  
   {
     this.acceptbutton.click();
   }


   /***   Methods for Services header ***/


   clickOnServices()                              //To click on Services header 
   {
     this.headerServices.click();
   }

   verifyServiceHeaderText()                     // To Verify presence of header Services text 
   {
     expect(headerServices).toHaveText('Services')
   }
   clickOnTradingAccountLink()                   //To click on Trading Account Link 
   {
     this.LinkServicesTradingAccount.click();
   }
   isTradingAccountLinkDisplayed()                 //To Verify Trading Account is displayed or not
   {
     expect(LinkServicesTradingAccount).toBeDisplayed();
   }
  
   VerifyTradingAccountLink()
   {
     expect(LinkServicesTradingAccount).toHaveText('Trading Account')               //To Verify presence of Trading Account Link 
     expect(LinkServicesTradingAccount).toHaveLinkContaining('/Trading Account/')
   }


    /***   Methods for Pensions header */

   clickOnPensions()
   {
     this.headerPensions.click();
   }

   verifyPensionsHeaderText()
   {
     expect(headerPensions).toHaveText('Pensions')
   }
   clickOnPensionsSIPPdrawdown()
   {
     this.LinkPensionsSIPPDown.click();
   }
   VerifySIPPdrawdownLink()
   {
     expect(LinkPensionsSIPPDown).toHaveText('SIPP drawdown')
     expect(LinkPensionsSIPPDown).toHaveLinkContaining('/SIPP drawdown/')
   }


    /***   Methods for Investments header */

   clickOnInvestments()
   {
     this.headerInvestments.click();
   }
   verifyInvestmentsHeaderText()
   {
     expect(headerInvestments).toHaveText('Investments')
   }
   clickOnInvestmentsFTSE250()
   {
     this.LinkInvestmentsFTSE250.click();
   }
   VerifyInvestmentsFTSE250Link()
   {
     expect(LinkInvestmentsFTSE250).toHaveText('SIPP FTSE 250')
     expect(LinkInvestmentsFTSE250).toHaveLinkContaining('/FTSE 250/')
   }


   /***   Methods for Help & learning header */
   
   clickOnHelplearning()
   {
     this.headerHelplearning.click();
   }
   verifyHelplearningHeaderText()
   {
     expect(headerHelplearning).toHaveText('Help & learning')
   }
   clickOnHelplearningKnowledgeCentre()
   {
     this.LinkHelplearningKnowledgeCentre.click();
   }
   VerifyKnowledgeCentreLink()
   {
     expect(LinkHelplearningKnowledgeCentre).toHaveText('Knowledge Centre')
     expect(LinkHelplearningKnowledgeCentre).toHaveLinkContaining('/Knowledge Centre/')
   }

    /***   Methods for News header */


   clickOnNewHeader()
   {
     this.headerNews.click();
   }
   verifyNewsHeaderText()
   {
     expect(headerNews).toHaveText('News')
   }


}
 module.exports=new HomePage()          //export class