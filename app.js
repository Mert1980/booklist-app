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
    static displayBooks () {
        const storedBooks [
            {
                title: 'Book One', 
                author: 'John Doe',
                isbn:'123456'
            },
            {
                title: 'Book Two', 
                author: 'Susan Doe',
                isbn:'123789'
            }

        ];
        const books = storedBooks;
        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href='#' class = 'btn btn-danger btn-sm delete'>X</a></td>
        `;
        list.appendChild(row);
    }
}

// Store Class:  Handles Storage

// Event: Display Books

// Event: Add a book

// Event: Remove a book
