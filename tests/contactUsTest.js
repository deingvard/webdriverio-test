const ContactUs_Page = require("../pageobjects/ContactUs_Page");
const assert = require("assert");

beforeEach(() => {
  browser.maximizeWindow();
  browser.url("/Contact-Us/contactus.html");
});

describe("Test Contact Us form", () => {
  it("should validate whether the webdriver uni homepage title is correct", () => {
    browser.url("./");
    const title = browser.getTitle();
    assert.strictEqual(title, "WebDriverUniversity.com");
  });

  it("Test1: should be able to submit a successful submission via contact us form", () => {
    ContactUs_Page.submitAllInformationViaContactUsForm(
      "Jane",
      "Doe",
      "comments",
      "test@test.com"
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

  it("Test2: should not be able to submit a successful submission via contact us form as all fields are required", () => {
    ContactUs_Page.setFirstName("Jane");
    ContactUs_Page.setLastName("Doe");
    ContactUs_Page.setComments("comments");
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
