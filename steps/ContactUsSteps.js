import { contactUsForm } from "../pageobjects/ContactUsForm";
const config = require("../config/main-config");


class ContactUsSteps {
    /**
     * Navigate Contact us form
     */
    navigateToContactUsFormDirect() {
        browser.maximizeWindow();
        browser.url(config.baseUrl + "/Contact-Us/contactus.html");
    }

    /**
     * Get successful submission header text
     */
    get successfulSubmissionHeaderText() {
        return contactUsForm.successfulSubmissionHeader.getText(); // Thank You for your Message!
    }

    /**
     * Get unsuccessful submission header text
     */
    get unsuccessfulSubmissionHeaderText() {
        return contactUsForm.unsuccessfulSubmissionHeader.getText(); // Error: all fields are required Error: Invalid email address
    }

    enterFirstName(firstName) {
        return contactUsForm.firstName.setValue(firstName);
    }

    enterLastName(lastName) {
        return contactUsForm.lastName.setValue(lastName);
    }

    enterComments(comments) {
        return contactUsForm.comments.setValue(comments);
    }

    enterEmail(email) {
        return contactUsForm.emailAddress.setValue(email);
    }

    /**
     * Click submit button
     */
    clickSubmitButton() {
        return contactUsForm.submitButton.click();
    }

    /**
     * Check successful submission header
     */
    checkSuccessfulSubmissionHeader() {
        expect(this.successfulSubmissionHeaderText).to.equal("Thank You for your Message!");
    };

    /**
     * Check unsuccessful submission header
     */
    checkUnsuccessfulSubmissionHeader() {
        expect(this.unsuccessfulSubmissionHeaderText).to.have.string("Error: all fields are required");
    };
}

export const contactUsSteps = new ContactUsSteps();
