const form = document.querySelector('form');
const user = document.querySelector('#users');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
     const   name=event.target.username.value;
    const  email=event.target.email.value;
     const  phone= event.target.phone.value
    patientDetails={
       name,
       email,
       phone
    }
    //const obj = JSON.parse(patientDetails);
    localStorage.setItem(patientDetails.email,JSON.stringify(patientDetails));
  
    const liTag = document.createElement('li');
    const deleteFun=document.createElement('input');
    const editBtn = document.createElement('input');

    deleteFun.type="button";
    editBtn.type="button";

    deleteFun.className='dlt-btn';
    editBtn.className='edt-btn';

    deleteFun.value="Delete";
    editBtn.value="Edit";
   // user.innerHTML=`<li>${patientDetails.name}-${patientDetails.email}-${patientDetails.phone}
    //<input type='button' value='Delete' onclick="myFunction()"></li>`;
    liTag.textContent=`${patientDetails.name}-${patientDetails.email}-${patientDetails.phone}`;
    user.appendChild(liTag);

    liTag.appendChild(deleteFun);
    liTag.appendChild(editBtn);

    deleteFun.onclick=()=> {
      localStorage.removeItem(patientDetails.email);
      user.removeChild(liTag);
    };
    editBtn.onclick = function() {
      localStorage.removeItem(patientDetails.email);
        user.removeChild(liTag);
        document.getElementById('username').value=name;
        document.getElementById('email').value = email;
        Document.getElementById('phone').value = phone
    }
   
})

