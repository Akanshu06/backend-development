const form = document.querySelector('form');
const allottedBooks = document.getElementById('allottedBooks');
const returnInfo = document.getElementById('returninfo')

const currentDate = new Date();
var day = currentDate.getDate(); // Day of the month (1-31)
var month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
var year = currentDate.getFullYear();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var afterhours = currentDate.getHours()+1;

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const bookName  = event.target.book.value;
    const allottedTime = day+' '+month+' '+year+' '+hours+':'+minutes+':'+seconds;
    var returningTime = day+' '+month+' '+year+' '+afterhours+':'+minutes+':'+seconds;
    const currentFine = 0;

    const allottedDetails = {
        bookName,allottedTime,returningTime,currentFine
    }
    axios.post('https://crudcrud.com/api/9cf3e32463d94568878030481bee0fef/LMS',allottedDetails)
    .then(()=>{}).catch((err)=>{console.log(err);});

    axios.get('https://crudcrud.com/api/9cf3e32463d94568878030481bee0fef/LMS')
    .then((result)=>{
        for(let i=0;i<result.data.length;i++){
            showDataONScreen(result.data[i]);
        }
    }).catch(err=>console.log(err));
})

function showDataONScreen(allottedData){
    const allottedBooks = document.getElementById('allottedBooks');
    const ListOfAllottedBooks = document.createElement('li');
    ListOfAllottedBooks.innerHTML=`book-Name:${allottedData.bookName}<br>allottedTime:${allottedData.allottedTime}<br>
    returningTime:${allottedData.returningTime}<br>currentFine:${allottedData.currentFine}<br>`
    allottedBooks.appendChild(ListOfAllottedBooks);

    const returnBtn = document.createElement('input');
    //const id = allottedData.id;
    returnBtn.type = 'button';
    returnBtn.value = 'Return Now';
    ListOfAllottedBooks.appendChild(returnBtn);
    returnBtn.onclick=()=>{
        
        const fine = calculateFine(allottedData.returningTime);
         returnInfo.innerHTML=`Book- name:${allottedData.bookName}<br>
         Current- Fine :${fine}`
         allottedBooks.removeChild(ListOfAllottedBooks);
         axios.delete(`https://crudcrud.com/api/9cf3e32463d94568878030481bee0fef/LMS/${allottedData._id}`)
         
    }
    
}
function calculateFine(returningTime) {
    const currentDate = new Date();
    console.log(returningTime);
    const fineInMs = currentDate.getTime() - new Date(returningTime);
    const fineInHours = Math.floor(fineInMs / (1000 * 60 * 60)); // Convert milliseconds to hours
    const fineAmount = fineInHours * 10; // Assuming fine is $10 per hour
    return fineAmount;
}

