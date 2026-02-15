function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

function caeserCipher(str, num) {
  let position;
  let newArr = [];
  let newStr = str.split('');
  let newPosition;
  let newLetter;

  newStr.forEach((letter) => {
    // Check uppercase
    if (letter !== letter.toLowerCase()) {
      position = letter.charCodeAt(0) - 64;
      newPosition = position + num + 64;
      if (newPosition > 90) {
        newPosition = newPosition - 90 + 64;
        newLetter = String.fromCharCode(newPosition);
      } else {
        newLetter = String.fromCharCode(newPosition);
      }
      newArr.push(newLetter);
    }
    // Check lowercase
    else if (letter !== letter.toUpperCase()) {
      position = letter.charCodeAt(0) - 96;
      newPosition = position + num + 96;
      if (newPosition > 122) {
        newPosition = newPosition - 122 + 96;
        newLetter = String.fromCharCode(newPosition);
      } else {
        newLetter = String.fromCharCode(newPosition);
      }
      newArr.push(newLetter);
    } else {
      newArr.push(letter);
    }
  });

  return newArr.join('');
}

function analyzeArray(arr) {
  const myObject = {
    average: arr.reduce((curr, next) => curr + next) / arr.length,
    min: arr.reduce((curr, next) => Math.min(curr, next)),
    max: arr.reduce((curr, next) => Math.max(curr, next)),
    length: arr.length,
  };
  return myObject;
}

export { capitalize, reverseString, calculator, caeserCipher, analyzeArray };
