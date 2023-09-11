const leapYears = function(arg) {

    // check arg to find out if its a leap year following the requirements
    // using the modulo operator works fine with this

    if ((arg % 4 === 0 && arg % 100 !== 0) ||
    (arg % 400 === 0)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
