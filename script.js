// selectors\
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

function addBookToLibrary(title, author, noOfPages, hasRead) {
  let newBook = new Book(title, author, noOfPages, hasRead);
  newBook.bookId = newBook.setBookId();
  myLibrary.push(newBook);

  // creates dom for new book
  const singleBook = document.createElement("div");
  singleBook.classList.add("book-card");
  singleBook.textContent = "Testing Dom";
  bookWrap.appendChild(singleBook);




  //   call displayLibrary()
}

function displayLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {}
}

// const addBookBtn = document.getElementById("add-book-btn");
// addBookBtn.addEventListener("click", addBookToLibrary);
