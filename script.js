// Assignment code here
var complexityTypes = [1];
var numberOfChar = 0
var alphabet = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'];
var specialChar = ['~','!','@','#','$','%','^','&','*'];
var numberChar = ['0','1','2','3','4','5','6','7','8','9'];
var charUpper = true;
var charNum = true;
var charSpecial = true;
var passwordBucket ="";
var password = "";

// *** Set complexity
var generatePassword = function() {
  numberOfCharF();
  psComplexity();
  createPassword();
}

// Sets the number of characters and ensures value is within acceptable range.
var numberOfCharF = function () {
  var pwChars = prompt("How long would you like your password to be? Enter any number from 8 to 128.");

  if (pwChars < 8 || pwChars > 128) {
    alert("You must select a number between 8 and 128");
    numberOfCharF();
  } else {
    numberOfChar = pwChars;
    console.log("number of chars" + numberOfChar);
  }
};

// Identifies which  complexity factors are desired.
var psComplexity = function() {
  charUpper = confirm("Would you like to include uppercase characters?");
  charNum = confirm("Would you like to include numeric characters?");
  charSpecial = confirm("Would you like to include special characters?");

  if (charUpper) {
    complexityTypes.push(2);
  }
  if (charNum) {
    complexityTypes.push(3);
  }
  if (charSpecial) {
    complexityTypes.push(4);
  }
}

var createPassword = function() {
  pwCharEL = [];
  console.log("numberOfChar in create loop"+ numberOfChar);
  var passwordText = document.querySelector("#password");
  for (i = 0; i < numberOfChar; i++) {
    random = Math.floor(Math.random() * complexityTypes.length);
    randomSelector = complexityTypes[random];
    console.log("random " + random);
    console.log("randomSelector " + randomSelector);
    if (randomSelector === 1 ) {
      randomArr = (Math.floor(Math.random() * alphabet.length));
      lowerPwEl = alphabet[randomArr];
      pwCharEL.push(lowerPwEl);
      console.log(lowerPwEl);
    } else if (randomSelector === 2) {
      randomArr = (Math.floor(Math.random() * alphabetUpper.length));
      upperPwEl = alphabetUpper[randomArr];
      pwCharEL.push(upperPwEl);
      console.log(upperPwEl);
    } else if (randomSelector === 3) {
      randomArr = (Math.floor(Math.random() * numberChar.length));
      numberPwEl = numberChar[randomArr];
      pwCharEL.push(numberPwEl);
      console.log(numberPwEl);
    } else if (randomSelector === 4) {
      randomArr = (Math.floor(Math.random() * specialChar.length));
      specialPwEl = specialChar[randomArr];
      console.log(specialPwEl);
      pwCharEL.push(specialPwEl);
    }
    console.log(pwCharEL);
    password=pwCharEL.join('');
    console.log(password);
  }
  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
/*
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}*/

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", generatePassword);