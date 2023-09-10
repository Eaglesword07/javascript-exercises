const removeFromArray = function(arr, ...value) {

    // first we crreat an empty array
    const newArr = [];

    // now, we use the .foreach() method to go through the array
    arr.forEach(
        // function that goes through the array and pushes every element
        // into the array except its included in the initial ...value argument
        (figure) => {
            if (!value.includes(figure)) {
                newArr.push(figure);
            }
        } 
    )
    // return the new array
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
