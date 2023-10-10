const getTheTitles = function (books) {
    let titles = [];
    for (let i = 0; i < books.length; ++i) {
        titles[i] = books[i].title;
    }
    return titles;
};

// we could as well use the array method map(), which of course is a shorter code
// const getTheTitles = function(books){
//     return books.map((book)=> book.title); // returns an array with all title values from each object in 'books' parameter, using
//         };

// Do not edit below this line
module.exports = getTheTitles;
