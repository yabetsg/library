const display = document.querySelector("#display");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const page = document.querySelector(".page");
const read = document.querySelector(".read");
const form = document.querySelector(".form");

let myLibrary = [];


function Book(title,author,page,read){
    this.title= title;
    this.author = author;
    this.page = page;
    this.read = read;
    
};


function addBookToLibrary(title,author,page,read) {
    let book = new Book(title,author,page,read);
     myLibrary.push(book);
  };
function showBooks(){
    let btitle = '';
    let bauthor = '';
    let bpage = '';
    let bread = '';
    myLibrary.forEach(books => {
       btitle = books.title;
       bauthor = books.author ;
       bpage =books.page ;
        bread   =books.read ;
    }); 
    console.log()
      return btitle + " by "+ bauthor + " , " + bpage + " pages, "+ bread;
}


form.addEventListener("submit", (e)=>{
    
    addBookToLibrary(title.value,author.value,page.value,read.value);
    console.log(showBooks());
    display.innerText = showBooks();
    title.value = ""
    author.value = ""
    page.value = ""
    read.value = ""
    console.log(myLibrary);
});


