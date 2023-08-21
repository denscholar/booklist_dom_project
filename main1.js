"use strict";

// delete functionality using event bubling method
const list = document.querySelector("#book-list ul");

list.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.className === 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})
