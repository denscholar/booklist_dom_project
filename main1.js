"use strict";

// delete functionality using event bubling method
const list = document.querySelector("#book-list ul");



list.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.className === "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// reacting to form aand submitting event

// add a book
const addform = document.forms["add-book"];
const inputField = document.getElementById("book-input");

addform.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = inputField.value;
  //   create elements
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  // add content
  bookName.textContent = value;
  deleteBtn.textContent = "Delete";

  //  Add class name
  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  // append to the dom
  li.appendChild(bookName);
  li.appendChild(deleteBtn);

  list.appendChild(li);

  inputField.value = "";
});

const checkBox = document.querySelector('input[type="checkbox"]');

// checkBox.addEventListener("change", function (e) {
//     if (e.target.checked) {
//         list.style.display = "none";
//     } else {
//         list.style.display = "block";
//     }
// });

// filtering the input of the form for search purposes 
const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keyup", function (e) {
  const search = e.target.value.toLowerCase();
  const books = document.querySelectorAll("li");

  for (let index = 0; index < books.length; index++) {
      const li = books[index]
      const book = books[index].firstElementChild.textContent;
    if(book.toLowerCase().indexOf(search) != -1){
        li.style.display = 'flex';
    }else{
        li.style.display = 'none';
    };
  }

});