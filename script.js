let myLibrary = [];

class Book{
    constructor(
        title = 'Unknown',
        author = 'Unknown',
        pages = '0',
        read = false
      ) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
      }
}


/* To be removed (manually added for now) */
let book1 = new Book("Harry Potter", "J.K. Rowling", 123, true);
let book2 = new Book("The Hobbit", "J.R.R. Tolkien", 456, false);


function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(book1);
addBookToLibrary(book2);


function getLibrary(){
    myLibrary.forEach(function (item, index) {
    console.log(item, index);
    });
}

getLibrary();