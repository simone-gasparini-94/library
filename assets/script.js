const library = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function displayLibrary() {
    const libraryContainer = document.querySelector(".library");
    libraryContainer.innerHTML = "";

    for (let i = 0; i < library.length; i++) {
        const book = library[i];

        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `
        <div class="card-content">
            <div class="top">
                <div class="title">${book.title}</div>
                <div class="author">${book.author}</div>
            </div>
            <div class="bottom">
                <div class="pages">${book.pages} pages</div>
                <div class="read">
                    <div class="label read">Read:</div>
                    <label class="switch">
                        <input class="checkbox" type="checkbox" id="read" ${book.read ? "checked" : ""} data-index="${i}">
                        <div class="slider"></div>
                    </label>
                </div>
            </div>
        </div>`;

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.textContent = "×";

        removeButton.addEventListener("click", () => removeBook(i));

        card.appendChild(removeButton);

        libraryContainer.appendChild(card);

        const toggleSwitch = card.querySelector(".checkbox");
        toggleSwitch.addEventListener("change", () => {
            library[i].read = toggleSwitch.checked; // Update the book's read status
            updateCounter();
        });

        updateCounter();
    };
};

library.push(new Book("Meow Meow", "Unknown Cat", 328, true));
library.push(new Book("Woof Woof", "Unknown Dog", 253, true));

function showForm() {
    const form = document.querySelector(".form");
    const icon = document.querySelector(".icon");
    const mainContainer = document.querySelector(".main-container");

    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "flex";
        icon.style.transform = "rotate(45deg)";
        mainContainer.classList.add("darkened");
    } else {
        form.style.display = "none";
        icon.style.transform = "rotate(0deg)";
        mainContainer.classList.remove("darkened");
    };
};

function hideForm() {
    const form = document.querySelector(".form");
    form.style.display = "none";
};

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

    updateCounter();

    const form = document.querySelector(".form");
    const mainContainer = document.querySelector(".main-container");

    form.style.display = "none"; // Hide the form
    mainContainer.classList.remove("darkened"); // Remove the darkened class
};

function removeBook(index) {
    library.splice(index, 1);

    displayLibrary();

    updateCounter();
};

function updateCounter() {
    const totalNumber = document.querySelector(".total-number");
    const readNumber = document.querySelector(".read-number");
    const unreadNumber = document.querySelector(".unread-number");

    const readBooks = library.filter(book => book.read);
    const unreadBooks = library.filter(book => !book.read);

    totalNumber.textContent = `TOTAL: ${library.length}`;
    readNumber.textContent = `READ: ${readBooks.length}`;
    unreadNumber.textContent = `NOT READ YET: ${unreadBooks.length}`;
}


document.querySelector(".form").addEventListener("submit", addBook);
document.querySelector(".show-form").addEventListener("click", showForm);

displayLibrary();
updateCounter();