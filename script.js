let myLibrary = [];

function Book(title, author, noOfPages, hasRead) {
    this.title = title,
    this.author = author,
    this.noOfPages = noOfPages,
    this.hasRead = hasRead,

    this.info = function(){
        return(`${this.title} by ${this.author}, ${noOfPages} pages, ${hasRead ? 'read' : 'not read yet'}`);
    }
}

Book.prototype.setBookId = function() {
    return crypto.randomUUID();
} 




function addBookToLibrary() {

}


// const book1 = new Book ('The Hobbit', "J.R.R. Tolkein", 295, false);
// console.log(book1.info())