const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayLibrary() {
    const libraryContainer = document.querySelector(".library");
    libraryContainer.innerHTML = "";

    for (let i = 0; i < library.length; i++) {
        const book = library[i];

        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `${book.title}, ${book.author}, ${book.pages}, ${book.read ? "Yes" : "No"}`;

        libraryContainer.appendChild(card);
    };
};

library.push(new Book("1984", "George Orwell", 328, true));

function hideForm() {
    const form = document.querySelector(".form");
    form.style.display = "none";
}

function addBook(event) {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    const newBook = new Book(title, author, pages, read);

    library.push(newBook);

    displayLibrary();

    hideForm();
};

function showForm() {
    const form = document.querySelector(".form");
    form.style.display = "flex";
}


document.querySelector(".form").addEventListener("submit", addBook);
document.querySelector(".show-form").addEventListener("click", showForm);

displayLibrary();