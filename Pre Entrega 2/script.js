// This const will store book objects
const books = [];

// add a book to the books array
function addBook() {
  const bookName = document.getElementById("book-name").value;
  const bookAuthor = document.getElementById("book-author").value;
  const bookGenre = document.getElementById("book-genre").value;

  if (bookName === "" || bookAuthor === "" || bookGenre === "") {
    // display error message to user in case any field was left empty *_*
    alert("Please fill all the fields below");
    return;
  }

  books.push({ name: bookName, author: bookAuthor, genre: bookGenre });
  renderBooks();
}

// delete a book from the books array
function deleteBook(index) {
  // display alert on delete :3
  if (confirm("Are you sure you want to delete this book?")) {
    books.splice(index, 1);
    renderBooks();
  }
}

// render the books array to index
function renderBooks() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  // create list 
  const ol = document.createElement("ol");

  books.forEach((book, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${book.name} by ${book.author} (${book.genre})`;
    li.onclick = () => deleteBook(index);

    // add the li 
    ol.appendChild(li);
  });

  // add the ol to the book-list div
  bookList.appendChild(ol);
}