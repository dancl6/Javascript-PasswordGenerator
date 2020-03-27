// Assignment code here
// var password_length = 0;
var generatePassword = function() {
var count = 0;
  window.alert("Please answer prompts for password criteria.");
  var password_length = window.prompt("How many characters would you like your password to be? Please choose between 8 and 128 characters.");
  password_length = parseInt (password_length);
  var a = Number.isInteger(password_length);

  if ((a)&&(password_length>=8 && password_length<=128)) {
    
  } else {
    window.alert("Invalid Entry! Programm Quitting!");
   return;
  }


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
