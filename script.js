const bookWrap = document.querySelector(".book-wrap");

let myLibrary = [];

function Book(title, author, noOfPages, hasRead) {
  (this.title = title),
    (this.author = author),
    (this.noOfPages = noOfPages),
    (this.hasRead = hasRead),
    (this.info = function () {
      return `${this.title} by ${this.author}, ${noOfPages} pages, ${
        hasRead ? "read" : "not read yet"
      }`;
    });
}

Book.prototype.setBookId = function () {
  return crypto.randomUUID();
};

function addBookToLibrary() {
  title = "The Lord of the Rings";
  author = "J.R.R. Tolkein";
  noOfPages = 1137;
  hasRead = false;
  let newBook = new Book(title, author, noOfPages, hasRead);
  newBook.bookId = newBook.setBookId();
  myLibrary.push(newBook);

  displayLibrary();
}


function displayLibrary() {
  // remove previously displayed books

  bookWrap.replaceChildren();

  // display updated books
  for (let loopingBook of myLibrary) {
    const singleBook = document.createElement("div");
    singleBook.classList.add("book-card");
    bookWrap.appendChild(singleBook);

    const bookTitle = document.createElement("h3");
    bookTitle.classList.add("book-title");
    bookTitle.innerText = loopingBook.title;
    singleBook.appendChild(bookTitle);

    const bookAuthor = document.createElement("h4");
    bookAuthor.classList.add("book-author");
    bookAuthor.innerText = loopingBook.author;
    singleBook.appendChild(bookAuthor);

    const bookPages = document.createElement("span");
    bookPages.classList.add("book-pages");
    bookPages.innerText = loopingBook.noOfPages;
    singleBook.appendChild(bookPages);

    const bookReadStatus = document.createElement("button");
    bookReadStatus.classList.add("book-read-status-btn");
    bookReadStatus.innerText = loopingBook.hasRead;
    singleBook.appendChild(bookReadStatus);
  }
}

const addBookBtn = document.getElementById("add-book-btn");
addBookBtn.addEventListener("click", addBookToLibrary);
