function generatePassword() {  
  //define a variable consisting alphabets in small and capital letter  
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";  
  
  //specify the length for the new string  
  var lenString = 7;  
  var randomstring = '';  

  //loop to select a new character in each iteration  
  for (var i=0; i<lenString; i++) {  
    var rnum = Math.floor(Math.random() * characters.length);  
    randomstring += characters.substring(rnum, rnum+1);  
  }  
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword());