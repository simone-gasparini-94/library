const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

myLibrary.push(new Book("1984", "Orwell", 250, "yes"));
myLibrary.push(new Book("1984", "Orwell", 250, "yes"));
console.log(myLibrary);