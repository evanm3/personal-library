const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    }

    info(){
        console.log(`${title}${author}${pages}`);
    }
};


function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    }

let newBookBtn = document.querySelector('#new-book-btn');
let newBookForm = document.querySelector('#new-book-form')


newBookBtn.addEventListener('click', form)
document.querySelector('#new-book-form').addEventListener('submit', submitBook)

function form(){
    console.log('new book button pressed');
    newBookForm.style.display = "block";
}

function submitBook(event){
    event.preventDefault();
    console.log("submit button pressed");
    addBookToLibrary()
}