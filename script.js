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
  return myLibrary.length-1;
}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);


function getLibrary(){
    resetLibraryDOM();
    myLibrary.forEach(function (item, index) {
        addBookToDOM(item, index);
    });
}

getLibrary();



/*-------- Modal -------*/


var modal = document.getElementById("myModal");
var btn = document.getElementById("add-book-btn");
var span = document.getElementsByClassName("close")[0];
var submitBtn = document.getElementById("submitBtn");



span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function addBook(form){
    modal.style.display="none";
    let book = new Book(form.title.value, form.author.value, form.pages.value, form.read.checked);
    let index = addBookToLibrary(book);
    getLibrary();
}

function addBookToDOM(book, index){
    let booksDiv = document.getElementById("books");
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    let deleteImage = document.createElement("img");
    deleteImage.src = "images/delete.png";
    deleteImage.classList.add("delete");
    deleteImage.id=index;

    deleteImage.addEventListener("click", (event) => {
        deleteBook((index));
    });
    
    let bookTitle = document.createElement("h2");
    bookTitle.innerHTML  = book.title;

    let bookAuthor = document.createElement("h4");
    bookAuthor.innerHTML  = "Author: " + book.author;

    let bookPages = document.createElement("p");
    bookPages.innerHTML  = "Pages: " + book.pages;

    let haveRead = document.createElement("p");
    if(book.read){
        haveRead.innerHTML  = "read";
        bookDiv.classList.add("read");
    }else{
        haveRead.innerHTML  = "not read";
    }

    let inputToggle = document.createElement("input");
    inputToggle.id = "switch" + index;
    inputToggle.classList.add("checkbox");
    inputToggle.type = "checkbox";

    let labelToggle = document.createElement("label");
    labelToggle.classList.add("toggle");
    labelToggle.htmlFor = "switch" + index;

    let para = document.createElement("p");
    para.innerHTML = "Read      Not Read";
    labelToggle.appendChild(para);



    bookDiv.appendChild(deleteImage);
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(haveRead);
    bookDiv.appendChild(inputToggle);
    bookDiv.appendChild(labelToggle);
    booksDiv.appendChild(bookDiv);
}

function deleteBook(index){
    // delete from the library array
    deleteFromLibrary(index);
    getLibrary();
}

function deleteFromLibrary(index){
    myLibrary.splice(index, 1);
    console.log(myLibrary);
}

function resetLibraryDOM(){
    let booksDIV = document.getElementById("books");
    booksDIV.innerHTML = "";
    let addBookButton = document.createElement("button");
    addBookButton.id = "add-book-btn";
    addBookButton.innerText = "+";
    addBookButton.onclick = function() {
        modal.style.display = "block";
        document.getElementById('myForm').reset();
    }
    booksDIV.appendChild(addBookButton);
}