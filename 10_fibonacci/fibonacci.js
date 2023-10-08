const fibonacci = function (num) {
    if (num == 1) {
        return 1;
    } else if (num < 1) {
        return 'OOPS'
    } else {
        let fnum0 = 0;
        let fnum1 = 1;
        let nextfnum;
        for (let i = 1; i < num; i++) {
            nextfnum = fnum0 + fnum1;
            fnum0 = fnum1;
            fnum1 = nextfnum;
        }
        return nextfnum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
