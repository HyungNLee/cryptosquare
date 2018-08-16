//Function to check if it has a number
function hasNumber(string) {
  var regex = /[0-9]/;
  return regex.test(string);
}

//Function to lowercase the string, remove all spaces and punctuations.
function noSpacePunc(string) {
  string = string.toLowerCase();
  string = string.replace(/\s+/g, "");
  string = string.replace(/[^a-z]/g, "");
  return string;
}

//Function to find square side.
function findSquareSide(string) {
  var stringLength = string.length;
  var squareSide;
  for (i = 0; i * i < string.length; i++) {
    if ((i + 1) * (i + 1) >= string.length) {
      squareSide = i + 1;
    }
  }
  return squareSide;
}

function encryptString(string, squareSide) {
  var stringLength = string.length;
  var squareLength = squareSide * squareSide;
  var startIndex = 0;
  var encryptString = "";
  var currentPosition = 0;
  while (encryptString.length !== stringLength) {
    encryptString += string.charAt(currentPosition);

    if ((currentPosition + squareSide) > stringLength) {
      startIndex += 1;
      currentPosition = startIndex;
    } else {
      currentPosition += squareSide;
    }
  }
  //encryptString = encryptString.match(/.{5}/g).join(' ');  -> Works but cuts out last part if not a full 5 characters
  encryptString = encryptString.replace(/(\w{5})/g, '$1 ').replace(/(^\s+|\s+$)/,'')
  return encryptString;
}

//Main function
function findEncrypt(string) {
  if (hasNumber(string)) {
    alert("No numbers are allowed. Please re-enter your sentence.");
  } else {
    string = noSpacePunc(string);
    var squareSideLength = findSquareSide(string);
    var finalString = encryptString(string, squareSideLength);
  }
  return finalString;
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    userInput = $("#inputBox").val();
    var outputResult = findEncrypt(userInput);
    $("#output").text(outputResult);
  })
})
