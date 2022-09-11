<<<<<<< HEAD

=======
>>>>>>> origin
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

<<<<<<< HEAD
  var lowercharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbercharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var othercharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
  var selectedArray = [];

  passwordText.value = password;
}

// Add event listener to generate button
=======
  passwordText.value = password;
}

>>>>>>> origin
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var lenth = prompt("Input desired character length; minimum 12 characters, maximum 128.");
  var numbers = confirm("Include numbers?");
  var lettersUppercase = confirm("Include upper-case letters?");
  var lettersLowercase = confirm("Include lower-case letters?");
  var other = confirm("Inlcude symbols and special characters?");
<<<<<<< HEAD
}
if (numbers){
  resultArray = resultArray.concat(numbers);
  
}
if (lettersUppercase){
  resultArray = resultArray.concat(lettersUppercase);

}
if (lettersLowercase){
  resultArray = resultArray.concat(lettersLowercase);

}
if (other){
  resultArray = resultArray.concat(other);
}
console.log(resultArray)

for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
=======
>>>>>>> origin
}