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
        for(let i=0;i<res.data.length;i++){
           console.log(res.data[i]);
            showExpanses(res.data[i]);       
        }
    }).catch((err)=>{console.log(err);})


    function showExpanses(Edata){
        const list = document.createElement('li');
        console.log(Edata.amount);
        list.innerHTML=`${Edata.amount}-${Edata.description}-${Edata.item}`
                ul.appendChild(list);   
                
                const deleteBtn = document.createElement('button');
                deleteBtn.setAttribute('type','button');
                deleteBtn.innerHTML='Delete';
                deleteBtn.id= 'delete-btn';
                list.appendChild(deleteBtn);
                deleteBtn.onclick=()=>{
                   // console.log(data._id);
                    axios.delete(`http://localhost:400/deleteExpanse/${Edata._id}`)
                    ul.removeChild(list);
                }

                const editBtn = document.createElement('button');
                editBtn.setAttribute('type','button');
                editBtn.textContent='Edit';
                editBtn.id= 'edit-btn';
                list.appendChild(editBtn);
                editBtn.onclick=()=>{
                    axios.put(`http://localhost/editExpanse/${Edata._id}`,
                    {amount,
                        description,
                        item
                    })
                    .then((res)=>{
                        ul.removeChild(list);
                        //console.log(1111)
                        //document.getElementById('description').value=data.description;
                        document.getElementById('amount').value=Edata.amount;
                        document.getElementById('description').value=Edata.description;
                        document.getElementById('item').value=data.Eitem;    
                    })
                    .catch((err)=>{console.log(err)});               
                };
                amount.value="";
                description.value="";
                item.value="";
    }
})
