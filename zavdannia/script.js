let firstNameRegExp = /^[a-zA-Z]+$/;
let secondNameRegExp = /^[a-zA-Z]+$/;
let emailRegExp = /^[a-z]+@[gmail]{5}\.[a-z]{2,5}$/;
let passwordRegExp = /^[a-zA-Z0-9_@#$%^&*]{5,10}$/;


let getId = id => document.getElementById(id);
let testName;
getId('name_id').oninput = function () {
    testName = firstNameRegExp.test(getId('name_id').value);
    if (testName) {
        this.style.border = '2px solid green';
    } else {
        this.style.border = '2px solid red';
    }
}
let testName2;
getId('name2_id').oninput = function () {
    testName2 = secondNameRegExp.test(getId('name2_id').value);
    if (testName2) {
        this.style.border = '2px solid green';
    } else {
        this.style.border = '2px solid red';
    }
}


let testEmail;
getId('email_id').oninput = function () {
    testEmail = emailRegExp.test(getId('email_id').value);
    if (testEmail) {
        this.style.border = '2px solid green';
    } else {
        this.style.border = '2px solid red';
    }
}
let testPassword;
getId('password_id').oninput = function () {
    testPassword = passwordRegExp.test(getId('password_id').value);
    if (testPassword) {
        this.style.border = '2px solid green';
    } else {
        this.style.border = '2px solid red';
    }
}

getId('checkbox_id').onclick = function () {
    if (getId('checkbox_id').checked && testName && testName2 && testEmail && testPassword) {
        getId('some_btn').disabled = false;
    } else {
        getId('some_btn').disabled = true;
    }

}

getId('some_btn').onclick = function () {
    alert('Hello Men');
}