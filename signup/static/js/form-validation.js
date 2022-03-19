// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   "use strict";

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.querySelectorAll(".needs-validation");

//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms).forEach(function (form) {
//     form.addEventListener(
//       "submit",
//       function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault();
//           event.stopPropagation();
//         }

//         form.classList.add("was-validated");
//       },
//       false
//     );
//   });
// })();
// First Name Validation

var firstName = document.getElementById("firstName");
var firstNameValidation = function () {
  firstNameValue = firstName.value.trim();
  validFirstName = /^[A-Za-z]+$/;
  firstNameErr = document.getElementById("first-name-err");
  if (firstNameValue == "") {
    // alert("First Name is required");
    firstNameErr.innerHTML = "First Name is required";
    return false;
  } else if (!validFirstName.test(firstNameValue)) {
    firstNameErr.innerHTML =
      "First Name must be only string without white spaces";
    return false;
  } else {
    firstNameErr.innerHTML = "";
    return true;
  }
};
firstName.oninput = function () {
  firstNameValidation();
};

// Last Name Validation
var lastName = document.getElementById("lastName");
var lastNameValidation = function () {
  lastNameValue = lastName.value.trim();
  validLastName = /^[A-Za-z]+$/;
  lastNameErr = document.getElementById("last-name-err");
  if (lastNameValue == "") {
    lastNameErr.innerHTML = "Last Name is required";
  } else if (!validLastName.test(lastNameValue)) {
    lastNameErr.innerHTML =
      "Last Name must be only string without white spaces";
  } else {
    lastNameErr.innerHTML = "";
    return true;
  }
};
lastName.onselect = function () {
  lastNameValidation();
};

// Email Address Validation
var emailAddress = document.getElementById("email");
var emailAddressValidation = function () {
  emailAddressValue = emailAddress.value.trim();
  validEmailAddress = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  emailAddressErr = document.getElementById("email-err");
  if (emailAddressValue == "") {
    emailAddressErr.innerHTML = "Email Address is required";
  } else if (!validEmailAddress.test(emailAddressValue)) {
    emailAddressErr.innerHTML =
      "Email Address must be in valid format with @ symbol";
  } else {
    emailAddressErr.innerHTML = "";
    return true;
  }
};
emailAddress.oninput = function () {
  emailAddressValidation();
};

// Date Validation

function ValidateDOB() {
  var lblError = document.getElementById("date-err");
  var dateString = document.getElementById("DOB").value;
  //Get the date from the TextBox.
  var parts = dateString.trim().split("-");
  console.log(parts[0]);
  console.log(parts[2]);
  var y = parts[0];
  var m = parts[1];
  var d = parts[2];
  var r = new Date();
  if (r.getFullYear() <= parseInt(y) + 13) {
    if (r.getMonth() + 1 <= m) {
      if (r.getDate() < d) {
        lblError.innerHTML = "";
      }
    }
  } else {
    lblError.innerHTML = "";
  }
}
