const sumAll = function (num1, num2) {

    // first we make sure the values given are numbers only
    // we can use either the isNaN or typeof methods, I'll use both just to illustrate
    // first the isNaN method
    if ((isNaN(num1)) || (isNaN(num2))) {
        return "ERROR";
    // and the typeof method, using typeof method basically with the strict equality or inequality operators
    // can be helpful in writing shorter lines and strict checks
    } else if ((typeof num1 !== 'number') || (typeof num2 !== 'number')) {
        return "ERROR";
    }
    // now we make sure both numbers are above 0
    else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    // if num2 is less than num1, then we exchange them using the destructuring assignment
    else if (num2 < num1) {
        [num1, num2] = [num2, num1];
    }



    // we create a variable to hold the final answer
    let answer = 0;

    // loop between both numbers and add every number with the += operator
    for (let i = num1; i <= num2; i++) {
        answer += i;
    }
    return answer;
};

// Do not edit below this line
module.exports = sumAll;
