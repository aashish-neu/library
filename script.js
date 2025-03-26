const bookWrap = document.querySelector(".book-wrap");
const addBookDialog = document.querySelector(".add-book-dialog");

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

const addBookBtn = document.getElementById("show-dialog-btn");
addBookBtn.addEventListener("click", () => {
  addBookDialog.showModal();
  addBookToLibrary();
});

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

function addBookToLibrary() {
  const addBookBtn = document.querySelector(".add-book-btn");
  addBookBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookDialog.close();

    const bookTitle = document.getElementById("name_of_book");
    const title = bookTitle.value;
    const bookAuthor = document.getElementById("name_of_author");
    const author = bookAuthor.value;

    const noOfPages = document.getElementById("no_of_pages").value;
    const hasRead = document.getElementById("book_read_status").value;

    let newBook = new Book(title, author, noOfPages, hasRead);
    newBook.bookId = newBook.setBookId();
    myLibrary.push(newBook);

    displayLibrary();
  });
}
