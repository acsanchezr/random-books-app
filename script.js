// store books from json
let books = [];
let displayedBooks = [];  ///stores indices of displayed books

//function to load books 
async function loadBooks() {
    const response = await fetch("books.json");
    books = await response.json();
}

// Function to load a random book
function loadRandomBook() {
    if (displayedBooks.length === books.length) {
        // All books have been shown, reset the displayedBooks array
        displayedBooks = [];
        alert("You have gone through all the books! Restarting...");
    }
    
      // Generate a random index that hasn't been displayed yet
      let randomIndex;
      do {
          randomIndex = Math.floor(Math.random() * books.length);
      } while (displayedBooks.includes(randomIndex)); // Ensure it hasn't been displayed
  
        // Mark the book as displayed
        displayedBooks.push(randomIndex);
    
    let book = books[randomIndex];

    document.getElementById("excerpt").textContent = `"${book.excerpt}"`;
    document.getElementById("book-title").textContent = `Title: ${book.title}`;
    document.getElementById("book-author").textContent = `Author: ${book.author}`;
    document.getElementById("book-genre").textContent = `Genre: ${book.genre}`;
    document.getElementById("book-link").href = book.buyLink;

        // Hide the book details and reset button text to "Show Book Details"
        let details = document.getElementById("book-details");
        details.classList.add("hidden");
        document.getElementById("show-details").textContent = "Show Book Details";
    

}

// Event listener for "Show Details" button
document.getElementById("show-details").addEventListener("click", function() {
    let details = document.getElementById("book-details");
    
    if (details.classList.contains("hidden")) {
        details.classList.remove("hidden");
        this.textContent = "Hide Book Details";
    } else {
        details.classList.add("hidden");
        this.textContent = "Show Book Details";
    }
});

//Event listener for "generate excerpt" btn
document.getElementById("generate-excerpt").addEventListener("click", loadRandomBook);


// Load json books, then load random book when the page loads
window.onload = async () => {
    await loadBooks();
    loadRandomBook();
};