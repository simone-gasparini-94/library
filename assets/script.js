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
        
        card.innerHTML = `
        <div class="card-content">
            <div class="label title">Title:</div>
            <div class="title">${book.title}</div>
            <div class="label author">Author:</div>
            <div class="author">${book.author}</div>
            <div class="label pages">Pages:</div>
            <div class="pages">${book.pages}</div>
            <div class="label read">Read:</div>
            <label class="switch" id="read">
                <input class="checkbox" type="checkbox" ${book.read ? "checked" : ""} data-index="${i}">
                <div class="slider"></div>
            </label>
        </div>`;

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.textContent = "×";

        card.appendChild(removeButton);

        libraryContainer.appendChild(card);

        document.querySelector(".remove-button").addEventListener("click", removeBook);

        const toggleSwitch = card.querySelector(".checkbox");
        toggleSwitch.addEventListener("change", () => {
            library[i].read = toggleSwitch.checked; // Update the book's read status
        });
    };
};

library.push(new Book("1984", "George Orwell", 328, true));

function showForm() {
    const form = document.querySelector(".form");
    const icon = document.querySelector(".icon");

    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "flex";
        icon.style.transform = "rotate(45deg)";
    } else {
        form.style.display = "none";
        icon.style.transform = "rotate(0deg)";
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
};

function removeBook(index) {
    library.splice(index, 1);
    displayLibrary();
}



document.querySelector(".form").addEventListener("submit", addBook);
document.querySelector(".show-form").addEventListener("click", showForm);

displayLibrary();