const ContactUs_Page = require("../pageobjects/ContactUsForm");
const Main_Page = require("../pageobjects/MainPage");
const assert = require("assert");
const config = require("../config/main-config");
let dataGenerators = require("../utils/dataGenerators");

describe("Test Contact Us page on webdriveruni", () => {
  beforeEach(() => {
    browser.maximizeWindow();
    browser.url("./");

    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain("webdriveruniversity");
    expect(pageDetails.title).to.contain("WebDriverUniversity");
  });

  it("Test1: should validate whether the webdriver uni homepage title is correct", () => {
    const title = browser.getTitle();
    assert.strictEqual(title, "WebDriverUniversity.com");
  });

  it("Test2: should be able to submit a successful submission via contact us page", () => {
    Main_Page.navigateToContactUsPage();
    ContactUs_Page.submitAllInformationViaContactUsForm(
      config.firstName,
      config.lastName,
      dataGenerators.generateRandomString(),
      dataGenerators.generateRandomEmailAddress()
    );
    ContactUs_Page.successfulSubmissionHeader.waitForDisplayed({
      timeout: 3000,
    });
    try {
      expect(ContactUs_Page.successfulSubmissionHeaderText).to.equal(
        "Thank You for your Message!"
      );
    } catch (err) {
      console.log("Exception: " + err);
      assert.fail();
    }
  });

  it("Test3: should not be able to submit a successful submission via contact us form as all fields are required", () => {
    Main_Page.navigateToContactUsPage();
    ContactUs_Page.setFirstName(config.firstName);
    ContactUs_Page.setLastName(config.lastName);
    ContactUs_Page.setComments(config.comments);
    ContactUs_Page.clickSubmitButton();
    try {
      expect(ContactUs_Page.unsuccessfulSubmissionHeaderText).to.have.string(
        "Error: all fields are required"
      );
    } catch (err) {
      console.log("Exception: " + err);
      assert.fail();
    }
  });
});
