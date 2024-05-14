const apiUrl = 'https://crudcrud.com/api/a370866554584ba692ca34f6edb276a6/books';

        const bookForm = document.getElementById('bookForm');
        const bookList = document.getElementById('bookList');

        // Function to fetch and display all books
        function fetchBooks() {
            axios.get(apiUrl)
                .then(response => {
                    bookList.innerHTML = '';
                    response.data.forEach(book => {
                        const returnDate = new Date(book.returnAt);
                        const fineAmount = new Date().getTime() > returnDate.getTime() ? 10 : 0;
                        bookList.innerHTML += `
                            <div>
                                ${book.name} 
                                - Taken at: ${book.takenAt} 
                                - Return at: ${returnDate} 
                                - Fine: ${fineAmount} Rs 
                                <button onclick="returnBook('${book._id}', ${fineAmount})">Return</button>
                            </div>`;
                    });
                })
                .catch(error => console.error('Error fetching books:', error));
        }

        // Function to add a new book
        function addBook(event) {
            event.preventDefault();
            const bookName = event.target.book.value;

            axios.post(apiUrl, { name: bookName, takenAt: new Date() })
                .then(() => {
                    fetchBooks(); // Refresh the book list after adding a new book
                    event.target.reset(); // Reset the form
                })
                .catch(error => console.error('Error adding book:', error));
        }

        // Function to return a book
        function returnBook(bookId, fineAmount) {
            axios.delete(`${apiUrl}/${bookId}`)
                .then(() => {
                    alert(`Book returned with a fine of ${fineAmount} Rs.`);
                    fetchBooks(); // Refresh the book list after returning a book
                })
                .catch(error => console.error('Error returning book:', error));
        }

        // Event listener for form submission
        bookForm.addEventListener('submit', addBook);

        // Fetch books when the page loads
        fetchBooks();