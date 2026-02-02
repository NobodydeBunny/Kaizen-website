function toggleCardFields() {
    const paymentOption = document.querySelector('.selectOptions').value;
    const cardFields = document.querySelector('.cardFields');

    if (paymentOption === "visaMasterCard") {
        cardFields.style.display = "block"; 
    } else {
        cardFields.style.display = "none"; 
    }
}

function validateMobileNumber(mobileNumber) {
    const regex = /^0\d{9}$/; 
    return regex.test(mobileNumber);
}

function validateCVN(cvn) {
    const regex = /^\d{3}$/;
    return regex.test(cvn);
}

function validateExpireDate(expireDate) {
    const regex = /^(0[1-9]|1[0-2])\/([2-9][0-9])$/;
    return regex.test(expireDate);
}

function validateName(name) {
    const regex = /^[A-Za-z]+$/;
    return regex.test(name);
}

document.querySelector('.orderForm').addEventListener("submit", function(event) {
    let formValid = true;

    const requiredFields = document.querySelectorAll("[required]");
    requiredFields.forEach(function(field) {
        if (field.value.trim() === "") {
            formValid = false;
            alert("Please fill out all required fields.");
            return false;
        }
    });

    const firstName = document.querySelector('.firstName').value.trim();
    if (!validateName(firstName)) {
        formValid = false;
        alert("First Name can only contain letters.");
        return false;
    }

    const lastName = document.querySelector('.lastName').value.trim();
    if (!validateName(lastName)) {
        formValid = false;
        alert("Last Name can only contain letters.");
        return false;
    }

    const cardName = document.querySelector('.cardName') ? document.querySelector('.cardName').value.trim() : "";

    const address = document.querySelector('.address').value.trim();
    
    const mobileNumber = document.querySelector('.mobileNumber').value.trim();
    if (!validateMobileNumber(mobileNumber)) {
        formValid = false;
        alert("Mobile Number must contain 10 digits starting with 0.");
        return false;
    }

    const paymentOption = document.querySelector('.selectOptions').value;
    if (paymentOption === "visaMasterCard") {
        const cardNumber = document.querySelector('.cardNumber').value.trim();
        const cvn = document.querySelector('.cvn').value.trim();
        const expireDate = document.querySelector('.expireDate').value.trim();

        if (!cardNumber) {
            formValid = false;
            alert("Please provide a valid Card Number.");
            return false;
        }

        if (!validateCVN(cvn)) {
            formValid = false;
            alert("CVN must contain exactly 3 digits.");
            return false;
        }

        if (!validateExpireDate(expireDate)) {
            formValid = false;
            alert("Expire Date must be in the format MM/YY, where MM is between 01-12 and YY is between 24-30.");
            return false;
        }
    }

    if (!formValid) {
        event.preventDefault();
    }
});
 