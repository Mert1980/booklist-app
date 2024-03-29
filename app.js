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
    const books = Store.getBooks();
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
    div.style.textAlign = "center";
    div.style.fontSize = "18px";
    div.style.font = "bold";
    div.style.fontFamily = "Arial, Helvetica, sans-serif";

    const container = document.querySelector(".container");
    const form = document.getElementById("book-form");
    container.insertBefore(div, form); // inserts the 'div' before the 'form';

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
  static clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

// Store Class:  Handles Storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
      // Since books is stored as string, we parse it to a JSON object so that
      // we can use it as a regular JavaScript array
    }
    return books;
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));

    // we have to store the objects as a string in locak store!
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

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
    UI.showAlert("Please fill all the fields", "danger");
  } else {
    // Instantiate book
    const book = new Book(title, author, isbn);

    // Add book to the UI
    UI.addBookToList(book);

    // Add book to store
    Store.addBook(book);

    // Show success message
    UI.showAlert("Book added", "success");

    // Clear fields
    UI.clearFields();
  }
});
// Event: Remove a book
document.getElementById("book-list").addEventListener("click", e => {
  // Remove book from UI
  UI.deleteBook(e.target);

  // Remove book from local store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show success message
  UI.showAlert("Book removed", "info");
});
