import { contactUsForm } from "../pageobjects/ContactUsForm";
const config = require("../data/main-config");


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

    /**
     * Enter data on the Contact us form
     * @param firstName
     */
    enterFirstName(firstName) {
        return contactUsForm.firstName.setValue(firstName);
    }

    /**
     * Enter data on the Contact us form
     * @param lastName
     */
    enterLastName(lastName) {
        return contactUsForm.lastName.setValue(lastName);
    }

    /**
     * Enter data on the Contact us form
     * @param comments
     */
    enterComments(comments) {
        return contactUsForm.comments.setValue(comments);
    }

    /**
     * Enter data on the Contact us form
     * @param email
     */
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
