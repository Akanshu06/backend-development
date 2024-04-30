const form = document.querySelector('form');
const ul= document.getElementById('Item_to_display');
form.addEventListener('submit',function(event){
    event.preventDefault();
   const amount = event.target.amount.value;
   const discription = event.target.discription.value;
   const item = event.target.item.value;
   expanses={
    amount,
    discription,
    item
   }
   localStorage.setItem(expanses.amount,JSON.stringify(expanses));
   event.target.amount.value=" ",
    event.target.discription.value=" ";
    event.target.item.value=" ";
   displayOnScreen(expanses);
   

});

function displayOnScreen(expanses){
    const list = document.createElement('li');
    list.innerHTML=`${expanses.amount}-${expanses.discription}-${expanses.item}`;
    ul.appendChild(list); 
    

    //delete funtionality
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type','button');
    deleteBtn.innerHTML='Delete';
    deleteBtn.id= 'delete-btn';
    list.appendChild(deleteBtn);
    deleteBtn.onclick=()=>{
        localStorage.removeItem(expanses.amount);
        ul.removeChild(list);
    }

    //edit functionality
    const editBtn = document.createElement('button');
    editBtn.setAttribute('type','button');
    editBtn.textContent='Edit';
    editBtn.id= 'edit-btn';
    list.appendChild(editBtn);
    editBtn.onclick=(event)=>{
        localStorage.removeItem(expanses.amount);
        ul.removeChild(list);
        document.getElementById('amount').value=expanses.amount;
        document.getElementById('discription').value=expanses.discription;
        Document.getElementById('item').value=expanses.value;

    };
}

