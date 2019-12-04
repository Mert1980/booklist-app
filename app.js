// Book Class: Represents a book

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Tasks

class UI {
  static displayBooks() {
    const storedBooks = [
      {
        title: "Book One",
        author: "John Doe",
        isbn: "123456"
      },
      {
        title: "Book Two",
        author: "Susan Doe",
        isbn: "123789"
      }
    ];
    const books = storedBooks;
    books.forEach(book => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href='#' class = 'btn btn-danger btn-sm delete'>X</a></td>
        `;
    list.appendChild(row);
  }
  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`; // bootstrap success or danger item will be passes as an argumen
    div.appendChild(document.createTextNode(message));
    div.style.textAlign = 'center';
    div.style.fontSize = '18px';
    div.style.font = 'bold';
    div.style.fontFamily = 'Arial, Helvetica, sans-serif';
    
    const container = document.querySelector(".container");
    const form = document.getElementById("book-form");
    container.insertBefore(div, form); // inserts the 'div' before the 'form';

    setTimeout (() => document.querySelector('.alert').remove(), 3000);
    
  }
  static clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

// Store Class:  Handles Storage

// Event: Display Books

document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a book

document.querySelector("#book-form").addEventListener("submit", e => {
  
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // Validate
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please fill all the fields", 'danger');
  } else {
    // Instantiate book
    const book = new Book(title, author, isbn);

    // Add book to the UI
    UI.addBookToList(book);

    // Clear fields
    UI.clearFields();
  }
});

// Event: Remove a book
document.getElementById("book-list").addEventListener("click", e => {
  UI.deleteBook(e.target);
});
