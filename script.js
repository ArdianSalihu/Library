const addBookButton = document.querySelector(".add-book-button");
const addBookModal = document.getElementById("addBookModal");
const overlay = document.getElementById("overlay");
const addBookForm = document.getElementById("addBookForm");
const booksGrid = document.querySelector(".content");

addBookButton.addEventListener("click", () => {
    addBookModal.style.display = "block";
    overlay.style.display = "block";

    setTimeout(() => {
        addBookModal.classList.add("zoom-in");
    }, 1)
});

window.addEventListener("click", (event) => {
    if (event.target === overlay) {
        addBookModal.style.display = "none";
        overlay.style.display = "none";

        setTimeout(() => {
            addBookModal.classList.remove("zoom-in");
        }, 1)
    }
});

addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("is-read").checked;

    const book = {
        title,
        author,
        pages,
        isRead,
    };


    // Assuming you have a function to add the book to your library
    addBookToLibrary(book);

    // Update the UI to display the new book
    createBookCard(book);

    // Close the modal and overlay
    addBookForm.reset();
    addBookModal.style.display = "none";
    overlay.style.display = "none";
  });

  function createBookCard(book) {
    const booksContainer = document.getElementById("booksContainer");

    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const titleElement = document.createElement("h3");
    titleElement.textContent = book.title;
    bookCard.appendChild(titleElement);

    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${book.author}`;
    bookCard.appendChild(authorElement);

    const pagesElement = document.createElement("p");
    pagesElement.textContent = `Pages: ${book.pages}`;
    bookCard.appendChild(pagesElement);

    const isReadButton = document.createElement("button");
    isReadButton.textContent = book.isRead ? "Read" : "Not Read";
    isReadButton.setAttribute("data-read", book.isRead);
    isReadButton.addEventListener("click", () => {
        book.isRead = !book.isRead;
        isReadButton.textContent = book.isRead ? "Read" : "Not Read";
        isReadButton.setAttribute("data-read", book.isRead)
    })
    bookCard.appendChild(isReadButton);

    booksContainer.appendChild(bookCard);
}

function addBookToLibrary(book) {

}