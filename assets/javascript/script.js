// Assignment code here
// complexityTypes collects complexity types with lower case as an included default
var complexityTypes = [1];
var numberOfChar = 0
var alphabet = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'];
var specialChar = ['~','!','@','#','$','%','^','&','*'];
var numberChar = ['0','1','2','3','4','5','6','7','8','9'];
var charUpper = true;
var charNum = true;
var charSpecial = true;
var password = "";

// Master function
var generatePassword = function() {
  numberOfCharF();
  psComplexity();
  createPassword();
}

// Sets the number of characters and ensures value is within acceptable range.
var numberOfCharF = function () {
  var pwChars = prompt("How long would you like your password to be? Enter any number from 8 to 128.");

  // Verifies that characters are within the acceptable range and sets # of characters
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
  // Prompt user to identify what complexity factors will be included.  Lower case is included by default.
  charUpper = confirm("Would you like to include uppercase characters?");
  charNum = confirm("Would you like to include numeric characters?");
  charSpecial = confirm("Would you like to include special characters?");

  // Identifies complexity types and pushes to array
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

// Creates the password based upon the outputs from numberOfCharF and psComplexity functions
var createPassword = function() {
  // pwCharEL is an array used to collect each generated charcter
  pwCharEL = [];
  // TESTING console.log("numberOfChar in create loop"+ numberOfChar);

  var passwordText = document.querySelector("#password");

  for (i = 0; i < numberOfChar; i++) {
    random = Math.floor(Math.random() * complexityTypes.length);
    randomSelector = complexityTypes[random];
    //TESTING console.log("random " + random);
    //TESTING console.log("randomSelector " + randomSelector);

    // Iterates through complexity types, generates character, and adds to collection array.
    if (randomSelector === 1 ) {
      randomArr = (Math.floor(Math.random() * alphabet.length));
      lowerPwEl = alphabet[randomArr];
      pwCharEL.push(lowerPwEl);
      //TESTING console.log(lowerPwEl);
    } else if (randomSelector === 2) {
      randomArr = (Math.floor(Math.random() * alphabetUpper.length));
      upperPwEl = alphabetUpper[randomArr];
      pwCharEL.push(upperPwEl);
      //TESTING console.log(upperPwEl);
    } else if (randomSelector === 3) {
      randomArr = (Math.floor(Math.random() * numberChar.length));
      numberPwEl = numberChar[randomArr];
      pwCharEL.push(numberPwEl);
      //TESTING console.log(numberPwEl);
    } else if (randomSelector === 4) {
      randomArr = (Math.floor(Math.random() * specialChar.length));
      specialPwEl = specialChar[randomArr];
      //TESTING console.log(specialPwEl);
      pwCharEL.push(specialPwEl);
    }
    // Convert password array to string with no spaces or commas
    password=pwCharEL.join('');
    //TESTING console.log(password);
  }
  // Pass final password to html object for display
  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);