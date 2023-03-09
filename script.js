const display = document.querySelector('.display-parent');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const page = document.querySelector('.page');
const read = document.querySelector('.read');
const form = document.querySelector('.form');

const myLibrary = [];
class Book {
  constructor(newtitle, newauthor, newpage, newread) {
    this.newtitle = newtitle;
    this.newauthor = newauthor;
    this.newpage = newpage;
    this.newread = newread;
  }
}
function addBookToLibrary(inputTitle, inputAuthor, inputPage, inputRead) {
  const book = new Book(inputTitle, inputAuthor, inputPage, inputRead);
  myLibrary.push(book);
}
function showBooks() {
  let bookTitle = '';
  let bookAuthor = '';
  let bookPage = '';
  // eslint-disable-next-line no-unused-vars
  let bookRead = '';
  myLibrary.forEach((books) => {
    bookTitle = books.newtitle;
    bookAuthor = books.newauthor;
    bookPage = books.newpage;
    bookRead = books.newread;
  });
  return (
    `${bookTitle.charAt(0).toUpperCase()
    + bookTitle.slice(1)
    }\n`
    + `\n${
      bookAuthor.charAt(0).toUpperCase()
    }${bookTitle.slice(1)
    }\n`
    + `\n${
      bookPage
    }\n`
    + '\n'
    + '\n'
  );
}

// Add button event

let count = 0;
form.addEventListener('submit', () => {
  count += 1;

  addBookToLibrary(title.value, author.value, page.value, read.value);
  const article = document.createElement('article');
  const buttondiv = document.createElement('div');
  const div = document.createElement('div');

  const removeButton = document.createElement('button');
  const checkedButton = document.createElement('button');
  buttondiv.appendChild(removeButton);
  buttondiv.appendChild(checkedButton);
  div.classList.add(`display-${count}`);
  removeButton.classList.add(`display-${count}`);
  article.appendChild(div);

  if (read.checked) {
    checkedButton.textContent = 'Read';
    checkedButton.style.backgroundColor = 'green';
    article.appendChild(checkedButton);
  } else {
    checkedButton.textContent = 'Not Read';
    checkedButton.style.backgroundColor = 'red';
    article.appendChild(checkedButton);
  }
  article.appendChild(removeButton);
  display.appendChild(article);

  const displaygrid = document.querySelector(`.display-${count}`);

  displaygrid.innerText = showBooks();
  title.value = '';
  author.value = '';
  page.value = '';
  read.value = '';
  const buttongrid = document.querySelector(`button.display-${count}`);
  buttongrid.textContent = 'Remove';

  // remove button event

  buttongrid.addEventListener('click', () => {
    display.removeChild(article);
    count += 1;
  });

  // checkbox event
  checkedButton.addEventListener('click', () => {
    if (checkedButton.textContent === 'Read') {
      checkedButton.textContent = 'Not Read';
      checkedButton.style.backgroundColor = 'red';
    } else {
      checkedButton.textContent = 'Read';
      checkedButton.style.backgroundColor = 'green';
    }
    count += 1;
  });
});
