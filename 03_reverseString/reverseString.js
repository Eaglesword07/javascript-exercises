const reverseString = function(str) {
        const stringArr = str.split("");
        const reverseStringArr = stringArr.reverse();
        const newStr = reverseStringArr.join("");
        return newStr;
};

// Do not edit below this line
module.exports = reverseString;
