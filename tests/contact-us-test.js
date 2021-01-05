import {contactUsSteps} from "../steps/ContactUsSteps";
const config = require("../data/main-config");
let dataGenerators = require("../utils/dataGenerators");


describe("E2E Tests", () => {
  beforeEach(() => {
    contactUsSteps.navigateToContactUsFormDirect();
  });

  it("Test 1: Successful submission via contact us form as all fields are required", () => {
    contactUsSteps.enterFirstName(config.firstName);
    contactUsSteps.enterLastName(config.lastName);
    contactUsSteps.enterComments(dataGenerators.generateRandomString());
    contactUsSteps.enterEmail(dataGenerators.generateRandomEmailAddress())
    contactUsSteps.clickSubmitButton();
    contactUsSteps.checkSuccessfulSubmissionHeader();
  });

  it("Test 2: Unsuccessful submission via contact us form as all fields are required", () => {
    contactUsSteps.enterFirstName(config.firstName);
    contactUsSteps.enterLastName(config.lastName);
    contactUsSteps.enterComments(dataGenerators.generateRandomString());
    contactUsSteps.clickSubmitButton();
    contactUsSteps.checkUnsuccessfulSubmissionHeader();
  });
});
