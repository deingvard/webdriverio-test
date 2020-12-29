const ContactUs_Page = require("../pageobjects/ContactUs_Page");

describe('webdriver.io page', () => {
    it('should be able to submit a successful submission via contact us form', () => {
        browser.url('/Contact-Us/contactus.html')
        ContactUs_Page.setFirstName("Jane");
        ContactUs_Page.setLastName("Doe");
        ContactUs_Page.setComments("comments");
        ContactUs_Page.setEmailAddress("test@test.com");
        ContactUs_Page.clickSubmitButton();
        browser.pause(5000);
        // expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
        // browser.pause(5000);
    })
})
