"use strict";

// select DOM elements;

const bookContainer = document.querySelector(".book-container");
const submitBookButton = document.querySelector(".submit-book");
const newBookTitle = document.querySelector("#title");
const newBookAuthor = document.querySelector("#author");
const newBookPages = document.querySelector("#pages");

class Library {
  constructor() {
    this.books = new Array();
  }
  // function to build the book elements from the library array each time a book is submitted;
  renderBooks() {
    bookContainer.innerHTML = "";
    this.books.forEach((book, index) => {
      const newBookElement = document.createElement("div");
      newBookElement.classList.add("book");
      newBookElement.id = `${index}`;
      newBookElement.innerHTML = `<div class="title-text">${book.title}</div>
        <div class="author-text">${book.author}</div>
        <div class="pages-text">${book.pages} pages</div>
        <button class="delete-book">delete</button>
        </div>`;
      bookContainer.insertAdjacentElement("beforeend", newBookElement);
    });
  }
  // callback function for submitting the book into the library;
  submitBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    this.books.push(newBook);
  }

  // callback function to delete book from library object and render updated library;
  deleteBook(event) {
    event.preventDefault();
    if (event.target.classList.contains("delete-book")) {
      myLibrary.books.splice(event.target.parentNode.id, 1);
      myLibrary.renderBooks();
    }
  }
  // dummy function to populate the book container with some test books so the page isn't blank;
  initialise() {
    const startingBooks = [
      { title: "Moby-Dick", author: "Herman Melville", pages: 635 },
      { title: "Alice in Wonderland", author: "Lewis Carroll", pages: 160 },
      {
        title: "The Importance of being Earnest",
        author: "Oscar Wilde",
        pages: 58,
      },
    ];
    startingBooks.forEach((book) => {
      this.submitBookToLibrary(book.title, book.author, book.pages);
    });
    this.renderBooks();
  }
}

// book class for use within the add books function;
class Book {
  constructor(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// instatiate new library object from the library class, initialising the library with some test books to populate some content;
const myLibrary = new Library();
myLibrary.initialise();

// add event listener to the book container, delegated listener for the delete buttons on each book;
bookContainer.addEventListener("click", myLibrary.deleteBook);

// function pushes the inputted book to the library object, clears the inputs and then rerenders the library;
submitBookButton.addEventListener("click", (event) => {
  event.preventDefault();
  myLibrary.submitBookToLibrary(
    newBookTitle.value,
    newBookAuthor.value,
    newBookPages.value
  );
  newBookTitle.value = newBookAuthor.value = newBookPages.value = "";
  myLibrary.renderBooks();
});
