const myLibrary = [
    "Othello",
    "Odyssey",
    "Lolita",
    "Romeo and Juliet"
];

//console.log(myLibrary);

function Book(title, author, pages, read) {
    this.title = title; //these will be initialized when clicked
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;
   // for (let i = 0; i < myLibrary.length; i++){
    //}
    let newBook = new Book(title, author, pages, read);
    console.log(newBook)
}


const newBookBtn = document.querySelector('#new-book-btn');
newBookBtn.addEventListener('click', () => {
    const newBookForm = document.querySelector('#new-book-form');
    newBookForm.style.display = 'block';
})

document.querySelector('#new-book-form').addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
})