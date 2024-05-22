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
    axios.get(`http://localhost:2000/get-data`)
    .then((response)=>{
        const playerData = response.data.data;
        let playerFound = false;
       console.log(playerData);

        for (let i = 0; i < playerData.length; i++) {
            const currentPlayer = playerData[i];
            //console.log(currentPlayer[i]);
            if (currentPlayer.name.toLowerCase() === playerName.toLowerCase()) {
                // If player is found, display the data and set playerFound to true
                displayData(currentPlayer);
               // console.log(currentPlayer);
                playerFound = true;
                break;
            }
        }
        if (!playerFound) {
            playerInfoDiv.innerHTML = 'Player not found.';
        }
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

function isValidDate(dateString) {
    // Check if the dateString matches the format YYYY-MM-DD
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
}


function handelEdit(playerToEdit){
    document.getElementById('name').value=playerToEdit.name;
    document.getElementById('dob').value=playerToEdit.dob;
    document.getElementById('photoURL').value=playerToEdit.photoURL;
    document.getElementById('birthplace').value=playerToEdit.birthplace;
    document.getElementById('career').value=playerToEdit.career;
    document.getElementById('matches').value=playerToEdit.matches;
    document.getElementById('score').value=playerToEdit.score;
    document.getElementById('fifties').value=playerToEdit.fifties;
    document.getElementById('average').value=playerToEdit.average;

    
    const id = playerToEdit.id;
    axios.put(`http://localhost:2000/update-data/${id}`)
    .then((response)=>{
        console.log(response);
        // Optionally, you can display a success message or perform other actions
    })

}
