"use strict";

// select DOM elements;

const bookContainer = document.querySelector(".book-container");
const submitBookButton = document.querySelector(".submit-book");
const newBookTitle = document.querySelector("#title");
const newBookAuthor = document.querySelector("#author");
const newBookPages = document.querySelector("#pages");

// initialise an empty array object as the library data;
const myLibrary = new Array();

// constructor function for instantiating book objects;
function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// function to build the book elements form the library array each time a book is submitted;
function renderBooks() {
  bookContainer.innerHTML = "";
  myLibrary.forEach((book, index) => {
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
function submitBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// callback function to delete book from library object and render updated library;
function deleteBook(event) {
  event.preventDefault();
  if (event.target.classList.contains("delete-book")) {
    myLibrary.splice(event.target.parentNode.id, 1);
    renderBooks();
  }
}

// function pushes the inputted book to the library object, clears the inputs and then rerenders the library;
submitBookButton.addEventListener("click", (event) => {
  event.preventDefault();
  submitBookToLibrary(
    newBookTitle.value,
    newBookAuthor.value,
    newBookPages.value
  );
  newBookTitle.value = newBookAuthor.value = newBookPages.value = "";
  renderBooks();
});

// add event listener to the book container, delegated listener for the delete buttons on each book;
bookContainer.addEventListener("click", deleteBook);

// init function adds a couple of example books to the library data object and renders the library for the first time;
// written as IIFE to start the page working;
(function init() {
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
    submitBookToLibrary(book.title, book.author, book.pages);
  });
  renderBooks();
})();
