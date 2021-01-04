class ContactUsForm {
    /**
     * define selectors using getter methods
     */

    get firstName() {return $("[name='first_name']");}
    get lastName() {return $("[name='last_name']");}
    get comments() {return $("textarea");}
    get emailAddress() {return $("[name='email']");}
    get submitButton() {return $("[type='submit']");}
    get successfulSubmissionHeader(){return $("#contact_reply h1");}
    get unsuccessfulSubmissionHeader(){return $("body");}
    get successfulSubmissionHeaderText(){
        return this.successfulSubmissionHeader.getText(); // Thank You for your Message!
    }

    get unsuccessfulSubmissionHeaderText(){
        return this.unsuccessfulSubmissionHeader.getText(); // Error: all fields are required Error: Invalid email address
    }

    setFirstName(firstName) {
        return this.firstName.setValue(firstName);
    }

    setLastName(lastName) {
        return this.lastName.setValue(lastName);
    }

    setComments(comments) {
        return this.comments.setValue(comments);
    }

    setEmailAddress(emailAddress) {
        return this.emailAddress.setValue(emailAddress);
    }

    clickSubmitButton() {
        return this.submitButton.click();
    }

    submitAllInformationViaContactUsForm(firstName, lastName, comments, emailAddress) {
        if (firstName) {
            this.firstName.setValue(firstName);
        }
        if (lastName) {
            this.lastName.setValue(lastName);
        }
        if (comments) {
            this.comments.setValue(comments);
        }
        if (emailAddress) {
            this.emailAddress.setValue(emailAddress);
        }
        this.submitButton.click();
    }
}

module.exports = new ContactUsForm();
