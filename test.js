// store books from json
let books = [];

//function to load books 
async function loadBooks() {
    const response = await fetch("books.json");
    books = await response.json();
}


// Function to display books in a table
function displayBooks() {
    const tableBody = document.getElementById("books-table-body");
    tableBody.innerHTML = ""; // Clear previous content

    books.forEach(book => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td><a href="${book.buyLink}" target="_blank">Buy Here</a></td>
        `;

        tableBody.appendChild(row);
    });
}

// Load books and then display them when the page loads
window.onload = async () => {
    await loadBooks();
    displayBooks();
};
