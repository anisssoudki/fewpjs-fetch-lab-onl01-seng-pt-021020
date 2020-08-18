function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    // the below .then we are calling the function renderBooks that we made 
    // it takes an array in this case books is the json we are getting back 
    //  than we are invoking it in the first function fetchBooks 
    // the fetchBooks function is being invoked by the event listeneter DOMcontent
    // load where its gonna be invoked when everything is getting loaded
    .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})