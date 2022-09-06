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
let book3 = new Book("Twilight", "Stephanie Meyer", 400, false);
let book4 = new Book("Blind Faith", "Ben elton", 543, false);
let book5 = new Book("The Handmaid's Tale", "Margaret Atwood", 399, false);
let book6 = new Book("Misery", "Stephen King", 619, true);


function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);


function getLibrary(){
    myLibrary.forEach(function (item, index) {
        console.log(item, index);
        let booksDiv = document.getElementById("books");
        let bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        let bookTitle = document.createElement("h2");
        bookTitle.innerHTML  = item.title;

        let bookAuthor = document.createElement("h4");
        bookAuthor.innerHTML  = "Author: " + item.author;

        let bookPages = document.createElement("p");
        bookPages.innerHTML  = "Pages: " + item.pages;

        let haveRead = document.createElement("p");
        if(item.read){
            haveRead.innerHTML  = "read";
            bookDiv.classList.add("read");
        }else{
            haveRead.innerHTML  = "not read";
        }
        
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(haveRead);
        booksDiv.appendChild(bookDiv);
    });
}

getLibrary();

/*-------- Modal -------*/


var modal = document.getElementById("myModal");
var btn = document.getElementById("add-book-btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}