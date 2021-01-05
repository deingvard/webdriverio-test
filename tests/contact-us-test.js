import {contactUsForm} from "../pageobjects/ContactUsForm";
import {contactUsSteps} from "../steps/ContactUsSteps";
const config = require("../config/main-config");
let dataGenerators = require("../utils/dataGenerators");


describe("Test Contact Us page on webdriveruni", () => {
  beforeEach(() => {
    contactUsSteps.navigateToContactUsFormDirect();
  });

  it('Test 1: Submit all information via contact us page', () => {
    contactUsSteps.successfulContactUsSubmission();
  });

  it("Test 2: Submit all information via contact us page", () => {
    contactUsSteps.submitAllInformationViaContactUsForm(
      config.firstName,
      config.lastName,
      dataGenerators.generateRandomString(),
      dataGenerators.generateRandomEmailAddress());
    expect(contactUsSteps.successfulSubmissionHeaderText).to.equal("Thank You for your Message!");
  });

  it("Test 3: Successful submission via contact us form as all fields are required", () => {
    contactUsSteps.setFirstName(config.firstName);
    contactUsSteps.setLastName(config.lastName);
    contactUsSteps.setComments(dataGenerators.generateRandomString());
    contactUsSteps.clickSubmitButton();
    expect(contactUsSteps.unsuccessfulSubmissionHeaderText).to.have.string("Error: all fields are required");
  });
});
