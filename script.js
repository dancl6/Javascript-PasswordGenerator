// Assignment code here
// var password_length = 0;
var generatePassword = function() {
  window.alert("Please answer prompts for password criteria.");
  var password_length = window.prompt("How many characters would you like your password to be? Please choose between 8 and 128 characters.");

  while (password_length === ""|| password_length === null) {
    var password_length = window.prompt("How many characters would you like your password to be? Please choose between 8 and 128 characters.");

  }

  password_length = parseInt (password_length);
  var a = Number.isInteger(password_length);

  if ((a)&&(password_length>=8 && password_length<=128)) {
    
  } else {
    window.alert("Invalid Entry! Programm Quitting!");
   return;
  }
  window.alert("password length is " + password_length);
  var letters_lowercase = "abcdefghijklmnopqrstuvwxyz";
  var letters_capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special_chars = "~!@#$%^&";
  var numbers = "0123456789";
  var string_all_options = "";

  window.alert("password length = " + password_length);
  var count = 0;


  var  lower_case =  window.confirm("Incldue lower case letters?");
  window.alert("Add lower case letters?: " + lower_case);
  if (lower_case){
    string_all_options = string_all_options.concat(letters_lowercase);
    count = count + 1;
  }
  var  upper_case = window.confirm("Incldue upper case letters?");
  window.alert("Add upper case letters?: " + upper_case);
  if (upper_case){
    string_all_options = string_all_options.concat(letters_capital);
    count = count + 1;

  }
  var numeric = window.confirm("Incldue numeric characters?");
  window.alert("Add numeric characters?: " + numeric);
  if (numeric){
    string_all_options = string_all_options.concat(numbers);
    count = count + 1;
  }
  var special_character = window.confirm("Incldue special characters?");
  window.alert("Add special characters?: " + special_character);
  if (special_character){
    string_all_options = string_all_options.concat(special_chars);
    count = count + 1;
  }
  
  var divisions = password_length/count;
  divisions = Math.floor(divisions);
  

  var password = "";

if (lower_case){
 for (var i = 0; i < divisions; i++){
 var random_char = Math.floor(Math.random()*letters_lowercase.length)+1;
 window.alert("random char is :" + random_char);
 var char = letters_lowercase.charAt(random_char);
 window.alert("char is :" + char);
  password = password.concat(char); 
}
}

if (upper_case){
for (var i = 0; i < divisions; i++){
  var random_char =Math.floor(Math.random()*letters_capital.length)+1;
  var char = letters_capital.charAt(random_char);
  // var char = char.toUpperCase();
  password = password.concat(char);
}
}

if (numeric) {
for (var i = 0; i < divisions; i++){
  var random_char =Math.floor(Math.random()*9)+1;
  var char = random_char;
  password = password.concat(char);
}
}
if (special_character) {
  for (var i = 0; i < divisions; i++){
    var random_char =Math.floor(Math.random()*special_chars.length)+1;
    var char = special_chars.charAt(random_char);
    password = password.concat(char);
  } 
}
 var extra_chars = password_length - password.length;
 window.alert("extra chars is " + extra_chars + " password is " + password);

 if (extra_chars > 0) {
  for (var i = 0; i < extra_chars; i++){
    var random_char =Math.floor(Math.random()*string_all_options.length)+1;
    var char = string_all_options.charAt(random_char);
    // window.alert("extra flag length is : " + extra_flag.length);
    // var char = extra_flag.charAt(random_char);
    password = password.concat(char);
    // window.alert("string all options is " + string_all_options);
  } 
}

  window.alert("password is " + password);
  return password ;
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
