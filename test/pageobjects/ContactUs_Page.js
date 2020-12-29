class ContactUs_Page{
    get firstName() {return $("[name='first_name']")}
    get lastName() {return $("[name='last_name']")}
    get comments() {return $("textarea")}
    get emailAddress() {return $("[name='email']")}
    get submitButton() {return $("[type='submit']")}

    setFirstName(firstName){
        return this.firstName.setValue(firstName);
    }

    setLastName(lastName){
        return this.lastName.setValue(lastName);
    }

    setComments(comments){
        return this.comments.setValue(comments);
    }

    setEmailAddress(emailAddress){
        return this.emailAddress.setValue(emailAddress);
    }

    clickSubmitButton(){
        return this.submitButton.click();
    }
}

module.exports = new ContactUs_Page();
