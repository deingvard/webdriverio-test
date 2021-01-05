import { contactUsForm } from "../pageobjects/ContactUsForm";
const config = require("../config/main-config");
const dataGenerators = require("../utils/dataGenerators");


class ContactUsSteps {
    /**
     * Navigate Contact us form
     */
    navigateToContactUsFormDirect() {
        browser.maximizeWindow();
        browser.url(config.baseUrl + "/Contact-Us/contactus.html");
    }

    get successfulSubmissionHeaderText() {
        return contactUsForm.successfulSubmissionHeader.getText(); // Thank You for your Message!
    }

    get unsuccessfulSubmissionHeaderText() {
        return contactUsForm.unsuccessfulSubmissionHeader.getText(); // Error: all fields are required Error: Invalid email address
    }

    setFirstName(firstName) {
        return contactUsForm.firstName.setValue(firstName);
    }

    setLastName(lastName) {
        return contactUsForm.lastName.setValue(lastName);
    }

    setComments(comments) {
        return contactUsForm.comments.setValue(comments);
    }

    clickSubmitButton() {
        return contactUsForm.submitButton.click();
    }

    submitAllInformationViaContactUsForm(firstName, lastName, comments, emailAddress) {
        if (firstName) {
            contactUsForm.firstName.setValue(firstName);
        }
        if (lastName) {
            contactUsForm.lastName.setValue(lastName);
        }
        if (comments) {
            contactUsForm.comments.setValue(comments);
        }
        if (emailAddress) {
            contactUsForm.emailAddress.setValue(emailAddress);
        }
        contactUsForm.submitButton.click();
    }

      successfulContactUsSubmission() {
        contactUsForm.firstName.waitForDisplayed(5000);
        contactUsForm.firstName.setValue(config.firstName);
        contactUsForm.lastName.setValue(config.lastName);
        contactUsForm.emailAddress.setValue(dataGenerators.generateRandomEmailAddress());
        contactUsForm.comments.setValue(dataGenerators.generateRandomString());
        contactUsForm.submitButton.click();
        expect(this.successfulSubmissionHeaderText).to.equal("Thank You for your Message!");
      }
    }

export const contactUsSteps = new ContactUsSteps();
