// const nameError = document.getElementById("name-error");
// const emailError = document.getElementById("email-error");
// const msgError = document.getElementById("message-error");
// const lastNameError = document.getElementById("lastname-error");
// const queryError = document.getElementById("query-error");
// const consentError = document.getElementById("consent-error");

// function validateName() {
//     const name = document.getElementById("firstName").value;
//     if (name.length == 0) {
//         nameError.innerHTML = "This field is required";
//         return false;
//     } else if (!name.match(/^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/)) {
//         nameError.innerHTML = "This field is required";
//         return false;
//     } else {
//         return true;
//     }
   

// }

// function validateLastName() {
//     const lastName = document.getElementById("lastName").value;
//     if (lastName.length == 0) {
//         lastNameError.innerHTML = "This field is required";
//         return false;
//     } else if (!lastName.match(/^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/)) {
//         lastNameError.innerHTML = "This field is required";
//         return false;
//     } else {
//         lastNameError.innerHTML = "";
//         return true;
//     }
// }

// function validateEmail() {
//     const email = document.getElementById("email").value; 
//     if (email.length == 0) {
//         emailError.innerHTML = "Please enter a valid email address";
//         return false;
//     } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
//        emailError.innerHTML = "Please enter a valid email address";
//         return false;
//     } else {
//         return true;
//     }
// }

// function validateMsg() {
//     const msg = document.getElementById("message").value;
//     if (msg.length == 0) {
//         msgError.innerHTML = "This field is required";
//         return false;
//     } else if (msg.length < 15) {
//             msgError.innerHTML = "This field is required";
//             return false;
//         } else {
//         return true;
//     }
// }
// function validateQuery() {
//     const queryRadios = document.getElementsByName("query");
//     let isSelected = false;
    
//     for (let radio of queryRadios) {
//         if (radio.checked) {
//             isSelected = true;
//             break;
//         }
//     }
//     if (!isSelected) {
//         queryError.innerHTML = "Please select a query type";
//         return false;
//     } else {
//         queryError.innerHTML = "";
//         return true;
//     }
// }
// function validateConsent() {
//     const consent = document.getElementById("consent");
//     if (!consent.checked) {
//         consentError.innerHTML = "To submit this form, please consent to being contacted";
//         return false;
//     } else {
//         consentError.innerHTML = "";
//         return true;
//     }
// }

// document.getElementsByName("query").forEach(radio => {
//     radio.addEventListener("change", validateQuery);
// });



// document.getElementById("consent").addEventListener("change", validateConsent);


function displayFormData(firstName, lastName, email, message) {
    const existingOutput = document.getElementById("form-output");
    if (existingOutput) {
        existingOutput.remove();
    }

    const outputDiv = document.createElement("div");
    outputDiv.id = "form-output";
    outputDiv.style.marginTop = "20px";
    outputDiv.style.padding = "20px";
    outputDiv.style.border = "1px solid hsl(186, 15%, 59%)";
    outputDiv.style.borderRadius = "5px";
    outputDiv.style.backgroundColor = "hsl(148, 38%, 91%)";

    outputDiv.innerHTML = `
        <h3>Submitted Form Data:</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    const form = document.getElementById("mainform");
    form.parentNode.insertBefore(outputDiv, form.nextSibling);
}

document.getElementById("mainform").addEventListener("submit", function(e) {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    
    displayFormData(firstName, lastName, email, message);
});