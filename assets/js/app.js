let bookname  = document.querySelector('#bookname');
let bookauthor = document.querySelector('#author');
let publishdate = document.querySelector('#publishdate');
let booktype = document.querySelector('#type');
let addbook = document.querySelector('#add-book');
let booklist = document.querySelector('#book-list');

addbook.addEventListener('click', function(){
    if (bookname.value == '' || bookauthor.value == '' || publishdate.value == '' || booktype.value == '') {
        alert('Please fill all the fields');
    }else{
        const bookrow = document.createElement('tr');
        const booknamecell = document.createElement('td');
        booknamecell.textContent = bookname.value;
        const bookauthorcell = document.createElement('td');
        bookauthorcell.textContent = bookauthor.value;
        const publishdatecell = document.createElement('td');
        publishdatecell.textContent = publishdate.value;
        const booktypecell = document.createElement('td');
        booktypecell.textContent = booktype.value;
        const deletebtn = document.createElement('button');
        deletebtn.textContent = 'Delete';
        deletebtn.classList.add('btn', 'btn-warning');
        deletebtn.addEventListener('click', function(){
            this.parentElement.parentElement.remove();
        })
        bookrow.appendChild(booknamecell);
        bookrow.appendChild(bookauthorcell);
        bookrow.appendChild(publishdatecell);
        bookrow.appendChild(booktypecell);
        booklist.appendChild(bookrow);
        bookrow.appendChild(deletebtn);
        bookname.value = '';
        bookauthor.value = '';
        publishdate.value = '';
        booktype.value = '';

    }
})