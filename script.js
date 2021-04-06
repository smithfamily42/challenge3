// Assignment code here
var numChar = '0123456789';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var specChar = '!#$%&()*+,-./:;<>?@[]\^_`~|{}';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//testing the generatePassword function with test
function generatePassword () {
  return "Test";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
