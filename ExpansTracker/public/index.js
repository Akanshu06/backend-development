const form = document.querySelector('form');
const ul= document.getElementById('Item_to_display');
form.addEventListener('submit',function(event){
    event.preventDefault();
   const amount = event.target.amount.value;
   const description = event.target.description.value;
   const item = event.target.item.value;
   Expanses={
    amount:amount,
    description:description,
    item:item
   }
   //localStorage.setItem(Expanses.amount,JSON.stringify(Expanses));
   axios.post("http://localhost:4000/postExpanse",Expanses)
   .then((res)=>{
      //console.log(res);
   }).catch((err)=>{
    console.log(err);
   })
  // displayOnScreen(Expanses);
   amount.value="";
    description.value="";
    item.value="";
});
window.addEventListener ('DOMContentLoaded',()=>{
    
  axios.get('http://localhost:4000/getExpanse')
    .then((res)=>{
        //console.log(res.data);
        for(let i=0;i<res.data.Expanse.length;i++){
           //console.log(res.data.Expanse[i]);
            showExpanses(res.data.Expanse[i]);       
        }
    }).catch((err)=>{console.log(err);})
    function showExpanses(Edata){
        const list = document.createElement('li');
        list.id = `${Edata.id}`
        list.innerHTML=`${Edata.amount}-${Edata.description}-${Edata.item}`
                ul.appendChild(list);   
                
                const deleteBtn = document.createElement('button');
                deleteBtn.setAttribute('type','button');
                deleteBtn.innerHTML='Delete';
                deleteBtn.id= 'delete-btn';
                list.appendChild(deleteBtn);
                deleteBtn.onclick=()=>{
                    console.log(list.id);
                    axios.delete(`http://localhost:4000/deleteExpanse/${list.id}`)
                    ul.removeChild(list);
                }
                const editBtn = document.createElement('button');
                editBtn.setAttribute('type','button');
                editBtn.textContent='Edit';
                editBtn.id= 'edit-btn';
                list.appendChild(editBtn);
                editBtn.onclick=()=>{
                    ul.removeChild(list);
                    const updateExpanse={
                        amount: document.getElementById('amount').value,
                        description: document.getElementById('description').value,
                        item: document.getElementById('item').value
                    }
                    axios.put(`http://localhost/editExpanse/${list.id}`,updateExpanse)
                    .then((res)=>{
                        
                        document.getElementById('amount').value=res.dataamount;
                        document.getElementById('description').value=res.data.description;
                        document.getElementById('item').value=res.deta.item;    
                    })
                    .catch((err)=>{console.log(err)});               
                };
                amount.value="";
                 description.value="";
                 item.value="";
    }
})
