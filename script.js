"use strict";

// select elements;

const bookContainer = document.querySelector(".book-container");
const submitBookButton = document.querySelector(".submit-book");
const newBookTitle = document.querySelector("#title");
const newBookAuthor = document.querySelector("#author");
const newBookPages = document.querySelector("#pages");

const myLibrary = new Array();

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
}

submitBookButton.addEventListener("click", (e) => {
  e.preventDefault();
  const newBook = new Book(
    newBookTitle.value,
    newBookAuthor.value,
    newBookPages.value
  );
  console.log(newBook);
  newBookTitle.value = newBookAuthor.value = newBookPages.value = "";
  myLibrary.push(newBook);
  console.log(myLibrary);
});
