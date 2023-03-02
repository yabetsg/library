const display = document.querySelector(".display-parent");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const page = document.querySelector(".page");
const read = document.querySelector(".read");
const form = document.querySelector(".form");
// const readButton = document.querySelector(.)

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
      return  btitle + "\n"+ "\n"+bauthor + "\n"+"\n" + bpage + "\n"+ "\n"+ "\n";
}

 let count = 0;
form.addEventListener("submit", (e)=>{
   count++;
   
    
    addBookToLibrary(title.value,author.value,page.value,read.value);
    var article = document.createElement('article');
    let buttondiv = document.createElement('div');
    var div = document.createElement('div');
    
    var removeButton = document.createElement('button');
    let checkedButton = document.createElement('button');
    buttondiv.appendChild(removeButton);
    buttondiv.appendChild(checkedButton);
    div.classList.add(`display-${count}`);
    removeButton.classList.add(`display-${count}`);
    article.appendChild(div);
    
    if(read.checked){
        checkedButton.textContent = "Read";
        checkedButton.style.backgroundColor = "green";
        article.appendChild(checkedButton);
    }else{
        checkedButton.textContent = "Not Read";
        checkedButton.style.backgroundColor = "red";
        article.appendChild(checkedButton);        
    }
    article.appendChild(removeButton);
    display.appendChild(article);  
    console.log(display);  
    const displaygrid = document.querySelector(`.display-${count}`);
    
    displaygrid.innerText = showBooks();
    title.value = "";
    author.value = "";
    page.value = "";
    read.value = "";
    const buttongrid = document.querySelector(`button.display-${count}`);
    buttongrid.textContent = "Remove";
    console.log(buttongrid);
    
    buttongrid.addEventListener('click', e =>{
        display.removeChild(article);
        count++
    });
       
});


