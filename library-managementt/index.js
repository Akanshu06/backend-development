const book = document.getElementById('book');
const form = document.querySelector('form');
const takeninfo = document.getElementById('takeninfo');
const retuninfo = document.getElementById('returninfo');

function hadleform(event){
    event.preventDefault();
    const book = event.target.book.value;
    sendtotakenInfo(book);
}

function sendtotakenInfo(enteredBood){
    const date = new Date();

    takeninfo.innerHTML=`Book Name: ${enteredBood} <br>
     Book Taken at: ${date}<br>
     Book Return at:${date.getHours+1}`
}