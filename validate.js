function validate() {

    var password = document.getElementById('password-data');
    var email = document.getElementById('email-data');

    var emailerror = document.getElementById('emailError');
    var passworderror = document.getElementById('passError');

    const passwordvalue = password.value.trim()
    const emailvalue = email.value.trim()



    if (emailvalue != 'sankey@com') {
        emailerror.innerText = 'Enter a valid email';

    } else {
        emailerror.innerText = ''
    }
    if (passwordvalue != '123456') {
        passworderror.innerText = 'Enter a valid password';

    } else {
        passworderror.innerText = ''
    }

    if (emailvalue == 'sankey@com' && passwordvalue == '123456') {
        window.open("new.html")
    }




    return false;
}