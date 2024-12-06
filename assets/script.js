const library = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

/*

function addBookToLibrary() {
    const newBook = new Book(title, author, pages, read);
    library.push(newBook);
}

*/

library.push(new Book("1984", "George Orwell", 328, true));

function displayLibrary() {
    const libraryContainer = document.querySelector(".library");
    libraryContainer.innerHTML = "";

    for (let i = 0; i < library.length; i++) {
        const book = library[i];

        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `${book.name}, ${book.author}, ${book.pages}, ${book.read ? "Yes" : "No"}`;

        libraryContainer.appendChild(card);
    };
};

displayLibrary();