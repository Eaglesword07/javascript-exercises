const palindromes = function (str) {
    // Remove punctuation from string using RegExp 
    const re = /[^A-Za-z0-9]/g;

    // convert them all to lower case and replace the punctuation
    const lowCaseStr = str.toLowerCase().replace(re, '');
    
    // get new string by spliting original string into an array
    // reversing that and joining it back together
    const newStr = lowCaseStr.split('').reverse().join('');

    // Compare new string with lowercase string
   return lowCaseStr === newStr;
};

// Do not edit below this line
module.exports = palindromes;
