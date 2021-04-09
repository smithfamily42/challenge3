// Assignment code here
var num = '0123456789';
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
function generatePassword (pwLength, char) {
  var pwd = '';
  // asking for length of password
  
  var pwLength = (prompt("How long should the password be? Choose at least 8 characters but no more than 128 characters."));
  while (pwLength < 8 || pwLength > 128) {
    alert("Please choose a number greater than 7 but less than 129.");
    var pwLength = (prompt("How long should the password be? Choose at least 8 characters but no more than 128 characters."));
  }
  //show the number of characters choosen to the user
  alert("Your password will have " + pwLength + " characters");
  
  var upperConfirm = confirm("Do you want to use upper case letters?");
  var lowerConfirm = confirm("Do you want to use lower case letters?");
  var specConfirm = confirm("Do you want special characters?");
  var numConfirm = confirm("Do you want to use numbers?")
//vaidate the answers so that at least one type of characters is chosen
while(!upperConfirm && !lowerConfirm && !specConfirm && !numConfirm) {
  alert("You must choose at least one type of character to create a password.");
  var upperConfirm = confirm("Do you want to use upper case letters?");
  var lowerConfirm = confirm("Do you want to use lower case letters?");
  var specConfirm = confirm("Do you want special characters?");
  var numConfirm = confirm("Do you want to use numbers?")
}

  console.log(upperConfirm);
  console.log(lowerConfirm);
  console.log(specConfirm);
  console.log(numConfirm);
  console.log(pwLength);

  //need to include all the character types into one variable
var char = lower;
    char += num;
    char += upper;
    char += specChar;
  
  for (var i = 0; i < pwLength; i++) {
      pwd += char[Math.floor(Math.random() * char.length)];
    }
    console.log(pwd);
  
  return pwd;
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
