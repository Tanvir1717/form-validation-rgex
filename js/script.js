//1-
function validation() {
    let username = document.getElementById('username4').value;
    let inputEmail = document.getElementById('inputEmail4').value;
    let inputPassword = document.getElementById('inputPassword4').value;
    let confirmPassword = document.getElementById('confirmPassword4').value;
    let inputPhone = document.getElementById('inputPhone').value;
    let inputAddress = document.getElementById('inputAddress').value;
    let inputCity = document.getElementById('inputCity').value;
    let inputZip = document.getElementById('inputZip').value;
    // alert(username);
    //2---
    let userCheck = /^[A-Za-z. ]{3,20}$/;
    let emailCheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    let passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    let phoneCheck = /^[880]{2}[0-9]{11}$/;
    let addressCheck = /^[A-Za-z ,0-9]{3,50}$/;
    let cityCheck = /^[A-Za-z]{3,10}/;
    let zipCheck = /^[0-9]{4,9}$/;

    //3--check
    if (userCheck.test(username)) {
        document.getElementById('usererror').innerHTML = " ";
    } else {
        document.getElementById('usererror').innerHTML = "* Username is invalid";
        return false;
    }
    if (emailCheck.test(inputEmail)) {
        document.getElementById('emailerror').innerHTML = " ";
    } else {
        document.getElementById('emailerror').innerHTML = "* Email is invalid";
        return false;
    }
    if (passwordCheck.test(inputPassword)) {
        document.getElementById('passworderror').innerHTML = " ";
    } else {
        document.getElementById('passworderror').innerHTML = "* Password is invalid! Must contain special characters and minimum 8.";
        return false;
    }
    if (confirmPassword.match(inputPassword)) {
        document.getElementById('cperror').innerHTML = " ";
    } else {
        document.getElementById('cperror').innerHTML = "* Password not matched";
        return false;
    }
    if (phoneCheck.test(inputPhone)) {
        document.getElementById('phoneerror').innerHTML = " ";
    } else {
        document.getElementById('phoneerror').innerHTML = "* Phone number is invalid! Country code required.";
        return false;
    }
    if (addressCheck.test(inputAddress)) {
        document.getElementById('addresserror').innerHTML = " ";
    } else {
        document.getElementById('addresserror').innerHTML = "* Address is invalid";
        return false;
    }
    if (cityCheck.test(inputCity)) {
        document.getElementById('cityerror').innerHTML = " ";
    } else {
        document.getElementById('cityerror').innerHTML = "* City is invalid";
        return false;
    }
    if (zipCheck.test(inputZip)) {
        document.getElementById('ziperror').innerHTML = " ";
    } else {
        document.getElementById('ziperror').innerHTML = "* Zip is invalid";
        return false;
    }
}