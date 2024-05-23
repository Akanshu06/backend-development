const form = document.querySelector('form');
const playerInfoDiv = document.getElementById('playerInfo')

form.addEventListener('submit',(event)=>{
    event.preventDefault();
     const name = event.target.name.value;
     const dob = event.target.dob.value;
     const photoURL = event.target.photoURL.value;
     const birthplace = event.target.birthplace.value;
     const career = event.target.career.value;
     const matches = event.target.matches.value;
     const score = event.target.score.value;
     const fifties = event.target.fifties.value;
     const average = event.target.average.value;

     const  playerInfo ={
        name,dob,photoURL,birthplace,career,matches,score,fifties,average
     }
     axios.post('http://localhost:2000/post-data',playerInfo)
     .then((res)=>{
        //console.log(res);
     }).catch((err)=>{
      console.log(err);
     })
     document.getElementById('name').value=''
     document.getElementById('dob').value=''
     document.getElementById('photoURL').value=''
     document.getElementById('birthplace').value=''
     document.getElementById('career').value=''
     document.getElementById('matches').value=''
     document.getElementById('score').value=''
     document.getElementById('fifties').value=''
     document.getElementById('average').value='';

})

const form2 = document.querySelector('form:nth-of-type(2)');
form2.addEventListener('submit',(event)=>{
    event.preventDefault();
    const playerName = event.target.searchPlayer.value;
    axios.get(`http://localhost:2000/get-data/${playerName}`)
    .then((response)=>{
        const playerData = response.data.data[0];
        //console.log(playerData);
        displayData(playerData)
    })
    .catch((error) => {
        console.error('Error fetching player data:', error);
        alert('Error fetching player data. Please try again later.');
    });
});

function displayData(player){
    
    playerInfoDiv.innerHTML = `
                <h3>${player.name}</h3>  
                <p>Date of Birth: ${player.dob}</p>
                <img src="${player.photoURL}" alt="Player Photo">
                <p>Birthplace: ${player.birthplace}</p>
                <p>Career: ${player.career}</p>
                <p>Number of Matches: ${player.matches}</p>
                <p>Score: ${player.score}</p>
                <p>Fifties: ${player.fifties}</p>
                <p>Average: ${player.average}</p>
            `;
            const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit player';
    editBtn.onclick = function() {
        handelEdit(player); // assuming player is defined elsewhere
    };
    playerInfoDiv.appendChild(editBtn);
}


function handelEdit(playerToEdit){
   console.log (playerToEdit.name)
        
    axios.post(`http://localhost:2000/delete-data/${playerToEdit.name}`)
    .then((response)=>{
    const name=    document.getElementById('name').value=playerToEdit.name;
   const dob= document.getElementById('dob').value=playerToEdit.dob;
    const photoURL=document.getElementById('photoURL').value=playerToEdit.photoURL;
  const birthplace=  document.getElementById('birthplace').value=playerToEdit.birthplace;
    const career=document.getElementById('career').value=playerToEdit.career;
    const matches=document.getElementById('matches').value=playerToEdit.matches;
    const score=document.getElementById('score').value=playerToEdit.score;
    const fifties = document.getElementById('fifties').value=playerToEdit.fifties;
    const average =document.getElementById('average').value=playerToEdit.average;
        // Optionally, you can display a success message or perform other actions
    }).catch((err)=>{
           console.log(err);
    })
    

}
