let books = [];

function displayBooks() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  books.forEach((book, index) => {
    const newRow = bookList.insertRow();

    const titleCell = newRow.insertCell(0);
    titleCell.innerHTML = book.title;

    const authorCell = newRow.insertCell(1);
    authorCell.innerHTML = book.author;

    const editCell = newRow.insertCell(2);
    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.onclick = function () {
      editBook(index);
    };
    editCell.appendChild(editButton);

    const deleteCell = newRow.insertCell(3);
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function () {
      deleteBook(index);
    };
    deleteCell.appendChild(deleteButton);
  });
}

function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title === '' || author === '') {
    alert('Please enter both the title and author.');
    return;
  }

  const newBook = { title, author };
  books.push(newBook);

  displayBooks();

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
}

function editBook(index) {
  const newTitle = prompt('Enter new title:');
  const newAuthor = prompt('Enter new author:');

  if (newTitle !== null && newAuthor !== null) {
    books[index].title = newTitle;
    books[index].author = newAuthor;
    displayBooks();
  }
}

function deleteBook(index) {
  const confirmDelete = confirm('Are you sure you want to delete this book?');

  if (confirmDelete) {
    books.splice(index, 1);
    displayBooks();
  }
}

// Initial display of books when the page loads
displayBooks();
