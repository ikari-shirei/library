let library = document.querySelector('.library');

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

const mobyDick = new Book('Moby Dick', 'Herman Melville', '654', 'read');
myLibrary.push(mobyDick);

function displayBook(title, author, pages, read) {
  myLibrary.forEach((x) => {});
}

function addBookToLibrary() {
  // do stuff here
}
console.log(myLibrary);

function createBook() {
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
  containerHeaderH2.textContent = '1984';
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
  containerBodyH3.textContent = 'by George Orwell';
  containerBodyDiv.appendChild(containerBodyH3);
  //number of pages
  containerBodyH4 = document.createElement('h4');
  containerBodyH4.textContent = '328 pages';
  containerBodyDiv.appendChild(containerBodyH4);
  //container footer
  containerFooterDiv = document.createElement('div');
  containerFooterDiv.classList.add('container-footer');
  containerDiv.appendChild(containerFooterDiv);
  //read message
  containerFooterH4 = document.createElement('h4');
  containerFooterH4.textContent = 'You read this book.';
  containerFooterDiv.appendChild(containerFooterH4);
  //read - unread button
  containerFooterButton = document.createElement('button');
  containerFooterButton.setAttribute('type', 'button');
  containerFooterButton.textContent = 'Unread';
  containerFooterDiv.appendChild(containerFooterButton);
  // append containter div
  library.appendChild(containerDiv);
}

createBook();
createBook();
createBook();
createBook();
createBook();
