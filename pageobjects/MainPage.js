class MainPage {
    /**
     * define selectors using getter methods
     */

    get contactUsButton(){return $("#contact-us h1");}

    navigateToContactUsPage(){
        this.contactUsButton.click();
        browser.pause(1000);
        browser.switchWindow('WebDriver | Contact Us')
    }
}

module.exports = new MainPage();
