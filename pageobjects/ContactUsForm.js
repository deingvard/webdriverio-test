
class ContactUsForm {
    /**
     * define selectors using getter methods
     */
    get firstNameInput() {return $("[name='first_name']");}
    get lastName() {return $("[name='last_name']");}
    get commentsInput() {return $("textarea");}
    get emailAddressInput() {return $("[name='email']");}
    get submitButton() {return $("[type='submit']");}
    get successfulSubmissionHeaderText(){return $("#contact_reply h1");}
    get unsuccessfulSubmissionHeaderText(){return $("body");}
}

export const contactUsForm = new ContactUsForm();
