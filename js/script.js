let library = document.querySelector('.library');
let submitButton = document.querySelector('#submit-button');
let form = document.querySelector('.form');
let bookName = document.querySelector('#bname');
let authorName = document.querySelector('#aname');
let pages = document.querySelector('#pages');
let readStatus = document.querySelector('#isread');
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, is ${read}.`;
  };
}

function createBook(title, author, pages, read) {
  //start
  //container
  let containerDiv = document.createElement('div');
  containerDiv.classList.add('container');

  //container header
  let containerHeaderDiv = document.createElement('div');
  containerHeaderDiv.classList.add('container-header');
  containerDiv.appendChild(containerHeaderDiv);
  //name of book
  containerHeaderH2 = document.createElement('h2');
  containerHeaderH2.textContent = `${title}`;
  containerHeaderDiv.appendChild(containerHeaderH2);
  //close button
  containerHeaderButton = document.createElement('button');
  containerHeaderButton.innerHTML = '<span class="material-icons">close</span>';
  containerHeaderDiv.appendChild(containerHeaderButton);
  //container body
  containerBodyDiv = document.createElement('div');
  containerBodyDiv.classList.add('container-body');
  containerDiv.appendChild(containerBodyDiv);
  //name of author
  containerBodyH3 = document.createElement('h3');
  containerBodyH3.textContent = `by ${author}`;
  containerBodyDiv.appendChild(containerBodyH3);
  //number of pages
  containerBodyH4 = document.createElement('h4');
  containerBodyH4.textContent = `${pages} pages`;
  containerBodyDiv.appendChild(containerBodyH4);
  //container footer
  containerFooterDiv = document.createElement('div');
  containerFooterDiv.classList.add('container-footer');
  containerDiv.appendChild(containerFooterDiv);
  //read message
  if (read === 'read') {
    containerFooterH4 = document.createElement('h4');
    containerFooterH4.textContent = `You read this book.`;
    containerFooterDiv.appendChild(containerFooterH4);
  }
  //read - unread button
  containerFooterButton = document.createElement('button');
  containerFooterButton.setAttribute('type', 'button');
  containerFooterButton.textContent = 'Unread';
  containerFooterDiv.appendChild(containerFooterButton);
  if (read !== 'read') {
    containerFooterButton.textContent = 'Read';
    containerDiv.style.color = 'var(--pink1)';
    containerDiv.style.background = 'var(--pink4)';
    containerFooterButton.style.color = 'var(--pink4)';
    containerFooterButton.style.backgroundColor = 'var(--pink1)';
  }

  // append containter div
  library.appendChild(containerDiv);
}

function addBookToLibrary() {
  submitButton.addEventListener('click', (x) => {
    let bookNameValue = bookName.value;
    let authorNameValue = authorName.value;
    let pagesValue = pages.value;
    let isItRead = undefined;
    if (!bookNameValue || !authorNameValue || !pagesValue) {
      return window.alert('You have to fill all of the fields.');
    } else {
      if (readStatus.value === 'yes') {
        isItRead = 'read';
      } else {
        isItRead = 'not read';
      }

      myLibrary.push(
        new Book(
          `${bookNameValue}`,
          `${authorNameValue}`,
          `${pagesValue}`,
          `${isItRead}`
        )
      );

      form.reset();
    }
    displayBook();
    myLibrary = [];
  });
}

addBookToLibrary();

function displayBook() {
  myLibrary.forEach((x) => {
    createBook(`${x.title}`, `${x.author}`, `${x.pages}`, `${x.read}`);
  });
}
