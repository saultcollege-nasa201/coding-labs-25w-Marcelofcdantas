document.addEventListener('DOMContentLoaded', () => {
    let customername = document.getElementById('customerName');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    var button = document.getElementById('button');
    var emailValid;
    customername.addEventListener('input', validateForm);
    email.addEventListener('change', () => { emailValidation(email.value); validateForm();});
    message.addEventListener('input', validateForm);

    function validateForm() {

        toggleErrorClass(customername);
        toggleErrorClass(message);

        if (!emailValid && email.value != '') {
            button.className = 'btn btn-danger';
            button.setAttribute('disabled', true);
            return;
        }

        if (customername.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
            button.className = 'btn btn-danger';
            button.setAttribute('disabled', true);
        } else {
            button.className = 'btn btn-primary';
            button.removeAttribute('disabled');
        }
    }

    function toggleErrorClass(element) {
        if (element.value.trim() === '') {
            element.classList.add('bg-danger-subtle');
        } else {
            element.classList.remove('bg-danger-subtle');
        }
    }

    function emailValidation(emailValue) {
        if (emailValue !== '') {
            let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            let result = regex.test(emailValue);
            if (result == true) {
                emailValid = true;
                email.classList.remove('bg-danger-subtle');
            } else {
                emailValid = false;
                email.classList.add('bg-danger-subtle');
                alert("This isn't a valid email address.");
            }
            return result
        } else {
            return false;
        }
    }
});