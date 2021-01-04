import ContactUsForm from "../pageobjects/ContactUsForm";
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
    ContactUsForm.open();
    ContactUsForm.submitAllInformationViaContactUsForm(
      config.firstName,
      config.lastName,
      dataGenerators.generateRandomString(),
      dataGenerators.generateRandomEmailAddress()
    );
    ContactUsForm.successfulSubmissionHeader.waitForDisplayed({
      timeout: 3000,
    });
    try {
      expect(ContactUsForm.successfulSubmissionHeaderText).to.equal(
        "Thank You for your Message!"
      );
    } catch (err) {
      console.log("Exception: " + err);
      assert.fail();
    }
  });

  it("Test3: should not be able to submit a successful submission via contact us form as all fields are required", () => {
    ContactUsForm.open();
    ContactUsForm.setFirstName(config.firstName);
    ContactUsForm.setLastName(config.lastName);
    ContactUsForm.setComments(dataGenerators.generateRandomString());
    ContactUsForm.clickSubmitButton();
    try {
      expect(ContactUsForm.unsuccessfulSubmissionHeaderText).to.have.string(
        "Error: all fields are required"
      );
    } catch (err) {
      console.log("Exception: " + err);
      assert.fail();
    }
  });
});
