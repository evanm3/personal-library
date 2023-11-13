const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = read,

    Book.prototype.info(){
        console.log(`${title}${author}${pages}`)
    }
}
function addBookToLibrary() {
    myLibrary.push(book, ...books);
    }

