
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var lenth = prompt("Input desired character length; minimum 12 characters, maximum 128.");
  var numbers = confirm("Include numbers?");
  var lettersUppercase = confirm("Include upper-case letters?");
  var lettersLowercase = confirm("Include lower-case letters?");
  var other = confirm("Inlcude symbols and special characters?");
}