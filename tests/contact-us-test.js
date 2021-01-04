import ContactUsForm from "../pageobjects/ContactUsForm";
const config = require("../config/main-config");
let dataGenerators = require("../utils/dataGenerators");


describe("Test Contact Us page on webdriveruni", () => {
  beforeEach(() => {
    ContactUsForm.open();
  });

  it('Test 1: Submit all information via contact us page', function () {
    ContactUsForm.successfulContactUsSubmission();
  });

  it("Test 2: Submit all information via contact us page", () => {
    ContactUsForm.submitAllInformationViaContactUsForm(
      config.firstName,
      config.lastName,
      dataGenerators.generateRandomString(),
      dataGenerators.generateRandomEmailAddress());
    expect(ContactUsForm.successfulSubmissionHeaderText).to.equal("Thank You for your Message!");
  });

  it("Test 3: Successful submission via contact us form as all fields are required", () => {
    ContactUsForm.setFirstName(config.firstName);
    ContactUsForm.setLastName(config.lastName);
    ContactUsForm.setComments(dataGenerators.generateRandomString());
    ContactUsForm.clickSubmitButton();
    expect(ContactUsForm.unsuccessfulSubmissionHeaderText).to.have.string("Error: all fields are required");
  });
});
