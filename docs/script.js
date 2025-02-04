document.addEventListener('DOMContentLoaded', () => {
    
    let customername = document.getElementById('customerName');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    var button = document.getElementById('button');
    let fieldsFilled = false;
    button.addEventListener('mouseover', () => {checkFields(fieldsFilled)});
    customername.addEventListener('change', validateForm);
    email.addEventListener('change', validateForm);
    message.addEventListener('change', validateForm);

    function validateForm() {
        let validEmail = emailValidation(email);
        if (!validEmail) {
            alert("This isn't a valid email");
            return;
        };
        if (customername.value == '' || email.value == '' || message.value.trim() == '') {
            button.className = 'btn btn-danger';
            button.setAttribute('disabled', true);
            fieldsFilled = false;
        } else {
            button.className = 'btn btn-primary';
            button.removeAttribute('disabled');
            fieldsFilled = true;
        }
    }

    function emailValidation(email) {
        if (email.value != ''){
            let regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(email);
        } else {
            return true;
        }
    }

    function checkFields(fieldsFilled) {
        if (!fieldsFilled) {
            alert('Please, fill all fields to be able to send the form.');
        } 
    }

});

